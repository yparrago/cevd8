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

// Data for each section
const sections = [
  {
    id: "sec-1",
    title: "Una red que nos sostiene",
    description:
      "Datos e historias se entretejen para explicar por qué es tan grave perder a un líder social.",
    //button: "",
    position: { top: 628, left: 813 },
    image: { url: "/themes/custom/cevtheme/iar/img/sections/recurso_1.png", top: 437, left: 813 },
    internasurl:"/impactos-resistencias-y-afrontamiento/una-red-que-nos-sostiene",
    altimage:"Tres marcos de ventanas en madera, una cinta violeta pasa entre ellos sobre textura de papel recortado",
  },
  {
    id: "sec-2",
    title: "La naturaleza herida por la violencia",
    description:
      "Documentales y mapas muestran la manera como la naturaleza ha sido víctima del conflicto armado interno.",
    position: { top: 500, left: 1374 },
    image: { url: "/themes/custom/cevtheme/iar/img/sections/recurso_2.png", top: 408, left: 1374 },
    internasurl:"/impactos-resistencias-y-afrontamiento/la-naturaleza-herida-por-la-violencia",
    altimage:"Canoa con motor vista desde arriba navega sobre rio",
  },
  {
    id: "sec-3",
    title: "Proyecto Oruga",
    description:
      "Documental en formato cine que enlaza la búsqueda de desaparecidos con la vida cotidiana en la ciudad.",
    position: { top: 350, left: 2020 },
    image: { url: "/themes/custom/cevtheme/iar/img/sections/recurso_3.png", top: 185, left: 2030 },
    internasurl:"/impactos-resistencias-y-afrontamiento/proyecto-oruga-tu-busqueda-mi-esperanza",
    altimage:"Alejandra Romero y Pilar Navarrete sostienen artesanías que tienen en su interior fotos de desaparecidos",
  },
  {
    id: "sec-4",
    title: "¡Y estalló la desconfianza!",
    description:
      "Pieza sonora que narra las afectaciones colectivas de la degradación de la guerra",
    position: { top: 750, left: 2733 },
    image: { url: "/themes/custom/cevtheme/iar/img/sections/recurso_4.png", top: 524, left: 2733 },
    internasurl:"/impactos-resistencias-y-afrontamiento/y-estallo-la-desconfianza",
    altimage:"Teléfono con vasos de papel con cuerda de color rojo y blanco sobre papel recortado",
  },
  {
    id: "sec-5",
    title: "Voces vivas: Universidades",
    description:
      "Recorrido multimedia con historias de impactos y resistencias en dos campus universitarios",
    position: { top: 1360, left: 838 },
    image: { url: "/themes/custom/cevtheme/iar/img/sections/recurso_5.png", top: 1116, left: 838 },
    internasurl:"/impactos-resistencias-y-afrontamiento/voces-vivas-universidades",
    altimage:"Collage de fotos 360 grados de Universidad Nacional y Universidad de Antioquia vistas desde arriba",
  },
  {
    id: "sec-6",
    title: "Rehacer la vida después del secuestro",
    description:
      "Animación que nos conecta con los impactos de la violencia en la vida de una joven y la fuerza que encuentra para rehacer su vida.",
    position: { top: 1090, left: 1362 },
    image: { url: "/themes/custom/cevtheme/iar/img/sections/recurso_6.png", top: 937, left: 1362 },
    internasurl:"/impactos-resistencias-y-afrontamiento/rehacer-la-vida-despues-del-secuestro",
    altimage:"Mancha roja sobre tela en un tendedero entre dos ramas",
  },
  {
    id: "sec-7",
    title: "Construir la paz desafiando la desesperanza",
    description:
      "Crónica periodística sobre excombatientes en el Cauca y sus aportes a la paz.",
    position: { top: 850, left: 1820 },
    image: { url: "/themes/custom/cevtheme/iar/img/sections/recurso_7.png", top: 722, left: 1775 },
    internasurl:"/impactos-resistencias-y-afrontamiento/construir-la-paz-desafiando-la-desesperanza",
    altimage:"Piel. Recorte irregular del detalle de una cicatriz con siete puntos de sutura",
  },
  {
    id: "sec-8",
    title: "Cuerpos plurales",
    description:
      "Documental que entrelaza cuatro historias de personas con discapacidad víctimas del conflicto armado comprometidas con la paz.",
    position: { top: 860, left: 2250 },
    image: { url: "/themes/custom/cevtheme/iar/img/sections/recurso_8.png", top: 762, left: 2250 },
    internasurl:"/impactos-resistencias-y-afrontamiento/cuerpos-plurales-construccion-de-paz-y-resistencias-de",
    altimage:"Brazos saliendo de agujeros y manos hacen gestos con los dedos",
  },
  {
    id: "sec-9",
    title: "Los cuidados de la vida",
    description:
      "Historias sobre la fuerza de la gente y su amor por la vida en comunidad.",
    position: { top: 1370, left: 1874 },
    image: { url: "/themes/custom/cevtheme/iar/img/sections/recurso_9.png", top: 1237, left: 1874 },
    internasurl:"/impactos-resistencias-y-afrontamiento/los-cuidados-de-la-vida",
    altimage:"Recorte de mural pintado a mano con árboles, un camino, una casa, una res, tierra y vegetación",
  },
];

/**
 * Create sections divs and append to HTML
 */
function fillMapWithSections(target) {
  let text = "";
  const defaultButtonText = "Acceder a esta historia";

  sections.forEach((sec) => {
    let { top, left } = sec.position;
    // <img src="./images/bird-white.svg" class="pe-none mb-3">
    text += `
      <div class="map-sec-container">
        <div 
          id="${sec.id}" class="map-sec" style="top: ${top}px; left: ${left}px">
            <p class="title">${sec.title}</p>
            <p class="contenido">${sec.description}</p>
          <a href="${sec.internasurl}" class="button mt-2">${sec.button || defaultButtonText}</a>
        </div>
        ${
          sec.image
            ? `<img class="map-sec-image" src="${sec.image.url}" style="top: ${sec.image.top}px; left: ${sec.image.left}px" alt="${sec.altimage}">`
            : ""
        }
      </div>
		`;
  });

  target.insertAdjacentHTML("beforeend", text);
}


// Bird
let bird = document.querySelector("#bird");

let mousePosX = 0,
  mousePosY = 0,
  birdImg = "/themes/custom/cevtheme/iar/img/bird.gif",
  mouseMoveTimer;

mapWrapper.addEventListener("mousemove", (e) => {
  mousePosX = e.clientX;
  mousePosY = e.clientY;

  if (jQuery("#bird img").attr("src") !== birdImg) {
    jQuery("#bird img").attr("src", birdImg);
  }

  clearTimeout(mouseMoveTimer);
  mouseMoveTimer = setTimeout(() => {
    jQuery("#bird img").attr("src", "/themes/custom/cevtheme/iar/img/bird-stop.gif");
  }, 400);
});

let delay = 30,
  delayedPosX = 0,
  delayedPosY = 0;

function delayMouseFollow() {
  requestAnimationFrame(delayMouseFollow);

  delayedPosX += (mousePosX - delayedPosX) / delay;
  delayedPosY += (mousePosY - delayedPosY) / delay;

  bird.style.top = delayedPosY - offset.top + "px";
  bird.style.left = delayedPosX - offset.left + "px";
}

let touchExcludes = ["BUTTON", "A"];

function touchHandler(event) {
  let touch = event.changedTouches[0];

  //event.target != document.querySelector("#map")
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
  event.preventDefault();
  touch.target.dispatchEvent(mouseEvent);
}

function addTouchEvents(target) {
  target.addEventListener("touchstart", touchHandler, true);
  target.addEventListener("touchmove", touchHandler, true);
  target.addEventListener("touchend", touchHandler, true);
  target.addEventListener("touchcancel", touchHandler, true);
}

// Mini Map 
const minimapNode = jQuery("#minimap-viewport");
let minimapVal = parseFloat(rootStyles.getPropertyValue("--minimap-var"));

function updateMiniMap() {
  
  minimapNode.css({
    top: 1 | (Math.abs(position.y) * minimapVal),
    left: 1 | (Math.abs(position.x) * minimapVal),
  });
}

function setMinimapNodeSize() {
  const width = Math.round((jQuery(window).width() / 3840) * 100) + "%";
  const height = Math.round((jQuery(window).height() / 2160) * 100) + "%";

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
  delayMouseFollow();
  addTouchEvents(mapWrapper);
  setMinimapNodeSize();
  updateMiniMap();
});

/*
document.addEventListener("DOMContentLoaded", () => {
  jQuery.getJSON( "/iar-json?_format=json", function( data ) { 
    sections = data;
  }).done(function() {
    console.log( "second success" );
    fillMapWithSections(mapWrapper);
    delayMouseFollow();
    addTouchEvents(mapWrapper);
  });
});*/
