//EAO 09/11/1984 
let loadedDG = false;

let breakpoints = {};

/*
 * Get Breakpoints from body::after in css
 */
breakpoints.refreshValue = function () {
  this.value = window
    .getComputedStyle(document.querySelector("body"), ":before")
    .getPropertyValue("content")
    .replace(/\"/g, "");
};

breakpoints.refreshValue();
let currentBreakpoint = breakpoints.value;

(() => {
  let wheel = document.getElementById("wheelDS");
  let slider = document.querySelector(".sliderDS");

  function getScrollPos() {
    return (wheel.pageXOffset || wheel.scrollLeft) - (wheel.clientLeft || 0);
  }

  // Left Container
  let facesData = [
    {
      modal_nid: "197",
      position: {
        sm: { top: 2, left: 5 },
        md: { top: 22, left: -1 },
        lg: { top: 5, left: -11 },
        xlg: { top: 18, left: -2 },
      },
      img: {
        url: "/themes/custom/cevtheme/dialogo-social/img/face.png",
        w: 430,
        alt: "Retrato Perla Rodríguez Hernández sonriendo",
      },
      title: "No repetición",
      text: "Las víctimas se imaginan un país en paz y proponen alternativas al conflicto",
     // sound: "sintonia_01.mp3",
    },
    {
      modal_nid: "196",
      position: {
        sm: { top: 3, left: 25 },
        md: { top: 3, left: 25 },
        lg: { top: 5, left: 14 },
        xlg: { top: 10, left: 22 },
      },
      img: {
        url: "/themes/custom/cevtheme/dialogo-social/img/face2.png",
        w: 430,
        alt: "Retrato de la hermana Maritze Trigos",
      },
      title: "Convivencia",
      text: "Las víctimas se organizan para promover el entendimiento por medio de expresiones artísticas, culturales y el diálogo",
     // sound: "sintonia_02.mp3",
    },
    {
      modal_nid: "194",
      position: {
        sm: { top: 3, left: 45 },
        md: { top: 26, left: 45 },
        lg: { top: 10, left: 37 },
        xlg: { top: 32, left: 44 },
      },
      img: {
        url: "/themes/custom/cevtheme/dialogo-social/img/face3.png",
        w: 430,
        alt: "Retrato Pastor Alape",
      },
      title: "Reconocimiento",
      text: "Responsables de violaciones a los DD. HH. y al DIH reconocieron estos graves hechos ante las víctimas",
     // sound: "sintonia_03.mp3",
    },
    {
      modal_nid: "193",
      position: {
        sm: { top: 2, left: 65 },
        md: { top: 5, left: 65 },
        lg: { top: 7, left: 61 },
        xlg: { top: 7, left: 66 },
      },
      img: {
        url: "/themes/custom/cevtheme/dialogo-social/img/face4.png",
        w: 430,
        alt: "Retrato Jorge Avendaño con camisa azul, gorra y gafas",
      },
      title: "Dignificación ",
      text: "Las víctimas cuentan lo significativo que ha sido ser escuchadas durante el proceso de diálogo social",
      //sound: "sintonia_04.mp3",
    },
    {
      modal_nid: "190",
      position: {
        sm: { top: 4, left: 85 },
        md: { top: 21, left: 85 },
        lg: { top: 5, left: 82 },
        xlg: { top: 24, left: 86 },
      },
      img: {
        url: "/themes/custom/cevtheme/dialogo-social/img/face5.png",
        w: 430,
        alt: "Retrato Yaneth Mosquera, mujer afro con turbante sonriendo",
      },
      title: "La escucha",
      text: "La Comisión de la Verdad, a través del diálogo social, abrió espacios a la diversidad de personas y de sectores que hacen parte de la sociedad colombiana",
     // sound: "sintonia_05.mp3",
    },
  ];

  let leftContainer = document.querySelector(".leftDS-container");
  let facesHTML = "";
  let breakpoint = window.innerWidth;

  /**
   * Add Faces to lef container
   */
  function fillFacesContainer() {
    for (const [index, face] of facesData.entries()) {
      const position =
        (face.position && face.position[currentBreakpoint]) || face.position.sm;

      let top = position.top + '%';

      if (currentBreakpoint === "sm") {
        top = "calc(50vh - 300px)";
      }

      facesHTML += `
        <a 
          href="#" 
          class="slider-faceDS modal_cev" 
          style="top: ${top}; left: ${position.left}%" 
          data-nid="${face.modal_nid}"
          data-class="dg-modals"
          >
            <img src="${face.img.url}" class="face" width="${
        face.img.w
      }" alt="${face.img.alt}">
            <div class="content-container">
              <div class="content">
                <h4>${face.title}</h4>
                <p>${face.text}</p>
                <button class="btn py-0 px-3 timeline-button">Ver</button>
              </div>
            </div>
        </a>
      `;
    }
    leftContainer.innerHTML = facesHTML;

    jQuery("[data-modal-nid]").click(function (e) {
      e.preventDefault();
      const nid =jQuery(this).data("modal-nid");
      !!nid && jQuery(`.modal_cev[data-nid=${nid}]`).modal("show");
    });
  }

  fillFacesContainer();

  // Refill faces section on page resize in order to set the position depending of the screen size
  window.addEventListener("resize", () => {
    if (window.innerWidth > breakpoint) {
      leftContainer.innerHTML = "";
      facesHTML = "";
      breakpoint = window.innerWidth;
      fillFacesContainer();
      facesContent = document.querySelectorAll(".slider-faceDS");
    }
  });

  /******** Timeline ********/
  let timelineItems = [
    {
      title: "2055",
      titleSize: 70,
      subtitle: "Personas escuchadas",
      subtitleSize: 32,
      text: "Diversos actores de la sociedad han sido escuchados desde 2018.",
      position: {
        sm: { top: 8, left: 1 },
        md: { top: 18, left: 1 },
        lg: { top: 12, left: 1 },
        xlg: { top: 18, left: 1 },
      },
    },
    {
      title: "621",
      titleSize: 70,
      subtitle: "Espacios de participación",
      subtitleSize: 32,  
      text: "Como parte de su mandato, la Comisión generó espacios de escucha profunda.",
      position: {
        sm: { top: 50, left: 10 },
        md: { top: 74, left: 10 },
        lg: { top: 52, left: 12 },
        xlg: { top: 66, left: 12 },
      },
    },
    {
      title: "1444",
      titleSize: 70,
      subtitle: "Víctimas escuchadas",
      subtitleSize: 32, 
      text: "Víctimas escuchadas de manera directa",
      position: {
        sm: { top: 18, left: 66 },
        lg: { top: 10, left: 70 },
      },
    },
    {
      title: "32",
      titleSize: 70,
      subtitle: "Departamentos",
      subtitleSize: 32,
      text: "Proceso realizado a lo largo y ancho del país",
      position: {
        sm: { top: 50, left: 64 },
        md: { top: 69, left: 64 },
        lg: { top: 62, left: 57 },
        xlg: { top: 64, left: 100 },
      },
    },
    {
      title: "Diálogo social a través del tiempo",
      titleSize: 32,
      distanciaXY:10,
      subtitle: "",
      subtitleSize: 0,
      href: "/linea-tiempo",
      text: "Consulte aquí los grandes hitos del diálogo social desde el 2018 hasta hoy",
      position: {
        sm: { top: 43, left: 87 },
        md: { top: 56, left: 103 },
        lg: { top: 56, left: 96 },
        xlg: { top: 56, left: 130 },
      },
    },
  ];

  let timelineContainer = document.querySelector(".timelineDS-container");
  timelineItemsHTML = "";

  // Add third container information
  for (const item of timelineItems) {
    const position = (item.position && item.position[currentBreakpoint]) || item.position.sm;
    timelineItemsHTML += `
        <a href="${item.href || 'javascript:void(0)'}" class="timeline-item" style="top: ${position.top}%; left: ${position.left}%">
            <p style="font-size: ${item.titleSize}px; padding:${item.distanciaXY}px">${item.title}</p>
            <p style="font-size: ${item.subtitleSize}px;">${item.subtitle}</p>
            <div class="timeline-item-content">
              <div class="content">
                <p class="m-0">
                  ${item.text}
                </p>
              </div>
            </div>
        </a>
      `;
  }

  timelineContainer.insertAdjacentHTML("beforeend", timelineItemsHTML);

  // Verify if two elements has collide (The line red and other element for example)
  function isCollide(a, b) {
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();

    return !(
      aRect.top + aRect.height < bRect.top ||
      aRect.top > bRect.top + bRect.height ||
      aRect.left + aRect.width < bRect.left ||
      aRect.left > bRect.left + bRect.width
    );
  }

  let line = document.querySelector(".lineDS");
  let facesContent = document.querySelectorAll(".slider-faceDS");
  let timelineItem = document.querySelectorAll(".timeline-item");
  let lastAudio = "";
  let rightText = document.querySelector('.imageDS-container-content');
  // Make action when the line pass over desired sections
  function detectLineCollide() {
    let collide = false;
    for (const f of facesContent) {
      if (isCollide(f, line)) {
        f.classList.add("active");
        if (lastAudio !== f.dataset.sound) {
          playSound(new Audio("./../assets/" + f.dataset.sound));
          lastAudio = f.dataset.sound;
        }
        collide = true;
      } else {
        f.classList.remove("active");
      }
    }

    for (const t of timelineItem) {
      if (isCollide(t, line)) {
        t.classList.add("active");
        playSound(sintonia);
        collide = true;
      } else {
        t.classList.remove("active");
      }
    }

    if (isCollide(rightText, line)) {
      rightText.classList.add('active')
    } else {
      rightText.classList.remove('active')
    }

    return collide;
  }

  /******** SOUND *********/
  let timerId;
  let canPlay = false;
  let soundControl = document.querySelector("#sound-controlDS .sound-iconDS");
  let sound = document.getElementById("sound-ds-dial");
  let sintonia = new Audio("/themes/custom/cevtheme/dialogo-social/audio/sintonia.mp3");

  soundControl.addEventListener("click", () => {
    canPlay = !canPlay;
    soundControl.classList.toggle("on");
  });


  // play and specified sound
  function playSound(sound) {
    if (!canPlay) return;

    clearTimeout(timerId);
    sound.muted = true;
    sound.play();

    timerId = setTimeout(() => {
      sound.pause();
      sound.muted = true;
    }, 500);
  }

  let progressLineIndicator = document.querySelector(".indicator-lineDS");

  function updateProgressIndicator(pos) {
    let calc =
      pos ||
      Math.floor(
        (getScrollPos() / (slider.offsetWidth - window.innerWidth)) * 100
      );

    // if (loadedDG && breakpoint > 768) {
    //   calc -= 5;
    // }

    if (calc <= 0) {
      calc = 0;
    } else if (calc > 102) {
      calc = 102;
    }

    progressLineIndicator.style.left = calc + "%";
  }

  wheel.addEventListener("scroll", function () {
    // Show Line on scroll
    if (loadedDG && line.classList.contains("hideDS")) {
      line.classList.remove("hideDS");
    }

    if (!detectLineCollide()) lastAudio = false;
    playSound(sound);
    showSectionLabel();
    updateProgressIndicator();
  });

  // When click over the progress bar indicator, set scroll to a similar position.
  jQuery(".indicator-barDS").on("click", (e) => {
    let percent = Math.floor((e.offsetX / e.target.clientWidth) * 100);
    wheel.scrollTo({
      left: (percent / 100) * (slider.offsetWidth - window.innerWidth / 2),
      behavior: "smooth",
    });
  });

  const rightContainer = document.querySelector(".rightDS-container");
  const lineLabel = jQuery(".lineDS .lineDS-label");

  // Add adecuate label on line, depending of the collisioned section
  function showSectionLabel() {
    let collide = false;
    let top = 26;
    if (isCollide(leftContainer, line)) {
      lineLabel.text(
        "Serie documental que narra los procesos de escucha plural"
      );
      collide = true;
    } else if (isCollide(timelineContainer, line)) {
      lineLabel.text("Línea de tiempo de los procesos de escucha");
      collide = true;
      top = 48;
    } else if (isCollide(rightContainer, line)) {
      lineLabel.text("Contar con arte");
      collide = true;
      top = 76;
    }

    if (collide) {
      lineLabel.css({ padding: "12px", marginTop: top + "px" });
    } else {
      lineLabel.css({ padding: "0px" });
      lineLabel.text("");
    }
  }
})();
