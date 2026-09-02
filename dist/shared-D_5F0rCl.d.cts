interface GCRouterLike {
    on(msgId: any, listener: (payload: any) => void): unknown;
    off(msgId: any, listener: (payload: any) => void): unknown;
}
interface GCLike {
    send(msgId: any, body: any): void;
    sendJob(msgId: any, body: any, options?: any): Promise<any>;
    router: GCRouterLike;
}
/** Default deadline for a GC round trip. The GC is either quick or gone. */
declare const GC_TIMEOUT_MS = 15000;

export { type GCLike as G, type GCRouterLike as a, GC_TIMEOUT_MS as b };
