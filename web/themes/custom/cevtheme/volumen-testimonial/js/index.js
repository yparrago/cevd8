/**
 * Render section with links or menu items
 */
//EAO 09/11/1984 
let openedDropdown = undefined;

jQuery(document).click((event) => {
  if (openedDropdown && jQuery(event.target).parents(".menu-items").length == 0) {
    if (!openedDropdown.hasClass("active")) return;

    openedDropdown.toggleClass("active");

    if (!jQuery(event.target).hasClass("dot-link")) {
      openedDropdown = undefined;
      setMouseDist();
    }

    // Hide map
    if (!jQuery(".menu-content.active").length) {
      jQuery("#dots-map img").attr("src", "/themes/custom/cevtheme/volumen-testimonial/assets/map-caribe.svg");
    }
  }
});

const dotsScreens = {
  home: {
    breadcrumb: false,
    description:
      "El Volumen Testimonial reúne voces de hombres y mujeres que vivieron y sobrevivieron a la guerra. Este capítulo puso el oído en las reverberaciones de la violencia en la vida cotidiana de las personas y reflexiona en torno a las prácticas que individuos y colectivos han empleado para construir paz en pequeña escala.",
    items: [
      {
        text: "Relatos del porvenir",
        page: "relatosDelPorvenir",
        color: "#71998F",
        position: {
          column: 26,
          row: 4,
          sm: { column: 6, row: 6 },
          md: { column: 6, row: 15 },
        },
      },
      {
        text: "Territorios de la Escucha",
        page: "territoriosDeLaEscucha",
        color: "#9A8F72",
        position: {
          column: 20,
          row: 8,
          sm: { column: 4, row: 10 },
          md: { column: 16, row: 7 },
        },
      },
      {
        text: "Itinerarios de Sentidos",
        page: "itinerariosDeSentidos",
        color: "#697EC7",
        position: {
          column: 24,
          row: 10,
          sm: { column: 8, row: 9 },
          md: { column: 14, row: 12 },
        },
      },
    ],
  },
  relatosDelPorvenir: {
    customGrid: {
      sm: { cols: 12, rows: 40 },
    },
    dotContainerClass: "green-dots",
    //subtitle: "Lado A. Invitación a la escucha profunda de cómo comunidades concretas imaginan el por-venir.",
    description:
      "Un recorrido por comunidades que cuentan con recursos sociales y culturales para imaginar proyectos de futuro. Son historias del Libro del Porvenir del Volumen Testimonial y muestran cómo las personas construyen identidad y comunidad tras el paso de la guerra.",
    breadcrumb: {
      side: "Lado A",
      title: "Relatos del porvenir",
    },
    withMap: true,
    items: [
      {
        position: {
          column: 6,
          row: 3,
          sm: { column: 3, row: 3 },
          md: { column: 2, row: 3 },
          xlg: { column: 3, row: 4 },
        },
        menu: {
          title: {
            text: "Susurros de La Sierra",
            // modal: "#basic-modal",
            puntero: "cursor-dot",
            dataNid:269,
            clase:'relatos-modal',
          },
          items: [
            {
              text: "El paso de la lluvia",
              modal: "#modal-el-paso-de-la-lluvia",
              dataNid:291,
              clase:'relatos-modal'
            },
            {
              text: "La Sierra y su música",
              dataNid:292,
              clase:'relatos-modal'
            },
            {
              text: "La hora de mambear",
              dataNid:293,
              clase:'relatos-modal'
            },
            {
              text: "En torno al fuego",
              dataNid:294,
              clase:'relatos-modal'
            },
          ],
        },
        map: "/themes/custom/cevtheme/volumen-testimonial/assets/map-rumores-del-monte.svg",
      },
      {
        position: {
          column: 15,
          row: 2,
          sm: { column: 7, row: 10 },
          md: { column: 8, row: 8 },
          xlg: { column: 10, row: 10 },
        },
        menu: {
          title: {
            text: "El retornar",
            // modal: "#basic-modal",
            puntero: "cursor-dot",
            dataNid:270,
            clase:'relatos-modal'
          },
          items: [
            {
              text: "Retrato de la montaña",
              url: "#",
              dataNid:295,
              clase:'relatos-modal'
            },
            {
              text: "Camino de tierra",
              url: "#",
              dataNid:296,
              clase:'relatos-modal'
            },
            {
              text: "Trabajo de campo",
              url: "#",
              dataNid:297,
              clase:'relatos-modal'
            },
            {
              text: "Trinos de la serranía",
              url: "#",
              dataNid:298,
              clase:'relatos-modal'
            },
          ],
        },
        map: "/themes/custom/cevtheme/volumen-testimonial/assets/map-el-retornar.svg",
      },
      {
        position: {
          column: 19,
          row: 7,
          sm: { column: 6, row: 17 },
          md: { column: 14, row: 2 },
          xlg: { column: 18, row: 3 },
        },
        menu: {
          title: {
            text: "El mangle que camina",
            // modal: "#basic-modal",
            puntero: "cursor-dot",
            dataNid:267,
            clase:'relatos-modal',
          },
          items: [
            {
              text: "Canales del manglar",
              dataNid:282,
              clase:'relatos-modal'
            },
            {
              text: "La siembra del mangle",
              dataNid:283,
              clase:'relatos-modal'
            },
            {
              text: "La vida del pueblo",
              dataNid:284,
              clase:'relatos-modal'
            },
            {
              text: "Rumor del viaducto",
              dataNid:285,
              clase:'relatos-modal'
            },
            {
              text: "Silbar de aves",
              dataNid:286,
              clase:'relatos-modal'
            },
          ],
        },
        map: "/themes/custom/cevtheme/volumen-testimonial/assets/map-el-mangle.svg",
      },
      {
        position: {
          column: 26,
          row: 3,
          sm: { column: 8, row: 25 },
          md: { column: 12, row: 16 },
          xlg: { column: 23, row: 14 },
        },
        menu: {
          title: {
            text: "Un acueducto en el desierto",
            // modal: "#basic-modal",
            puntero: "cursor-dot",
            dataNid:268,
            clase:'relatos-modal'
          },
          items: [
            {
              text: "Cantos del amanecer",
              dataNid:287,
              clase:'relatos-modal'
            },
            {
              text: "El sonar del pastoreo",
              dataNid:288,
              clase:'relatos-modal'
            },
            {
              text: "Frutos del desierto",
              dataNid:289,
              clase:'relatos-modal'
            },
            {
              text: "Plástico en el desierto",
              dataNid:290,
              clase:'relatos-modal'
            },
          ],
        },
        map: "/themes/custom/cevtheme/volumen-testimonial/assets/map-un-acueducto.svg",
      },
      {
        position: {
          column: 37,
          row: 8,
          sm: { column: 10, row: 32 },
          md: { column: 20, row: 11 },
          xlg: { column: 34, row: 11 },
        },
        menu: {
          title: {
            text: "De pájaros y otros sonidos",
            // modal: "#basic-modal",
            puntero: "cursor-dot",
            dataNid:271,
            clase:'relatos-modal'
          },
          items: [
            {
              text: "Natural porvenir",
              dataNid:299,
              clase:'relatos-modal'
            },
            {
              text: "Ser ave",
              dataNid:300,
              clase:'relatos-modal'
            },
            {
              text: "El cotejo",
              dataNid:301,
              clase:'relatos-modal'
            },
            {
              text: "De gallos y otros",
              dataNid:302,
              clase:'relatos-modal'
            },
          ],
        },
        map: "/themes/custom/cevtheme/volumen-testimonial/assets/map-pajaros.svg",
      },
    ],
  },
  territoriosDeLaEscucha: {
    dotContainerClass: "gold-dots",
    //subtitle: "Lado A. Invitación a la escucha profunda de cómo comunidades concretas imaginan el por-venir.",
    description:
      "Este fue un proceso de escucha itinerante en el cual se escucharon las experiencias de violencia en perspectiva de futuro. Estas narraciones muestran las iniciativas de paz a pequeña escala que ponen en marcha las comunidades para habitar un mundo herido y remendar lo social.",
    breadcrumb: {
      side: "Lado A",
      title: "Territorios de la Escucha",
    },
    items: [
      {
        position: {
          column: 10,
          row: 4,
          sm: { column: 7, row: 3 },
          md: { column: 4, row: 6 },
        },
        menu: {
          title: "Lecturas Rituales",
          items: [
            {
              text: "La preparación y el viaje",
              url: "#",
              dataNid:272,
              clase:'territorio-modal'
              // modal: "#basic-modal",
            },
            {
              text: "La disposición para la escucha",
              url: "#",
              dataNid:273,
              clase:'territorio-modal'
            },
            {
              text: "El escuchar y la reflexión",
              url: "#",
              dataNid:274,
              clase:'territorio-modal'
            },
          ],
        },
      },
      {
        position: {
          column: 22,
          row: 8,
          sm: { column: 3, row: 8 },
          md: { column: 12, row: 12 },
        },
        menu: {
          title: "Lecturas sonorizadas",
          items: [
            {
              text: "El Libro de las anticipaciones",
              modal: "#modal-el-Libro-de-las-anticipaciones",
              dataNid:275,
              clase:'territorio-modal'
            },
            {
              text: "El Libro de las devastaciones y las formas de vida",
              dataNid:276,
              clase:'territorio-modal'
            },
            {
              text: "El Libro del porvenir",
              dataNid:277,
              clase:'territorio-modal'
            },
          ],
        },
      },
    ],
  },
  itinerariosDeSentidos: {
    dotContainerClass: "blue-dots",
    //subtitle: "Lado B. Descubre cómo lo hicimos con nuestro documental sonoro y micro piezas audiovisuales.",
    description:
      "Este es un método que se compone de tres momentos: uno narrativo en que se conversa con el testimoniante, un segundo momento donde se camina conversando y reconociendo el territorio, y un tercer momento sensorial-sonoro donde se graban sonidos del territorio.",
    breadcrumb: {
      side: "Lado B",
      title: "Itinerarios de Sentidos",
    },
    items: [
      {
        position: {
          column: 10,
          row: 4,
          sm: { column: 3, row: 3 },
          md: { column: 7, row: 5 },
        },
        menu: {
          title: "Documental Sonoro",
          items: [
            {
              text: "Itinerarios de Sentido",
              modal: "#modal-itinerarios-de-sentido",
              dataNid:278,
              clase:'itinerarios-modal'
            },
          ],
        },
      },
      {
        position: {
          column: 15,
          row: 11,
          sm: { column: 2, row: 8 },
          md: { column: 6, row: 10 },
        },
        menu: {
          title: "Documental Audiovisual",
          items: [
            {
              text: "Volumen Testimonial",
              url: "#",
              dataNid:279,
              clase:'itinerarios-modal'
            },
          ],
        },
      },
      {
        position: {
          column: 24,
          row: 6,
          sm: { column: 8, row: 7 },
          md: { column: 15, row: 8 },
        },
        menu: {
          title: "Documental Audiovisual",
          items: [
            {
              text: "El método",
              url: "#",
              dataNid:280,
              clase:'itinerarios-modal'
            },
          ],
        },
      },
      {
        position: {
          column: 32,
          row: 10,
          sm: { column: 9, row: 11 },
          md: { column: 16, row: 16 },
        },
        menu: {
          title: "Documental Audiovisual",
          items: [
            {
              text: "Lectura ritual",
              url: "#",
              dataNid:281,
              clase:'itinerarios-modal'
            },
          ],
        },
      },
    ],
  },
};

function screenLinksListener(section) {
  let pageSection =
    (typeof section === "string" && section) || jQuery(this).data("page-sec");

  if (
    pageSection &&
    dotsScreens[pageSection] &&
    pageSection != localStorage.getItem("currentSection")
  ) {
    const section = dotsScreens[pageSection];
    setMouseDist(0);
    jQuery(".dots .dot").not(".dropdown, .dropdown *").remove();
    jQuery(".dots .menu-content").remove();
    setTimeout(() => {
      initDotsGrid(section.customGrid);
      jQuery(".rt-dots-container .dots-container")
        .removeClass("green-dots gold-dots blue-dots")
        .addClass(section.dotContainerClass || "");
      appendSections(section.items);
      localStorage.setItem("currentSection", pageSection);
      // setMouseDist();

      setBreadcrumb(section.breadcrumb);
      section.description &&
        setDescription({
          description: section.description,
          title: section.breadcrumb.title,
          subtitle: section.subtitle,
        });

      section.withMap ? jQuery("#dots-map").show() : jQuery("#dots-map").hide();
      toogleBgMap();
      addHoverEvent();
    }, 0);
  }
}

jQuery(window).on("load", () => {
  localStorage.setItem("currentSection", "home");

  setTimeout(() => {
    jQuery("*[data-page-sec]").click(screenLinksListener);
  }, 0);

  if (isSection("home")) {
    animateDots();
  }
});

function toogleBgMap() {
  isSection("home")
    ? jQuery(".rt-dots-container").addClass("show-bg")
    : jQuery(".rt-dots-container").removeClass("show-bg");
}

function isSection(section) {
  return localStorage.getItem("currentSection") === section;
}

function bounce(element, times, distance, duration, delay) {
  for (var i = 0; i < times; i++) {
    element
      .delay(delay)
      .animate({ marginTop: `-=${distance}px`, marginLeft: `-=20px` }, duration)
      .animate(
        { marginTop: `+=${distance * 1.3}px`, marginLeft: `+=20px` },
        duration
      )
      .animate({ marginTop: 0 }, duration);
  }
}

const animateDots = () => {
  jQuery(".dots > .dot:not(.dropdown)").each((i, element) => {
    const column = jQuery(element).data("column");
    if (jQuery(element).data("column") !== 0) {
      let distance = 1 | ((column / 42) * 100);
      bounce(jQuery(element), 1, distance, 400, 20 * column);
    }
  });
};

const setBreadcrumb = (breadcrumb) => {
  const bc = jQuery("#dots-breadcrumb");

  if (breadcrumb == false) {
    bc.css({ display: "none" });
    return;
  }

  bc.find(".dots-breadcumb-side").text(breadcrumb.side);
  bc.find(".dots-breadcumb-title").text(breadcrumb.title);

  bc.css({ display: "flex" });
};

const setDescription = ({description, title, subtitle}) => {
  jQuery("#rt-dots-description").text(description).prepend(`
  <h2 class="d-block fw-bold mb-0 fs-16">${title || ""}</h2>
  <h3 class="d-block fw-bold mb-0 fs-14 pt-1">${subtitle || ""}</h3>
  `
  );
};

jQuery(window).on("load", () => {
  appendSections(dotsScreens.home.items);
  jQuery("#use-earphones-modal").modal("show");

  addHoverEvent();
  jQuery(document).on("touchstart", () => {
    jQuery("[data-hoverable].hovered .dot-link-text").off();
    jQuery("[data-hoverable].hovered").removeClass("hovered");
  });
});

function addHoverEvent() {
  if (isSection("home")) {
    jQuery("[data-hoverable]").on("touchstart", function (e) {
      e.preventDefault();
      e.stopPropagation();
      jQuery("[data-hoverable].hovered .dot-link-text").off();
      jQuery("[data-hoverable].hovered").removeClass("hovered");
      jQuery(this).toggleClass("hovered");
      jQuery(this)
        .find(".dot-link-text")
        .on("touchstart", () =>{jQuery(this).click()});
    });
  }
}

//modificación modal volumen testimonial
jQuery("body").on("click", ".modal_cev", function (e) {
  e.preventDefault();
  var infoModal = jQuery("#modalInfoCev");
  var clase = jQuery(this).data("class");

  if(infoModal.hasClass("itinerarios-modal")){
    infoModal.removeClass("itinerarios-modal");
   
  }else if(infoModal.hasClass("territorio-modal")){
    infoModal.removeClass("territorio-modal");
    
  }else if(infoModal.hasClass("relatos-modal")){
    infoModal.removeClass("relatos-modal");
    
  }
  infoModal.addClass(clase);
  
});