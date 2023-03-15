var posdx= 1890-(screen.width/2);

// const position = { x: 0, y: 0 };
const position = { x: -posdx, y: -1090 }; // Position center, same in css
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
      endOnly: true, // Add bounce on when drag reach the corners
    }),
  ],
  inertia: true, // Disable if you want avoid fast drag with smooth effect
});

// Data for each section
const sections = [

  {
    id: "seca-1",
    title: {tnombre:"",tcolor:"FF9994"},
    titlemid:{stnombre:"Colombia fuera de Colombia",stcolor:"ED9300"},
    description:
      "Esta es la experiencia del exilio colombiano, narrado por las voces de las víctimas en el exterior.",
    position: { top: 1490, left: 1755 },
    image: { url: "/themes/custom/cevtheme/exilio/img/letrero2.svg", top: 1357, left: 1772},
    link:"",
  },
  {
    id: "seca-2",
    title: {tnombre:"RELATOS",tcolor:"FF9994"},
    titlemid:{stnombre:"del exilio",stcolor:"FFFFFF"},
    description:
      "Aquí encontrarás el universo de historias y voces del exilio colombiano. Aquí podrás navegar en todas las direcciones para descubrir los contenidos",
    position: { top: 680, left: 2700 },
    link:"",
   },
   {
    id: "seca-3",
    title: {tnombre:"VIVENCIAS",tcolor:"B599E0"},
    titlemid:{stnombre:"del exilio",stcolor:"FFFFFF"},
    description:
      "Explora los momentos, sentimientos, emociones y resistencias que hacen parte de la experiencia de la población colombiana, forzada a dejar el país a causa del conflicto armado interno.",
    position: { top: 2305, left: 2700 },
    link:"",
   },
   {
    id: "desrutas",
    title: {tnombre:"RUTAS",tcolor:"2178AD"},
    titlemid:{stnombre:"del exilio",stcolor:"FFFFFF"},
    description:
      "Estas son las rutas del exilio. Puedes consultar los recorridos de quienes se han ido de Colombia forzosamente por cuenta del conflicto armado interno a través de los años. ",
    position: { top: 2805, left: 1270 },
    link:"",
    datanid:"",
   },
   {
    id: "seca-5",
    title: {tnombre:"CAUSAS",tcolor:"59FFB2"},
    titlemid:{stnombre:"del exilio",stcolor:"FFFFFF"},
    description:
      "Las voces y rostros, de esa Colombia fuera de Colombia, cuentan quiénes eran, qué hacían y cómo el conflicto armado, la estigmatización y la desprotección les hizo huir lejos de su hogar, su tierra, su gente y su pasado para salvar su vida y buscar protección.",
    position: { top: 1990, left: 795 },
    image: { url: "/themes/custom/cevtheme/exilio/img/rutasmapa.svg", top: 3010, left: 900},
    link:"",
   },
   {
    id: "seca-6",
    title: {tnombre:"VOCES",tcolor:"EEDEA4"},
    titlemid:{stnombre:"del exilio",stcolor:"FFFFFF"},
    description:
      "Conoce las voces de aquellos que apoyaron la labor de la Comisión en el exterior y nos dieron su testimonio para esclarecer la verdad.",
    position: { top: 500, left:825 },
    
    link:"",
    
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
      <div class="map-sec-container">
        <div id="${sec.id}" class="map-sec" style="top: ${top}px; left: ${left}px">
          <p class="title" style="color: #${sec.title.tcolor}"> ${sec.title.tnombre}</p>
          <p class="subtitle" style="color: #${sec.titlemid.stcolor}">${sec.titlemid.stnombre}</p>
          <p class="desc">${sec.description}</p>
          <p class="linkword elemento modal_cev" data-nid="${sec.datanid}"">${sec.link}</p>
        </div>
        ${
          sec.image
            ? `<img class="map-sec-image" src="${sec.image.url}" style="top: ${sec.image.top}px; left: ${sec.image.left}px">`
            : ""
        }  
        </div>
      </div>
		`;
  });

  target.insertAdjacentHTML("beforeend", text);
}


// Data for each section
const sectionspeq = [
  {
    id: "sec-1",
    datanid:261,
    titlemid:"Desde las cenizas: Unión Patriótica",
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/videoicon.svg", top: 480, left: 2445 },
  },
  {
    id: "sec-2",
    datanid:260,
    titlemid:"Historias que retornan",
    position: { top: 470, left: 2890 },
    image: { url: "/themes/custom/cevtheme/exilio/img/videoicon.svg", top: 410, left: 2920 },
  },
  {
    id: "sec-3",
    datanid:265,
    titlemid:"Documental el silencio es el hijo del miedo",
    position: { top: 550, left: 3130 },
    image: { url: "/themes/custom/cevtheme/exilio/img/videoicon.svg", top: 490, left: 3165 },
  },
  {
    id: "sec-4",
    datanid:264,
    titlemid:"Pueblos milenarios",
    position: { top: 995, left: 3220 },
    image: { url: "/themes/custom/cevtheme/exilio/img/videoicon.svg", top: 935, left: 3250 },
  },
  {
    id: "sec-5",
    datanid:259,
    titlemid:"Canciones desde el exilio",
    position: { top: 780, left: 3230 },
    image: { url: "/themes/custom/cevtheme/exilio/img/musicaicon.svg", top: 705, left: 3260 },
  },
  {
    id: "sec-6",
    datanid:263,
    titlemid:"Una maleta colombiana",
    position: { top: 790, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/librosicon.svg", top: 715, left: 2438 },
  },
  {
    id: "sec-7",
    datanid:262,
    titlemid:"Transparentes Novela gráfica",
    position: { top: 1000, left: 2565 },
    image: { url: "/themes/custom/cevtheme/exilio/img/librosicon.svg", top: 925, left: 2593 },
  },
  
  {
    id: "sec-8",
    datanid:147,
    titlemid:"Reconstruirse",
    position: { top: 2191, left: 2180 },
    image: { url: "/themes/custom/cevtheme/exilio/img/recontruirseicon.svg", top: 2100, left: 2170 },
  },
  {
    id: "sec-9",
    datanid:148,
    titlemid:"¿Ciudadanía?",
    position: { top: 2458, left: 2035 },
    image: { url: "/themes/custom/cevtheme/exilio/img/identidadesicon.svg", top: 2365, left: 2025 },
  },
  {
    id: "sec-10",
    datanid:151,
    titlemid:"Re-existencias",
    position: { top: 2485, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/reexistenciaicon.svg", top: 2395, left: 2395 },
  },
  {
    id: "sec-11",
    datanid:141,
    titlemid:"Ruptura y Extrañamiento",
    position: { top: 2695, left: 2173 },
    image: { url: "/themes/custom/cevtheme/exilio/img/rupturaicon.svg", top: 2610, left: 2160 },
  },
  {
    id: "sec-12",
    datanid:140,
    titlemid:"Desprotección",
    position: { top: 2780, left: 2618 },
    image: { url: "/themes/custom/cevtheme/exilio/img/desproteccionicon.svg", top: 2685, left: 2605 },
  },
  {
    id: "sec-13",
    titlemid:"Estigmas",
    datanid:142,
    position: { top: 2710, left: 3162 },
    image: { url: "/themes/custom/cevtheme/exilio/img/estigmasicon.svg", top: 2620, left: 3150 },
  },
  {
    id: "sec-14",
    datanid:150,
    titlemid:"Segundas Generaciones",
    position: { top: 2535, left: 3392 },
    image: { url: "/themes/custom/cevtheme/exilio/img/segundasicon.svg", top: 2445, left: 3380 },
  },
  {
    id: "sec-15",
    datanid:146,
    titlemid:"Silencios",
    position: { top: 2393, left: 3592 },
    image: { url: "/themes/custom/cevtheme/exilio/img/silencioicon.svg", top: 2295, left: 3580 },
  },
  {
    id: "sec-16",
    datanid:144,
    titlemid:"Incertidumbre ",
    position: { top: 2245, left: 3162 },
    image: { url: "/themes/custom/cevtheme/exilio/img/incertidumbreicon.svg", top: 2150, left: 3150 },
  },
  {
    id: "sec-17",
    datanid:149,
    titlemid:"Volver ",
    position: { top: 2165, left: 3457 },
    image: { url: "/themes/custom/cevtheme/exilio/img/volvericon.svg", top: 2070, left: 3445 },
  },
  {
    id: "sec-18",
    datanid:145,
    titlemid:"Vinculos ",
    position: { top: 2075, left: 2942 },
    image: { url: "/themes/custom/cevtheme/exilio/img/vinculosicon.svg", top: 1980, left: 2930 },
  },
  {
    id: "sec-19",
    datanid:143,
    titlemid:"Étnico </br>y género",
    position: { top: 2138, left: 2533 },
    image: { url: "/themes/custom/cevtheme/exilio/img/serexiliadoicon.svg", top: 2050, left: 2520 },
  },
  {
    id: "videointro",
    datanid:496,
    titlemid:"Introducción",
    position: { top: 1662, left: 1843},
    image: { url: "/themes/custom/cevtheme/exilio/img/videoicon.svg", top: 1598, left: 1875 , rotatea:0},
  },
];

function fillMapWithSections2(target2) {
  let text1 ="";
  
  sectionspeq.forEach((sec) => {
    let { top, left } = sec.position;
    text1 += `
      <div class="map-sec-container elemento modal_cev" data-class="customize-modalex" data-nid="${sec.datanid}"">
        <div id="${sec.id}" class="map-sec" style="top: ${top}px; left: ${left}px">
          <p class="titlemid">${sec.titlemid}</p>
        </div>
        ${
          sec.image
            ? `<img class="map-sec-imageint" src="${sec.image.url}" style="top: ${sec.image.top}px; left: ${sec.image.left}px">`
            : ""
        }  

        </div>
      </div>
		`;
  });

  target2.insertAdjacentHTML("beforeend", text1);
}

const sectionscausas = [
  {
    id: "sec-1",
    datanid:255,
    titlemid:"Por buscar justicia",
    position: { top: 1957, left: 650 },
    image: { url: "/themes/custom/cevtheme/exilio/img/causas1.svg", top: 1900, left: 680 },
  },
  {
    id: "sec-2",
    datanid:254,
    titlemid:"La persecución a los firmantes de la paz",
    position: { top: 1957, left: 1100 },
    image: { url: "/themes/custom/cevtheme/exilio/img/causas4.svg", top: 1900, left: 1130 },
  },
  {
    id: "sec-3",
    datanid:251,
    titlemid:"Secuestro y extorsión",
    position: { top: 2170, left: 1200 },
    image: { url: "/themes/custom/cevtheme/exilio/img/causas2.svg", top: 2105, left: 1230},
  },
  {
    id: "sec-4",
    datanid:252,
    titlemid:"Oposición",
    position: { top: 2170, left: 550 },
    image: { url: "/themes/custom/cevtheme/exilio/img/causas3.svg", top: 2105, left: 580 },
  },
  {
    id: "sec-5",
    datanid:253,
    titlemid:"La desprotección del Estado",
    position: { top: 2350, left: 620 },
    image: { url: "/themes/custom/cevtheme/exilio/img/causas5.svg", top: 2285, left: 650 },
  },
  {
    id: "sec-6",
    datanid:249,
    titlemid:"La guerra a gran escala: campo y ciudad",
    position: { top: 2350, left: 1140 },
    image: { url: "/themes/custom/cevtheme/exilio/img/causas6.svg", top: 2285, left: 1172},
  },
  {
    id: "sec-7",
    datanid:250,
    titlemid:"Vidas obligadas a la guerra: reclutamiento forzado",
    position: { top: 2450, left: 880 },
    image: { url: "/themes/custom/cevtheme/exilio/img/causas7.svg", top: 2390, left: 910},
  },
  {
    id: "sec-8",
    datanid:256,
    titlemid:"Epilogo",
    position: { top: 2320, left: 390 },
    image: { url: "/themes/custom/cevtheme/exilio/img/causas8.svg", top: 2255, left: 420},
  },
  {
    id: "sec-9",
    datanid:248,
    titlemid:"Introducción",
    position: { top: 2300, left: 880 },
    image: { url: "/themes/custom/cevtheme/exilio/img/videoicon.svg", top: 2240, left: 914 },
  },
  {
    id: "Despliegueterritorial",
    datanid:222,
     titlemid:"Despliegue </br> territorial",
    position: { top: 320, left: 915},
    image: { url: "/themes/custom/cevtheme/exilio/img/despliegue.svg", top: 240, left: 945 },
   },
];

function fillMapWithSectionscausas(target2) {
  let text1 ="";
  
  sectionscausas.forEach((sec) => {
    let { top, left } = sec.position;
    text1 += `
    datanid:64,
      <div class="map-sec-container elemento modal_cev" data-class="customize-modalex" data-nid="${sec.datanid}"">
        <div id="${sec.id}" class="map-sec" style="top: ${top}px; left: ${left}px">
          <p class="titlemid">${sec.titlemid}</p>
        </div>
        ${
          sec.image
            ? `<img class="map-sec-imageint" src="${sec.image.url}" style="top: ${sec.image.top}px; left: ${sec.image.left}px">`
            : ""
        }  

        </div>
      </div>
		`;
  });

  target2.insertAdjacentHTML("beforeend", text1);
}

const navigatesec = [
{
  id: "voces",
  titlemid:"VOCES",
  position: { top: 1250, left: 1720},
  image: { url: "/themes/custom/cevtheme/exilio/img/arrows.svg", top: 1245, left: 1695 , rotatea:135},
},
{
  id: "relatos",
  titlemid:"RELATOS",
  position: { top: 1250, left: 1990},
  image: { url: "/themes/custom/cevtheme/exilio/img/arrows.svg", top: 1245, left: 2087 , rotatea:230},
},
{
  id: "causas",
  titlemid:"CAUSAS",
  position: { top: 1650, left: 1690},
  image: { url: "/themes/custom/cevtheme/exilio/img/arrows.svg", top: 1672, left: 1670 , rotatea:55},
},
{
  id: "vivencias",
  titlemid:"VIVENCIAS",
  position: { top: 1650, left: 2010},
  image: { url: "/themes/custom/cevtheme/exilio/img/arrows.svg", top: 1672, left: 2119 , rotatea:310},
},
{
  id: "rutas",
  titlemid:"RUTAS",
  position: { top: 1757, left: 1870},
  image: { url: "/themes/custom/cevtheme/exilio/img/arrows.svg", top: 1792, left: 1895 , rotatea:0},
},
];

function fillMapWithnavigation(target3) {
  let text3 ="";
  
  navigatesec.forEach((sec) => {
    let { top, left } = sec.position;
    text3 += `
      <div class="map-sec-container">
        <div id="${sec.id}" class="map-secpeq" style="top: ${top}px; left: ${left}px">
          <p onclick="nav${sec.id}()" class="titlenav">${sec.titlemid}</p>
          
        </div>
        ${
          sec.image
            ? `<img onclick="nav${sec.id}()" class="map-sec-imagearrow" src="${sec.image.url}" style="top: ${sec.image.top}px; left: ${sec.image.left}px;  -ms-transform: rotate(${sec.image.rotatea}); transform: rotate(${sec.image.rotatea}deg);">`
            : ""
        }  
        </div>
      </div>
		`;
    
  });

  target3.insertAdjacentHTML("beforeend", text3);
}

function navvoces() {
  var posdxvoces=(screen.width/2)-960;
  document.getElementsByClassName("map-wrapper")[0].style.transform = "translate("+posdxvoces+"px,-300px)";
  position.x =posdxvoces;
  position.y = -300;

}
function navrelatos() {
  var posdxrelato=(screen.width/2)-2840;
  document.getElementsByClassName("map-wrapper")[0].style.transform = "translate("+posdxrelato+"px,-390px)";
  position.x =posdxrelato;
  position.y = -390;
}
function navcausas() {
  var posdxcausas=(screen.width/2)-935;
  document.getElementsByClassName("map-wrapper")[0].style.transform = "translate("+posdxcausas+"px,-1750px)";
  position.x =posdxcausas;
  position.y = -1750;
}
function navvivencias() {
  var posdxvivencias=(screen.width/2)-2840;
  document.getElementsByClassName("map-wrapper")[0].style.transform = "translate("+posdxvivencias+"px,-2000px)";
  position.x =posdxvivencias;
  position.y = -2000;
}
function navrutas() {
  var posdxrutas=(screen.width/2)-1410;
  document.getElementsByClassName("map-wrapper")[0].style.transform = "translate("+posdxrutas+"px,-2670px)";
  position.x =posdxrutas;
  position.y = -2670;
}
function navcentro() {
  var posdxcentro=(screen.width/2)-1900;
  document.getElementsByClassName("map-wrapper")[0].style.transform = "translate("+posdxcentro+"px,-1110px)";
  position.x =posdxcentro;
  position.y = -1110;
}
/*function navmult() {
  document.getElementsByClassName("map-wrapper")[0].style.transform = "translate(-2000px,-310px)";
  position.x =-2000;
  position.y = -310;
}*/

const sectionsvoc = [
  {
    id: "panama",
    datanid:241,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v1.svg", top: 980, left: 652 },
  },
  {
    id: "costarica",
    datanid:230,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v2.svg", top: 1000, left: 520 },
  },
  {
    id: "mexico",
    datanid:239,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v24.svg", top: 870, left: 400 },
  },
  {
    id: "venezuela",
    datanid:246,
    position: { top: 120, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v4.svg", top: 343, left: 556 },
  },
  {
    id: "colombia",
    datanid:229,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v5.svg", top: 330, left: 400 },
  },
  {
    id: "ecuador",
    datanid:232,
    position: { top: 140, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v3.svg", top: 451, left:353 },
  },
  {
    id: "brasil",
    datanid:226,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v23.svg", top: 530, left: 150 },
  },
  {
    id: "argentina",
    datanid:224,
    position: { top: 120, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v21.svg", top: 685, left: 155 },
  },
  {
    id: "chile",
    datanid:228,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v20.svg", top: 640, left: 77 },
  },
  {
    id: "uruguay",
    datanid:245,
    position: { top: 140, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v22.svg", top: 729, left:239 },
  },
  {
    id: "internodales",
    datanid:509,
    position: { top: 120, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v17.svg", top: 680, left: 1590 },
  },
  {
    id: "usa",
    datanid:233,
    position: { top: 140, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v19.svg", top: 830, left:1300 },
  },
  {
    id: "canada",
    datanid:227,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v18.svg", top: 805, left: 1393 },
  },
  {
    id: "reinounido",
    datanid:242,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v6.svg", top: 400, left: 1180 },
  },
  {
    id: "noruega",
    datanid:240,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v7.svg", top: 225, left: 1322 },
  },
  {
    id: "suecia",
    datanid:243,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v8.svg", top: 260, left: 1445 },
  },
  {
    id: "dinamarca",
    datanid:231,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v9.svg", top: 430, left: 1424 },
  },
  {
    id: "francia",
    datanid:235,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v12.svg", top: 517, left: 1235 },
  },
  {
    id: "grecia",
    datanid:236,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v14.svg", top: 632, left: 1520 },
  },
  {
    id: "italia",
    datanid:238,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v15.svg", top: 565, left: 1415 },
  },
  {
    id: "españa",
    datanid:234,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v16.svg", top: 600, left: 1235 },
  },
  {
    id: "belgica",
    datanid:225,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v11.svg", top: 436, left: 1356 },
  },
  {
    id: "Alemania",
    datanid:223,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v37.svg", top: 470, left: 1422 },
  },
  {
    id: "suiza",
    datanid:244,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v13.svg", top: 553, left: 1415 },
  },

];

function fillMapWithSectionsvoces(target4) {
  let text4 ="";
  
  sectionsvoc.forEach((sec) => {
    let { top, left } = sec.position;
    text4 += `
    <div class="map-sec-container elemento modal_cev" data-class="customize-modalex" data-nid="${sec.datanid}"">
        <div id="${sec.id}" class="map-secpeq" style="top: ${top}px; left: ${left}px">
        </div>
        ${
          sec.image
            ? `<img class="map-sec-imagevoc" src="${sec.image.url}" style="top: ${sec.image.top}px; left: ${sec.image.left}px">`
            : ""
        }  
        </div>
      
		`;
  });
  let divvoces="<div id=vocesmap>"+text4+"</div>";
  target4.insertAdjacentHTML("beforeend", divvoces);
}
const sectionsapoy = [
  {
    id: "panama",
    datanid:332,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top:1028, left: 692 },
  },
  {
    id: "costarica",
    datanid:315,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 1007, left: 665 },
  },
  {
    id: "mexico",
    datanid:330,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 935, left: 560 },
  },
  {
    id: "venezuela",
    datanid:336,
    position: { top: 120, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 383, left: 626 },
  },
  /*{
    id: "colombia",
    datanid:313,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 430, left: 560 },
  },*/
  {
    id: "ecuador",
    datanid:317,
    position: { top: 140, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 470, left:503 },
  },
  {
    id: "brasil",
    datanid:314,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 640, left: 290 },
  },
  {
    id: "argentinauruguay",
    datanid:305,
    position: { top: 120, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 732, left: 238 },
  },
  {
    id: "chile",
    datanid:312,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 740, left: 170 },
  },
  {
    id: "conosur",
    datanid:306,
    position: { top: 140, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 645, left:208 },
  },
  {
    id: "internodales1",
    datanid:514,
    position: { top: 110, left: 2400 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 670, left: 1725 },
  },
  {
    id: "internodales2",
    datanid:516,
    position: { top: 120, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 702, left: 1738 },
  },
  {
    id: "internodales3",
    datanid:513,
    position: { top: 120, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 679, left: 1780 },
  },
  {
    id: "internodales4",
    datanid:517,
    position: { top: 120, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 715, left: 1775 },
  },
  {
    id: "usa1",
    datanid:318,
    position: { top: 140, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 975, left:1458 },
  },
  {
    id: "usa2",
    datanid:319,
    position: { top: 140, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 965, left:1605 },
  },
  {
    id: "canada1",
    datanid:310,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 900, left: 1433 },
  },
  {
    id: "canada2",
    datanid:311,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 870, left: 1493 },
  },
  {
    id: "canada3",
    datanid:309,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 915, left: 1563 },
  },
  {
    id: "canada4",
    datanid:308,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 910, left: 1623 },
  },
  {
    id: "reinounido",
    datanid:333,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 450, left: 1330 },
  },
  {
    id: "noruega",
    datanid:331,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 325, left: 1450 },
  },
  {
    id: "suecia1",
    datanid:334,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 330, left: 1500 },
  },
  {
    id: "suecia2",
    datanid:1100,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 380, left: 1480 },
  },
  {
    id: "dinamarca",
    datanid:316,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 435, left: 1433 },
  },
  {
    id: "francia1",
    datanid:327,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 537, left: 1380 },
  },
  {
    id: "francia2",
    datanid:328,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 590, left: 1365 },
  },
  {
    id: "italia",
    datanid:329,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 596, left: 1465 },
  },
  {
    id: "españaEusk",
    datanid:324,
    position: { top: 540, left: 2480 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 590, left: 1328 },
  },
  {
    id: "españaMad",
    datanid:323,
    position: { top: 540, left: 2480 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 620, left: 1315 },
  },
  {
    id: "españaAnda",
    datanid:322,
    position: { top: 540, left: 2480 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 650, left: 1295 },
  },
  {
    id: "españaCata",
    datanid:321,
    position: { top: 540, left: 2480 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 620, left: 1360 },
  },
  {
    id: "españaVal",
    datanid:325,
    position: { top: 540, left: 2480 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 640, left: 1340 },
  },
  {
    id: "belgica",
    datanid:307,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 500, left: 1392 },
  },
  {
    id: "suiza",
    datanid:335,
    position: { top: 540, left: 2410 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 554, left: 1425 },
  },
  {
    id: "secretariaeuropa",
    datanid:303,
    position: { top: 540, left: 2480 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 630, left: 1404 },
  },
  {
    id: "Alemania",
    datanid:304,
    position: { top: 540, left: 2480 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v25.svg", top: 500, left: 1464 },
  },
];

function fillMapWithSectionsapoyo(target5) {
  let text5 ="";
  
  sectionsapoy.forEach((sec) => {
    let { top, left } = sec.position;
    text5 += `
    <div class="map-sec-container elemento modal_cev" data-class="customize-modalex" data-nid="${sec.datanid}"">
        <div id="${sec.id}" class="map-secpeq" style="top: ${top}px; left: ${left}px"> </div>
        ${
          sec.image
            ? `<img class="map-sec-imageapoy" src="${sec.image.url}" style="top: ${sec.image.top}px; left: ${sec.image.left}px">`
            : ""
        }  
        </div>
      
		`;
  });
  let divapoyo="<div id=vocesapoyo class="+"apoyo"+">"+text5+"</div>";
  target5.insertAdjacentHTML("beforeend", divapoyo);
}

const mapref = [
  {
    id: "basemp",
    titlemid:"",
    position: { top: 700, left: 750 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v35.svg", top: 700, left: 920 },
    
  },
  {
    id: "nort",
    titlemid:"Norteamérica",
    position: { top: 685, left: 730 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v30.svg", top: 713, left: 854 },
   },
   {
    id: "centr",
    titlemid:"Centroamérica",
    position: { top: 775, left: 700 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v31.svg", top: 771, left: 902 },
   },
   {
    id: "andi",
    titlemid:"Andina",
    position: { top: 805, left: 760 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v32.svg", top: 793, left: 934},
   },
   {
    id: "europ",
    titlemid:"Europa",
    position: { top: 700, left: 870 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v33.svg", top: 725, left: 997 },
   },
   {
    id: "conosur",
     titlemid:"Cono Sur",
    position: { top: 835, left: 750 },
    image: { url: "/themes/custom/cevtheme/exilio/img/v_v34.svg", top: 801, left: 940 },
   },


];

function fillMapWithmapref(target) {
  let text = "";
 mapref.forEach((sec) => {
  let { top, left } = sec.position;
    text += `
    <div class="map-sec-container">
      <div id="${sec.id}"  class="map-sec" style="top: ${top}px; left: ${left}px">
      <p class="mapreference">${sec.titlemid}</p>
      </div>
      ${
        sec.image
          ? `<img class="map-sec-imagemapref" src="${sec.image.url}" style="top: ${sec.image.top}px; left: ${sec.image.left}px">`
          : ""
      }  
      </div>
      </div>
		`;
  });
  let divmapref="<div id=mapref>"+text+"</div>";
  target.insertAdjacentHTML("beforeend", divmapref);
}

function togvoces() {
  {
 var apoyo= document.getElementById('vocesapoyo');
 apoyo.style.display = 'block';}
 {
 var apoyo= document.getElementById('vocesmap');
 apoyo.style['pointer-events']= 'none';
 apoyo.style['opacity']= '0.6';}
 {
 var apoyo= document.getElementById('togvoces');
 apoyo.style.display = 'none';}
 {
 var apoyo= document.getElementById('togapoyo');
 apoyo.style.display = 'block';}
}
function togapoyo() {
  {
 var apoyo= document.getElementById('vocesapoyo');
 apoyo.style.display = 'none';}
 {
 var apoyo= document.getElementById('vocesmap');
 apoyo.style['pointer-events']= 'auto';
 apoyo.style['opacity']= '1';
}
 
 {
 var apoyo= document.getElementById('togvoces');
 apoyo.style.display = 'block';}
 {
 var apoyo= document.getElementById('togapoyo');
 apoyo.style.display = 'none';}
}
//var posdx= 1890-(screen.width/2);

document.addEventListener("click", buttonapear);
document.addEventListener("touchend", buttonapear);
document.addEventListener("touchstart", buttonapear);
function buttonapear(){
if
( position.x > (-posdx) && position.y > -550)
{
  {
    var botonapear= document.getElementById('vocesapoyobut');
    botonapear.style.display = 'block';}
} 
else {
  {
  var botonapear1= document.getElementById('vocesapoyobut');
  botonapear1.style.display = 'none';}
}
};




let mousePosX = 0,
  mousePosY = 0;

mapWrapper.addEventListener("mousemove", (e) => {
  mousePosX = e.clientX;
  mousePosY = e.clientY;
});

let loaderWrapper = document.querySelector('.loaderex');

window.addEventListener('beforeunload', function() {
  loaderWrapper.style.display = "";
});
window.addEventListener('load', function(){
  loaderWrapper.style.display= 'none';
});


let touchExcludes = ["BUTTON", "A"];

function touchHandler(event) {
  let touch = event.changedTouches[4];

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
  fillMapWithSections(mapWrapper);
  fillMapWithSections2(mapWrapper);
  fillMapWithSectionscausas(mapWrapper);
  fillMapWithSectionsvoces(mapWrapper);
  fillMapWithSectionsapoyo(mapWrapper);
  fillMapWithnavigation(mapWrapper);
 // fillMapWithbutton(mapWrapper);
  fillMapWithmapref(mapWrapper);
  addTouchEvents(mapWrapper);
});
//document.addEventListener("DOMContentLoaded", fillMapWithbutton);


