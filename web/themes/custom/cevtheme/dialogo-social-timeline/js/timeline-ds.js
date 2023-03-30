//EAO 09/11/1984 
const ITEM_TYPE = {
  TEXT_SEPARATOR: 0,
  IMAGE_CONTAINER: 1,
  SMALL_IMAGE: 2,
  POLAROID: 3,
};

const ICON = {
  geo: "icon-ubication",
  podcast: "icon-audio-testimonio",
  gallery: "icon-galery-image",
  image: "icon-cont-imagen",
  play: "icon-video",
};

const timeline = [
  // 2018
  {
    year: 2018,
    rows: [
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "Primeros pasos para&nbsp;promover la construcción de confianza",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "195",
          imageAlt: "Ilustración. Personas organizan elementos encima de un jeep. textos: verdad, testimonios, informes",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/1a.png",
          popover: {
            text: "Conversación con varios grupos sociales sobre el rol de la Comisión y sus objetivos",
            //linkText: "Mirar más",
          },
        },
      ],
    ],
  },
  // 2019
  {
    year: 2019,
    rows: [
      // ROW 1
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "Dignificación de las víctimas, mediante el reconocimiento de responsabilidades",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "198",
          imageAlt: "José Rivera hablando, viste poncho y sombrero leyendo",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/4a.png",
          popover: {
            text: "En el 2019 se hicieron cuatro reconocimientos a víctimas del conflicto",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          nid: "",
          imageAlt: "Evento. dos personas se dirigen a una audiencia",
          link: "https://archivo.comisiondelaverdad.co/promoviendo-el-reconocimiento-a-la-dignificacion-de-las-victimas-y-de-responsabilidades?bloque=8",
          image:"/themes/custom/cevtheme/dialogo-social-timeline/img/4b.png",
          popover: {
            text: "Reconocimiento a la dignidad de las mujeres y personas LGBTIQ+, víctimas de violencias sexuales",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          nid: "",
          imageAlt: "Mujer mayor con libro entre las manos",
          link: "https://archivo.comisiondelaverdad.co/promoviendo-el-reconocimiento-a-la-dignificacion-de-las-victimas-y-de-responsabilidades?bloque=13",
          image:"/themes/custom/cevtheme/dialogo-social-timeline/img/4c.png",
          popover: {
            text: "Reconocimiento a las mujeres y familiares que buscan personas desaparecidas",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          nid: "",
          imageAlt: "Evento, personas se dirigen a una audiencia",
          link: "https://archivo.comisiondelaverdad.co/promoviendo-el-reconocimiento-a-la-dignificacion-de-las-victimas-y-de-responsabilidades?bloque=19",
          image:"/themes/custom/cevtheme/dialogo-social-timeline/img/4d.png",
          popover: {
            text: "Reconocimiento de los impactos del conflicto armado en niños, niñas y adolescentes",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          nid: "",
          imageAlt: "Retrato de hombre con sombrero. Texto: “el campo cuenta la verdad”",
          link: "https://archivo.comisiondelaverdad.co/promoviendo-el-reconocimiento-a-la-dignificacion-de-las-victimas-y-de-responsabilidades?bloque=24",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/4e.png",
          popover: {
            text: "Reconocimiento de los impactos a las poblaciones campesinas ",
          },
        },
      ],
      // ROW 2
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "La verdad es con los líderes sociales",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "200",
          imageAlt: "3 personas hablan en planel al público. Al fondo pendones institucionales",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/3a.png",
          popover: {
            text: "Confirmación de la relevancia del liderazgo social para la democracia y propuestas para detener las agresiones en su contra",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          nid: "",
          imageAlt: "Croquis mapa de Colombia en línea y fondo plano, resalta el pacifico",
          link: "https://archivo.comisiondelaverdad.co/dialogando-con-el-pais-sobre-la-situacion-de-los-lideres",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/3b.png",
          icon: ICON.geo,
          popover: {
            text: "Diálogo con el país sobre la situación de los líderes",
            withMap: true,
          },
        },
      ],
      // ROW 3
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "Conversación con diversos actores en el territorio",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "191",
          imageAlt: "Mujer afro, con pelo trenzado",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/2a.png",
          icon: ICON.podcast,
          popover: {
            text: "A partir de la escucha plural, se construyeron e implementaron distintas metodologías de trabajo para el diálogo social",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace SiM
          nid: "",
          imageAlt: "tarjetas con dibujos infantiles",
          link: "https://archivo.comisiondelaverdad.co/conversando-y-construyendo-con-los-ninos-ninas-adolescentes-y-jovenes",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/2b.png",
          popover: {
            text: "Conversación y construcción de futuros con niños, niñas y adolescentes",
          },
        },
        {
          type: ITEM_TYPE.POLAROID,
          nid: "192",
          imageAlt: "cuaderno hecho a mano con dibujos infantiles ",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/2c.png",
          popover: {
            text: "Entretejido de relatos de verdad con niños, niñas y adolescentes",
          },
        },
        {
          type: ITEM_TYPE.POLAROID,
          nid: "199",
          imageAlt: "Padre de Roux, comisionadas, jóvenes, niños y niñas",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/2d.png",
          popover: {
            text: "Los niños, niñas y adolescentes le hablan a la Comisión de la Verdad",
          },
        },
        {
          type: ITEM_TYPE.POLAROID,
          nid: "206",
          imageAlt: "Niños en salón de clase juegan",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/2e.png",
          popover: {
            text: "Travesías por la verdad",
          },
        },
      ],
    ],
  },
  // 2020
  {
    year: 2020,
    rows: [
      // ROW 1
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "Ejercicio de escucha con las víctimas, actores y sectores del país",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "203",
          imageAlt: "Mujer trans rubia en pasillo oscuro con vestido y guantes largos",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/8a.png",
          popover: {
            text: "La escucha profunda para comprender el impacto del conflicto en la sociedad y los territorios",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "",
          link: "https://archivo.comisiondelaverdad.co/escuchando-a-las-victimas-actores-y-sectores-del-pais:-escuchando-a-los-integrantes-de-la-fuerza-publica",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/8b.png",
          popover: {
            text: "Integrantes de la fuerza pública y sus familias relatan los impactos del conflicto armado en sus vidas",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "",
          link: "https://archivo.comisiondelaverdad.co/escuchando-a-las-victimas-actores-y-sectores-del-pais?bloque=19",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/8c.png",
          popover: {
            text: "Exintegrantes de las FARC-EP relatan su visión y comprensión de lo ocurrido",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "",
          link: "https://archivo.comisiondelaverdad.co/escuchando-a-las-victimas-actores-y-sectores-del-pais?bloque=32",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/8d.png",
          popover: {
            text: "Personas LGBTQI+ narran las experiencias que han vivido en la guerra y fuera de ella",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "",
          link: "https://archivo.comisiondelaverdad.co/explora/detalle/MF7QUSL3",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/8e.png",
          popover: {
            text: "Participación de la Guardia Indígena como garantía para la no repetición y la construcción de paz",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "",
          link: "https://archivo.comisiondelaverdad.co/escuchando-a-las-victimas-actores-y-sectores-del-pais",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/8f.png",
          popover: {
            text: "Miembros de diversos partidos políticos dialogan sobre las afectaciones del conflicto armado a la democracia",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "",
          link: "https://archivo.comisiondelaverdad.co/escuchando-a-las-victimas-actores-y-sectores-del-pais",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/8g.png",
          popover: {
            text: "Los empresarios y sus familiares también comparte las afectaciones del conflicto armado a este sector",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "",
          link: "https://archivo.comisiondelaverdad.co/escuchando-a-las-victimas-actores-y-sectores-del-pais:-mujeres",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/8h.png",
          popover: {
            text: "Mujeres con diferentes roles dentro de la guerra narran las múltiples violencias de las que fueron objeto",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "",
          link: "https://archivo.comisiondelaverdad.co/escuchando-a-las-victimas-actores-y-sectores-del-pais:-escuchamos-con-todos-los-sentidos",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/8i.png",
          popover: {
            text: "Las personas con discapacidad, sus familias y redes cercanas hablan de los impactos del conflicto y de sus afrontamientos y resistencias",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "",
          link: "https://archivo.comisiondelaverdad.co/escuchando-a-las-victimas-actores-y-sectores-del-pais:-las-verdades-de-los-ninos-ninas-adolescentes-y-jovenes",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/8j.png",
          popover: {
            text: "Niños, niñas, adolescentes y jóvenes también relataron sus experiencias en el marco del conflicto armado y sus formas de resistir",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "",
          link: "https://archivo.comisiondelaverdad.co/escuchando-a-las-victimas-actores-y-sectores-del-pais:-personas-mayores",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/8k.png",
          popover: {
            text: "Las personas mayores también comparten sus procesos de memoria y sus formas de resistencia ",
          },
        },
      ],
      // ROW 2
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "Diálogo sobre la continuidad del conflicto",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "201",
          imageAlt: "Mujer sobre roca a orillas de río con brazos abiertos y extendidos",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/7a.png",
          popover: {
            text: "Diálogos regionales sobre factores de persistencia del conflicto y posibles soluciones",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "Croquis mapa de Colombia en línea y fondo plano, resalta la región nororiental ",
          link: "https://archivo.comisiondelaverdad.co/dialogando-sobre-la-no-repeticion-del-conflicto",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/7b.png",
          icon: ICON.geo,
          popover: {
            text: "Diálogos regionales sobre factores de persistencia del conflicto y posibles soluciones",
            withMap: true,
          },
        },
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "La escucha a través del arte y de la cultura",
          classes: "h-100 ms-4",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          big: true,
          // Enlace Sim
          nid: "",
          imageAlt: "Niñas afro y niños de espalda y el número 10 estampado en sus camisetas",
          link: "https://archivo.comisiondelaverdad.co/escuchando-a-traves-del-arte-y-de-la-cultura",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/10a.png",
          popover: {
            text: "Estrategia Cultural y Artística de la Comisión de la Verdad",
          },
        },
        {
          type: ITEM_TYPE.POLAROID,
          nid: "218",
          imageAlt: "Siluetas de hombres armados",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/10b.png",
          popover: {
            text: "Casas de la Verdad con Sentido",
          },
        },
        {
          type: ITEM_TYPE.POLAROID,
          nid: "219",
          imageAlt: "Evento con audiencia en la comisión de la verdad",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/10c.png",
          popover: {
            text: "Dialogando el territorio",
          },
        },
        {
          type: ITEM_TYPE.POLAROID,
          nid: "220",
          imageAlt: "Mujer trans sostiene una bandera en sus manos",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/10d.png",
          popover: {
            text: "Resistencias culturales",
          },
        },
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "Soñar otros futuros posibles con jóvenes y comunidad educativa",
          classes: "h-100 ms-4",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "202",
          imageAlt: "Mapa de colombia con personajes afro, arriero e indígenas. Texto: somos la generación",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/11a.png",
          popover: {
            text: "Espacios de diálogo con jóvenes sobre convivencia, no repetición, resiliencia y resistencias",
          },
        },
      ],
      // ROW 3
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "Reconocimiento de responsabilidades y la dignificación de las víctimas",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "208",
          imageAlt: "Hombre hablando",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/6a.png",
          popover: {
            text: "Encuentros entre víctimas y responsables, donde se  reconocen las responsabilidades de diferentes actores y sectores",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "Manos de mujer sostiene hojas de plantas entre sus manos",
          link: "https://archivo.comisiondelaverdad.co/la-verdad-desde-la-salud-2",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/6b.png",
          popover: {
            text: "Reconocimiento al impacto del conflicto armado en la salud",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "Retrato de mujer pensativa",
          link: "https://archivo.comisiondelaverdad.co/la-verdad-del-pueblo-indigena",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/6c.png",
          popover: {
            text: "Reconocimiento a pueblos indígenas en situación de riesgo de exterminio físico y cultural",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "Persona habla por micrófono. Texto: Verdad sin fronteras",
          link: "https://archivo.comisiondelaverdad.co/verdad-sin-fronteras",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/6d.png",
          popover: {
            text: "Reconocimiento al exilio las víctimas en el exterior y la población retornada",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "dos personas con libros entre sus manos",
          link: "https://archivo.comisiondelaverdad.co/promoviendo-el-reconocimiento-a-la-dignificacion-de-las-victimas-y-de-responsabilidades",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/6e.png",
          popover: {
            text: "Reconocimiento de secuestros, tomas y reclutamiento en el oriente antioqueño",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "2 mujeres jóvenes cantan frente a un micrófono",
          link: "https://archivo.comisiondelaverdad.co/la-verdad-del-pueblo-negro",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/6f.png",
          popover: {
            text: "Reconocimiento de la verdad del pueblo negro, afrocolombiano, palenquero y raizal",
          },
        },
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "Historias de convivencia y reconciliación",
          classes: "h-100 ms-4",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "210",
          imageAlt: "Mujer mayor afro con camiseta estampada blanca y trenzas. Al fondo paisaje de playa",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/9a.png",
          popover: {
            text: "Historias de convivencia, reconciliación y transformación social",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          nid: "213",
          imageAlt: "Actor Fabio Rubiano. Al fondo repisas con libros y cuadros",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/9b.png",
          popover: {
            text: "Historias de la vida cotidiana que están cambiando nuestra historia",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          nid: "215",
          imageAlt: "Rímalo, sobre textura de graffiti",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/9c.png",
          popover: {
            text: "Rimas del hip hop para la memoria, la convivencia y el respeto",
          },
        },
      ],
    ],
  },
  // 2021
  {
    year: 2021,
    rows: [
      // ROW 1
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "Espacios de escucha para interpelar al país",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "207",
          imageAlt: "Mujer afro de perfil, con turbante y tapabocas, sobre su hombro otra persona posa su mano",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/14a.png",
          popover: {
            text: "Diversos sectores de varias regiones del país contaron su verdad sobre lo sucedido en el conflicto armado",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "grupo de mujeres cantan en un evento",
          link: "https://archivo.comisiondelaverdad.co/escuchando-a-victimas-actores-y-sectores-del-pais:-mesa-de-victimas.-del-impacto-del-conflicto-armado-a-la-incidencia-politica",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/14b.png",
          popover: {
            text: "Las mesas de víctimas hablan de su paso al liderazgo y los retos de la incidencia política",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "Cerámica ceremonial",
          link: "https://archivo.comisiondelaverdad.co/escuchando-a-las-victimas-actores-y-sectores-del-pais:-en-las-orillas-del-territorio-ampliando-la-escucha-con-los-grupos-etnicos",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/14c.png",
          popover: {
            text: "Las comunidades étnicas comparten sus resistencias y luchas en los territorios ancestrales",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "Tres personas sentadas en tarima dialogan",
          link: "https://archivo.comisiondelaverdad.co/escuchando-a-las-victimas-actores-y-sectores-del-pais",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/14d.png",
          popover: {
            text: "La escucha para la comprensión de las zonas de reserva campesina y su aporte a la construcción de paz",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "Tres siluetas de hombres armados en medio de un paisaje",
          link: "https://archivo.comisiondelaverdad.co/escuchando-a-las-victimas-actores-y-sectores-del-pais:-escuchando-a-los-integrantes-de-la-fuerza-publica",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/14e.png",
          popover: {
            text: "Integrantes de la fuerza pública (activos y retirados) y sus familias hablan de los impactos del conflicto armado",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "Mujer de pie se dirige a una audiencia, en el centro objetos",
          link: "https://archivo.comisiondelaverdad.co/escuchando-a-las-victimas-actores-y-sectores-del-pais:-escuchando-a-miembros-de-comunidades-de-fe",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/14f.png",
          popover: {
            text: "Las comunidades de fe hablan de los impactos del conflicto, sus resistencias y recomendaciones para la no repetición",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "Tres personas sentadas en tarima dialogan",
          link: "https://archivo.comisiondelaverdad.co/escuchando-a-victimas-actores-y-sectores-del-pais:-periodistas",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/14g.png",
          popover: {
            text: "Los y las periodistas exponen los retos de ejercer su profesión en el marco del conflicto armado y de contribución a la paz",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "Grupo de jóvenes posan para fotografía",
          link: "https://archivo.comisiondelaverdad.co/escuchando-a-las-victimas-actores-y-sectores-del-pais:-las-verdades-de-los-ninos-ninas-adolescentes-y-jovenes",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/14h.png",
          popover: {
            text: "Niños, niñas, y adolescentes o adultos que los fueron en medio del conflicto, sus afectaciones y resistencias",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "Mujer de pelo rojizo y gafas hablando",
          link: "https://archivo.comisiondelaverdad.co/explora/detalle/30-OI-629a9661ff80f50619ec5ee0",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/14i.png",
          popover: {
            text: "Afectaciones, victimización y resistencia del Partido Comunista Colombiano",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "Grupo de mujeres dialoga ante una audiencia ",
          link: "https://archivo.comisiondelaverdad.co/escuchando-a-las-victimas-actores-y-sectores-del-pais:-escuchamos-con-todos-los-sentidos",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/14j.png",
          popover: {
            text: "Mujeres y personas con discapacidad y sus familias narran el impacto del conflicto armado",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "Ilustración. Mujer sostiene cartes. Alrededor textos",
          link: "https://archivo.comisiondelaverdad.co/escuchando-a-las-victimas-actores-y-sectores-del-pais:-mujeres",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/14k.png",
          popover: {
            text: "Mujeres exguerrilleras en el marco del conflicto armado",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          // Enlace Sim
          nid: "",
          imageAlt: "4 personas reunidas conversan. Mesa. Cartel de fondo",
          link: "https://archivo.comisiondelaverdad.co/escuchando-a-las-victimas-actores-y-sectores-del-pais:-personas-mayores",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/14l.png",
          popover: {
            text: "Las personas mayores hablan sobre sus vivencias en el marco del conflicto armado",
          },
        },
      ],
      // ROW 2
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "Contribución a la comprensión de la continuidad de la violencia",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "204",
          imageAlt: "Luz Mery Panche sostiene micrófono. Al fondo pendón y personas reunidas sentadas",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/13a.png",
          popover: {
            text: "Reflexiones sobre la persistencia del conflicto en los territorios y alternativas",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          nid: "",
          link: "https://archivo.comisiondelaverdad.co/las-regiones-hablan-de-otros-futuros-posibles-dialogos-para-la-no-continuidad-y-la-no-repeticion-del-conflicto:",
          imageAlt: "Croquis mapa de Colombia en línea y fondo plano, resalta región central y occidental",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/13b.png",
          icon: ICON.geo,
          popover: {
            text: "Las regiones hablan de otros futuros posibles. Diálogos para la no continuidad y la no repetición del conflicto",
            withMap: true,
          },
        },
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "Gran acuerdo por la convivencia",
          classes: "h-100 ms-4",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "205",
          imageAlt: "Maritze Trigos hablando por microfono",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/15a.png",
          popover: {
            text: "Decálogo de acciones para que la ciudadanía se comprometa con la no repetición y con otro futuro para el país",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          nid: "209",
          imageAlt: "Hombre indígena hablando por micrófono, lleva audífonos",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/15b.png",
          icon: ICON.play,
          popover: {
            text: "Las comunidades promueven la convivencia por medio del arte y la cultura",
          },
        },
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "Diálogo desde la cultura",
          classes: "h-100 ms-4",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "211",
          imageAlt: "4 jóvenes en presentación, iluminados",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/16a.png",
          popover: {
            text: "Gestión de paz territorial en red, desde y con el sector cultural y artístico del país",
          },
        },
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "Ejercicios de escucha con niñas, niños, jóvenes y docentes",
          classes: "h-100 ms-4",
          childClasses: "mw-none",
        },
        {
          type: ITEM_TYPE.POLAROID,
          big: true,
          nid: "212",
          imageAlt: "5 adolescentes sostienen cartes ",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/17a.png",
          popover: {
            text: "¿Qué significa ser niño, niña o joven en Colombia hoy y qué proponen para la no repetición?",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          nid: "216",
          imageAlt: "Hombre de pelo largo con barba",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/17b.png",
          icon: ICON.play,
          popover: {
            text: "Herramientas pedagógicas construidas por comunidades educativas",
          },
        },
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "Insumos para la no repetición",
          classes: "h-100 ms-4",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "214",
          imageAlt: "Adulta mayor, con canas y gafas",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/18a.png",
          popover: {
            text: "Diferentes grupos sociales aportaron sus recomendaciones para la no repetición",
          },
        },
      ],
      // ROW 3
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "Reconocimiento de diversos actores como responsables",
          classes: "h-100",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "217",
          imageAlt: "Hombre habla desde atril. Texto, encuentro por la verdad",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/12a.png",
          popover: {
            text: "Aceptación de responsabilidades frente a las víctimas",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          //Enlace Sim
          nid: "",
          imageAlt: "Dos jóvenes sostienen una pancarta con manos y mundo pintado. Texto: paz",
          link: "https://archivo.comisiondelaverdad.co/promoviendo-el-reconocimiento-a-la-dignificacion-de-las-victimas-y-de-responsabilidades?bloque=49",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/12b.png",
          popover: {
            text: "Reconocimiento del exilio en las fronteras con Colombia",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          //Enlace Sim
          nid: "",
          imageAlt: "Mujer de pie frente a un atril  se dirige a una audiencia",
          link: "https://archivo.comisiondelaverdad.co/verdades-que-liberen",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/12c.png",
          popover: {
            text: "Verdades que liberen: responsabilidades de las FARC-EP en el secuestro",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          //Enlace Sim
          nid: "",
          imageAlt: "Hombre con micrófono se dirige a una audiencia, detrás dos pantallas con retratos y texto",
          link: "https://archivo.comisiondelaverdad.co/explora/detalle/5-OI-6286f30d9e739b0846584ac6",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/12d.png",
          popover: {
            text: "Responsabilidad de las AUC en el asesinato de la hermana Yolanda Cerón",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          //Enlace Sim
          nid: "",
          imageAlt: "Evento público. Hombre sentado sostiene documentos en sus manos",
          link: "https://archivo.comisiondelaverdad.co/promoviendo-el-reconocimiento-a-la-dignificacion-de-las-victimas-y-de-responsabilidades?bloque=49",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/12e.png",
          popover: {
            text: "El conflicto armado en las universidades: generaciones que no se rinden",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          //Enlace Sim
          nid: "",
          imageAlt: "2 personas hablan desde atriles. texto: reconocer para no repetir",
          link: "https://archivo.comisiondelaverdad.co/promoviendo-el-reconocimiento-a-la-dignificacion-de-las-victimas-y-de-responsabilidades?bloque=49",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/12f.png",
          popover: {
            text: "Reconocimiento a las víctimas de ejecuciones extrajudiciales en Colombia",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          //Enlace Sim
          nid: "",
          imageAlt: "Hombre de pie frente a un atril  se dirige a una audiencia",
          link: "https://archivo.comisiondelaverdad.co/promoviendo-el-reconocimiento-a-la-dignificacion-de-las-victimas-y-de-responsabilidades?bloque=49",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/12g.png",
          popover: {
            text: "Reconocimiento de responsabilidades sobre las ejecuciones extrajudiciales en Casanare",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          //Enlace Sim
          nid: "",
          imageAlt: "Retrato de hombre indígena con bastón de mando y sombrero",
          link: "https://archivo.comisiondelaverdad.co/promoviendo-el-reconocimiento-a-la-dignificacion-de-las-victimas-y-de-responsabilidades?bloque=49",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/12h.png",
          popover: {
            text: "Reconocimiento del impacto del conflicto en distintos territorios del país y sus responsables",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          //Enlace Sim
          nid: "",
          imageAlt: "grupo de personas levantan sus manos, portan diversos objetos",
          link: "https://archivo.comisiondelaverdad.co/promoviendo-el-reconocimiento-a-la-dignificacion-de-las-victimas-y-de-responsabilidades?bloque=49",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/12i.png",
          popover: {
            text: "Reconocimiento de los impactos del conflicto armado en los pueblos étnicos",
          },
        },
        {
          type: ITEM_TYPE.SMALL_IMAGE,
          //Enlace Sim
          nid: "",
          imageAlt: "Francisco de Roux, Salvatore Mancuso y Rodrigo Londoño en videoconferencia",
          link: "https://archivo.comisiondelaverdad.co/promoviendo-el-reconocimiento-a-la-dignificacion-de-las-victimas-y-de-responsabilidades?bloque=49",
          image:
            "/themes/custom/cevtheme/dialogo-social-timeline/img/12j.png",
          popover: {
            text: "Distintos excombatientes de las FARC-EP, las AUC y la fuerza pública reconocen su responsabilidad en el conflicto",
          },
        },
      ],
    ],
  },
  // 2022
  {
    year: 2022,
    rows: [
      // ROW 1
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "Diálogos sociales",
          classes: "h-100 ms-4",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "822",
          imageAlt: "",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/19a.png",
          popover: {
            text: "Con el cierre de estos procesos se culmina la escucha atenta, amplia y plural que se promovió con los diferentes actores",
            //linkText: "19a [video]",
          },
        },
      ],
      // ROW 2
      [
        {
          type: ITEM_TYPE.TEXT_SEPARATOR,
          text: "Reconocimientos",
          classes: "h-100 ms-4",
        },
        {
          type: ITEM_TYPE.IMAGE_CONTAINER,
          nid: "823",
          imageAlt: "",
          link: "",
          image: "/themes/custom/cevtheme/dialogo-social-timeline/img/20a.png",
          popover: {
            text: "El reconocimiento le deja un Legado a las próximas generaciones para reflexionar sobre el país y aportar a la convivencia y la no repetición",
            //linkText: "20a [video]",
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
  <div data-class="dg-modals" class="timelineDS-item modal_cev ${item.classes ? item.classes : "" }" 
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
      <i class="fs-4 ${icon}"></i>
    </div>
    `;
}


//modificación modal volumen testimonial
jQuery("body").on("click", ".modal_cev", function (e) {
  e.preventDefault();
  var infoModal = jQuery("#modalInfoCev");
  var clase = jQuery(this).data("class");

  if(infoModal.hasClass("dg-modals")){
    infoModal.removeClass("dg-modals"); 
  }
  infoModal.addClass(clase);
  
});