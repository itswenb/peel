(function () {
  if (window !== window.top) return;
  try {
    exportFunction(function (value) {
      var pattern = Array.isArray(value) ? value : [value];
      if (pattern.length > 20 || pattern.some(function (v) {
        return typeof v !== "number" || !Number.isFinite(v) || v < 0 || v > 10000;
      })) return false;
      browser.runtime.sendNativeMessage("peelVibration", { pattern: pattern.map(Math.floor) }).catch(function () {});
      return true;
    }, window.wrappedJSObject.navigator, { defineAs: "vibrate" });
  } catch (_) {}
})();
