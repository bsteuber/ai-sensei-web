(function () {
  try {
    window.ai_sensei_load_time = new Date();
    var docEl = document.documentElement || {};
    var rawLang = docEl.getAttribute ? docEl.getAttribute("lang") : null;
    var lang = rawLang ? String(rawLang) : "EN";
    if (lang.charAt(0) === ":") {
      lang = lang.slice(1);
    }
    lang = lang.toUpperCase();
    var i18nUrl = docEl.dataset && docEl.dataset.i18nUrl
      ? docEl.dataset.i18nUrl
      : "/i18n/" + lang + ".json";

    window.ai_sensei_dict_promise = fetch(i18nUrl, { credentials: "same-origin" })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Failed to load i18n dict: " + response.status + " " + response.statusText);
        }
        return response.json();
      })
      .catch(function (err) {
        console.error("Failed to load i18n dict", err);
        return {};
      });
  } catch (err) {
    console.error("Failed to initialize i18n boot", err);
    window.ai_sensei_dict_promise = Promise.resolve({});
  }
})();
