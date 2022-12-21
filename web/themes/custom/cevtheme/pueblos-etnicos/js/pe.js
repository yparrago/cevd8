//EAO 09/11/1984 
const staticBg = "/themes/custom/cevtheme/pueblos-etnicos/img/bg_image_1.jpg";

function startBackgroundSlide() {
  jQuery("#backgrounds-containerPE").backstretch(
    [
      "/themes/custom/cevtheme/pueblos-etnicos/img/bg_image_1.jpg",
      "/themes/custom/cevtheme/pueblos-etnicos/img/bg_image_2.jpg",
      "/themes/custom/cevtheme/pueblos-etnicos/img/bg_image_3.jpg",
      "/themes/custom/cevtheme/pueblos-etnicos/img/bg_image_4.jpg",
      "/themes/custom/cevtheme/pueblos-etnicos/img/bg_image_5.jpg",
      "/themes/custom/cevtheme/pueblos-etnicos/img/bg_image_6.jpg",
      "/themes/custom/cevtheme/pueblos-etnicos/img/bg_image_7.jpg",
    ],
    {
      duration: 3000,
      fade: 750,
    }
  );
}

function startCircleSlide() {
  jQuery("#circle-carousel").backstretch(
    [
      "/themes/custom/cevtheme/pueblos-etnicos/img/Collage1.png",
      "/themes/custom/cevtheme/pueblos-etnicos/img/Collage2.png",
      "/themes/custom/cevtheme/pueblos-etnicos/img/Collage3.png",
      "/themes/custom/cevtheme/pueblos-etnicos/img/Collage4.png",
      "/themes/custom/cevtheme/pueblos-etnicos/img/Collage5.png",
    ],
    {
      duration: 3000,
      fade: 1000,
    }
  );
}

const sections = {
  home: {
    logo: "/themes/custom/cevtheme/pueblos-etnicos/img/logoPE.svg",
    description:
      "Para los pueblos étnicos, el conflicto armado y sus orígenes, no se explican únicamente a partir de la confrontación entre actores armados. Las memorias de las violencias históricas, la trata esclavista, la invasión y la Colonia; así como las violencias contra los cuerpos, el territorio y la naturaleza en el conflicto armado se narran como un continuum de violencias, que han puesto en riesgo el ser, el proyecto de futuro colectivo de los pueblos negros, afrocolombianos, raizales, palenqueros, indígenas, y rrom. Este capítulo es un relato amplio narrado desde las voces de los pueblos étnicos que relatan sus resistencias históricas, así como el dolor individual y colectivo de una violencia que ha sido continua y desproprorcionada.",
  },
  section1: {
    logo: "/themes/custom/cevtheme/pueblos-etnicos/img/logoPE-seccion1.svg",
    class: "section1",
    header_desc: "Quienes son los pueblos étnicos en Colombia",
    frame: '/themes/custom/cevtheme/pueblos-etnicos/img/Marco_seccion1.svg',
    description:
      "Colombia es una nación diversa que se ha forjado a partir de las contribuciones de los pueblos indígenas, negros, afrocolombianos, raizales, palenqueros y rrom. Sin embargo, sólo hasta 1991, después de 181 años de historia republicana, las luchas, resistencias y demandas de estos pueblos lograron que por primera vez se reconociera el carácter pluriétnico y multicultural de la nación colombiana. Existen en el país 68 lenguas nativas, habladas por cerca de 850.000 personas. Entre ellas, se encuentran 65 lenguas indígenas o indoamericanas; el creole hablado en San Andrés, Providencia y Santa Catalina, y el ri palenge hablado por el pueblo Palenquero; y la lengua romaní, hablada por el pueblo Rrom o gitano, presente en diferentes departamentos del país.",
    menu: [
      {
        text: "Antecedentes históricos de los pueblos étnicos",
        link: "/antecedentes-historicos-de-los-pueblos-etnicos",
        
      },
      {
        text: "Ubicación de los pueblos étnicos",
        modal_nid: 1438,
      },
      {
        text: "Pueblos indígenas",
        modal_nid: 1049,
      },
      {
        text: "Pueblo negro, afrocolombiano, raizal y palenquero",
        modal_nid: 1022,
      },
      {
        text: "Pueblo Rrom o gitano",
        modal_nid: 1733,
      },
    ],
  },
  section2: {
    logo: "/themes/custom/cevtheme/pueblos-etnicos/img/logoPE-seccion2.svg",
    class: "section2",
    header_desc: "Conflicto armado en los territorios étnicos",
    frame: '/themes/custom/cevtheme/pueblos-etnicos/img/Marco_seccion2.svg',
    description:
      `Para los pueblos étnicos la historia de las violencias es un continuum que tiene sus orígenes con la invasión española y la trata esclavista, hasta la actualidad. Medir la temporalidad y la espacialidad del conflicto en esos términos, requiere tener en cuenta siglos de historia, además de una delimitación significativa de los territorios afectados. En esta segunda parte se relatará la llegada del conflicto armado a los territorios étnicos en el periodo establecido por la Comisión para el Esclarecimiento de la Verdad con el fin de delimitar los hechos, las causas y las dinámicas del conflicto armado. Se dará cuenta, entonces, de lo ocurrido en los corredores que coinciden con territorios étnicos, entre 1958, año en el que se da la transición de la violencia bipartidista al conflicto armado entre grupos insurgentes y el Estado colombiano, y el presente.`,
    menu: [
      {
        text: "Corredores estratégicos del conflicto armado en los territorios étnicos",
        link: "/corredores-estrategicos",
      },
      {
        text: "Modalidades de daño y violencia a los pueblos étnicos",
        link: "/modalidades-de-dano-y-violencia-los-pueblos-etnicos",
      },
      {
        text: "Resistencia de los pueblos étnicos",
        link: "/resistencias-de-los-pueblos-etnicos",
      },
      {
        text: "Mujeres y territorios étnicos",
        link: "/mujeres-y-territorios-etnicos",
      },
    ],
  },
  section3: {
    logo: "/themes/custom/cevtheme/pueblos-etnicos/img/logoPE-seccion3.svg",
    class: "section3",
    header_desc: "Voces y Testimonios de los Pueblos Étnicos ",
    frame: '/themes/custom/cevtheme/pueblos-etnicos/img/Marco_seccion3.svg',
    description:
      "Los Pueblos Étnicos de Colombia tienen historias y relatos que fueron relegados en la construcción del Estado Nación y silenciados en medio de la guerra y la violencia. La sección de Voces y Testimonios, al tiempo que rescata del olvido una vida de dolor y resistencia, retrata el legado de otras memorias que, en medio del conflicto armado, los pueblos étnicos han construido para pervivir, fortaleciendo procesos de identidad, apostando por la paz y trabajando por la reconciliación.",
    menu: [
      {
        text: "Pueblos étnicos: Territorios y paz",
        modal_nid: 1730,
      },
      {
        text: "Voces desde los Territorios Étnicos",
        modal_nid: 1731,
      },
    ],
  },
  section4: {
    logo: "/themes/custom/cevtheme/pueblos-etnicos/img/logoPE-seccion4.svg",
    class: "section4",
    header_desc: "Metodología Étnica de la Comisión de la Verdad",
    frame: '/themes/custom/cevtheme/pueblos-etnicos/img/Marco_seccion4.svg',
    description:
      "La Metodología Étnica y contra el racismo, la discriminación racial y formas conexas de intolerancia, así como el protocolo de relacionamiento con pueblos étnicos, fueron los instrumentos que orientaron el trabajo de la Comisión de la Verdad. Estos instrumentos recogen diferentes salvaguardas y lineamientos para el desarrollo de cada uno de los objetivos de la Comisión y para la garantía efectiva de la participación, narrativas, voces y análisis de los pueblos étnicos durante su mandato. La Comisión para el Esclarecimiento de la Verdad, la Convivencia y la No Repetición es la primera en el mundo que consultó una metodología y protocolo de relacionamiento con los pueblos étnicos, lo que permitió una adecuación metodológica e institucional, la creación y puesta en marcha de la Dirección de Pueblos Étnicos y la participación real y efectiva de estos pueblos, que se refleja en la construcción del capítulo étnico ”Resistir no es Aguantar: Violencias y Daños contra los Pueblos Étnicos en Colombia”, parte integrante del Informe Final.",
    menu: [
      {
        text: "Metodología Étnica de la Comisión de la Verdad",
        modal_nid: 1656,
      },
    ],
  },
};

const containerPE = jQuery("#containerPE");
const headerLogo = jQuery("#containerPE-logo");
const headerDesc = jQuery(".containerPE-header-desc p");
const bodyLeftText = jQuery(".containerPE-body .scrolled-text-content");
const circleFrame = jQuery("#containerPE-circle-frame");
const menuList = jQuery(".containerPE-body .menuPE-list-items");

const fillInformation = (info) => {
  if (containerPE.hasClass(info.class)) return;
  
  containerPE.removeClass("section1 section2 section3 section4");
  containerPE.addClass(info.class);

  headerLogo.attr("src", info.logo);
  headerDesc.text(info.header_desc);
  headerDesc.addClass("p-2");
  bodyLeftText.html(info.description);
  circleFrame.attr("src", info.frame);

  let itemsHTML = "";

  info.menu.forEach((item) => {
    itemsHTML += item.modal_nid
      ? `<a href="javascript:void(0)" data-class="pe-modals" data-nid="${item.modal_nid}" class="menuPE-list-item modal_cev">${item.text}</a>`
      : `<a href="${item.link}" class="menuPE-list-item" ${item.target}>${item.text}</a>`;
  });

  
  menuList.html(itemsHTML);
  menuList.parent().hide();
  menuList.parent().show(200);
  jQuery('.menuPE-list-item').click(() => {
    if (!audioBg.muted) {
      soundControl.click()
    }
  })
  addModalsEvent()
};

jQuery("#menuPE-section1").click(() => fillInformation(sections.section1));
jQuery("#menuPE-section2").click(() => fillInformation(sections.section2));
jQuery("#menuPE-section3").click(() => fillInformation(sections.section3));
jQuery("#menuPE-section4").click(() => fillInformation(sections.section4));

// AUDIO
let canPlay = false;
let soundControl = document.querySelector("#sound-controlDS .sound-iconDS");
let audioBg = new Audio("/themes/custom/cevtheme/pueblos-etnicos/img/audio1.mp3");

soundControl.addEventListener("click", () => {
  canPlay = !canPlay;
  soundControl.classList.toggle("on");

  audioBg.muted = audioBg.muted ? false : true;
});

function playSound(sound) {
  if (!canPlay) return;

  sound.muted = false;
  sound.play();
}

function addModalsEvent() {
    jQuery("[data-modal-nid]").click(function (e) {
    e.preventDefault();
    const nid = jQuery(this).data("modal-nid");
    if (nid) {
        jQuery(`.modal_cev[data-nid=${nid}]`).modal("show");
      //audioBg.pause()
    };
  });
}

// START
window.onload = () => {
  startBackgroundSlide();
  startCircleSlide();

  setTimeout(
    () => {
      containerPE.css({ backgroundImage: "url('" + staticBg + "')" });
    },
    window.innerWidth < 768 ? 0 : 4000
  );

  jQuery("#how-to-use-modal").modal("show");

  jQuery("#how-to-use-modal .btn-close").click(() => {
    jQuery("#how-to-use-modal").modal("hide");
    soundControl.click();
    playSound(audioBg);
  });

  jQuery("#continerPE-circle-button").click(function() {
    if (!jQuery(this).hasClass('active')) {
        jQuery('.scrolled-text-container.floating').show(300);
        jQuery(this).addClass('active');
      return
    }

    jQuery('.scrolled-text-container.floating').hide(300);
    jQuery(this).removeClass('active');
  })
};

if (window.innerWidth > 1024) {
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
} 


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