import { describe, expect, test } from "bun:test";

import { allMessages, clientMessages, gcMessages, jobResponses, messageNames } from "../src/messages";
import { EDOTAGCMsg, EGCBaseClientMsg, ESOMsg } from "../src/index";

/** Everything the first consumer of this library sends, plus the handshake. */
const REQUIRED_JOBS: Array<[number, number]> = [
    [EDOTAGCMsg.k_EMsgClientToGCRequestGuildData, EDOTAGCMsg.k_EMsgClientToGCRequestGuildDataResponse],
    [EDOTAGCMsg.k_EMsgClientToGCRequestGuildEventMembers, EDOTAGCMsg.k_EMsgClientToGCRequestGuildEventMembersResponse],
    [EDOTAGCMsg.k_EMsgClientToGCKickGuildMember, EDOTAGCMsg.k_EMsgClientToGCKickGuildMemberResponse],
    [EDOTAGCMsg.k_EMsgClientToGCSetGuildMemberRole, EDOTAGCMsg.k_EMsgClientToGCSetGuildMemberRoleResponse],
    [EDOTAGCMsg.k_EMsgClientToGCInviteToGuild, EDOTAGCMsg.k_EMsgClientToGCInviteToGuildResponse],
    [EDOTAGCMsg.k_EMsgClientToGCCancelInviteToGuild, EDOTAGCMsg.k_EMsgClientToGCCancelInviteToGuildResponse],
    [EDOTAGCMsg.k_EMsgClientToGCSetGuildInfo, EDOTAGCMsg.k_EMsgClientToGCSetGuildInfoResponse],
    [
        EDOTAGCMsg.k_EMsgClientToGCRequestAccountGuildPersonaInfo,
        EDOTAGCMsg.k_EMsgClientToGCRequestAccountGuildPersonaInfoResponse,
    ],
    [EDOTAGCMsg.k_EMsgClientToGCGetProfileCard, EDOTAGCMsg.k_EMsgClientToGCGetProfileCardResponse],
    [EDOTAGCMsg.k_EMsgGCSpectateFriendGame, EDOTAGCMsg.k_EMsgGCSpectateFriendGameResponse],
    [EDOTAGCMsg.k_EMsgClientToGCFindTopSourceTVGames, EDOTAGCMsg.k_EMsgGCToClientFindTopSourceTVGamesResponse],
    [EDOTAGCMsg.k_EMsgGCWatchGame, EDOTAGCMsg.k_EMsgGCWatchGameResponse],
];

const REQUIRED_DECODERS = [
    EDOTAGCMsg.k_EMsgGCToClientGuildDataUpdated,
    EDOTAGCMsg.k_EMsgGCToClientGuildMembersDataUpdated,
    EDOTAGCMsg.k_EMsgGCToClientGuildMembershipUpdated,
    EGCBaseClientMsg.k_EMsgGCClientHello,
    EGCBaseClientMsg.k_EMsgGCClientWelcome,
    EGCBaseClientMsg.k_EMsgGCClientConnectionStatus,
    ESOMsg.k_ESOMsg_CacheSubscribed,
    ESOMsg.k_ESOMsg_UpdateMultiple,
];

describe("message maps", () => {
    test("every required request has the right response id", () => {
        for (const [request, response] of REQUIRED_JOBS) {
            expect({ [messageNames[request]!]: (jobResponses as Record<number, number>)[request] }).toEqual({
                [messageNames[request]!]: response,
            });
        }
    });

    test("every required message has a codec", () => {
        for (const msgId of [...REQUIRED_DECODERS, ...REQUIRED_JOBS.flat()]) {
            expect(msgId in allMessages).toBe(true);
        }
    });

    test("clientMessages and gcMessages partition allMessages", () => {
        const client = Object.keys(clientMessages);
        const gc = Object.keys(gcMessages);

        expect(client.length + gc.length).toBe(Object.keys(allMessages).length);
        expect(client.filter((id) => id in gcMessages)).toEqual([]);
    });

    test("responses are classified as GC-inbound and requests as client-outbound", () => {
        for (const [request, response] of REQUIRED_JOBS) {
            expect(response in gcMessages).toBe(true);
            expect(request in clientMessages).toBe(true);
        }
    });

    test("every mapped id has a name and every job pair has a codec on both ends", () => {
        for (const id of Object.keys(allMessages)) expect(typeof messageNames[Number(id)]).toBe("string");
        for (const [request, response] of Object.entries(jobResponses)) {
            expect(Number(request) in allMessages).toBe(true);
            expect(response in allMessages).toBe(true);
        }
    });
});
