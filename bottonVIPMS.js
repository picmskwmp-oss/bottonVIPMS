(function () {
  "use strict";

  if (document.getElementById("cb-vvip-floating-button")) return;

  const CONFIG = {
    link: "https://urlmsshorten.com/landingpagevipms",
    image: "http://plcl.me/images/qATRa.gif",
    tooltip: "VVIP SERVER",

    desktop: {
      left: "18px",
      bottom: "80px",
      width: "50px",
      height: "50px"
    },

    mobile: {
      left: "18px",
      bottom: "95px",
      width: "50px",
      height: "50px"
    }
  };

  const style = document.createElement("style");
  style.id = "cb-vvip-floating-style";

  style.textContent = `
    #cb-vvip-floating-button {
      position: fixed !important;
      left: ${CONFIG.desktop.left} !important;
      bottom: ${CONFIG.desktop.bottom} !important;
      width: ${CONFIG.desktop.width} !important;
      height: ${CONFIG.desktop.height} !important;
      z-index: 2147483000 !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    #cb-vvip-floating-button .cb-vvip-link {
      position: relative !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;

      width: 100% !important;
      height: 100% !important;

      border-radius: 10px !important;
      border: 1px solid #fff !important;

      background:
        linear-gradient(
          11deg,
          #000418 0%,
          #0150f3 50%,
          #000418 100%
        ) !important;

      box-shadow:
        0 0 6px rgba(0,80,255,.9),
        0 0 14px rgba(0,80,255,.6) !important;

      text-decoration: none !important;
      overflow: visible !important;
      transition: transform .2s ease !important;
    }

    #cb-vvip-floating-button .cb-vvip-link:hover {
      transform: scale(1.08) !important;
    }

    #cb-vvip-floating-button .cb-vvip-image {
      width: 38px !important;
      height: 38px !important;
      object-fit: contain !important;
      display: block !important;
      border: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    #cb-vvip-floating-button .cb-vvip-tooltip {
      position: absolute !important;
      left: calc(100% + 10px) !important;
      top: 50% !important;

      transform: translateY(-50%) translateX(-10px) !important;

      background: #0150f3 !important;
      color: #fff !important;

      padding: 6px 10px !important;
      border-radius: 6px !important;

      font-size: 12px !important;
      font-family: Arial, sans-serif !important;
      font-weight: 600 !important;

      white-space: nowrap !important;

      opacity: 0 !important;
      visibility: hidden !important;

      pointer-events: none !important;

      transition:
        opacity .25s ease,
        transform .25s ease !important;
    }

    #cb-vvip-floating-button
    .cb-vvip-link:hover
    .cb-vvip-tooltip {
      opacity: 1 !important;
      visibility: visible !important;
      transform: translateY(-50%) translateX(0) !important;
    }

    @media screen and (max-width: 768px) {

      #cb-vvip-floating-button {
        left: ${CONFIG.mobile.left} !important;

        /* SEJAJAR DI ATAS BOTTOM MENU */
        bottom: ${CONFIG.mobile.bottom} !important;

        width: ${CONFIG.mobile.width} !important;
        height: ${CONFIG.mobile.height} !important;
      }

      #cb-vvip-floating-button .cb-vvip-tooltip {
        display: none !important;
      }

      #cb-vvip-floating-button .cb-vvip-link:hover {
        transform: none !important;
      }
    }
  `;

  document.head.appendChild(style);

  const wrapper = document.createElement("div");
  wrapper.id = "cb-vvip-floating-button";

  const link = document.createElement("a");
  link.className = "cb-vvip-link";
  link.href = CONFIG.link;
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  const image = document.createElement("img");
  image.className = "cb-vvip-image";
  image.src = CONFIG.image;
  image.alt = "VVIP SERVER";

  const tooltip = document.createElement("span");
  tooltip.className = "cb-vvip-tooltip";
  tooltip.textContent = CONFIG.tooltip;

  link.appendChild(image);
  link.appendChild(tooltip);
  wrapper.appendChild(link);

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
