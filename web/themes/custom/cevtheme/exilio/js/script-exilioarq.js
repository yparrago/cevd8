if(window.innerWidth>575){
 var posdx= 0; 
}
else
var posdx= 330; 

// const position = { x: 0, y: 0 };
const position = { x: -posdx, y:0}; // Position center, same in css
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
    },
  },
  modifiers: [
    // apply the restrict and then the snap modifiers to drag events
    interact.modifiers.restrict({
      restriction: "parent",
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
      endOnly: false, // Add bounce on when drag reach the corners
    }),
  ],
  inertia: true, // Disable if you want avoid fast drag with smooth effect
});


// Data for each section
const sectionspeq = [
  {
    id: "arq-1",
    datanid:337,
       image: { url: "/themes/custom/cevtheme/exilio/img/arq-04.svg", top: 320, left: 800 },
  },
  {
    id: "arq-2",
    datanid:338,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-05.svg", top: 90, left: 1090 },
  },
  {
    id: "arq-3",
    datanid:339,
       image: { url: "/themes/custom/cevtheme/exilio/img/arq-06.svg", top: 620, left: 960 },
  },
  {
    id: "arq-4",
    datanid:340,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-07.svg", top: 480, left: 1200 },
  },
  {
    id: "arq-5",
    datanid:341,
       image: { url: "/themes/custom/cevtheme/exilio/img/arq-08.svg", top: 200, left: 1330 },
  },
  {
    id: "arq-6",
    datanid:342,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-09.svg", top: 354, left: 1585 },
  },
  {
    id: "arq-7",
    datanid:343,
       image: { url: "/themes/custom/cevtheme/exilio/img/arq-10.svg", top: 710, left: 1650 },
  },
  {
    id: "arq-8",
    datanid:344,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-11.svg", top: 80, left: 1800 },
  },
  {
    id: "arq-9",
    datanid:345,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-12.svg", top: 460, left: 1925 },
  },
  {
    id: "arq-10",
    datanid:347,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-13.svg", top: 362, left: 2180 },
  },
  {
    id: "arq-11",
    datanid:350,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-14.svg", top: 80, left: 2320 },
  },
  {
    id: "arq-12",
    datanid:351,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-15.svg", top: 276, left: 2569 },
  },
  {
    id: "arq-13",
    datanid:352,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-16.svg", top: 675, left: 2445 },
  },
  {
    id: "arq-14",
    datanid:353,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-17.svg", top: 459, left: 2795 },
  },
  {
    id: "arq-15",
    datanid:354,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-18.svg", top: 68, left: 2893 },
  },
  {
    id: "arq-16",
    datanid:355,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-19.svg", top: 299, left: 3210 },
  },
  {
    id: "arq-17",
    datanid:356,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-20.svg", top: 665, left: 3150 },
  },
  {
    id: "arq-18",
    datanid:357,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-21.svg", top: 710, left: 3480 },
  },
  {
    id: "arq-19",
    datanid:358,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-22.svg", top: 385, left: 3650 },
  },
  {
    id: "arq-20",
    datanid:359,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-23.svg", top: 80, left: 3798 },
  },
  {
    id: "arq-21",
    datanid:369,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-24.svg", top: 545, left: 3970 },
  },
  {
    id: "arq-22",
    datanid:360,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-25.svg", top: 230, left: 4110 },
  },
  {
    id: "arq-23",
    datanid:361,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-26.svg", top: 607, left: 4320},
  },
  {
    id: "arq-24",
    datanid:362,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-27.svg", top: 336, left: 4468 },
  },
  {
    id: "arq-25",
    datanid:363,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-28.svg", top: 72, left: 4624 },
  },
  {
    id: "arq-26",
    datanid:364,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-29.svg", top: 332, left: 4860 },
  },
  {
    id: "arq-27",
    datanid:365,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-30.svg", top: 700, left: 4730 },
  },
  {
    id: "arq-28",
    datanid:366,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-31.svg", top: 80, left: 5090 },
  },
  {
    id: "arq-29",
    datanid:367,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-32.svg", top: 691, left: 5188 },
  },
  {
    id: "arq-30",
    datanid:349,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-33.svg", top: 440, left: 5337 },
  },
  {
    id: "arq-31",
    datanid:373,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-34.svg", top: 90, left: 5550 },
  },
  {
    id: "arq-32",
    datanid:374,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-35.svg", top: 617, left: 5805 },
  },
  {
    id: "arq-33",
    datanid:375,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-36.svg", top: 333, left: 5855 },
  },
  {
    id: "arq-34",
    datanid:376,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-37.svg", top: 690, left: 6185 },
  },
  {
    id: "arq-35",
    datanid:377,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-38.svg", top: 130, left: 6423 },
  },
  {
    id: "arq-36",
    datanid:378,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-39.svg", top: 706, left: 6595 },
  },
  {
    id: "arq-37",
    datanid:379,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-40.svg", top: 460, left: 6697 },
  },
  {
    id: "arq-38",
    datanid:380,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-41.svg", top: 220, left: 6897 },
  },
  {
    id: "arq-39",
    datanid:382,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-42.svg", top: 560, left: 7012},
  },
  {
    id: "arq-40",
    datanid:383,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-43.svg", top: 405, left: 7223 },
  },
  {
    id: "arq-41",
    datanid:384,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-44.svg", top: 720, left: 7320 },
  },
  {
    id: "arq-42",
    datanid:385,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-45.svg", top: 110, left: 7417 },
  },     
  {
    id: "arq-43",
    datanid:386,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-46.svg", top:660, left: 7607 },
  },
  {
    id: "arq-44",
    datanid:387,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-47.svg", top: 290, left: 7733 },
  },
  {
    id: "arq-45",
    datanid:388,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-48.svg", top: 586, left: 7940 },
  },
  {
    id: "arq-46",
    datanid:389,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-49.svg", top:300, left: 8067 },
  },
  {
    id: "arq-47",
    datanid:390,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-50.svg", top: 71, left: 8303 },
  },
  {
    id: "arq-48",
    datanid:391,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-51.svg", top: 397, left: 8445 },
  },
  {
    id: "arq-49",
    datanid:392,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-52.svg", top: 230, left: 8690 },
  },
  {
    id: "arq-50",
    datanid:393,
      image: { url: "/themes/custom/cevtheme/exilio/img/arq-53.svg", top: 605, left: 8808 },
  },
];

function fillMapWithSectionsarq(target2) {
  let text1 ="";
  
  sectionspeq.forEach((sec) => {
  
    text1 += `
      <div class="map-sec-container elemento modal_cev" data-class="customize-modalex" data-nid="${sec.datanid}"">
        
        ${
          sec.image
            ? `<img class="map-sec-imageint" src="${sec.image.url}" style="top: ${sec.image.top}px; left: ${sec.image.left}px">`
            : ""
        }  

        
      </div>
		`;
  });

  target2.insertAdjacentHTML("beforeend", text1);
}

const sections = [

  {
    id: "seca-1",
    title: {tnombre:"Arqueologías </br> vivas del exilio",tcolor:"FFFFFF"},
    datanid:394,
    titlemid:{stnombre:"Exposición descargable",stcolor:"70F5E7"},
    description:
      "La pieza Arqueologías vivas del exilio alberga las historias detrás de los objetos que los y las colombianas pudieron llevarse con ellos al salir forzosamente del país. Este proyecto se impulsó con el fin de sumar más voces y rostros a esta verdad del exilio colombiano. Agradecemos en especial  a la red de voluntarios y organizaciones de víctimas en Argentina, Chile, México, Brasil, Dinamarca, España, Canadá y Costa Rica por impulsar y acompañar este proyecto. Para esta exposición se seleccionaron aleatoriamente 50 fotografías de objetos con un pequeño fragmento de las historias. En total, fueron enviadas 150 fotos, todas ellas junto con sus historias completas se pueden encontrar en: link con la colección de Arqueologías en el repositorio",
    position: { top: 150, left: 80 },
  },
  {
    id: "seca-2",
    datanid:395,
    title: {tnombre:"",tcolor:"FFFFFF"},
    titlemid:{stnombre:"Palabras del Comisionado </br> Carlos Martin Beristain",stcolor:"70F5E7"},
    description:"",
    position: { top: 780, left: 1950 },
   },
   {
    id: "seca-3",
    datanid:396,
    title: {tnombre:"",tcolor:"FFFFFF"},
    titlemid:{stnombre:"Palabras de Hugo Ramirez Arcos, Investigador y profesor de la Universidad del Rosario",stcolor:"70F5E7"},
    description:"",
    position: { top: 170, left: 3260 },
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
      <div class="map-sec-container elemento modal_cev" data-class="customize-modalex" data-nid="${sec.datanid}"">
        <div id="${sec.id}" class="map-sec" style="top: ${top}px; left: ${left}px">
          <p class="title" style="color: #${sec.title.tcolor}"> ${sec.title.tnombre}</p>
          <p class="desc">${sec.description}</p>
          <p class="subtitle" style="color: #${sec.titlemid.stcolor}">${sec.titlemid.stnombre}</p>
          
  
        </div>
      </div>
		`;
  });

  target.insertAdjacentHTML("beforeend", text);
}

// Bird
let bird = document.querySelector("#bird");

let mousePosX = 0,
  mousePosY = 0;

mapWrapper.addEventListener("mousemove", (e) => {
  mousePosX = e.clientX;
  mousePosY = e.clientY;
});

let delay = 30,
  delayedPosX = 0,
  delayedPosY = 0;

function delayMouseFollow() {
  requestAnimationFrame(delayMouseFollow);

  delayedPosX += (mousePosX - delayedPosX) / delay;
  delayedPosY += (mousePosY - delayedPosY) / delay;

  // Flip bird
  if (delayedPosX > mousePosX - 30) {
    bird.style.transform = "scaleX(-1)";
  } else {
    bird.style.transform = "scaleX(1)";
  }

  bird.style.top = delayedPosY - offset.top + "px";
  bird.style.left = delayedPosX - offset.left + "px";
}

let touchExcludes = ["BUTTON", "A"];

function touchHandler(event) {
  let touch = event.changedTouches[2];

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

// const isTouchDevice = () => {
//   return (
//     "ontouchstart" in window ||
//     navigator.maxTouchPoints > 0 ||
//     navigator.msMaxTouchPoints > 0
//   );
// };

// console.log("Its touch device:", isTouchDevice());

document.addEventListener("DOMContentLoaded", () => {
  fillMapWithSectionsarq(mapWrapper);
  fillMapWithSections(mapWrapper);
  addTouchEvents(mapWrapper);
});
//document.addEventListener("DOMContentLoaded", fillMapWithbutton);