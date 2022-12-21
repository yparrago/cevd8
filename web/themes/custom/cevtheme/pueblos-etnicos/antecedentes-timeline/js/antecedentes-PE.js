const ITEM_TYPE = {
  TEXT_SEPARATOR: 0,
  IMAGE_CONTAINER: 1,
  SMALL_IMAGE: 2,
  POLAROID: 3,
};

const ICON = {
  geo: "icon-ubication",
  podcast: "icon-audio",
  gallery: "icon-galery-image",
  image: "icon-cont-imagen",
  pdfdownload: "icon-pdf-download",
};

const timeline = [
  // YEAR
  {
    year: "",
    rows: [
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "Introducción",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "1468",
          image: "/themes/custom/cevtheme/pueblos-etnicos/antecedentes-timeline/img/introduccion.png",
          imageAlt: "Image Alt",
          icon: ICON.podcast,
          popover: {
            text: "Conozca cómo la Dirección de Pueblos Étnicos construyó los principales antecedentes históricos en su trabajo de esclarecimiento",
            linkText: "Explorar contenido",
          },
        },
      ],
    ],
  },
  // YEAR
  {
    year: "",
    rows: [
      // ROW 1
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "1. La invasión",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "1469",
          image: "./themes/custom/cevtheme/pueblos-etnicos/antecedentes-timeline/img/la-invasion.png",
          imageAlt: "",
          icon: ICON.podcast,
          popover: {
            text: "En este antecedente se narra el territorio nacional, su población y la llegada de los invasores",
          },
        },
        
      ],
      // ROW 2
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "2. Diáspora",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "1470",
          image: "./themes/custom/cevtheme/pueblos-etnicos/antecedentes-timeline/img/diaspora.png",
          imageAlt: "",
          icon: ICON.podcast,
          popover: {
            text: "Secuestro masivo de africanos hacia América y posterior esclavización",
          },
        },
      ],
      // ROW 3
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "3. Pueblo Rrom",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "1471",
          image: "./themes/custom/cevtheme/pueblos-etnicos/antecedentes-timeline/img/pueblo-rrom.png",
          imageAlt: "",
          icon: ICON.podcast,
          popover: {
            text: "Llegada del Pueblo Gitano a América",
          },
        },
      ],
    ],
  },
  // YEAR
  {
    year: "",
    rows: [
      // ROW 1
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "4. Encomienda",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "1472",
          image: "./themes/custom/cevtheme/pueblos-etnicos/antecedentes-timeline/img/encomienda.png",
          imageAlt: "",
          icon: ICON.podcast,
          popover: {
            text: "Colonización y período de la encomienda",
          },
        },
       
      ],
    ],
  },
  // YEAR
  {
    year: "",
    rows: [
      // ROW 1
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "5. Resguardos indígenas",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "1473",
          image: "./themes/custom/cevtheme/pueblos-etnicos/antecedentes-timeline/img/resguardo-indigena.png",
          imageAlt: "",
          icon: ICON.podcast,
          popover: {
            text: "Los resguardos como estrategia de colonización y acción de resistencia de los pueblos originarios",
          },
        },
      ],
      // ROW 2
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "6. Cimarronaje",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "1474",
          image: "./themes/custom/cevtheme/pueblos-etnicos/antecedentes-timeline/img/cimarronaje.png",
          imageAlt: "",
          icon: ICON.podcast,
          popover: {
            text: "Respuestas de resistencia y estrategias para la liberación: el cimarronaje",
          },
        },
        
      ],
    ],
  },
  // YEAR
  {
    year: "",
    rows: [
      // ROW 1
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "7. Evangelización",
          classes: "h-100 ms-4",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "1475",
          image: "./themes/custom/cevtheme/pueblos-etnicos/antecedentes-timeline/img/evangelizacion.png",
          imageAlt: "",
          icon: ICON.podcast,
          popover: {
            text: "Estrategia de sometimiento a los pueblos originarios",
          },
        },
      ],
      // ROW 2
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "8. La consolidación de la esclavización como una empresa transnacional",
          classes: "h-100 ms-4",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "1476",
          image: "./themes/custom/cevtheme/pueblos-etnicos/antecedentes-timeline/img/esclavizacion.png",
          imageAlt: "",
          icon: ICON.podcast,
          popover: {
            text: "Los pueblos Negros, Afro, Raizal y Palenqueros como fuentes primordiales de ganancias económicas",
          },
        },
      ],
    ],
  },
      // YEAR
  {
    year: "",
    rows: [
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "9. El Pueblo Rrom y las estrategias de homogeneización de la corona española",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "1477",
          image: "./themes/custom/cevtheme/pueblos-etnicos/antecedentes-timeline/img/rrom-estrategia.png",
          imageAlt: "",
          icon: ICON.podcast,
          popover: {
            text: "Fernando VI ordena la 'Gran Redada', un operativo en que se estima que se detuvieron hasta 12.000 personas del Pueblo Rrom",
          },
        },
      ],
    ],
  },
      // YEAR
  {
    year: "",
    rows: [
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "10. Procesos de liberación",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "1478",
          image: "./themes/custom/cevtheme/pueblos-etnicos/antecedentes-timeline/img/proceso-liberacion.png",
          imageAlt: "",
          icon: ICON.podcast,
          popover: {
            text: "Capitanía de Páez, San Basilio de Palenque y las comunidades de cimarrones de La Guajira",
          },
        },
      ],
    ],
  },
  // YEAR
  {
    year: "",
    rows: [
      // ROW 1
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "11. Participación en las batallas de independencia",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "1479",
          image: "./themes/custom/cevtheme/pueblos-etnicos/antecedentes-timeline/img/proceso-lieberacion.png",
          imageAlt: "",
          icon: ICON.podcast,
          popover: {
            text: "Los pueblos étnicos en la construcción de la nación",
          },
        },
        
      ],
      // ROW 2
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "12. Continuidad de la esclavitud en la naciente república",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "1480",
          image: "./themes/custom/cevtheme/pueblos-etnicos/antecedentes-timeline/img/continua-esclavitud.png",
          imageAlt: "",
          icon: ICON.podcast,
          popover: {
            text: "Este período significó el principio de la exclusión y discriminación histórica de los pueblos étnicos",
          },
        },
      ],
      // ROW 3
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "13. Segunda fase de la diáspora gitana",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "1481",
          image: "./themes/custom/cevtheme/pueblos-etnicos/antecedentes-timeline/img/diaspora-gitana.png",
          imageAlt: "",
          icon: ICON.podcast,
          popover: {
            text: "En este periodo es posible evidenciar mayor presencia del Pueblo Rrom en el continente americano",
          },
        },
      ],
    ],
  },
        // 2018
  {
    year: "",
    rows: [
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "14. Desterritorialización",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "1482",
          image: "./themes/custom/cevtheme/pueblos-etnicos/antecedentes-timeline/img/desterritorializacion.png",
          imageAlt: "",
          icon: ICON.podcast,
          popover: {
            text: "Disolución de los resguardos indígenas y la continuidad de la política de desterritorialización",
          },
        },
      ],
    ],
  },
        // 2018
  {
    year: "",
    rows: [
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "15. La Nueva Granada",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "1483",
          image: "./themes/custom/cevtheme/pueblos-etnicos/antecedentes-timeline/img/nueva-granada.png",
          imageAlt: "",
          icon: ICON.podcast,
          popover: {
            text: "Relaciones de dominación sobre los Pueblos Indígenas y Afro",
          },
        },
      ],
    ],
  },
        // YEAR
  {
    year: "",
    rows: [
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "16. La abolición de la esclavitud y la libertad de vientres",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "1484",
          image: "./themes/custom/cevtheme/pueblos-etnicos/antecedentes-timeline/img/abolicion-esclavitud.png",
          imageAlt: "",
          icon: ICON.podcast,
          popover: {
            text: "Ley 21 de 1851 que pretendía terminar legalmente con la esclavitud a partir de enero de 1852",
          },
        },
      ],
    ],
  },
        // YEAR
  {
    year: "",
    rows: [
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "17. El continuum de violencia, el racismo, el trato colonial y su relación con el conflicto armado",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "1485",
          image: "./themes/custom/cevtheme/pueblos-etnicos/antecedentes-timeline/img/continuum.png",
          imageAlt: "",
          icon: ICON.podcast,
          popover: {
            text: "Reconocer la larga historia de violencias y exclusión que aún hoy siguen sufriendo las comunidades étnicas",
          },
        },
      ],
    ],
  },
        // Year
  {
    year: "",
    rows: [
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "Antecedentes Históricos (Anexo del Capítulo Étnico)",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "2274",
          image: "./themes/custom/cevtheme/pueblos-etnicos/antecedentes-timeline/img/pdf-descargable.png",
          imageAlt: "",
          icon: ICON.pdfdownload,
          popover: {
            text: "Accede al documento de Antecedentes Históricos (Anexo del Capítulo Étnico)",
            linkText: "Explorar contenido",
          },
        },
      ],
    ],
  },
];
function initTimeline() {
  const html = timeline.map(getColumnHTML).join("");
  jQuery(".timelineDS-container").append(html);
}

(() => {
  const wheel = jQuery("#wheelDS");
  const line = jQuery("#lineDS");
  const slider = jQuery(".sliderDS");
  let timelineItems, timelineYears;

  wheel.on("wheel", ({ originalEvent: event }) => {
    if (!event.deltaY) {
      return;
    }

    event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
    event.preventDefault();
  });

  wheel.on("scroll", () => {
    detectLineCollide();
    updateProgressIndicator();

    if (line.hasClass("hideDS")) {
      line.removeClass("hideDS");
    }
  });

  jQuery(window).on("load", () => {
    initTimeline();
    timelineItems = jQuery(".timelineDS-item");
    timelineYears = jQuery(".timelineDS-year span");

    jQuery("[data-modal-nid]").click(function (e) {
      e.preventDefault();
      const nid = jQuery(this).data("modal-nid");
      !!nid && $(`.modal_cev[data-nid=${nid}]`).modal("show");
    });

    jQuery("[data-item-link]").click(function (e) {
      e.preventDefault();
      const link = jQuery(this).data("item-link");
      !!link && window.open(link, '_blank');
    });

    jQuery("#how-to-use-modal").modal("show");

    jQuery("#how-to-use-modal .btn-close").click(() => {
      jQuery("#how-to-use-modal").modal("hide");
    });
  });

  // Verify if two elements has collide (The line red and other element for example)
  function hasCollide(a, b) {
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();

    return !(
      aRect.top + aRect.height < bRect.top ||
      aRect.top > bRect.top + bRect.height ||
      aRect.left + aRect.width < bRect.left ||
      aRect.left > bRect.left + bRect.width
    );
  }

  // Make action when the line pass over desired sections
  function detectLineCollide() {
    let collide = false;
    for (const f of timelineItems) {
      if (hasCollide(f, line[0])) {
        jQuery(f).find(".timelineDS-popover").addClass("active");
        jQuery(f).addClass("active");
        collide = true;
      } else {
        jQuery(f).find(".timelineDS-popover").removeClass("active");
      }
    }

    for (const f of timelineYears) {
      if (hasCollide(f, line[0])) {
        jQuery(f).parent().addClass("active");
      } else {
        jQuery(f).parent().removeClass("active");
      }
    }

    return collide;
  }

  let progressLineIndicator = jQuery(".indicator-lineDS");

  function updateProgressIndicator(pos) {
    let calc =
      pos ||
      Math.floor(
        (getScrollPos() / (slider[0].offsetWidth - window.innerWidth)) * 100
      );

    if (calc <= 0) {
      calc = 0;
    } else if (calc > 102) {
      calc = 102;
    }

    progressLineIndicator.css({ left: calc + "%" });
  }

  function getScrollPos() {
    return (
      (wheel[0].pageXOffset || wheel[0].scrollLeft) - (wheel[0].clientLeft || 0)
    );
  }
})();

// COMPONENTS

function getColumnHTML(column) {
  const rowsHTML = column.rows.map(getRowHTML).join("");

  return `
    <div class="timelineDS-column">
      ${rowsHTML}
      <div class="timelineDS-year">
        <span></span>
        <p class="mb-0">${column.year}</p>
      </div>
    </div>
  `;
}

function getRowHTML(row) {
  const itemsHTML = row.map(getItemHTML).join("");

  return `<div class="timelineDS-row">${itemsHTML}</div>`;
}

function getItemHTML(item) {
  let itemHTML = "";
  if (item.type === ITEM_TYPE.TEXT_SEPARATOR) {
    itemHTML = getTextSeparatorHTML(item);
  } else if (item.type === ITEM_TYPE.IMAGE_CONTAINER) {
    itemHTML = getImageContainerHTML(item);
  } else if (item.type === ITEM_TYPE.POLAROID) {
    itemHTML = getPolaroidHTML(item);
  } else if (item.type === ITEM_TYPE.SMALL_IMAGE) {
    itemHTML = getSmallImageHTML(item);
  }

  if (typeof item.popover === "object") {
    itemHTML += getPopoverHTML(item);
  }

  return `
  <div data-class="pe-modals" class="timelineDS-item modal_cev ${item.classes ? item.classes : "" }" 
    ${
      item.link
        ? `data-item-link="${item.link}"`
        : `data-nid="${item.nid}"`
    }
    >
      ${itemHTML}
    </div>
  `;
}

function getTextSeparatorHTML(item) {
  return `
    <div class="timelineDS-text-separator h-100 d-flex ms-2 ${
      item.childClasses && item.childClasses
    }">
      <p class="mb-0 align-self-center">${item.text}</p>
    </div>
  `;
}

function getImageContainerHTML(item) {
  return `
    <div class="timelineDS-image-container ${
      item.childClasses && item.childClasses
    }">
      <img src="${item.image}" alt="${item.imageAlt}">
    </div>
    ${getIconHTML(item.icon || ICON.play)}
  `;
}

function getSmallImageHTML(item) {
  return `
    <div class="timeline-image-location ${
      item.childClasses && item.childClasses
    }">
      <img src="${item.image}" width="122" height="78" alt="${item.imageAlt}">
    </div>
    ${getIconHTML(item.icon || ICON.image)}
  `;
}

function getPolaroidHTML(item) {
  return `
    <div class="timeline-polaroid${item.big ? " big" : ""} ${
    item.childClasses && item.childClasses
  }">
      <img src="${item.image}" alt="${item.imageAlt}">
    </div>
    ${getIconHTML(item.icon || ICON.gallery)}
  `;
}

function getPopoverHTML(item) {
  const popover = item.popover;
  return `
    <div class="timelineDS-popover"
      ${
        item.link
          ? `data-item-link="${item.link}"`
          : `data-modal-nid="${item.nid}"`
      }
    >
      <div class="d-flex p-1">
        ${
          popover.withMap
            ? `<div class="shrink pe-2 me-1 border-end">
              <img src="/themes/custom/cevtheme/dialogo-social-timeline/img/map.png" width="36" alt="mapa">
            </div>`
            : ""
        }
        <div class="col">
          <p class="mb-0">${popover.text}</p>
          <a class="timelineDS-popover-link text-center" 
          ${
            item.link
              ? `href="${item.link}" target="_blank"`
              : `data-modal-nid="${item.nid}"`
          }>
            ${popover.linkText || "Explorar contenido"}
          </a>
        </div>
      </div>
    </div>
  `;
}

function getIconHTML(icon) {
  if (!icon) return "";
  return `
    <div class="timelineDS-icon">
      <i class="fs-5 ${icon}"></i>
    </div>
    `;
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