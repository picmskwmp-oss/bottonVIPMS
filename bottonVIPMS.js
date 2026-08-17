(function () {
  "use strict";

  if (document.getElementById("cb-vvip-floating-button")) return;

  const CONFIG = {
    link: "https://urlmsshorten.com/landingpagevipms",
    image: "https://www.image2url.com/r2/default/gifs/1786877412858-25740a16-8b2a-4b3e-b0bf-2f732f0fa576.gif",
    tooltip: "VIP SERVER",

    desktop: {
      left: "10px",
      bottom: "80px",
      width: "55px",
      height: "55px"
    },

    mobile: {
      left: "10px",
      bottom: "95px",
      width: "55px",
      height: "55px"
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
      background: transparent !important;
      border: none !important;
      box-shadow: none !important;
    }

    #cb-vvip-floating-button .cb-vvip-link {
      position: relative !important;
      display: block !important;
      width: 100% !important;
      height: 100% !important;
      margin: 0 !important;
      padding: 0 !important;
      background: transparent !important;
      border: none !important;
      box-shadow: none !important;
      text-decoration: none !important;
      overflow: visible !important;
    }

    #cb-vvip-floating-button .cb-vvip-image {
      display: block !important;
      width: 100% !important;
      height: 100% !important;
      object-fit: contain !important;
      margin: 0 !important;
      padding: 0 !important;
      border: none !important;
      background: transparent !important;
      box-shadow: none !important;
      transition: transform .2s ease !important;
    }

    #cb-vvip-floating-button .cb-vvip-link:hover .cb-vvip-image {
      transform: scale(1.08) !important;
    }

    #cb-vvip-floating-button .cb-vvip-tooltip {
      position: absolute !important;
      left: calc(100% + 10px) !important;
      top: 50% !important;
      transform: translateY(-50%) translateX(-8px) !important;

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
        opacity .2s ease,
        transform .2s ease !important;
    }

    #cb-vvip-floating-button .cb-vvip-link:hover .cb-vvip-tooltip {
      opacity: 1 !important;
      visibility: visible !important;
      transform: translateY(-50%) translateX(0) !important;
    }

    @media screen and (max-width: 768px) {
      #cb-vvip-floating-button {
        left: ${CONFIG.mobile.left} !important;
        bottom: ${CONFIG.mobile.bottom} !important;
        width: ${CONFIG.mobile.width} !important;
        height: ${CONFIG.mobile.height} !important;
      }

      #cb-vvip-floating-button .cb-vvip-tooltip {
        display: none !important;
      }

      #cb-vvip-floating-button .cb-vvip-link:hover .cb-vvip-image {
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
  image.alt = "VIP SERVER";

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
