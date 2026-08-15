(function () {
  "use strict";

  // ==========================================
  // FLOATING VVIP SERVER BUTTON
  // ==========================================

  // Hindari tombol dibuat 2x
  if (document.getElementById("cb-vvip-floating-button")) return;

  // =========================
  // CONFIG
  // =========================
  const CONFIG = {
    link: "https://urlmsshorten.com/landingpagevipms",
    image: "http://plcl.me/images/qATRa.gif",
    tooltip: "VVIP SERVER",

    desktop: {
      left: "18px",
      bottom: "75px",
      width: "50px",
      height: "50px"
    },

    mobile: {
      left: "18px",
      bottom: "75px",
      width: "50px",
      height: "50px"
    }
  };

  // =========================
  // CSS
  // =========================
  const style = document.createElement("style");
  style.id = "cb-vvip-floating-style";

  style.textContent = `
    #cb-vvip-floating-button {
      position: fixed !important;
      left: ${CONFIG.desktop.left} !important;
      bottom: ${CONFIG.desktop.bottom} !important;
      z-index: 2147483000 !important;

      width: ${CONFIG.desktop.width} !important;
      height: ${CONFIG.desktop.height} !important;

      margin: 0 !important;
      padding: 0 !important;

      pointer-events: auto !important;
      box-sizing: border-box !important;
    }

    #cb-vvip-floating-button .cb-vvip-link {
      width: 100% !important;
      height: 100% !important;

      display: flex !important;
      align-items: center !important;
      justify-content: center !important;

      position: relative !important;

      margin: 0 !important;
      padding: 0 !important;

      border-radius: 10px !important;
      border: 1px solid #ffffff !important;

      background:
        linear-gradient(
          11deg,
          #000418 0%,
          #0150f3 50%,
          #000418 100%
        ) !important;

      box-shadow:
        0 0 6px rgba(0, 80, 255, .9),
        0 0 14px rgba(0, 80, 255, .6) !important;

      overflow: visible !important;

      text-decoration: none !important;

      cursor: pointer !important;

      transition:
        transform .2s ease,
        box-shadow .2s ease !important;

      box-sizing: border-box !important;
    }

    #cb-vvip-floating-button .cb-vvip-link:hover {
      transform: scale(1.08) !important;

      box-shadow:
        0 0 8px rgba(0, 80, 255, 1),
        0 0 20px rgba(0, 80, 255, .8) !important;
    }

    #cb-vvip-floating-button .cb-vvip-image {
      display: block !important;

      width: 38px !important;
      height: 38px !important;

      max-width: 38px !important;
      max-height: 38px !important;

      object-fit: contain !important;

      margin: 0 !important;
      padding: 0 !important;

      border: 0 !important;
      background: transparent !important;

      pointer-events: none !important;
    }

    /* Tooltip */
    #cb-vvip-floating-button .cb-vvip-tooltip {
      position: absolute !important;

      left: calc(100% + 10px) !important;
      top: 50% !important;

      transform:
        translateY(-50%)
        translateX(-10px) !important;

      padding: 6px 10px !important;

      background: #0150f3 !important;
      color: #ffffff !important;

      border-radius: 6px !important;

      font-family:
        Arial,
        Helvetica,
        sans-serif !important;

      font-size: 12px !important;
      font-weight: 600 !important;

      line-height: 1.2 !important;

      white-space: nowrap !important;

      box-shadow:
        0 0 8px rgba(0, 80, 255, .6) !important;

      opacity: 0 !important;
      visibility: hidden !important;

      pointer-events: none !important;

      transition:
        opacity .25s ease,
        transform .25s ease,
        visibility .25s ease !important;

      z-index: 2147483001 !important;
    }

    #cb-vvip-floating-button
    .cb-vvip-link:hover
    .cb-vvip-tooltip {
      opacity: 1 !important;
      visibility: visible !important;

      transform:
        translateY(-50%)
        translateX(0) !important;
    }

    /* =========================
       MOBILE
    ========================= */
    @media screen and (max-width: 768px) {

      #cb-vvip-floating-button {
        left: ${CONFIG.mobile.left} !important;
        bottom: ${CONFIG.mobile.bottom} !important;

        width: ${CONFIG.mobile.width} !important;
        height: ${CONFIG.mobile.height} !important;
      }

      /* Tooltip dimatikan di HP */
      #cb-vvip-floating-button .cb-vvip-tooltip {
        display: none !important;
      }

      #cb-vvip-floating-button .cb-vvip-link:hover {
        transform: none !important;
      }
    }
  `;

  document.head.appendChild(style);

  // =========================
  // CREATE BUTTON
  // =========================

  const wrapper = document.createElement("div");
  wrapper.id = "cb-vvip-floating-button";

  const link = document.createElement("a");
  link.className = "cb-vvip-link";
  link.href = CONFIG.link;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", CONFIG.tooltip);

  const image = document.createElement("img");
  image.className = "cb-vvip-image";
  image.src = CONFIG.image;
  image.alt = CONFIG.tooltip;

  const tooltip = document.createElement("span");
  tooltip.className = "cb-vvip-tooltip";
  tooltip.textContent = CONFIG.tooltip;

  link.appendChild(image);
  link.appendChild(tooltip);

  wrapper.appendChild(link);

  // =========================
  // INSERT TO WEBSITE
  // =========================

  function insertButton() {
    if (!document.body) {
      setTimeout(insertButton, 100);
      return;
    }

    if (!document.getElementById("cb-vvip-floating-button")) {
      document.body.appendChild(wrapper);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", insertButton);
  } else {
    insertButton();
  }

})();
