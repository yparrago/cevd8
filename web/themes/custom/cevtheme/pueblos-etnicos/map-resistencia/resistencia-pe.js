//EAO 09/11/1984 
const cssRoot = document.querySelector(":root");
const rootStyles = getComputedStyle(cssRoot);
const position = {
  x: parseInt(rootStyles.getPropertyValue("--map-px")),
  y: parseInt(rootStyles.getPropertyValue("--map-py")),
};
const mapWrapper = document.querySelector("#map-wrapper");
let offset = mapWrapper.getBoundingClientRect();

interact.pointerMoveTolerance(2);
// Init Draggable map
interact(".map-wrapper").draggable({
  listeners: {
    move(event) {
      position.x += event.dx;
      position.y += event.dy;
      event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;

      // Update offset for bird movement
      offset = mapWrapper.getBoundingClientRect();

      updateMiniMap();
    },
  },
  modifiers: [
    // apply the restrict and then the snap modifiers to drag events
    interact.modifiers.restrict({
      restriction: "parent",
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
      //endOnly: true, // Add bounce on when drag reach the corners
    }),
  ],
  inertia: true, // Disable if you want avoid fast drag with smooth effect
});
// .styleCursor(false);

// Data for each section
const sections = [
  {
    id: "", 
    position: { top: 134, left: 1169 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/makaguaje-1428.png",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/flag-makaguaje.png",
      flagAlt:"Makaguaje",
      top: 8,
      left: 140,
    },
    nid: "1428",
  },
  {
    id: "", 
    position: { top: 347, left: 1259 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/sentir-la-vida-1647.png",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/flag-sentir-la-vida.png",
      flagAlt:"Sentir la vida",
      top: -8,
      left: 95,
    },
    nid: "1647",
  },
  {
    id: "", 
    position: { top: 431, left: 1391 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/procesos-de-resistencia-de-las-mujeres-indigenas-del-cauca-1646.png",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/flag-proceso-resistencia-mujer-indigena.png",
      flagAlt:"Procesos de resistencia de las mujeres indigenas del cauca",
      top: -28,
      left: 84,
    },
    nid: "1646",
  },
  {
    id: "", 
    position: { top: 504, left: 1068 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/proceso-orgnizativo-de-mujeres-negras-afrocolombianas-raizales-y-palenqueras-la-experiencia-de-La-comadre-1426.png",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/flag-proceso-organizativo.png",
      flagAlt:"Proceso orgnizativo de mujeres negras afrocolombianas raizales y palenqueras la experiencia de La comadre",
      top: -50,
      left: -24,
    },
    nid: "1426",
  },
  {
    id: "", 
    position: { top: 365, left: 627 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/organizacion-de-las-comunidades-negras-de-la-boquilla-(Cartagena)-para-la-defensa-de-sus-territorios-ancestrales-1641.png",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/flag-boquilla.png",
      flagAlt:"Organizacion de las comunidades negras de la boquilla (Cartagena) para la defensa de sus territorios ancestrales-1641",
      top: -49,
      left: -124,
    },
    nid: "1641",
  },
  {
    id: "", 
    position: { top: 564, left: 813 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/musica-por-la-verdad-awa-1429.png",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/flag-awa.png",
      flagAlt:"Musica por la verdad awa",
      top: 45,
      left: -139,
    },
    nid: "1429",
  },
  {
    id: "", 
    position: { top: 1003, left: 875 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/procesos-de-organizaciones-indigenas-nacionales-(ONIC-OPIAC-CIT-GOBIERNO-MAYOR-AICO)-1644.png",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/flag-gobierno-mayor.png",
      flagAlt:"Procesos de organizaciones indigenas nacionales (ONIC, OPIAC, CIT, GOBIERNO MAYOR, AICO)",
      top: -60,
      left: -154,
    },
    nid: "1644",
  },
  {
    id: "", 
    position: { top: 835, left: 633 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/resistencia-de-consejo-regional-indigena-del-Cauca-1642.png",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/flag-consejo-cauca.png",
      flagAlt:"Resistencia de consejo regional indigena del Cauca",
      top: -34,
      left: -120,
    },
    nid: "1642",
  },
  {
    id: "", 
    position: { top: 713, left: 786 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/baudosiando-ejercicios-de-resistencia-al-conflicto-armado-por-parte-de-comunidades-negras-del-río-baudo-1637.png",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/flag-baudosiando.png",
      flagAlt:"Baudosiando: Ejercicios de resistencia al conflicto armado por parte de comunidades negras del río baudo",
      top: -20,
      left: -174,
    },
    nid: "1637",
  },
  {
    id: "", 
    position: { top: 852, left: 1141 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/dinamicas-y-procesos-organizativos-de-mujeres-negras-en-la-ciudad-de-bogota-1640.png",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/flag-dinamicas-negras-bogota.png",
      flagAlt:"Dinamicas y procesos organizativos de mujeres negras en la ciudad de Bogotá",
      top: -20,
      left: -156,
    },
    nid: "1640",
  },
  {
    id: "", 
    position: { top: 718, left: 1333 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/resistencias-del-pueblo-negro-afrocolombialonbiano-palenquero-y-raizal-el-caso-de-la-guardia-cimarrona-1427.png",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/flag-guardia-cimarrona.png",
      flagAlt:"Resistencias del pueblo negro afrocolombialonbiano palenquero y raizal el caso de la guardia cimarrona",
      top: 168,
      left: 54,
    },
    nid: "1427",
  },
  {
    id: "", 
    position: { top: 579, left: 1485 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/resistencia-de-la-organizacion-indigena-de-antioquia-1643.png",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/flag-resistencia-antioquia.png",
      flagAlt:"Resistencia de la organizacion indigena de antioquia",
      top: -27,
      left: 54,
    },
    nid: "1643",
  },
  {
    id: "", 
    position: { top: 1063, left: 1317 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/procesos-de-resistencia-de-la-guardia-indigena-contexto-general-1645.png",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-resistencia/images/sections/flag-guardia-indigena.png",
      flagAlt:"Procesos de resistencia de la guardia indigena contexto general",
      top: 138,
      left: -74,
    },
    nid: "1645",
  },
];

/**
 * Create sections divs and append to HTML
 */
function fillMapWithSections(target) {
  let text = "";
  sections.forEach((sec) => {
    let { top, left, zIndex } = sec.position;
    text += `
      <div data-class="pe-modals" class="map-sec-container modal_cev" data-nid="${sec.nid}">
        <div id="${sec.id}" 
          class="map-sec" style="top: ${top}px; left: ${left}px; z-index: ${zIndex || "inherit"}">
        ${
          sec.flag
            ? `<img class="map-sec-image" src="${sec.flag.url}" style="top: ${sec.flag.top}px; left: ${sec.flag.left}px" alt="${sec.flag.flagAlt}">`
            : ""
        }
        ${sec.image ? `<img class="map-sec-bg" src="${sec.image}">` : ""}
        </div>
      </div>
        `;
  });

  target.insertAdjacentHTML("beforeend", text);
}

function addEventToSvg() {
 jQuery(".map-sec-bg").mouseenter(function (e) {
    if (window.innerWidth >= 1024) {
      jQuery(this).siblings().css({ opacity: 1 });
    }
  });
  
  jQuery(".map-sec-bg").mouseleave(function (e) {
    if (window.innerWidth >= 1024) {
      jQuery(this).siblings().css({ opacity: 0 });
    }
  });

  jQuery(".map-svg path").click(function (e) {
    jQuery(this).closest(".map-sec-container").click();
  });

  jQuery(".map-sec-image").click(function (e) {
    jQuery(this).closest(".map-sec-container").click();
  });
}

let touchExcludes = ["BUTTON", "A", "IMG"];

function touchHandler(event) {
  let touch = event.changedTouches[0];

  if (touchExcludes.includes(event.target.tagName)) {
    return;
  }

  let touchEvents = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
  };

  let mouseEvent = new MouseEvent(touchEvents[event.type], {
    bubbles: true,
    cancelable: true,
    view: window,
    screenX: touch.screenX,
    screenY: touch.screenY,
    clientX: touch.clientX,
    clientY: touch.clientY,
    pageX: touch.pageX,
    pageY: touch.pageY,
  });

  if (!jQuery(event.target).data("modal-nid")) {
    event.preventDefault();
  }

  touch.target.dispatchEvent(mouseEvent);
}

function addTouchEvents(target) {
  target.addEventListener("touchstart", touchHandler, true);
  target.addEventListener("touchmove", touchHandler, true);
  target.addEventListener("touchend", touchHandler, true);
  target.addEventListener("touchcancel", touchHandler, true);
}

const minimapNode = jQuery("#minimap-viewport");
let minimapVal = parseFloat(rootStyles.getPropertyValue("--minimap-var"));

function updateMiniMap() {
  minimapNode.css({
    top: 1 | (Math.abs(position.y) * minimapVal),
    left: 1 | (Math.abs(position.x) * minimapVal),
  });
}

function setMinimapNodeSize() {
  const width =
    Math.round(
      (jQuery(window).width() /
        parseInt(rootStyles.getPropertyValue("--map-w-size"))) *
        100
    ) + "%";
  const height =
    Math.round(
      (jQuery(window).height() /
        parseInt(rootStyles.getPropertyValue("--map-h-size"))) *
        100
    ) + "%";

  minimapNode.css({
    width,
    height,
  });
}

jQuery(window).on("resize", () => {
  setMinimapNodeSize();
  updateMiniMap();
  minimapVal = parseFloat(rootStyles.getPropertyValue("--minimap-var"));
});

document.addEventListener("DOMContentLoaded", () => {
  fillMapWithSections(mapWrapper);
  addEventToSvg();

  addTouchEvents(mapWrapper);
  setMinimapNodeSize();
  updateMiniMap();

  jQuery("[data-modal-nid]").click(function (e) {
    e.preventDefault();
    const nid = jQuery(this).data("modal-nid");
    const modal = !!nid && jQuery(`.modal_cev[data-nid=${nid}]`);

    if (modal) {
      modal.modal("show");
      modal.find('[data-bs-dismiss="modal"]').click(() => {
        modal.modal("hide");
      });
    }
  });
});


//modificación modal 
jQuery("body").on("click", ".modal_cev", function (e) {
  e.preventDefault();
  var infoModal = jQuery("#modalInfoCev");
  var clase = jQuery(this).data("class");

  if(infoModal.hasClass("pe-modals")){
    infoModal.removeClass("pe-modals"); 
  }
  infoModal.addClass(clase);
  
});