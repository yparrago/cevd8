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
    id: "mujeres-indigenas", //Contexto: violencias y daños contra las mujeres indígenas en el conflicto armado (1616) 
    position: { top: 714, left: 1330 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/mujeres-indigenas.png",
    imageAlt:"",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/flag-mujeres-indigenas.png",
      flagAlt:"Contexto: violencias y daños contra las mujeres indígenas en el conflicto armado",
      top: 168,
      left: 54,
    },
    nid: "1616",
  },
  {
    id: "mujeres-arhuacas", //Afectaciones contra las mujeres arhuacas, su cultura y espiritualidad. (1618)
    position: { top: 178, left: 1488 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/mujeres-arhuacas.png",
    imageAlt:"",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/flag-mujeres-arhuacas.png",
      flagAlt:"Afectaciones contra las mujeres arhuacas, su cultura y espiritualidad",
      top: -14,
      left: -125,
    },
    nid: "1618",
  },
  {
    id: "afros-victimas-sexual", //Mujeres afrolombianas victimas de violencia sexual en el marco del conflicto armado (1631)
    position: { top: 1090, left: 1054 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/afros-victimas-sexual.png",
    imageAlt:"",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/flag-afros-victimas-sexual.png",
      flagAlt:"Mujeres afrolombianas victimas de violencia sexual en el marco del conflicto armado",
      top: 100,
      left: 26,
    },
    nid: "1631",
  },
  {
    id: "mujeres-cauca", //Resistencias de las mujeres indígenas del Cauca (1623)
    position: { top: 698, left: 1686 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/mujeres-cauca.png",
    imageAlt:"",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/flag-mujeres-cauca.png",
      flagAlt:"Resistencias de las mujeres indígenas del Cauca",
      top: -34,
      left: 54,
    },
    nid: "1623",
  },
  {
    id: "organizaciones-mujeres", //Organizaciones de mujeres afrocolombianas victimas de la violencia (1634)
    position: { top: 1004, left: 1560 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/organizaciones-mujeres.png",
    imageAlt:"",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/flag-organizaciones-mujeres.png",
      flagAlt:"Organizaciones de mujeres afrocolombianas victimas de la violencia",
      top: -32,
      left: 40,
    },
    nid: "1634",
  },
  {
    id: "mujeres-kichwa", //Violencia Sexual contra mujeres indígena del pueblo Kichwa (1620)
    position: { top: 1086, left: 1362 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/mujeres-kichwa.png",
    imageAlt:"",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/flag-mujeres-kichwa.png",
      flagAlt:"Violencia Sexual contra mujeres indígena del pueblo Kichwa",
      top: -32,
      left: 30,
    },
    nid: "1620",
  },
  {
    id: "reclutamiento-awa", //Reclutamiento forzado a mujeres del pueblo Awá (1621)
    position: { top: 970, left: 984 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/reclutamiento-awa.png",
    imageAlt:"",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/flag-reclutamiento-awa.png",
      flagAlt:"Reclutamiento forzado a mujeres del pueblo Awá",
      top: -30,
      left: 20,
    },
    nid: "1621",
  },
  {
    id: "afrumupaz", //Afrumupaz: resistencia en Bogotá (1627)
    position: { top: 898, left: 1224 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/afrumupaz.png",
    imageAlt:"",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/flag-afrumupaz.png",
      flagAlt:"Afrumupaz: resistencia en Bogotá",
      top: -8,
      left: -150,
    },
    nid: "1627",
  },
  {
    id: "palenqueras-resistencia", //Mujeres palenqueras narran hechos de victimización y exponen ejercicios de Resistencia. (1630)
    position: { top: 820, left: 800 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/palenqueras-resistencia.png",
    imageAlt:"",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/flag-palenqueras-resistencia.png",
      flagAlt:"Mujeres palenqueras narran hechos de victimización y exponen ejercicios de Resistencia",
      top: -44,
      left: -160,
    },
    nid: "1630",
  },
  {
    id: "desplazamiento-amazonia", //Desplazamiento de mujeres indígenas en la Amazonia (1617)
    position: { top: 746, left: 984 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/desplazamiento-amazonia.png",
    imageAlt:"",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/flag-desplazamiento-amazonia.png",
      flagAlt:"Desplazamiento de mujeres indígenas en la Amazonia",
      top: -28,
      left: -130,
    },
    nid: "1617",
  },
  {
    id: "mujeres-bolivar", //Impactos diferenciados y practicas en el marco del conflicto armado hacia las mujeres negras y afrolombianas en el departamento de Bolivar
    position: { top: 576, left: 950 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/mujeres-bolivar.png",
    imageAlt:"",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/flag-mujeres-bolivar.png",
      flagAlt:"Impactos diferenciados y practicas en el marco del conflicto armado hacia las mujeres negras y afrolombianas en el departamento de Bolivar",
      top: 40,
      left: -208,
    },
    nid: "1628",
  },
  {
    id: "afrocolombiana-sanacion", //Mujeres afrocolombianas victimas de la violencia desarrollan ejercicios de resistencia y sananción. (1633)
    position: { top: 432, left: 1836 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/afrocolombiana-sanacion.png",
    imageAlt:"",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/flag-afrocolombiana-sanacion.png",
      flagAlt:"Mujeres afrocolombianas victimas de la violencia desarrollan ejercicios de resistencia y sananción",
      top: -34,
      left: 40,
    },
    nid: "1633",
  },
  {
    id: "mujeres-afrocolombianas-victimas", //Mujeres afrolombianas victimas de violencia sexual en el marco del conflicto armado.  (1632)
    position: { top: 400, left: 1552 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/mujeres-afrocolombianas-victimas.png",
    imageAlt:"",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/flag-mujeres-afrocolombianas-victimas.png",
      flagAlt:"Mujeres afrolombianas victimas de violencia sexual en el marco del conflicto armado",
      top: -56,
      left: 30,
    },
    nid: "1632",
  },
  {
    id: "mujeres-embera", //Violencia sexual a mujer Embera en situación de desplazamiento en Bogotá (1619)
    position: { top: 444, left: 1376, zIndex: 10 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/mujeres-embera.png",
    imageAlt:"",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/flag-mujeres-embera.png",
      flagAlt:"Violencia sexual a mujer Embera en situación de desplazamiento en Bogotá",
      top: 108,
      left: 20,
    },
    nid: "1619",
  },
  {
    id: "mujeres-palenquera", // Mujeres Afrocolombianas Victimas de la Violencia en Nuquí desarrollan ejercicios Organizativos para resistir  (1626)
    position: { top: 378, left: 1248 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/mujeres-palenquera.png",
    imageAlt:"",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/flag-mujeres-palenquera.png",
      flagAlt:"Mujeres Afrocolombianas Victimas de la Violencia en Nuquí desarrollan ejercicios Organizativos para resistir",
      top: -50,
      left: 20,
    },
    nid: "1626",
  },
  {
    id: "mujeres-narino", //Daños del conflicto armado sobre mujeres negras del Departamento de Nariño
    position: { top: 142, left: 1170 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/mujeres-narino.png",
    imageAlt:"",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/flag-mujeres-narino.png",
      flagAlt:"Daños del conflicto armado sobre mujeres negras del Departamento de Nariño",
      top: 25,
      left: -138,
    },
    nid: "1629",
  },
  {
    id: "violencia-sexual",//Violencia sexual contra mujeres indígenas
    position: { top: 278, left: 1034 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/violencia-sexual.png",
    imageAlt:"",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/flag-violencia-sexual.png",
      flagAlt:"Violencia sexual contra mujeres indígenas",
      top: -36,
      left: -98,
    },
    nid: "1624",
  },
  {
    id: "piel-mujer", //Piel mujer
    position: { top: 492, left: 1104 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/piel-mujer.png",
    imageAlt:"",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/flag-piel-mujer.png",
      flagAlt:"Piel mujer",
      top: -8,
      left: 0,
    },
    nid: "1615",
  },
  {
    id: "afectaciones-lgtbi", //Afectaciones a la población indígena LGBTIQ+
    position: { top: 412, left: 770 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/afectaciones-lgtbi.png",
    imageAlt:"",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/flag-afectaciones-lgtbi.png",
      flagAlt:"Afectaciones a la población indígena LGBTIQ+",
      top: -14,
      left: -110,
    },
    nid: "1622",
  },
  {
    id: "el-que-falta", // Contexto de la siutación de DDHH de las Mujeres Negras, Afrocolombianas, Raizales y Palenqueras   (1625)
    position: { top: 634, left: 1526 },
    image: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/el-que-falta.png",
    imageAlt:"",
    flag: {
      url: "/themes/custom/cevtheme/pueblos-etnicos/map-mujeres-territorio/images/sections/flag-afrocolombiana-raizales-palenqueras.png",
      flagAlt:"Contexto de la siutación de DDHH de las Mujeres Negras, Afrocolombianas, Raizales y Palenqueras",
      top: -45,
      left: 45,
    },
    nid: "1625",
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
        ${sec.image ? `<img class="map-sec-bg" src="${sec.image}" alt="${sec.imageAlt}">` : ""}
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