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
    id: "bahia-portete",
    position: { top: 200, left: 1448 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/bahia-portete.png", top: -28, left: 2 },
    nid: "1054",
    imageAlt: "Masacre de Bahía Portete",
  },
  {
    id: "san-andres-y-providencia",
    position: { top: 200, left: 1000 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/contexto-raizal.png", top: -30, left: 2 },
    nid: "1732",
    imageAlt: "Contexto Pueblo Raizal",
  },
  {
    id: "rincon-guapo-loveran",
    position: { top: 260, left: 1260 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/rincon-guapo-loveran.png", top: -46, left: 2 },
    nid: "1047",
    imageAlt: "Consejo Comunitario Rincón Guapo Loveran",
  },
  {
    id: "impacto-comflicto-armado",
    position: { top: 330, left: 1130 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/impacto-comflicto-armado.png", top: -68, left: -128 },
    nid: "1417",
    imageAlt: "Impactos del conflicto armado interno al trerritorio a las prácticas culturales ancestrales y las formas de organización de las comunidades afrocolombianas, raizales y palenqueras del Norte de Bolívar",
  },
  {
    id: "ritos-cantos-danzas",
    position: { top: 386, left: 1130 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/ritos-cantos-danzas.png", top: -24, left: -174 },
    nid: "1350",
    imageAlt: "Ritos, cantos y danzas de la ancestralidad negra",
  },
  {
    id: "san-jacinto",
    position: { top: 394 , left: 1180 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/san-jacinto.png", top: 10, left: 1 },
    nid: "1046",
    imageAlt: "Racismo, violencia y daños en San Jacinto, Bolívar",
  },
  {
    id: "indegenas-caribe",
    position: { top: 390, left: 1280 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/indegenas-caribe.png", top: -68, left: 2 },
    nid: "1341",
    imageAlt: "Impactos y resistencias de los pueblos indígenas del Caribe colombiano",
  },
  {
    id: "declaracion-mancuso",
    position: { top: 480, left: 1074 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/declaracion-mancuso.png", top: -60, left: -144 },
    nid: "1344",
    imageAlt: "Declaración de Salvatore Mancuso sobre asesinato de Kimmy Pernía",
  },
  {
    id: "resistencia-comunidades-negras",
    position: { top: 580, left: 988 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/resistencia-comunidades-negras.png", top: -62, left: -212 },
    nid: "1349",
    imageAlt: "Afectaciones del conflicto armado y resistencia de comunidades negras del municipio de Riosucio en Chocó",
  },/*
  {
    id: "violaciones-pueblos-indigenas",
    position: { top: 670, left: 690 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/violaciones-pueblos-indigenas.png", top: -65, left: -178 },
    nid: "1049",
    imageAlt: "Contexto Nacional: violaciones a los derechos de los pueblos indígenas",
  },*/
  {
    id: "impactos-resis-indigenas-pacifico",
    position: { top: 686, left: 984 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/impactos-resis-indigenas-pacifico.png", top: -61, left: -148 },
    nid: "1339",
    imageAlt: "Impactos y resistencia de los pueblos indígenas en la región Pacífico",
  },
  {
    id: "guna-dulce",
    position: { top: 615, left: 1030 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/guna-dulce.png", top: -50, left: 1 },
    nid: "1371",
    imageAlt: "Afectaciones al Pueblo de Guna Dule",
  },
  {
    id: "pueblos-indigenas-region-andina",
    position: { top: 686, left: 1284 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/pueblos-indigenas-region-andina.png", top: -67, left: 1 },
    nid: "1340",
    imageAlt: "Impactos del conflicto en los pueblos indígenas de la región Andina",
  },
  {
    id: "conflicto-baudo",
    position: { top: 786, left: 994 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/conflicto-baudo.png", top: -60, left: -244 },
    nid: "1245",
    imageAlt: "Conflicto armado contra las comunidades negras y sus procesos organizativos en el municipio del Baudó",
  },
  {
    id: "pueblo-rrom-gitano",
    position: { top: 794, left: 1238 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/contexto-rrom.png", top: -48, left: 1 },
    nid: "1733",
    imageAlt: "Contexto Nacional Pueblo Rrom Gitan",
  },/*
  {
    id: "dinamicas-mujers-bogota",
    position: { top: 794, left: 1238 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/dinamicas-mujers-bogota.png", top: -75, left: 1 },
    nid: "1351",
    imageAlt: "Dinámicas y procesos organizativos de mujeres negras en la ciudad de Bogotá",
  },
  {
    id: "pueblo-negro-raizal",
    position: { top: 870, left: 720 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/pueblo-negro-raizal.png", top: -64, left: -178 },
    nid: "1022",
    imageAlt: "Contexto histórico y social del pueblo negro, afrocolombiano, palenquero y raizal",
  },*/
  {
    id: "buenaventura",
    position: { top: 892, left: 1000 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/buenaventura.png", top: -60, left: -182 },
    nid: "1023",
    imageAlt: "Afectaciones del Conflicto armado sobre las comunidades negras de Buenaventura",
  },
  {
    id: "racismos-urbanos",
    position: { top: 826, left: 1262 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/racismos-urbanos.png", top: -29, left: 1 },
    nid: "1040",
    imageAlt: "Racismo en contextos urbanos",
  },
  {
    id: "megaproyectos-comunidades-negras",
    position: { top: 960, left: 1026 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/megaproyectos-comunidades-negras.png", top: 8, left: 0 },
    nid: "1346",
    imageAlt: "Afectaciones del conflicto armado y megaproyectos sobre las comunidades negras de La Toma en el municipio de Suárez, departamento del Cauca",
  },
  {
    id: "pueblo-nasa",
    position: { top: 924, left: 1064 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/pueblo-nasa.png", top: -45, left: 2 },
    nid: "1057",
    imageAlt: "Pueblo Nasa: la Masacre del Nilo o “Masacre de Caloto”",
  },
  {
    id: "horrores-guerra-mujeres-negra-cauca",
    position: { top: 988, left: 986 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/horreres-guerra-mujeres-negra-cauca.png", top: -58, left: -172 },
    nid: "1347",
    imageAlt: "Horrores de la guerra en los cuerpos de las mujeres negras departamento del Cauca",
  },
  {
    id: "altomira-frontera",
    position: { top: 1020, left: 870 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/altomira-frontera.png", top: -25, left: -106 },
    nid: "1044",
    imageAlt: "Altomira y Frontera",
  },
  {
    id: "pueblo-awa",
    position: { top: 1084, left: 942 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/pueblo-awa.png", top: -24, left: -71 },
    nid: "1052",
    imageAlt: "Pueblo A'wá",
  },
  {
    id: "orinoquia-norte-santander",
    position: { top: 776, left: 1694 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/orinoquia-norte-santander.png", top: -62, left: 2 },
    nid: "1343",
    imageAlt: "Impactos del continuum de violencias de los pueblos indígenas de la Orinoquía y Norte de Santander",
  },
  {
    id: "guahibiadas",
    position: { top: 882, left: 1630 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/guahibiadas.png", top: -45, left: 1 },
    nid: "1370",
    imageAlt: "Afectaciones históricas, continuum de violencias: Guahibiadas",
  },
  {
    id: "pueblo-nukak",
    position: { top: 1046, left: 1448 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/pueblo-nukak.png", top: -45, left: 1 },
    nid: "1056",
    imageAlt: "Pueblo Nukak: despojo territorial y daño cultural",
  },
  {
    id: "municipio-calamar",
    position: { top: 1054, left: 1356 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/municipio-calamar.png", top: 10, left: 1 },
    nid: "1348",
    imageAlt: "Afectaciones del conflicto armado sobre comunidades negras del municipio de Calamar, departamento del Guaviare",
  },
  {
    id: "exilio-chile",
    position: { top: 1100, left: 830 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/exilio-chile.png", top: -79, left: -234 },
    nid: "1352",
    imageAlt: "Experiencias de vida de personas negras y afrocolombianas que se encuentran en situación de exilio. Caso de Antofagasta (Chile)",
  },
  {
    id: "puerto-arica",
    position: { top: 1370, left: 1488 },
    image: { url: "/themes/custom/cevtheme/pueblos-etnicos/map-modalidades-violencia/img/sections/puerto-arica.png", top: -44, left: 2 },
    nid: "1048",
    imageAlt: "Reclutamiento forzado a pueblos indígenas en Puerto Arica",
  },
];

/**
 * Create sections divs and append to HTML
 */
function fillMapWithSections(target) {
  let text = "";
  sections.forEach((sec) => {
    let { top, left } = sec.position;
    text += `
      <div class="map-sec-container modal_cev" data-class="pe-modals" data-nid="${sec.nid}">
        <div id="${
          sec.id
        }" class="map-sec" style="top: ${top}px; left: ${left}px">
          <div class="sonar-wave-container" data-accept="true">
            <div class="sonar-wave sonar-wave1"></div>
            <div class="sonar-wave sonar-wave2"></div>
          </div>
          ${
            sec.image
              ? `<img class="map-sec-image" src="${sec.image.url}" style="top: ${sec.image.top}px; left: ${sec.image.left}px" alt="${sec.imageAlt}">`
              : ""
          }
        </div>
      </div>
        `;
  });

  target.insertAdjacentHTML("beforeend", text);
}

let touchExcludes = ["BUTTON", "A"];

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

  if (jQuery(event.target).data("nid") !== undefined || jQuery(event.target).data("accept") !== true) {
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
  const width = Math.round((jQuery(window).width() / parseInt(rootStyles.getPropertyValue("--map-w-size"))) * 100) + "%";
  const height = Math.round((jQuery(window).height() / parseInt(rootStyles.getPropertyValue("--map-h-size"))) * 100) + "%";

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
   // open menu text
  jQuery("#map-menu-button").click(function() {
    if (!jQuery(this).hasClass('active')) {
      jQuery('#map-menu-text').show(300);
      jQuery(this).addClass('active');
      return
    }

    jQuery('#map-menu-text').hide(300);
    jQuery(this).removeClass('active');
  });
});

if (window.innerWidth > 1024) {
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
  } 

//modificación modal 
/*
jQuery("body").on("click", ".modal_cev", function (e) {
  e.preventDefault();
  var infoModal = jQuery("#modalInfoCev");
  var clase = jQuery(this).data("class");

  if(infoModal.hasClass("pe-modals")){
    infoModal.removeClass("pe-modals"); 
  }
  infoModal.addClass(clase);
  
});*/



