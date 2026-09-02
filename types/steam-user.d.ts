/* steam-user ships no type declarations and is an optional peer dependency, so it is
   loaded through a structural interface (SteamUserLike) rather than its own types.
   This ambient stub only keeps the dynamic import from becoming an implicit any; it
   lives outside src/ so it is never emitted into the published .d.ts files. */

declare module "steam-user" {
    const SteamUser: any;
    export default SteamUser;
}
