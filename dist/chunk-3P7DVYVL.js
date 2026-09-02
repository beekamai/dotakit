// src/shared.ts
var GC_TIMEOUT_MS = 15e3;
function oneShot(gc, options) {
  const { request, response, accept, timeoutMs = GC_TIMEOUT_MS } = options;
  return new Promise((resolve) => {
    let done = false;
    const finish = (value) => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      gc.router.off(response, onMessage);
      resolve(value);
    };
    const onMessage = (payload) => {
      if (accept && !accept(payload)) return;
      finish(payload);
    };
    const timer = setTimeout(() => finish(null), timeoutMs);
    gc.router.on(response, onMessage);
    gc.send(request[0], request[1]);
  });
}
function fromUnixSeconds(seconds) {
  if (!seconds || seconds <= 0) return null;
  return new Date(seconds * 1e3);
}
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export {
  GC_TIMEOUT_MS,
  oneShot,
  fromUnixSeconds,
  sleep
};
//# sourceMappingURL=chunk-3P7DVYVL.js.map