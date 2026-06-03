/* ==========================================================================
   main.js — site-wide progressive enhancement
   Visual AI & CS Atlas
   --------------------------------------------------------------------------
   Vanilla JS only. No dependencies, no build step. Everything here must be
   strictly progressive: the site must remain fully usable with JS disabled.
   ========================================================================== */

(function () {
  "use strict";

  /**
   * Set the current year in any footer element that opts in via
   * [data-current-year]. No-op if the element is absent.
   */
  function setFooterYear() {
    var nodes = document.querySelectorAll("[data-current-year]");
    if (!nodes.length) return;
    var year = String(new Date().getFullYear());
    nodes.forEach(function (node) {
      node.textContent = year;
    });
  }

  function init() {
    setFooterYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
