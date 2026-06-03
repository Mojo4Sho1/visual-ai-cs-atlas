/* ==========================================================================
   visual-components.js — FUTURE SCAFFOLDING for diagrams & animations
   Visual AI & CS Atlas
   --------------------------------------------------------------------------
   STATUS: scaffolding only. This file deliberately ships small, dependency-free
   placeholder utilities that future concept pages will build on. Do NOT add
   heavy animation engines or external libraries here without explicit approval
   (see docs/AGENT_WORKFLOW.md).

   The intended model: a "diagram" is a container with ordered "stages". A
   stepper advances/rewinds the visible stage. Real diagrams will populate the
   stages with SVG / canvas / DOM later.
   ========================================================================== */

(function (global) {
  "use strict";

  /**
   * Toggle which stage of a diagram is visible.
   * @param {Element} root - element containing [data-stage] children
   * @param {number} index - zero-based stage to reveal
   */
  function toggleDiagramStage(root, index) {
    if (!root) return;
    var stages = root.querySelectorAll("[data-stage]");
    stages.forEach(function (stage, i) {
      stage.hidden = i !== index;
    });
    var status = root.querySelector("[data-stage-status]");
    if (status) {
      status.textContent = index + 1 + " / " + stages.length;
    }
  }

  /**
   * Wire up a simple prev/next stepper for a diagram container.
   * Expects markup roughly like:
   *   <div data-diagram>
   *     <div data-stage>...</div>
   *     <div data-stage hidden>...</div>
   *     <div class="stepper">
   *       <button data-step-prev>Prev</button>
   *       <span data-stage-status></span>
   *       <button data-step-next>Next</button>
   *     </div>
   *   </div>
   * Safe to call when no diagrams exist (no-op).
   */
  function registerStepper(root) {
    if (!root) return;
    var stages = root.querySelectorAll("[data-stage]");
    if (!stages.length) return;

    var current = 0;
    var prev = root.querySelector("[data-step-prev]");
    var next = root.querySelector("[data-step-next]");

    function go(delta) {
      current = Math.max(0, Math.min(stages.length - 1, current + delta));
      toggleDiagramStage(root, current);
    }

    if (prev) prev.addEventListener("click", function () { go(-1); });
    if (next) next.addEventListener("click", function () { go(1); });

    toggleDiagramStage(root, 0);
  }

  /**
   * Auto-register every [data-diagram] on the page. Concept pages can simply
   * include the markup and this will wire it up.
   */
  function initVisualComponents() {
    var diagrams = document.querySelectorAll("[data-diagram]");
    diagrams.forEach(registerStepper);
  }

  // Public namespace for future concept pages.
  global.AtlasViz = {
    version: "0.0.1-scaffold",
    registerStepper: registerStepper,
    toggleDiagramStage: toggleDiagramStage,
    init: initVisualComponents,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initVisualComponents);
  } else {
    initVisualComponents();
  }
})(window);
