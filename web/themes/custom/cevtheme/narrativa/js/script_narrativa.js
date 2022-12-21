
var estado_espiral = 0; //natural
var menu_filtro = 0;  // Sin filtro


const datos_periodo = [
  {
    numero_semicirculos: 2,
    identificacion_periodo: "periodo_uno",
    titulo: "Epílogo",
    datanid: 2086,
    fecha: "de 2016 hasta hoy",
    descripcion: "Una paz incompleta y un posconflicto violento abrieron la puerta a la repetición.",
    escala_xy: [{ mobiles: 0.52, mobilem: 0.65, mobilel: 0.65, tablet: 0.9, laptop1024: 1.1, laptop1440: 1.1, laptop4k: 1.1 }],
    ciclo: "Punto de Inflexión",
    hitos: [
      { fecha: [{ vigencia: "2017", vinculo: "/la-transicion" }], titulo_hito: [{ titulo: "hasta hoy — Epílogo" }], pq: "", pt: "c_nh_punto_transicion", ci: "", ap: "", esc_1: "c_nh_esclarecimiento_1", esc_2: "", esc_3: "", esc_4: "", esc_5: "", esc_6: "", esc_7: "", esc_8: "", esc_9: "", esc_10: "" }
    ]
  },
  {
    numero_semicirculos: 2,
    identificacion_periodo: "periodo_dos",
    titulo: "Cuarto periodo",
    datanid: 2085,
    fecha: "2002-2016",
    descripcion: "¿Cómo se cierra la guerra: imponiéndose sobre el enemigo en el plano militar y aniquilando su proyecto político o haciendo del fin del conflicto armado una oportunidad para la agenda pendiente en materia de modernización y democracia?",
    escala_xy: [{ mobiles: 0.58, mobilem: 0.66, mobilel: 0.7, tablet: 1.01, laptop1024: 1.2, laptop1440: 1.2, laptop4k: 1.2 }],
    ciclo: "Degradación",
    hitos: [
      { fecha: [{ vigencia: "2016", vinculo: "/el-acuerdo-de-paz" }], titulo_hito: [{ titulo: "El Acuerdo de Paz" }], pq: "", pt: "", ci: "", ap: "c_nh_apertura", esc_1: "c_nh_esclarecimiento_1", esc_2: "", esc_3: "c_nh_esclarecimiento_3", esc_4: "", esc_5: "c_nh_esclarecimiento_5", esc_6: "c_nh_esclarecimiento_6", esc_7: "", esc_8: "", esc_9: "", esc_10: "" },
      { fecha: [{ vigencia: "2012", vinculo: "/dialogos-de-la-habana" }], titulo_hito: [{ titulo: "Diálogos de La Habana" }], pq: "", pt: "", ci: "", ap: "", esc_1: "", esc_2: "c_nh_esclarecimiento_2", esc_3: "", esc_4: "", esc_5: "c_nh_esclarecimiento_5", esc_6: "c_nh_esclarecimiento_6", esc_7: "", esc_8: "", esc_9: "", esc_10: "" },
      { fecha: [{ vigencia: "2010", vinculo: "/verdad-justicia-y-reparacion" }], titulo_hito: [{ titulo: "Verdad, justicia y reparación" }], pq: "", pt: "", ci: "", ap: "", esc_1: "", esc_2: "c_nh_esclarecimiento_2", esc_3: "c_nh_simbolico", esc_4: "c_nh_paramilitarismo", esc_5: "", esc_6: "c_nh_esclarecimiento_6", esc_7: "", esc_8: "", esc_9: "", esc_10: "" },
      { fecha: [{ vigencia: "2008", vinculo: "/punto-de-inflexion" }], titulo_hito: [{ titulo: "Punto de Inflexión" }], pq: "c_nh_punto_quiebre", pt: "", ci: "", ap: "", esc_1: "c_nh_esclarecimiento_1", esc_2: "c_nh_esclarecimiento_2", esc_3: "c_nh_esclarecimiento_3", esc_4: "", esc_5: "", esc_6: "", esc_7: "", esc_8: "", esc_9: "", esc_10: "" },
      { fecha: [{ vigencia: "2005", vinculo: "/la-reeleccion" }], titulo_hito: [{ titulo: "La Reelección" }], pq: "", pt: "", ci: "", ap: "", esc_1: "", esc_2: "", esc_3: "c_nh_esclarecimiento_3", esc_4: "", esc_5: "", esc_6: "", esc_7: "", esc_8: "", esc_9: "", esc_10: "" },
      { fecha: [{ vigencia: "2002", vinculo: "/plan-patriota" }], titulo_hito: [{ titulo: "Plan patriota" }], pq: "", pt: "", ci: "c_nh_cierre", ap: "", esc_1: "c_nh_esclarecimiento_1", esc_2: "c_nh_esclarecimiento_2", esc_3: "", esc_4: "c_nh_esclarecimiento_4", esc_5: "c_nh_esclarecimiento_5", esc_6: "", esc_7: "", esc_8: "", esc_9: "", esc_10: "" }
    ]
  },
  {
    numero_semicirculos: 2,
    identificacion_periodo: "periodo_tres",
    titulo: " Tercer periodo",
    datanid: 2084,
    fecha: "1991-2002",
    descripcion: "¿Cómo y por qué se disparó el conflicto armado interno en medio de la mayor apertura democrática del siglo XX en Colombia?",
    escala_xy: [{ mobiles: 0.69, mobilem: 0.7, mobilel: 0.8, tablet: 1.1, laptop1024: 1.5, laptop1440: 1.5, laptop4k: 1.5 }],
    ciclo: "Degradación",
    hitos: [
      { fecha: [{ vigencia: "2001", vinculo: "/el-exodo" }], titulo_hito: [{ titulo: "El éxodo" }], pq: "", pt: "", ci: "", ap: "", esc_1: "c_nh_esclarecimiento_1", esc_2: "c_nh_esclarecimiento_2", esc_3: "", esc_4: "", esc_5: "c_nh_esclarecimiento_5", esc_6: "", esc_7: "", esc_8: "", esc_9: "", esc_10: "" },
      { fecha: [{ vigencia: "1999", vinculo: "/el-caguan" }], titulo_hito: [{ titulo: "El Caguán" }], pq: "", pt: "", ci: "", ap: "", esc_1: "c_nh_esclarecimiento_1", esc_2: "", esc_3: "c_nh_esclarecimiento_3", esc_4: "", esc_5: "", esc_6: "c_nh_esclarecimiento_6", esc_7: "", esc_8: "", esc_9: "", esc_10: "" },
      { fecha: [{ vigencia: "1998", vinculo: "/proceso-8000" }], titulo_hito: [{ titulo: "Proceso 8000" }], pq: "", pt: "", ci: "", ap: "", esc_1: "", esc_2: "", esc_3: "c_nh_esclarecimiento_3", esc_4: "", esc_5: "", esc_6: "", esc_7: "", esc_8: "", esc_9: "", esc_10: "" },
      { fecha: [{ vigencia: "1993", vinculo: "/de-los-pepes-las-auc-0" }], titulo_hito: [{ titulo: "De Los Pepes a las AUC" }], pq: "", pt: "", ci: "", ap: "", esc_1: "c_nh_esclarecimiento_1", esc_2: "", esc_3: "c_nh_esclarecimiento_3", esc_4: "c_nh_esclarecimiento_4", esc_5: "c_nh_esclarecimiento_5", esc_6: "", esc_7: "", esc_8: "", esc_9: "", esc_10: "" },
      { fecha: [{ vigencia: "1991", vinculo: "/la-constituyente" }], titulo_hito: [{ titulo: "La Constituyente" }], pq: "", pt: "", ci: "", ap: "c_nh_apertura", esc_1: "", esc_2: "", esc_3: "c_nh_esclarecimiento_3", esc_4: "", esc_5: "", esc_6: "c_nh_esclarecimiento_6", esc_7: "", esc_8: "", esc_9: "", esc_10: "" }
    ]
  },
  {
    numero_semicirculos: 2,
    identificacion_periodo: "periodo_cuatro",
    titulo: "Segundo periodo",
    datanid: 2083,
    fecha: "1978-1991",
    descripcion: "¿Cómo se conectan las distintas guerras con el conflicto armado como columna vertebral?",
    escala_xy: [{ mobiles: 0.78, mobilem: 0.85, mobilel: 1, tablet: 1.44, laptop1024: 1.9, laptop1440: 1.9, laptop4k: 1.9 }],
    ciclo: "Escalamiento",
    hitos: [
      { fecha: [{ vigencia: "1984", vinculo: "/la-guerra-sucia" }], titulo_hito: [{ titulo: "La guerra sucia" }], pq: "", pt: "", ci: "", ap: "", esc_1: "c_nh_esclarecimiento_1", esc_2: "c_nh_esclarecimiento_2", esc_3: "c_nh_esclarecimiento_3", esc_4: "", esc_5: "", esc_6: "", esc_7: "", esc_8: "", esc_9: "", esc_10: "" },
      { fecha: [{ vigencia: "1983", vinculo: "/la-paz-de-betancur" }], titulo_hito: [{ titulo: "Proceso de paz de Betancur" }], pq: "", pt: "", ci: "", ap: "", esc_1: "c_nh_esclarecimiento_1", esc_2: "", esc_3: "", esc_4: "", esc_5: "", esc_6: "c_nh_esclarecimiento_6", esc_7: "", esc_8: "", esc_9: "", esc_10: "" },
      { fecha: [{ vigencia: "1978", vinculo: "/el-espejismo-de-la-revolucion" }], titulo_hito: [{ titulo: "El espejismo de la revolución" }], pq: "", pt: "", ci: "c_nh_cierre", ap: "", esc_1: "", esc_2: "", esc_3: "", esc_4: "c_nh_esclarecimiento_4", esc_5: "c_nh_esclarecimiento_5", esc_6: "", esc_7: "", esc_8: "", esc_9: "", esc_10: "" },
    ]
  },
  {
    numero_semicirculos: 2,
    identificacion_periodo: "periodo_cinco",
    titulo: "Primer periodo",
    datanid: 2082,
    fecha: "1958-1977",
    descripcion: "¿Por qué un pacto de paz como el Frente Nacional engendró otra guerra?",
    escala_xy: [{ mobiles: 1.02, mobilem: 1.1, mobilel: 1.35, tablet: 1.9, laptop1024: 2.5, laptop1440: 2.5, laptop4k: 2.5 }],
    ciclo: "Desarrollo",
    hitos: [
      { fecha: [{ vigencia: "1977", vinculo: "/paro-civico" }], titulo_hito: [{ titulo: "Paro cívico" }], pq: "", pt: "", ci: "", ap: "c_nh_apertura", esc_1: "", esc_2: "", esc_3: "", esc_4: "c_nh_esclarecimiento_4", esc_5: "", esc_6: "", esc_7: "", esc_8: "", esc_9: "", esc_10: "" },
      { fecha: [{ vigencia: "1970", vinculo: "/el-fraude" }], titulo_hito: [{ titulo: "El Fraude" }], pq: "", pt: "", ci: "", ap: "", esc_1: "", esc_2: "", esc_3: "c_nh_esclarecimiento_3", esc_4: "", esc_5: "", esc_6: "", esc_7: "", esc_8: "", esc_9: "", esc_10: "" },
      { fecha: [{ vigencia: "1966", vinculo: "/vetos-regionales-la-reforma-agraria" }], titulo_hito: [{ titulo: "Vetos regionales a la reforma agraria" }], pq: "", pt: "", ci: "", ap: "", esc_1: "", esc_2: "", esc_3: "", esc_4: "", esc_5: "c_nh_esclarecimiento_5", esc_6: "", esc_7: "", esc_8: "", esc_9: "", esc_10: "" },
      { fecha: [{ vigencia: "1964", vinculo: "/operacion-soberania-en-marquetalia" }], titulo_hito: [{ titulo: "Operación Soberanía" }], pq: "", pt: "", ci: "", ap: "", esc_1: "c_nh_esclarecimiento_1", esc_2: "", esc_3: "", esc_4: "c_nh_esclarecimiento_4", esc_5: "", esc_6: "", esc_7: "", esc_8: "", esc_9: "", esc_10: "" },
      { fecha: [{ vigencia: "1959", vinculo: "/pactos-de-paz" }], titulo_hito: [{ titulo: "52 Pactos de Paz" }], pt: "", ci: "", ap: "", esc_1: "", esc_2: "", esc_3: "", esc_4: "", esc_5: "c_nh_esclarecimiento_5", esc_6: "c_nh_esclarecimiento_6", esc_7: "", esc_8: "", esc_9: "", esc_10: "" },
      { fecha: [{ vigencia: "1958", vinculo: "/frente-nacional" }], titulo_hito: [{ titulo: "Frente Nacional" }], pq: "", pt: "", ci: "", ap: "c_nh_apertura", esc_1: "", esc_2: "", esc_3: "c_nh_esclarecimiento_3", esc_4: "c_nh_esclarecimiento_4", esc_5: "", esc_6: "c_nh_esclarecimiento_6", esc_7: "", esc_8: "", esc_9: "", esc_10: "" }
    ]
  },
  {
    numero_semicirculos: 2,
    identificacion_periodo: "periodo_seis",
    titulo: "Antecedentes",
    datanid: 2081,
    fecha: "1920-1958",
    descripcion: "Este es un período de contexto que permite explicar la manera cómo se imbrican los hechos que desataron la guerra en Colombia.",
    escala_xy: [{ mobiles: 1.4, mobilem: 1.5, mobilel: 1.6, tablet: 2.5, laptop1024: 3, laptop1440: 3, laptop4k: 3 }],
    ciclo: "",
    hitos: [
      { fecha: [{ vigencia: "1954", vinculo: "/villarrica" }], titulo_hito: [{ titulo: "Villarica" }], pq: "", pt: "", ci: "c_nh_cierre", ap: "", esc_1: "", esc_2: "c_nh_esclarecimiento_2", esc_3: "c_nh_esclarecimiento_3", esc_4: "c_nh_esclarecimiento_4", esc_5: "", esc_6: "c_nh_esclarecimiento_6", esc_7: "", esc_8: "", esc_9: "", esc_10: "" },
      { fecha: [{ vigencia: "1948", vinculo: "/la-guerra-civil" }], titulo_hito: [{ titulo: "La guerra civil" }], pq: "", pt: "", ci: "", ap: "", esc_1: "", esc_2: "c_nh_esclarecimiento_2", esc_3: "", esc_4: "", esc_5: "", esc_6: "", esc_7: "", esc_8: "", esc_9: "", esc_10: "" },
      { fecha: [{ vigencia: "1928", vinculo: "/los-peones-bananeros" }], titulo_hito: [{ titulo: "Los peones bananeros" }], pq: "", pt: "", ci: "", ap: "", esc_1: "", esc_2: "c_nh_esclarecimiento_2", esc_3: "", esc_4: "c_nh_esclarecimiento_4", esc_5: "c_nh_esclarecimiento_5", esc_6: "", esc_7: "", esc_8: "", esc_9: "", esc_10: "" },

    ]
  }

];

const datos_generales = [
  {
    espiral_natural: [
      {
        descripcion: [{ titulo: "No Matarás", fecha: "Relato histórico del conflicto armado interno en Colombia", descripcion: "No Matarás intenta responder a las preguntas sobre el origen del conflicto, su desarrollo y la actuación de los diferentes involucrados. Busca la comprensión de la violencia política, sus transformaciones y degradación, así como su persistencia, a pesar de los múltiples esfuerzos pacifistas y de los avances hacia la democracia y la convivencia." }],
        modal: [{ dataind:2080 }],
        modal_carteles: [{ dataind:177}]
      }
    ],
    espiral_ciclos_guerra: [
      {
        descripcion: [{ titulo: "Ciclos de Guerra", fecha: "", descripcion: " Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas" }],
        opcion1: [{ subtitulo: "Desarrollo", descripcion: "Desarrollo Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500", dataind: 160}],
        opcion2: [{ subtitulo: "Escalamiento", descripcion: "Escalamiento Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500", dataind: 161 }],
        opcion3: [{ subtitulo: "Degradación", descripcion: "Degradacion Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500", dataind: 162 }],
        opcion4: [{ subtitulo: "Punto Quiebre", descripcion: "Punto Quiebre Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500", dataind: 163 }],
        opcion5: [{ subtitulo: "Punto Transicion", descripcion: "Punto Transicion Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500", dataind: 164}],
        modal: [{ dataind :"478"}]
      }
    ],
    espiral_cierres_aperturas: [
      {
        descripcion: [{ titulo: "Democracia: aperturas y cierres", fecha: "", descripcion: "No Matarás presenta un relato político de Colombia en el marco del conflicto armado interno. En él encontramos momentos de apertura y avance democrático, y momentos de cierre del régimen político." }],
        opcion1: [{ subtitulo: "Apertura", descripcion: "En el relato histórico de la Comisión de la Verdad resulta claro como las aperturas democráticas coinciden con momentos de paz.", dataind: 165}],
        opcion2: [{ subtitulo: "Cierre", descripcion: "En el relato histórico de la Comisión de la Verdad las aperturas democráticas coinciden con momentos de paz, mientras los cierres democráticos tienen una correlación directa con el origen o la agudización y degradación de la violencia.", dataind: 166}],
        modal: [{dataind :"479" }]
      }
    ],
    espiral_esclarecimiento: [
      {
        descripcion: [{ titulo: "Conclusiones", fecha: "", descripcion: "¿Para qué reflexionar sobre el pasado?"}],
        opcion1: [{  subtitulo: "La guerra", descripcion: "En la segunda mitad del siglo XX comenzó una guerra irregular en la que las guerrillas intentaron destruir el sistema capitalista mientras las fuerzas de la contrainsurgencia protegieron el statu quo.", dataind: 2107 }],
        opcion2: [{  subtitulo: "Las víctimas", descripcion: "Este conflicto terminó sin vencedores –aunque sí con beneficiarios– y con un saldo de víctimas de proporciones bíblicas: más de 9 millones, de las cuales por lo menos medio millón perdieron la vida.", dataind: 2108 }],
        opcion3: [{  subtitulo: "Los actores", descripcion: "La guerra en Colombia se configuró desde el campo político y desde ahí se condujo la acción militar. Fue una guerra en la que el uso de la violencia se reguló o desreguló de acuerdo con la consecución de objetivos o intereses relativos al poder.", dataind: 2109 }],
        opcion4: [{  subtitulo: "El modelo de seguridad y defensa", descripcion: "El Estado colombiano ha sido moldeado para la guerra. Las instituciones, con notables excepciones, actúan con marcos discursivos de guerra.", dataind: 2110 }],
        opcion5: [{  subtitulo: "La tierra y el territorio", descripcion: "La tierra en Colombia ha sido un factor de acumulación de poder político y económico.", dataind: 2111 }],
        opcion6: [{  subtitulo: "La paz", descripcion: "Los momentos donde se han hecho acuerdos de paz han sido los más democratizadores y modernizantes para Colombia", dataind: 2112 }],
        opcion7: [{  subtitulo: "Esclarecimiento 7", descripcion: "Esclarecimiento 7 Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500", dataind: 173 }],
        opcion8: [{  subtitulo: "Esclarecimiento 8", descripcion: "Esclarecimiento 8 Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500", dataind: 174 }],
        opcion9: [{  subtitulo: "Esclarecimiento 9", descripcion: "Esclarecimiento 9 Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500", dataind: 175 }],
        opcion10: [{ subtitulo: "Esclarecimiento 10", descripcion: "Esclarecimiento 10 Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500", dataind: 176 }],
        modal: [{ dataind :"480" }]
      }
    ],
    factor_escalamiento_spiral: [
      { mobiles: 0.4, mobilem: 0.6, mobilel: 0.6, tablet: 0.72, laptop1024: 1, laptop1440: 1, laptop4k: 1 }
    ],
    audio_home: [
      // { audio: "../assets/01_home_espiral.mp3", volumen: 0.5 }
      { volumen: 0.5 }
    ]
  }];


function prepararInsertarHito() {

  clase_ci = datos_periodo[i].hitos[contador_hitos_posicionados].ci;
  clase_ap = datos_periodo[i].hitos[contador_hitos_posicionados].ap;
  clase_esc_uno = datos_periodo[i].hitos[contador_hitos_posicionados].esc_1;
  clase_esc_dos = datos_periodo[i].hitos[contador_hitos_posicionados].esc_2;
  clase_esc_tres = datos_periodo[i].hitos[contador_hitos_posicionados].esc_3;
  clase_esc_cuatro = datos_periodo[i].hitos[contador_hitos_posicionados].esc_4;
  clase_esc_cinco = datos_periodo[i].hitos[contador_hitos_posicionados].esc_5;
  clase_pq = datos_periodo[i].hitos[contador_hitos_posicionados].pq;
  clase_pt = datos_periodo[i].hitos[contador_hitos_posicionados].pt;
  clase_esc_seis = datos_periodo[i].hitos[contador_hitos_posicionados].esc_6;
  clase_esc_siete = datos_periodo[i].hitos[contador_hitos_posicionados].esc_7;
  clase_esc_ocho = datos_periodo[i].hitos[contador_hitos_posicionados].esc_8;
  clase_esc_nueve = datos_periodo[i].hitos[contador_hitos_posicionados].esc_9;
  clase_esc_diez = datos_periodo[i].hitos[contador_hitos_posicionados].esc_10;
}


/*******************************************
 * Función para crear hitos dinámicamente  *
 ******************************************/
function insertarHito(incremento, controla_hitos_insertados, clase_ci, clase_ap, clase_esc_uno, clase_te, clase_si, clase_pa, clase_na, clase_pq, clase_pt, clase_esc_seis, clase_esc_siete, clase_esc_ocho, clase_esc_nueve, clase_esc_diez) {

  span_hito = document.createElement("span");
  span_hito.setAttribute("id", "id_nh_span_hito_" + incremento + "_" + controla_hitos_insertados);
  clase_span_hito = "icono" + " " + "c_nh_span_hito_" + incremento + "_" + controla_hitos_insertados;
  span_hito.setAttribute("class", clase_span_hito);

  i_hito = document.createElement("i");
  i_hito.setAttribute("id", "id_nh_hito_" + incremento + "_" + controla_hitos_insertados);
  i_hito.setAttribute("class", "bi bi-circle-fill" + " " + "c_nh_color_hito_natural" + " " + "c_nh_hito_" + incremento + "_" + controla_hitos_insertados);
  i_hito.setAttribute("data-eshito", "");
  i_hito.setAttribute("data-clasecolorhitoopaco", "c_nh_color_hito_opaco");
  i_hito.setAttribute("data-clasecolorhitonatural", "c_nh_color_hito_natural");

  //Cierres y Aperturas
  i_hito.setAttribute("data-clasecolorcierre", clase_ci);
  i_hito.setAttribute("data-clasecolorapertura", clase_ap);

  // Esclarecimiento
  i_hito.setAttribute("data-escuno", clase_esc_uno);
  i_hito.setAttribute("data-escdos", clase_esc_dos);
  i_hito.setAttribute("data-esctres", clase_esc_tres);
  i_hito.setAttribute("data-esccuatro", clase_esc_cuatro);
  i_hito.setAttribute("data-esccinco", clase_esc_cinco);
  i_hito.setAttribute("data-escseis", clase_esc_seis);
  i_hito.setAttribute("data-escsiete", clase_esc_siete);
  i_hito.setAttribute("data-escocho", clase_esc_ocho);
  i_hito.setAttribute("data-escnueve", clase_esc_nueve);
  i_hito.setAttribute("data-escdiez", clase_esc_diez);

  // Ciclos de Guerra
  i_hito.setAttribute("data-puntoquiebre", clase_pq);
  i_hito.setAttribute("data-puntotransicion", clase_pt);
  span_hito.appendChild(i_hito);

  return span_hito;
}


function establecerColorHitoFiltro(selector_hito, operacion_clase, opcion_clase) {

  hitos_seleccionados = document.querySelectorAll(selector_hito);
  for (let index = 0; index < hitos_seleccionados.length; index++) {

    atributo_id_hito = hitos_seleccionados[index].getAttribute("id");
    id_hito = document.getElementById(atributo_id_hito);
    clase_color_opaco = id_hito.dataset.clasecolorhitoopaco;
    clase_color_natural = id_hito.dataset.clasecolorhitonatural;
    clase_color_cierre = id_hito.dataset.clasecolorcierre;
    clase_color_apertura = id_hito.dataset.clasecolorapertura;
    clase_color_esclarecimiento_1 = id_hito.dataset.escuno;
    clase_color_esclarecimiento_2 = id_hito.dataset.escdos;
    clase_color_esclarecimiento_3 = id_hito.dataset.esctres;
    clase_color_esclarecimiento_4 = id_hito.dataset.esccuatro;
    clase_color_esclarecimiento_5 = id_hito.dataset.esccinco;
    clase_color_esclarecimiento_6 = id_hito.dataset.escseis;
    clase_color_esclarecimiento_7 = id_hito.dataset.escsiete;
    clase_color_esclarecimiento_8 = id_hito.dataset.escocho;
    clase_color_esclarecimiento_9 = id_hito.dataset.escnueve;
    clase_color_esclarecimiento_10 = id_hito.dataset.escdiez;
    clase_color_punto_transicion = id_hito.dataset.puntotransicion;
    clase_color_punto_quiebre = id_hito.dataset.puntoquiebre;

    // 0  remover clase    - 1 adicionar clase
    if (operacion_clase == 0) {
      if (opcion_clase == "color_natural") {
        id_hito.classList.remove(clase_color_natural);
      }
      if (opcion_clase == "color_opaco") {
        id_hito.classList.remove(clase_color_opaco);
      }
      if (opcion_clase == "color_apertura") {
        id_hito.classList.remove(clase_color_apertura);
      }
      if (opcion_clase == "color_cierre") {
        id_hito.classList.remove(clase_color_cierre);
      }
      if (opcion_clase == "color_esclarecimiento_1") {
        id_hito.classList.remove(clase_color_esclarecimiento_1);
      }
      if (opcion_clase == "color_esclarecimiento_2") {
        id_hito.classList.remove(clase_color_esclarecimiento_2);
      }
      if (opcion_clase == "color_esclarecimiento_3") {
        id_hito.classList.remove(clase_color_esclarecimiento_3);
      }
      if (opcion_clase == "color_esclarecimiento_4") {
        id_hito.classList.remove(clase_color_esclarecimiento_4);
      }
      if (opcion_clase == "color_esclarecimiento_5") {
        id_hito.classList.remove(clase_color_esclarecimiento_5);
      }
      if (opcion_clase == "color_esclarecimiento_6") {
        id_hito.classList.remove(clase_color_esclarecimiento_6);
      }
      if (opcion_clase == "color_esclarecimiento_7") {
        id_hito.classList.remove(clase_color_esclarecimiento_7);
      }
      if (opcion_clase == "color_esclarecimiento_8") {
        id_hito.classList.remove(clase_color_esclarecimiento_8);
      }
      if (opcion_clase == "color_esclarecimiento_9") {
        id_hito.classList.remove(clase_color_esclarecimiento_9);
      }
      if (opcion_clase == "color_esclarecimiento_10") {
        id_hito.classList.remove(clase_color_esclarecimiento_10);
      }
      if (opcion_clase == "color_punto_transicion") {
        id_hito.classList.remove(clase_color_punto_transicion);
      }
      if (opcion_clase == "color_punto_quiebre") {
        id_hito.classList.remove(clase_color_punto_quiebre);
      }

    }
    else {
      if (opcion_clase == "color_natural") {
        id_hito.classList.add(clase_color_natural);
      }
      if (opcion_clase == "color_opaco") {
        id_hito.classList.add(clase_color_opaco);
      }
      if (opcion_clase == "color_apertura") {
        id_hito.classList.add(clase_color_apertura);
      }
      if (opcion_clase == "color_cierre") {
        id_hito.classList.add(clase_color_cierre);
      }
      if (opcion_clase == "color_esclarecimiento_1") {
        id_hito.classList.add(clase_color_esclarecimiento_1);
      }
      if (opcion_clase == "color_esclarecimiento_2") {
        id_hito.classList.add(clase_color_esclarecimiento_2);
      }
      if (opcion_clase == "color_esclarecimiento_3") {
        id_hito.classList.add(clase_color_esclarecimiento_3);
      }
      if (opcion_clase == "color_esclarecimiento_4") {
        id_hito.classList.add(clase_color_esclarecimiento_4);
      }
      if (opcion_clase == "color_esclarecimiento_5") {
        id_hito.classList.add(clase_color_esclarecimiento_5);
      }
      if (opcion_clase == "color_esclarecimiento_6") {
        id_hito.classList.add(clase_color_esclarecimiento_6);
      }
      if (opcion_clase == "color_esclarecimiento_7") {
        id_hito.classList.add(clase_color_esclarecimiento_7);
      }
      if (opcion_clase == "color_esclarecimiento_8") {
        id_hito.classList.add(clase_color_esclarecimiento_8);
      }
      if (opcion_clase == "color_esclarecimiento_9") {
        id_hito.classList.add(clase_color_esclarecimiento_9);
      }
      if (opcion_clase == "color_esclarecimiento_10") {
        id_hito.classList.add(clase_color_esclarecimiento_10);
      }
      if (opcion_clase == "color_punto_transicion") {
        id_hito.classList.add(clase_color_punto_transicion);
      }
      if (opcion_clase == "color_punto_quiebre") {
        id_hito.classList.add(clase_color_punto_quiebre);
      }
    }

  }

}


function restablecerColorNaturalHitos() {
  establecerColorHitoFiltro('i[data-eshito]', 1, "color_natural");

}

// REVISAR
function establecerColorSombraHitoFiltro(selector_hito, sombra, ancho_sombra) {
  hitos_seleccionados = document.querySelectorAll(selector_hito);
  for (let index = 0; index < hitos_seleccionados.length; index++) {
    id_hito = hitos_seleccionados[index].getAttribute("id");
    id_hito_filtro = document.getElementById(id_hito);
    id_hito_filtro.setAttribute("stroke", sombra);
    id_hito_filtro.setAttribute("stroke-width", ancho_sombra);
  }
}

function prepararInsertarFechaHito() {

  // Insertar Fecha hito
  fecha_hito = datos_periodo[i].hitos[contador_hitos_posicionados].fecha[0].vigencia;
  vinculo_hito = datos_periodo[i].hitos[contador_hitos_posicionados].fecha[0].vinculo;

  // titulo de la fecha del hito
  titulo_hito = datos_periodo[i].hitos[contador_hitos_posicionados].titulo_hito[0].titulo;

}


/***********************************************************
 * Función para crear las fechas de los hitos dinámicamente*
 **********************************************************/

function insertaFechaHito(incremento, controla_hitos_insertados, titulo_hito, vinculo_hito, fecha_hito) {
  margen_derecha = 0;
  margen_abajo = 0;

  // Crear hipervinculo para el hito
  elemento_ancla_hito = document.createElement("a");
  elemento_ancla_hito.setAttribute("id", "id_ancla_hito_" + incremento + "_" + controla_hitos_insertados);
  elemento_ancla_hito.setAttribute("class", "c_nh_ancla_hito_" + incremento + "_" + controla_hitos_insertados + " " + "c_fecha");
  elemento_ancla_hito.setAttribute("href", vinculo_hito);


  elemento_ancla_hito.setAttribute("data-titulo", titulo_hito);
  elemento_ancla_hito.setAttribute("data-identificacion_ancla", "");
  elemento_ancla_hito.setAttribute("data-bs-toggle", "");
  elemento_ancla_hito.setAttribute("data-bs-target", "");

  elemento_ancla_hito.setAttribute("aria-label", fecha_hito);
  elemento_ancla_hito.setAttribute("onmouseover", "describirHito()");
  elemento_ancla_hito.setAttribute("onmouseout", "eliminarDescribirHito()");

  // Crear span para los tooltips de las fechas del hito e incluirlo en el ancla
  let contenedor_tooltip_fecha = document.createElement("span");
  id_tooltip_fecha = "id_nh_tooltip_fecha_" + incremento + "_" + controla_hitos_insertados;

  contenedor_tooltip_fecha.setAttribute("id", id_tooltip_fecha);
  contenedor_tooltip_fecha.setAttribute("data-textotooltipfecha", titulo_hito);
  elemento_ancla_hito.appendChild(contenedor_tooltip_fecha);

  return elemento_ancla_hito;
}

function establecerFactorEscalamientoNatural() {

  // configurar el factor de escalamiento según tamaño del dispositivo
  if (screenWidth >= 320 && screenWidth <= 374) {
    xy = datos_generales[0].factor_escalamiento_spiral[0].mobiles;
  }

  if (screenWidth >= 375 && screenWidth <= 424) {
    xy = datos_generales[0].factor_escalamiento_spiral[0].mobilem;
  }

  if (screenWidth >= 425 && screenWidth <= 767) {
    xy = datos_generales[0].factor_escalamiento_spiral[0].mobilel;
  }

  if (screenWidth >= 768 && screenWidth <= 1023) {
    xy = datos_generales[0].factor_escalamiento_spiral[0].tablet;
  }

  if (screenWidth >= 1024 && screenWidth <= 1439) {
    xy = datos_generales[0].factor_escalamiento_spiral[0].laptop1024;
  }

  if (screenWidth >= 1440 && screenWidth <= 2559) {
    xy = datos_generales[0].factor_escalamiento_spiral[0].laptop1440;
  }

  if (screenWidth >= 2560) {
    xy = datos_generales[0].factor_escalamiento_spiral[0].laptop4k;
  }

  // Realizar transformacion
  id_contenedor_general_circulos.style.transition = `all 4s`
  id_contenedor_general_circulos.style.transform = `scale(${xy})`;
}

function regresarEstadoNatural() {
  //Estado natural de la espiral
  estado_espiral = 0;

  // Visibilizar titulo de narrativa
  titulo_narrativa.style.visibility = "hidden";

  // configurar el factor de escalamiento según tamaño del dispositivo
  establecerFactorEscalamientoNatural();

  if ((menu_filtro == 0)) {
    //  Titulo y descripcion de la espiral en estado natural
    if(datos_generales[0].espiral_natural[0].descripcion[0].titulo !== undefined)
      id_titulo_periodo.innerText = datos_generales[0].espiral_natural[0].descripcion[0].titulo;
    if(datos_generales[0].espiral_natural[0].descripcion[0].fecha !== undefined)
      id_fecha_periodo.innerText = datos_generales[0].espiral_natural[0].descripcion[0].fecha;
    if(datos_generales[0].espiral_natural[0].descripcion[0].descripcion !== undefined)
      id_descripcion_periodo.innerText = datos_generales[0].espiral_natural[0].descripcion[0].descripcion;

    jQuery('#id_nh_modal_descripciones').data('nid', '2080');



    //Remover la clase de color de acercamiento
    selector_fondo = 'div[data-identificacion_periodo]';
    clase_color_parte_uno = "c_nh_circulo_";
    clase_color_parte_dos = "_color_acercamiento";
    operacion_clase = 0; // 0 remover clase
    establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos, operacion_clase);

  }

}

/***********************************************************
 * Función para realizar acercamiento a los periodos
 **********************************************************/
function realizarAcercamiento() {
  jQuery('.volver.hidden').toggleClass('hidden');
  // Estado de espiral en acercamiento
  estado_espiral = 1;

  // Visibilizar titulo de narrativa
  titulo_narrativa.style.visibility = "visible";

  // Realizar acercamiento en estado natural  y filtros
  if (estado_espiral == 1) {

    // configurar el factor de escalamiento según tamaño del dispositivo
    if (screenWidth >= 320 && screenWidth <= 374) {
      xy = event.target.dataset.escalaxymobiles;
    }

    if (screenWidth >= 375 && screenWidth <= 424) {
      xy = event.target.dataset.escalaxymobilem;
    }

    if (screenWidth >= 425 && screenWidth <= 767) {
      xy = event.target.dataset.escalaxymobilel;
    }

    if (screenWidth >= 768 && screenWidth <= 1023) {
      xy = event.target.dataset.escalaxytablet;
    }

    if (screenWidth >= 1024 && screenWidth <= 1439) {
      xy = event.target.dataset.escalaxylaptop1024;
    }

    if (screenWidth >= 1440 && screenWidth <= 2559) {
      xy = event.target.dataset.escalaxylaptop1440;
    }

    if (screenWidth >= 2560) {
      xy = event.target.dataset.escalaxylaptop1440;
    }

    // Realizar transformacion
    id_contenedor_general_circulos.style.transition = `all 4s`
    id_contenedor_general_circulos.style.transform = `scale(${xy})`;

    //if ((menu_filtro == 0)) {

      // Ajustar titulo de acuerdo al periodo
      if(event.target.dataset.tituloperiodo !== undefined)
        //id_titulo_periodo.innerText = event.target.dataset.tituloperiodo;
        jQuery('#id_titulo_periodo').html(event.target.dataset.tituloperiodo);
      if(event.target.dataset.fechaperiodo !== undefined)
        id_fecha_periodo.innerText = event.target.dataset.fechaperiodo;
      if(event.target.dataset.descripcionperiodo !== undefined)
        id_descripcion_periodo.innerText = event.target.dataset.descripcionperiodo;
      jQuery('#id_nh_modal_descripciones').data('nid', event.target.dataset.nid);
      //id_nh_modal_descripciones.setAttribute("data-nid", event.target.dataset.nid);


      //Remover la clase de color de acercamiento
      selector_fondo = 'div[data-identificacion_periodo]';
      clase_color_parte_uno = "c_nh_circulo_";
      clase_color_parte_dos = "_color_acercamiento";
      operacion_clase = 0; // 0 remover clase
      establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos, operacion_clase);


      //Adicionar color de acercamiento al periodo especifico
      identificacion_periodo_acercamiento = event.target.getAttribute("data-identificacion_periodo");
      selector_fondo = 'div[data-identificacion_periodo=' + identificacion_periodo_acercamiento + ']';
      clase_color_parte_uno = "c_nh_circulo_";
      clase_color_parte_dos = "_color_acercamiento";
      operacion_clase = 1; // 0 remover clase
      establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos, operacion_clase);

    //}


  }

}




function establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos, operacion_clase) {
  divisiones_filtro = document.querySelectorAll(selector_fondo);
  for (let index = 0; index < divisiones_filtro.length; index++) {

    atributo_id_division = divisiones_filtro[index].getAttribute("id");
    indice = atributo_id_division.slice(14);
    id_division = document.getElementById(atributo_id_division);
    clase = clase_color_parte_uno + indice + clase_color_parte_dos;
    if (operacion_clase == 0) {
      id_division.classList.remove(clase);
    }
    else {
      id_division.classList.add(clase);
    }

  }
}


function mostrarToolTip() {

  if (event.target.hasAttribute("data-identificacion_periodo")) {

    span_division = event.target.children[0];

    //Estado natural espiral
    if ((menu_filtro == 0) || (menu_filtro == 2) || (menu_filtro == 3)) {
      span_division.innerText = span_division.dataset.textotooltipnatural;
    }

    // Estado ciclo de guerra
    if (menu_filtro == 1) {
      span_division.innerText = span_division.dataset.textotooltipciclo;
    }

    span_division.classList.add("tooltip-info");
    span_division.style.display = "block";

    // Dejar todos los titulos del periodo en la mitas
    span_division.style.top = '1vh';

  }

}


function removerToolTip() {

  if (event.target.hasAttribute("data-identificacion_periodo")) {
    span_division = event.target.children[0];
    span_division.classList.remove("tooltip-info");
    span_division.innerText = "";
  }

}


function describirHito() {

  if (event.target.hasAttribute("data-identificacion_ancla")) {
    span_fecha = event.target.children[0];
    span_fecha.classList.add("tooltip-fecha-info");
    span_fecha.innerText = span_fecha.dataset.textotooltipfecha;
    span_fecha.style.display = "block";

    var tops = window.getComputedStyle(
    event.target, ':before'
    ).getPropertyValue('margin-top');
    topspan = parseInt(tops) - span_fecha.clientHeight - 2;
    span_fecha.style.marginTop = topspan+'px';
    var lefts = window.getComputedStyle(
    event.target, ':before'
    ).getPropertyValue('margin-left');
    leftspan = parseInt(lefts) - span_fecha.clientWidth - 2;
    span_fecha.style.marginLeft = leftspan+'px';
  }
}

function eliminarDescribirHito() {
  if (event.target.hasAttribute("data-identificacion_ancla")) {
    span_fecha = event.target.children[0];
    span_fecha.classList.remove("tooltip-fecha-info");
    span_fecha.innerText = "";
  }
}


function configurarCiclosGuerra() {
  // Ajustar escalamiento a estado natural
  establecerFactorEscalamientoNatural();

  // titulo y descripcion de la espiral en estado ciclos de guerra
  if(datos_generales[0].espiral_ciclos_guerra[0].descripcion[0].titulo)
    id_titulo_periodo.innerText = datos_generales[0].espiral_ciclos_guerra[0].descripcion[0].titulo;
  if(datos_generales[0].espiral_ciclos_guerra[0].descripcion[0].fecha !== undefined)
    id_fecha_periodo.innerText = datos_generales[0].espiral_ciclos_guerra[0].descripcion[0].fecha;
  if(datos_generales[0].espiral_ciclos_guerra[0].descripcion[0].descripcion !== undefined)
    id_descripcion_periodo.innerText = datos_generales[0].espiral_ciclos_guerra[0].descripcion[0].descripcion;


  //Remover la clase de color de acercamiento
  selector_fondo = 'div[data-identificacion_periodo]';
  clase_color_parte_uno = "c_nh_circulo_";
  clase_color_parte_dos = "_color_acercamiento";
  operacion_clase = 0; // 0 remover clase
  establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos, operacion_clase);


  //Establecer color de acuerdo al ciclo
  selector_fondo = 'div[data-ciclo]';
  clase_color_parte_uno = "c_nh_circulo_";
  clase_color_parte_dos = "_color_ciclo";
  operacion_clase = 1; //1 para adicionar clase
  establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos, operacion_clase);

  //Remover clases de esclarecimiento para los hitos
  establecerColorHitoFiltro('i[data-escuno=c_nh_esclarecimiento_1]', 0, "color_esclarecimiento_1");
  establecerColorHitoFiltro('i[data-escdos=c_nh_esclarecimiento_2]', 0, "color_esclarecimiento_2");
  establecerColorHitoFiltro('i[data-esctres=c_nh_esclarecimiento_3]', 0, "color_esclarecimiento_3");
  establecerColorHitoFiltro('i[data-esccuatro=c_nh_esclarecimiento_4]', 0, "color_esclarecimiento_4");
  establecerColorHitoFiltro('i[data-esccinco=c_nh_esclarecimiento_5]', 0, "color_esclarecimiento_5");
  establecerColorHitoFiltro('i[data-escseis=c_nh_esclarecimiento_6]', 0, "color_esclarecimiento_6");
  establecerColorHitoFiltro('i[data-escsiete=c_nh_esclarecimiento_7]', 0, "color_esclarecimiento_7");
  establecerColorHitoFiltro('i[data-escocho=c_nh_esclarecimiento_8]', 0, "color_esclarecimiento_8");
  establecerColorHitoFiltro('i[data-escnueve=c_nh_esclarecimiento_9]', 0, "color_esclarecimiento_9");
  establecerColorHitoFiltro('i[data-escdiez=c_nh_esclarecimiento_10]', 0, "color_esclarecimiento_10");

  // Remover el color de hito punto de transicion
  establecerColorHitoFiltro('i[data-puntotransicion=c_nh_punto_transicion]', 0, "color_punto_transicion");

  // Remover  el color de hito punto de quiebre
  establecerColorHitoFiltro('i[data-puntoquiebre=c_nh_punto_quiebre]', 0, "color_punto_quiebre");

  // Remover  clase  color de Cierre
  establecerColorHitoFiltro('i[data-clasecolorcierre=c_nh_cierre]', 0, "color_cierre");

  // Remover  clase  color Apertura
  establecerColorHitoFiltro('i[data-clasecolorapertura=c_nh_apertura]', 0, "color_apertura");

  // Reestablecer color natural para los hitos
  establecerColorHitoFiltro('i[data-eshito]', 1, "color_natural");

}

function configurarCierresAperturas() {
  // Ajustar escalamiento a estado natural
  establecerFactorEscalamientoNatural();

  // titulo y descripcion de la espiral en estado cierres y aperturas . Activación de hitos correspondientes
  if(datos_generales[0].espiral_cierres_aperturas[0].descripcion[0].titulo !== undefined)
    id_titulo_periodo.innerText = datos_generales[0].espiral_cierres_aperturas[0].descripcion[0].titulo;
  if(datos_generales[0].espiral_cierres_aperturas[0].descripcion[0].fecha !== undefined)
    id_fecha_periodo.innerText = datos_generales[0].espiral_cierres_aperturas[0].descripcion[0].fecha;
  if(datos_generales[0].espiral_cierres_aperturas[0].descripcion[0].descripcion !== undefined)
    id_descripcion_periodo.innerText = datos_generales[0].espiral_cierres_aperturas[0].descripcion[0].descripcion;

  

  //Remover la clase de color de acercamiento
  selector_fondo = 'div[data-identificacion_periodo]';
  clase_color_parte_uno = "c_nh_circulo_";
  clase_color_parte_dos = "_color_acercamiento";
  operacion_clase = 0; // 0 remover clase
  establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos, operacion_clase);


  // Remover la clase color para todos los divs
  selector_fondo = 'div[data-ciclo]';
  clase_color_parte_uno = "c_nh_circulo_";
  clase_color_parte_dos = "_color_ciclo";
  operacion_clase = 0; // 0 para remover clase
  establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos, operacion_clase);


  // Establecer color opaco para todos los divs
  selector_fondo = 'div[data-ciclo]';
  clase_color_parte_uno = "c_nh_circulo_";
  clase_color_parte_dos = "_color_opaco";
  operacion_clase = 1; //1 para adicionar clase
  establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos, operacion_clase);

  // Remover clase de color natural para los hitos
  establecerColorHitoFiltro('i[data-eshito]', 0, "color_natural");

  //Remover clases de esclarecimiento
  establecerColorHitoFiltro('i[data-escuno=c_nh_esclarecimiento_1]', 0, "color_esclarecimiento_1");
  establecerColorHitoFiltro('i[data-escdos=c_nh_esclarecimiento_2]', 0, "color_esclarecimiento_2");
  establecerColorHitoFiltro('i[data-esctres=c_nh_esclarecimiento_3]', 0, "color_esclarecimiento_3");
  establecerColorHitoFiltro('i[data-esccuatro=c_nh_esclarecimiento_4]', 0, "color_esclarecimiento_4");
  establecerColorHitoFiltro('i[data-esccinco=c_nh_esclarecimiento_5]', 0, "color_esclarecimiento_5");
  establecerColorHitoFiltro('i[data-escseis=c_nh_esclarecimiento_6]', 0, "color_esclarecimiento_6");
  establecerColorHitoFiltro('i[data-escsiete=c_nh_esclarecimiento_7]', 0, "color_esclarecimiento_7");
  establecerColorHitoFiltro('i[data-escocho=c_nh_esclarecimiento_8]', 0, "color_esclarecimiento_8");
  establecerColorHitoFiltro('i[data-escnueve=c_nh_esclarecimiento_9]', 0, "color_esclarecimiento_9");
  establecerColorHitoFiltro('i[data-escdiez=c_nh_esclarecimiento_10]', 0, "color_esclarecimiento_10");

  // Remover el color de hito punto de transicion
  establecerColorHitoFiltro('i[data-puntotransicion=c_nh_punto_transicion]', 0, "color_punto_transicion");

  // Remover  el color de hito punto de quiebre
  establecerColorHitoFiltro('i[data-puntoquiebre=c_nh_punto_quiebre]', 0, "color_punto_quiebre");

  // Adicionar clase de color Opaco para los hitos
  establecerColorHitoFiltro('i[data-eshito]', 1, "color_opaco");

  //  Adicionar clase de Cierre
  establecerColorHitoFiltro('i[data-clasecolorcierre=c_nh_cierre]', 1, "color_cierre");

  // Adicionar clase Apertura
  establecerColorHitoFiltro('i[data-clasecolorapertura=c_nh_apertura]', 1, "color_apertura");


}


function configurarEsclarecimiento() {

  // Ajustar escalamiento a estado natural
  establecerFactorEscalamientoNatural();

  // titulo y descripcion de la espiral en estado esclarecimiento
  if(datos_generales[0].espiral_esclarecimiento[0].descripcion[0].titulo !== undefined)
    id_titulo_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].descripcion[0].titulo;
  if(datos_generales[0].espiral_esclarecimiento[0].descripcion[0].fecha !== undefined)
    id_fecha_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].descripcion[0].fecha;
  if(datos_generales[0].espiral_esclarecimiento[0].descripcion[0].descripcion !== undefined)
    id_descripcion_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].descripcion[0].descripcion;


  //Remover la clase de color de acercamiento
  selector_fondo = 'div[data-identificacion_periodo]';
  clase_color_parte_uno = "c_nh_circulo_";
  clase_color_parte_dos = "_color_acercamiento";
  operacion_clase = 0; // 0 remover clase
  establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos, operacion_clase);


  // Remover la clase color para todos los divs
  selector_fondo = 'div[data-ciclo]';
  clase_color_parte_uno = "c_nh_circulo_";
  clase_color_parte_dos = "_color_ciclo";
  operacion_clase = 0; // 0 para remover clase
  establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos, operacion_clase);


  // Establecer color opaco para todos los divs
  selector_fondo = 'div[data-ciclo]';
  clase_color_parte_uno = "c_nh_circulo_";
  clase_color_parte_dos = "_color_opaco";
  operacion_clase = 1; //1 para adicionar clase
  establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos, operacion_clase);

  // Remover clase de color natural para los hitos
  establecerColorHitoFiltro('i[data-eshito]', 0, "color_natural");

  // Remover clase de apertura
  establecerColorHitoFiltro('i[data-clasecolorapertura=c_nh_apertura]', 0, "color_apertura");

  // Remover clase de Cierre
  establecerColorHitoFiltro('i[data-clasecolorcierre=c_nh_cierre]', 0, "color_cierre");

  // Adicionar clase de color Opaco para los hitos
  establecerColorHitoFiltro('i[data-eshito]', 1, "color_opaco");

  // Adicionar clase Esclarecimiento
  establecerColorHitoFiltro('i[data-escuno=c_nh_esclarecimiento_1]', 1, "color_esclarecimiento_1");
  establecerColorHitoFiltro('i[data-escdos=c_nh_esclarecimiento_2]', 1, "color_esclarecimiento_2");
  establecerColorHitoFiltro('i[data-esctres=c_nh_esclarecimiento_3]', 1, "color_esclarecimiento_3");
  establecerColorHitoFiltro('i[data-esccuatro=c_nh_esclarecimiento_4]', 1, "color_esclarecimiento_4");
  establecerColorHitoFiltro('i[data-esccinco=c_nh_esclarecimiento_5]', 1, "color_esclarecimiento_5");
  establecerColorHitoFiltro('i[data-escseis=c_nh_esclarecimiento_6]', 1, "color_esclarecimiento_6");
  establecerColorHitoFiltro('i[data-escsiete=c_nh_esclarecimiento_7]', 1, "color_esclarecimiento_7");
  establecerColorHitoFiltro('i[data-escocho=c_nh_esclarecimiento_8]', 1, "color_esclarecimiento_8");
  establecerColorHitoFiltro('i[data-escnueve=c_nh_esclarecimiento_9]', 1, "color_esclarecimiento_9");
  establecerColorHitoFiltro('i[data-escdiez=c_nh_esclarecimiento_10]', 1, "color_esclarecimiento_10");


}

function configurarEstadoNatural() {
  jQuery('h6.volver').addClass('hidden');
  // titulo y descripcion de la espiral en estado natural
  if(datos_generales[0].espiral_natural[0].descripcion[0].titulo !== undefined)
    id_titulo_periodo.innerText = datos_generales[0].espiral_natural[0].descripcion[0].titulo;
  if(datos_generales[0].espiral_natural[0].descripcion[0].fecha !== undefined)
    id_fecha_periodo.innerText = datos_generales[0].espiral_natural[0].descripcion[0].fecha;
  if(datos_generales[0].espiral_natural[0].descripcion[0].descripcion !== undefined)
    id_descripcion_periodo.innerText = datos_generales[0].espiral_natural[0].descripcion[0].descripcion;


  //Remover la clase de color opaco
  selector_fondo = 'div[data-ciclo]';
  clase_color_parte_uno = "c_nh_circulo_";
  clase_color_parte_dos = "_color_opaco";
  operacion_clase = 0; // 0 remover clase
  establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos, operacion_clase);

  //Remover la clase de color de ciclo
  selector_fondo = 'div[data-ciclo]';
  clase_color_parte_uno = "c_nh_circulo_";
  clase_color_parte_dos = "_color_ciclo";
  operacion_clase = 0; // 0 remover clase
  establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos, operacion_clase);


  // Ajustar escalamiento a estado natural
  establecerFactorEscalamientoNatural();

  // Remover clase de apertura
  establecerColorHitoFiltro('i[data-clasecolorapertura=c_nh_apertura]', 0, "color_apertura");

  // Remover clase de Cierre
  establecerColorHitoFiltro('i[data-clasecolorcierre=c_nh_cierre]', 0, "color_cierre");
  //Remover clases de esclarecimiento
  establecerColorHitoFiltro('i[data-escuno=c_nh_esclarecimiento_1]', 0, "color_esclarecimiento_1");
  establecerColorHitoFiltro('i[data-escdos=c_nh_esclarecimiento_2]', 0, "color_esclarecimiento_2");
  establecerColorHitoFiltro('i[data-esctres=c_nh_esclarecimiento_3]', 0, "color_esclarecimiento_3");
  establecerColorHitoFiltro('i[data-esccuatro=c_nh_esclarecimiento_4]', 0, "color_esclarecimiento_4");
  establecerColorHitoFiltro('i[data-esccinco=c_nh_esclarecimiento_5]', 0, "color_esclarecimiento_5");
  establecerColorHitoFiltro('i[data-escseis=c_nh_esclarecimiento_6]', 0, "color_esclarecimiento_6");
  establecerColorHitoFiltro('i[data-escsiete=c_nh_esclarecimiento_7]', 0, "color_esclarecimiento_7");
  establecerColorHitoFiltro('i[data-escocho=c_nh_esclarecimiento_8]', 0, "color_esclarecimiento_8");
  establecerColorHitoFiltro('i[data-escnueve=c_nh_esclarecimiento_9]', 0, "color_esclarecimiento_9");
  establecerColorHitoFiltro('i[data-escdiez=c_nh_esclarecimiento_10]', 0, "color_esclarecimiento_10");

  // Remover el color de hito punto de transicion
  establecerColorHitoFiltro('i[data-puntotransicion=c_nh_punto_transicion]', 0, "color_punto_transicion");

  // Remover  el color de hito punto de quiebre
  establecerColorHitoFiltro('i[data-puntoquiebre=c_nh_punto_quiebre]', 0, "color_punto_quiebre");

  // Remover clase de color Opaco para los hitos
  establecerColorHitoFiltro('i[data-eshito]', 0, "color_opaco");

  // Adicionar clase de color natural para los hitos
  establecerColorHitoFiltro('i[data-eshito]', 1, "color_natural");

  jQuery('#id_nh_modal_descripciones').data('nid', '2080');


}


function configurarModal(id_modal_descripciones,id_modal){
  jQuery('#id_nh_modal_descripciones').data('nid', id_modal);
  //id_modal_descripciones.setAttribute("data-nid",id_modal);

}



function escucharAudioHome() {
  canPlay = !canPlay;
  if (canPlay == true) {
    icono_audio_home.classList.remove("c_nh_icono_audio_off");
    icono_audio_home.classList.add("c_nh_icono_audio_on");
    id_audio_home.muted = true;
    id_audio_home.pause();
  } else {
    icono_audio_home.classList.remove("c_nh_icono_audio_on");
    icono_audio_home.classList.add("c_nh_icono_audio_off");
    id_audio_home.muted = false;
    id_audio_home.volume = datos_generales[0].audio_home[0].volumen;
    id_audio_home.play();
  }

}

// Establecer tamaño del dispositivo
var screenWidth = screen.width;
var screenHeight = screen.height;


// Obtener id de la seccion de titulo estatico y ocultarlo en estado natural
titulo_narrativa = document.getElementById("id_nh_seccion_titulo_estatico");
titulo_narrativa.style.visibility = "hidden";


//soundControl = document.querySelector("#id_nh_icono_audio");
icono_audio_home = document.getElementById("id_nh_icono_audio");
icono_audio_home.addEventListener("click", escucharAudioHome, false);


canPlay = true;
//id_audio_home = document.getElementById("id_nh_audio_home_espiral");
id_audio_home = document.getElementById("id_nh_audio");
id_source_audio_home = document.getElementById("id_nh_source_audio_home_espiral");
// ver = datos_generales[0].audio_home[0].audio;
// id_source_audio_home.setAttribute("src",ver);


// Establecer listener para la flecha de reestablecimiento de espiral
flecha = document.getElementById("id_nh_flecha");
flecha.addEventListener("click", regresarEstadoNatural, false);

// Obtener identificador para titulo, fecha, descripcion del periodo
id_titulo_periodo = document.getElementById('id_titulo_periodo');
id_fecha_periodo = document.getElementById('id_fecha_periodo');
id_descripcion_periodo = document.getElementById('id_descripcion_periodo');
id_nh_modal_descripciones = document.getElementById('id_nh_modal_descripciones');



// Obtener contenedor general para eventos
id_contenedor_general_circulos = document.getElementById('id_contenedor_circulos');

// Obtener contenedor general para generar semicirculos
id_contenedor_circulos = document.getElementById('id_contenedor_circulos');

// Crear dinamicamente una hoja de estilo
estilo_narrativa = document.createElement("style");
document.head.appendChild(estilo_narrativa);
hoja_estilo_narrativa = estilo_narrativa.sheet;


// Generar semicirculos dinámicamente
i = 0;
incremento = 0;
const SVG_NS = "http://www.w3.org/2000/svg";


while (i < datos_periodo.length) {

  numero_semicirculos = datos_periodo[i].numero_semicirculos;
  numero_hitos = datos_periodo[i].hitos.length;
  hitos_dividido_semicirculos = Math.ceil(numero_hitos / numero_semicirculos);

  let division = document.createElement("div");

  // Caso hitos_semicirculos = 1
  diferencia = numero_semicirculos - numero_hitos;
  entro = false;
  cuenta_hitos = 0;

  // Caso hitos_semicirculos >= 2
  diferencia_hitos = numero_hitos;
  controla_hitos = hitos_dividido_semicirculos;

  //Contador de hitos posicionados
  contador_hitos_posicionados = 0;

  for (let j = 0; j < numero_semicirculos; j++) {

    contador_hitos_semicirculo = 0;
    controla_hitos_insertados = 0;

    // Atributos personalizados para el div
    escala_xy_mobiles = datos_periodo[i].escala_xy[0].mobiles;
    escala_xy_mobilem = datos_periodo[i].escala_xy[0].mobilem;
    escala_xy_mobilel = datos_periodo[i].escala_xy[0].mobilel;
    escala_xy_tablet = datos_periodo[i].escala_xy[0].tablet;
    escala_xy_laptop1024 = datos_periodo[i].escala_xy[0].laptop1024;
    escala_xy_laptop1440 = datos_periodo[i].escala_xy[0].laptop1440;
    escala_xy_laptop4k = datos_periodo[i].escala_xy[0].laptop4k;


    titulo_periodo = datos_periodo[i].titulo;
    fecha_periodo = datos_periodo[i].fecha;
    descripcion_periodo = datos_periodo[i].descripcion;
    nid_modal_periodo = datos_periodo[i].datanid;
    ciclo_periodo = datos_periodo[i].ciclo;
    color_ciclo = datos_periodo[i].color_ciclo;
    identificacion_periodo = datos_periodo[i].identificacion_periodo;


    // Configurar div actual con identificador y clase
    division.setAttribute("id", "id_nh_circulo_" + incremento);
    division.setAttribute("class", "c_nh_circulo_" + incremento);

    division.setAttribute("onclick", "realizarAcercamiento()");
    division.setAttribute("onmousemove", "mostrarToolTip()");
    division.setAttribute("onmouseout", "removerToolTip()");


    // configurar factor de escalamiento por periodo
    escala_xy_mobiles = datos_periodo[i].escala_xy[0].mobiles;
    escala_xy_mobilem = datos_periodo[i].escala_xy[0].mobilem;
    escala_xy_mobilel = datos_periodo[i].escala_xy[0].mobilel;
    escala_xy_tablet = datos_periodo[i].escala_xy[0].tablet;
    escala_xy_laptop1024 = datos_periodo[i].escala_xy[0].laptop1024;
    escala_xy_laptop1440 = datos_periodo[i].escala_xy[0].laptop1440;
    escala_xy_laptop4k = datos_periodo[i].escala_xy[0].laptop4k;


    // configurar factor de escalamiento por periodo
    division.setAttribute("data-escalaxymobiles", escala_xy_mobiles);
    division.setAttribute("data-escalaxymobilem", escala_xy_mobilem);
    division.setAttribute("data-escalaxymobilel", escala_xy_mobilel);
    division.setAttribute("data-escalaxytablet", escala_xy_tablet);
    division.setAttribute("data-escalaxylaptop1024", escala_xy_laptop1024);
    division.setAttribute("data-escalaxylaptop1440", escala_xy_laptop1440);
    division.setAttribute("data-escalaxylaptop4k", escala_xy_laptop4k);

    // Configurar titulos del periodo
    division.setAttribute("data-tituloperiodo", titulo_periodo);
    division.setAttribute("data-fechaperiodo", fecha_periodo);
    division.setAttribute("data-descripcionperiodo", descripcion_periodo);
    division.setAttribute("data-nid", nid_modal_periodo);


    // Configurar los ciclos de guerra
    division.setAttribute("data-ciclo", ciclo_periodo);

    // atributo de identificacion de eventos en tooltip  (identificación de un semicirculo)
    division.setAttribute("data-identificacion_periodo", identificacion_periodo);

    // Crear span para los tooltips e incluirlo en el div
    let contenedor_tooltip = document.createElement("span");
    id_tooltip = "id_nh_tooltip" + "_" + "div" + "_" + incremento;
    contenedor_tooltip.setAttribute("id", id_tooltip);
    contenedor_tooltip.setAttribute("data-textotooltipnatural", titulo_periodo);
    contenedor_tooltip.setAttribute("data-textotooltipciclo", ciclo_periodo);
    division.appendChild(contenedor_tooltip);

    // Incluir hitos dinámicamente en el div
    if (hitos_dividido_semicirculos == 1) {
      if ((diferencia == 0) && (!entro)) {
        controla_hitos_insertados++;

        prepararInsertarHito();
        span_hito = insertarHito(incremento, controla_hitos_insertados, clase_ci, clase_ap, clase_esc_uno, clase_esc_dos, clase_esc_tres, clase_esc_cuatro, clase_esc_cinco, clase_pq, clase_pt, clase_esc_seis, clase_esc_siete, clase_esc_ocho, clase_esc_nueve, clase_esc_diez);
        division.appendChild(span_hito);

        prepararInsertarFechaHito();
        elemento_ancla_hito = insertaFechaHito(incremento, controla_hitos_insertados, titulo_hito, vinculo_hito, fecha_hito);
        division.appendChild(elemento_ancla_hito);

        contador_hitos_posicionados++;

      } else {
        cuenta_hitos++;
        if (cuenta_hitos <= numero_hitos) {
          entro = true;
          controla_hitos_insertados++;

          prepararInsertarHito();
          span_hito = insertarHito(incremento, controla_hitos_insertados, clase_ci, clase_ap, clase_esc_uno, clase_esc_dos, clase_esc_tres, clase_esc_cuatro, clase_esc_cinco, clase_pq, clase_pt, clase_esc_seis, clase_esc_siete, clase_esc_ocho, clase_esc_nueve, clase_esc_diez);
          division.appendChild(span_hito);


          prepararInsertarFechaHito();
          elemento_ancla_hito = insertaFechaHito(incremento, controla_hitos_insertados, titulo_hito, vinculo_hito, fecha_hito);
          division.appendChild(elemento_ancla_hito);

          contador_hitos_posicionados++;
        }
      }
    }

    if (hitos_dividido_semicirculos >= 2) {

      if (diferencia_hitos >= 1) {
        for (let index = 1; index <= controla_hitos; index++) {

          if (contador_hitos_semicirculo >= hitos_dividido_semicirculos) {
            break;
          }

          controla_hitos_insertados++;

          prepararInsertarHito();
          span_hito = insertarHito(incremento, controla_hitos_insertados, clase_ci, clase_ap, clase_esc_uno, clase_esc_dos, clase_esc_tres, clase_esc_cuatro, clase_esc_cinco, clase_pq, clase_pt, clase_esc_seis, clase_esc_siete, clase_esc_ocho, clase_esc_nueve, clase_esc_diez);
          division.appendChild(span_hito);

          prepararInsertarFechaHito();
          elemento_ancla_hito = insertaFechaHito(incremento, controla_hitos_insertados, titulo_hito, vinculo_hito, fecha_hito);
          division.appendChild(elemento_ancla_hito);

          contador_hitos_posicionados++;
          contador_hitos_semicirculo++;

        }

        diferencia_hitos = diferencia_hitos - contador_hitos_semicirculo;
        controla_hitos = diferencia_hitos;

      }
    }

    // Incluir el nuevo div con hitos en el semicirculo
    id_contenedor_circulos.appendChild(division);

    // Obtener identificador del próximo contenedor
    id_contenedor_circulos = document.getElementById(division.getAttribute("id"));

    // Generar nuevo div para el siguiente elemento
    division = document.createElement("div");
    incremento++;

  }
  i++;

}

// Identificadores para los modales
const ID_MODAL_CARTELES = datos_generales[0].espiral_natural[0].modal_carteles[0].dataind;

//const ID_MODAL_HOME_NARRATIVA = 159;
const ID_MODAL_HOME_NARRATIVA = datos_generales[0].espiral_natural[0].modal[0].dataind;
const ID_MODAL_HOME_CICLOS_GUERRA =  datos_generales[0].espiral_ciclos_guerra[0].modal[0].dataind;
const ID_MODAL_HOME_DEMOCRACIA = datos_generales[0].espiral_cierres_aperturas[0].modal[0].dataind;
const ID_MODAL_HOME_ESCLARECIMIENTO = datos_generales[0].espiral_esclarecimiento[0].modal[0].dataind;

const ID_MODAL_CICLOS_GUERRA_DESARROLLO = datos_generales[0].espiral_ciclos_guerra[0].opcion1[0].dataind;
const ID_MODAL_CICLOS_GUERRA_ESCALAMIENTO = datos_generales[0].espiral_ciclos_guerra[0].opcion2[0].dataind;
const ID_MODAL_CICLOS_GUERRA_DEGRADACION = datos_generales[0].espiral_ciclos_guerra[0].opcion3[0].dataind;
const ID_MODAL_CICLOS_GUERRA_PUNTO_QUIEBRE = datos_generales[0].espiral_ciclos_guerra[0].opcion4[0].dataind;
const ID_MODAL_CICLOS_GUERRA_PUNTO_TRANSICION = datos_generales[0].espiral_ciclos_guerra[0].opcion5[0].dataind;

const ID_MODAL_DEMOCRACIA_APERTURA = datos_generales[0].espiral_cierres_aperturas[0].opcion1[0].dataind;
const ID_MODAL_DEMOCRACIA_CIERRE = datos_generales[0].espiral_cierres_aperturas[0].opcion2[0].dataind;

const ID_MODAL_ESCLARECIMIENTO_UNO = datos_generales[0].espiral_esclarecimiento[0].opcion1[0].dataind;
const ID_MODAL_ESCLARECIMIENTO_DOS = datos_generales[0].espiral_esclarecimiento[0].opcion2[0].dataind;
const ID_MODAL_ESCLARECIMIENTO_TRES = datos_generales[0].espiral_esclarecimiento[0].opcion3[0].dataind;
const ID_MODAL_ESCLARECIMIENTO_CUATRO = datos_generales[0].espiral_esclarecimiento[0].opcion4[0].dataind;
const ID_MODAL_ESCLARECIMIENTO_CINCO = datos_generales[0].espiral_esclarecimiento[0].opcion5[0].dataind;
const ID_MODAL_ESCLARECIMIENTO_SEIS = datos_generales[0].espiral_esclarecimiento[0].opcion6[0].dataind;
const ID_MODAL_ESCLARECIMIENTO_SIETE= datos_generales[0].espiral_esclarecimiento[0].opcion7[0].dataind;
const ID_MODAL_ESCLARECIMIENTO_OCHO = datos_generales[0].espiral_esclarecimiento[0].opcion8[0].dataind;
const ID_MODAL_ESCLARECIMIENTO_NUEVE = datos_generales[0].espiral_esclarecimiento[0].opcion9[0].dataind;
const ID_MODAL_ESCLARECIMIENTO_DIEZ = datos_generales[0].espiral_esclarecimiento[0].opcion10[0].dataind;


// titulo y descripcion de la espiral en estado natural
if(datos_generales[0].espiral_natural[0].descripcion[0].titulo !== undefined)
  id_titulo_periodo.innerText = datos_generales[0].espiral_natural[0].descripcion[0].titulo;
if(datos_generales[0].espiral_natural[0].descripcion[0].fecha !== undefined)
  id_fecha_periodo.innerText = datos_generales[0].espiral_natural[0].descripcion[0].fecha;
if(datos_generales[0].espiral_natural[0].descripcion[0].descripcion !== undefined)
  id_descripcion_periodo.innerText = datos_generales[0].espiral_natural[0].descripcion[0].descripcion;


// obtener identificador del modal para descripciones
id_modal_descripciones = document.getElementById("id_nh_modal_descripciones");

// obtener identificador del modal para carteles
id_modal_carteles = document.getElementById("id_nh_modal_carteles");
configurarModal(id_modal_carteles,ID_MODAL_CARTELES);

//configurarModalEstadoNatural();
configurarModal(id_modal_descripciones,ID_MODAL_HOME_NARRATIVA);
configurarEstadoNatural();

if (screenWidth >= 320 && screenWidth <= 767) {

  // Ajustar clases para el rango de 375
  if (screenWidth >= 375) {

    lista_mobile = document.getElementById("id_nh_lista");
    lista_mobile.classList.remove("mb-4");
    lista_mobile.classList.add("mb-3");

    botones_mobile = document.querySelectorAll(".c_nh_boton_mobile");
    for (let i = 0; i < botones_mobile.length; i++) {
      botones_mobile[i].classList.remove("p-1");
      botones_mobile[i].classList.add("p-3");
    }

  }

  // Establecer escuchas para los botones del menu mobile
  itemsMenuMobileUno = document.getElementById("pills-ciclos-tab");
  itemsMenuMobileDos = document.getElementById("pills-democracia-tab");
  itemsMenuMobileTres = document.getElementById("pills-esclarecimiento-tab");
  itemsMenuMobileCuatro = document.getElementById("pills-flecha-tab");
  itemsMenuMobile = document.querySelectorAll(".c_nh_boton_mobile");


  for (let i = 0; i < itemsMenuMobile.length; i++) {
    itemsMenuMobile[i].addEventListener("show.bs.tab", function (e) {

      switch (e.target) {

        case itemsMenuMobileUno:

          //Estado de la espiral  ciclo de Guerra
          menu_filtro = 1;
          configurarCiclosGuerra();

          //Configurar el contenido del  modal
          configurarModal(id_modal_descripciones,ID_MODAL_HOME_CICLOS_GUERRA);


          break;

        case itemsMenuMobileDos:
          //Estado de la espiral  Cierres y Aperturas
          menu_filtro = 2;
          configurarCierresAperturas();

          //Configurar el contenido del  modal del ancla
          configurarModal(id_modal_descripciones,ID_MODAL_HOME_DEMOCRACIA);



          break;

        case itemsMenuMobileTres:
          //Estado de la espiral  Esclarecimiento
          menu_filtro = 3;

          configurarEsclarecimiento();
          

          //Configurar el contenido del  modal del ancla
          configurarModal(id_modal_descripciones,ID_MODAL_HOME_ESCLARECIMIENTO);


          break;

        case itemsMenuMobileCuatro:
          menu_filtro = 0;
          configurarEstadoNatural();

          // Inactivar  el panel del contenido de los filtros
          selector_panel = 'div[class*=c_nh_tab_content]';
          panel_mobil = document.querySelectorAll(selector_panel);
          for (let index = 0; index < panel_mobil.length; index++) {
            if (panel_mobil[index].classList.contains("active")) {
              panel_mobil[index].classList.remove("active");
              panel_mobil[index].classList.remove("show");
            }

          }

          // Configurar titulo del ancla estado natural
          configurarEstadoNatural();

          // Configurar modal para estado natural
          configurarModal(id_modal_descripciones,ID_MODAL_HOME_NARRATIVA);
          break;

      }
    });

  }

}
else {

  // Establecer titulos cuando se abren los filtros
  var itemMenuUno = document.getElementById('flush-collapseOne');
  var itemMenuDos = document.getElementById('flush-collapseTwo');
  var itemMenuTres = document.getElementById('flush-collapseThree');

  // Establecer escuchas para los encabezados del menu acordeon -desktop
  itemsMenu = document.querySelectorAll(".c_item_menu");
  for (let i = 0; i < itemsMenu.length; i++) {
    itemsMenu[i].addEventListener("shown.bs.collapse", function (e) {
      jQuery('.volver.hidden').toggleClass('hidden');
      switch (e.target) {

        case itemMenuUno:

          //Estado de la espiral  ciclo de Guerra
          menu_filtro = 1;
          configurarCiclosGuerra();

          //Configurar el contenido del  modal del ancla
          configurarModal(id_modal_descripciones,ID_MODAL_HOME_CICLOS_GUERRA);

          break;


        case itemMenuDos:

          //Estado de la espiral  Cierres y Aperturas
          menu_filtro = 2;
          configurarCierresAperturas();


          //Configurar el contenido del  modal del ancla
          configurarModal(id_modal_descripciones,ID_MODAL_HOME_DEMOCRACIA);

          break;


        case itemMenuTres:

          //Estado de la espiral Esclarecimiento
          menu_filtro = 3;

          //titulo_ancla = datos_generales[0].espiral_esclarecimiento[0].descripcion[0].titulo_ancla;
          configurarEsclarecimiento();
          

          //Configurar el contenido del  modal del ancla
          configurarModal(id_modal_descripciones,ID_MODAL_HOME_ESCLARECIMIENTO);

          break;

      }
    });

    // Establecer titulo por defecto de narrativa cuando se cieran los filtros
    itemsMenu[i].addEventListener("hidden.bs.collapse", function (e) {

      // Volver a estado natural la espiral  si no hay menus abiertos
      menus_collapsing = document.querySelectorAll(".collapsing");
      menus_show = document.querySelectorAll(".show");

      if ((menus_collapsing.length == 0) && (menus_show.length == 0)) {
        menu_filtro = 0;

        // Configurar titulo del ancla estado natural desktop
        configurarEstadoNatural();

        // Configurar modal para estado natural
        configurarModal(id_modal_descripciones,ID_MODAL_HOME_NARRATIVA);

        // Reestablecer color natural para los hitos
        restablecerColorNaturalHitos();


      }
    });

  }

}


// Establecer escuchas para los botones de radio de los filtro tanto para mobile como desktop
botonesRadio = document.querySelectorAll('input[type=radio]');
for (i = 0; i < botonesRadio.length; i++) {
  botonesRadio[i].addEventListener("change", function (e) {
    jQuery('.volver.hidden').toggleClass('hidden');
    switch (e.target) {

      //case id_nh_flexRadio_ciclo_uno_mobile:
      /*case id_nh_flexRadio_ciclo_uno_desktop:

        // Colocar titulo, subtitulo, descripcion segun la opción escogida
        id_titulo_periodo.innerText = datos_generales[0].espiral_ciclos_guerra[0].descripcion[0].titulo;
        if(datos_generales[0].espiral_ciclos_guerra[0].opcion1[0].subtitulo !== undefined)
          id_fecha_periodo.innerText = datos_generales[0].espiral_ciclos_guerra[0].opcion1[0].subtitulo;
        if(datos_generales[0].espiral_ciclos_guerra[0].opcion1[0].descripcion !== undefined)
          id_descripcion_periodo.innerText = datos_generales[0].espiral_ciclos_guerra[0].opcion1[0].descripcion;
        id_descripcion_periodo.setAttribute("data-nid", datos_generales[0].espiral_ciclos_guerra[0].opcion1[0].dataind);


        // Remover la clase color para todos los divs
        selector_fondo = 'div[data-ciclo]';
        clase_color_parte_uno = "c_nh_circulo_";
        clase_color_parte_dos = "_color_ciclo";
        operacion_clase = 0; // 0 para remover clase
        establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos, operacion_clase);

        // Establecer la clase de color opaco para todos los divs
        selector_fondo = 'div[data-ciclo]';
        clase_color_parte_uno = "c_nh_circulo_";
        clase_color_parte_dos = "_color_opaco";
        operacion_clase = 1; // 1 adicionar clase
        establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos, operacion_clase);


        //Remover la clase opaca para el ciclo de desarrollo
        selector_fondo = 'div[data-ciclo="Desarrollo"]';
        clase_color_parte_uno = "c_nh_circulo_";
        clase_color_parte_dos = "_color_opaco";
        establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos);

        // Establecer la clase color para el ciclo de desarrollo
        selector_fondo = 'div[data-ciclo="Desarrollo"]';
        clase_color_parte_uno = "c_nh_circulo_";
        clase_color_parte_dos = "_color_ciclo";
        establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos);

        // Remover clase color de hito punto de quiebre
        establecerColorHitoFiltro('i[data-puntoquiebre=c_nh_punto_quiebre]', 0, "color_punto_quiebre");

        // Remover clase color de hito punto de transicion
        establecerColorHitoFiltro('i[data-puntotransicion=c_nh_punto_transicion]', 0, "color_punto_transicion");

        configurarModal(id_modal_descripciones,ID_MODAL_CICLOS_GUERRA_DESARROLLO);
        break;


      case id_nh_flexRadio_ciclo_dos_mobile:
      case id_nh_flexRadio_ciclo_dos_desktop:

        // Colocar titulo, subtitulo, descripcion segun la opción escogida
        id_titulo_periodo.innerText = datos_generales[0].espiral_ciclos_guerra[0].descripcion[0].titulo;
        if(datos_generales[0].espiral_ciclos_guerra[0].opcion2[0].subtitulo !== undefined)
          id_fecha_periodo.innerText = datos_generales[0].espiral_ciclos_guerra[0].opcion2[0].subtitulo;
        if(datos_generales[0].espiral_ciclos_guerra[0].opcion2[0].descripcion !== undefined)
          id_descripcion_periodo.innerText = datos_generales[0].espiral_ciclos_guerra[0].opcion2[0].descripcion;


        // Remover la clase color para todos los divs
        selector_fondo = 'div[data-ciclo]';
        clase_color_parte_uno = "c_nh_circulo_";
        clase_color_parte_dos = "_color_ciclo";
        operacion_clase = 0; // 0 para remover clase
        establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos, operacion_clase);

        // Establecer la clase de color opaco para todos los divs
        selector_fondo = 'div[data-ciclo]';
        clase_color_parte_uno = "c_nh_circulo_";
        clase_color_parte_dos = "_color_opaco";
        operacion_clase = 1; // 1 adicionar clase
        establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos, operacion_clase);


        //Remover la clase opaca para el ciclo de Escalamiento
        selector_fondo = 'div[data-ciclo="Escalamiento"]';
        clase_color_parte_uno = "c_nh_circulo_";
        clase_color_parte_dos = "_color_opaco";
        establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos);

        // Establecer la clase color para el ciclo de desarrollo
        selector_fondo = 'div[data-ciclo="Escalamiento"]';
        clase_color_parte_uno = "c_nh_circulo_";
        clase_color_parte_dos = "_color_ciclo";
        establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos);

        // Remover clase color de hito punto de quiebre
        establecerColorHitoFiltro('i[data-puntoquiebre=c_nh_punto_quiebre]', 0, "color_punto_quiebre");

        // Remover clase color de hito punto de transicion
        establecerColorHitoFiltro('i[data-puntotransicion=c_nh_punto_transicion]', 0, "color_punto_transicion");

        configurarModal(id_modal_descripciones,ID_MODAL_CICLOS_GUERRA_ESCALAMIENTO);

        break;

      case id_nh_flexRadio_ciclo_tres_mobile:
      case id_nh_flexRadio_ciclo_tres_desktop:

        // Colocar titulo, subtitulo, descripcion segun la opción escogida
        id_titulo_periodo.innerText = datos_generales[0].espiral_ciclos_guerra[0].descripcion[0].titulo;
        if(datos_generales[0].espiral_ciclos_guerra[0].opcion3[0].subtitulo !== undefined)
          id_fecha_periodo.innerText = datos_generales[0].espiral_ciclos_guerra[0].opcion3[0].subtitulo;
        if(datos_generales[0].espiral_ciclos_guerra[0].opcion3[0].descripcion !== undefined)
          id_descripcion_periodo.innerText = datos_generales[0].espiral_ciclos_guerra[0].opcion3[0].descripcion;


        // Remover la clase color para todos los divs
        selector_fondo = 'div[data-ciclo]';
        clase_color_parte_uno = "c_nh_circulo_";
        clase_color_parte_dos = "_color_ciclo";
        operacion_clase = 0; // 0 para remover clase
        establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos, operacion_clase);

        // Establecer la clase de color opaco para todos los divs
        selector_fondo = 'div[data-ciclo]';
        clase_color_parte_uno = "c_nh_circulo_";
        clase_color_parte_dos = "_color_opaco";
        operacion_clase = 1; // 1 adicionar clase
        establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos, operacion_clase);

        //Remover la clase opaca para el ciclo de Escalamiento
        selector_fondo = 'div[data-ciclo="Degradación"]';
        clase_color_parte_uno = "c_nh_circulo_";
        clase_color_parte_dos = "_color_opaco";
        establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos);

        // Establecer la clase color para el ciclo de desarrollo
        selector_fondo = 'div[data-ciclo="Degradación"]';
        clase_color_parte_uno = "c_nh_circulo_";
        clase_color_parte_dos = "_color_ciclo";
        establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos);

        // Remover clase color de hito punto de quiebre
        establecerColorHitoFiltro('i[data-puntoquiebre=c_nh_punto_quiebre]', 0, "color_punto_quiebre");

        // Remover clase color de hito punto de transicion
        establecerColorHitoFiltro('i[data-puntotransicion=c_nh_punto_transicion]', 0, "color_punto_transicion");

        configurarModal(id_modal_descripciones,ID_MODAL_CICLOS_GUERRA_DEGRADACION);
        break;

      case id_nh_flexRadio_ciclo_cuatro_mobile:
      case id_nh_flexRadio_ciclo_cuatro_desktop:

        // Colocar titulo, subtitulo, descripcion segun la opción escogida
        id_titulo_periodo.innerText = datos_generales[0].espiral_ciclos_guerra[0].descripcion[0].titulo;
        if(datos_generales[0].espiral_ciclos_guerra[0].opcion4[0].subtitulo !== undefined)
          id_fecha_periodo.innerText = datos_generales[0].espiral_ciclos_guerra[0].opcion4[0].subtitulo;
        if(datos_generales[0].espiral_ciclos_guerra[0].opcion4[0].descripcion !== undefined)
          id_descripcion_periodo.innerText = datos_generales[0].espiral_ciclos_guerra[0].opcion4[0].descripcion;


        // Remover la clase color para todos los divs
        selector_fondo = 'div[data-ciclo]';
        clase_color_parte_uno = "c_nh_circulo_";
        clase_color_parte_dos = "_color_ciclo";
        operacion_clase = 0; // 0 para remover clase
        establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos, operacion_clase);

        // Establecer la clase de color opaco para todos los divs
        selector_fondo = 'div[data-ciclo]';
        clase_color_parte_uno = "c_nh_circulo_";
        clase_color_parte_dos = "_color_opaco";
        operacion_clase = 1; // 1 adicionar clase
        establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos, operacion_clase);

        // Remover clase color de hito punto de transicion
        establecerColorHitoFiltro('i[data-puntotransicion=c_nh_punto_transicion]', 0, "color_punto_transicion");

        // Establecer el color de hito punto de quiebre
        establecerColorHitoFiltro('i[data-puntoquiebre=c_nh_punto_quiebre]', 1, "color_punto_quiebre");


        configurarModal(id_modal_descripciones,ID_MODAL_CICLOS_GUERRA_PUNTO_QUIEBRE);
        break;

      case id_nh_flexRadio_ciclo_cinco_mobile:
      case id_nh_flexRadio_ciclo_cinco_desktop:

        // Colocar titulo, subtitulo, descripcion segun la opción escogida
        id_titulo_periodo.innerText = datos_generales[0].espiral_ciclos_guerra[0].descripcion[0].titulo;
        if(datos_generales[0].espiral_ciclos_guerra[0].opcion5[0].subtitulo !== undefined)
          id_fecha_periodo.innerText = datos_generales[0].espiral_ciclos_guerra[0].opcion5[0].subtitulo;
        if(datos_generales[0].espiral_ciclos_guerra[0].opcion5[0].descripcion !== undefined)
          id_descripcion_periodo.innerText = datos_generales[0].espiral_ciclos_guerra[0].opcion5[0].descripcion;


        // Remover la clase color para todos los divs
        selector_fondo = 'div[data-ciclo]';
        clase_color_parte_uno = "c_nh_circulo_";
        clase_color_parte_dos = "_color_ciclo";
        operacion_clase = 0; // 0 para remover clase
        establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos, operacion_clase);


        // Establecer la clase de color opaco para todos los divs
        selector_fondo = 'div[data-ciclo]';
        clase_color_parte_uno = "c_nh_circulo_";
        clase_color_parte_dos = "_color_opaco";
        operacion_clase = 1; // 1 adicionar clase
        establecerColorFondoFiltro(selector_fondo, clase_color_parte_uno, clase_color_parte_dos, operacion_clase);

        // Remover clase color de hito punto de quiebre
        establecerColorHitoFiltro('i[data-puntoquiebre=c_nh_punto_quiebre]', 0, "color_punto_quiebre");


        // Establecer el color de hito punto de transicion
        establecerColorHitoFiltro('i[data-puntotransicion=c_nh_punto_transicion]', 1, "color_punto_transicion");

        // Establecer sombra al punto de transicion

        hitos_seleccionados = document.querySelectorAll('i[data-puntotransicion=c_nh_punto_transicion]');
        hitos_seleccionados[0].classList.add(c_nh_sombra);



        configurarModal(id_modal_descripciones,ID_MODAL_CICLOS_GUERRA_PUNTO_TRANSICION);

        break;*/

      case id_nh_flexRadioApertura_mobile:
      case id_nh_flexRadioApertura_desktop:

        // Colocar titulo, subtitulo, descripcion segun la opción escogida
        if(datos_generales[0].espiral_cierres_aperturas[0].descripcion[0].titulo !== undefined)
          id_titulo_periodo.innerText = datos_generales[0].espiral_cierres_aperturas[0].descripcion[0].titulo;
        if(datos_generales[0].espiral_cierres_aperturas[0].opcion1[0].subtitulo !== undefined)
          id_fecha_periodo.innerText = datos_generales[0].espiral_cierres_aperturas[0].opcion1[0].subtitulo;
        if(datos_generales[0].espiral_cierres_aperturas[0].opcion1[0].descripcion !== undefined)
          id_descripcion_periodo.innerText = datos_generales[0].espiral_cierres_aperturas[0].opcion1[0].descripcion;


        // Remover clase de color natural para los hitos
        establecerColorHitoFiltro('i[data-eshito]', 0, "color_natural");

        //  Remover clase de Cierre
        establecerColorHitoFiltro('i[data-clasecolorcierre=c_nh_cierre]', 0, "color_cierre");

        // Remover el color de hito punto de transicion
        establecerColorHitoFiltro('i[data-puntotransicion=c_nh_punto_transicion]', 0, "color_punto_transicion");

        // Remover  el color de hito punto de quiebre
        establecerColorHitoFiltro('i[data-puntoquiebre=c_nh_punto_quiebre]', 0, "color_punto_quiebre");

        //Remover clases de esclarecimiento
        establecerColorHitoFiltro('i[data-escuno=c_nh_esclarecimiento_1]', 0, "color_esclarecimiento_1");
        establecerColorHitoFiltro('i[data-escdos=c_nh_esclarecimiento_2]', 0, "color_esclarecimiento_2");
        establecerColorHitoFiltro('i[data-esctres=c_nh_esclarecimiento_3]', 0, "color_esclarecimiento_3");
        establecerColorHitoFiltro('i[data-esccuatro=c_nh_esclarecimiento_4]', 0, "color_esclarecimiento_4");
        establecerColorHitoFiltro('i[data-esccinco=c_nh_esclarecimiento_5]', 0, "color_esclarecimiento_5");
        establecerColorHitoFiltro('i[data-escseis=c_nh_esclarecimiento_6]', 0, "color_esclarecimiento_6");
        establecerColorHitoFiltro('i[data-escsiete=c_nh_esclarecimiento_7]', 0, "color_esclarecimiento_7");
        establecerColorHitoFiltro('i[data-escocho=c_nh_esclarecimiento_8]', 0, "color_esclarecimiento_8");
        establecerColorHitoFiltro('i[data-escnueve=c_nh_esclarecimiento_9]', 0, "color_esclarecimiento_9");
        establecerColorHitoFiltro('i[data-escdiez=c_nh_esclarecimiento_10]', 0, "color_esclarecimiento_10");


        // Adicionar clase de color Opaco para los hitos
        establecerColorHitoFiltro('i[data-eshito]', 1, "color_opaco");

        // Adicionar clase de color Apertura para los hitos
        establecerColorHitoFiltro('i[data-clasecolorapertura=c_nh_apertura]', 1, "color_apertura");


        configurarModal(id_modal_descripciones,ID_MODAL_DEMOCRACIA_APERTURA);

        break;

      case id_nh_flexRadioCierre_mobile:
      case id_nh_flexRadioCierre_desktop:

        // Colocar titulo, subtitulo, descripcion segun la opción escogida
        if(datos_generales[0].espiral_cierres_aperturas[0].descripcion[0].titulo !== undefined)
          id_titulo_periodo.innerText = datos_generales[0].espiral_cierres_aperturas[0].descripcion[0].titulo;
        if(datos_generales[0].espiral_cierres_aperturas[0].opcion2[0].subtitulo !== undefined)
          id_fecha_periodo.innerText = datos_generales[0].espiral_cierres_aperturas[0].opcion2[0].subtitulo;
        if(datos_generales[0].espiral_cierres_aperturas[0].opcion2[0].descripcion !== undefined)
          id_descripcion_periodo.innerText = datos_generales[0].espiral_cierres_aperturas[0].opcion2[0].descripcion;


        // Remover clase de color natural para los hitos
        establecerColorHitoFiltro('i[data-eshito]', 0, "color_natural");

        // Remover clase de color apertura
        establecerColorHitoFiltro('i[data-clasecolorapertura=c_nh_apertura]', 0, "color_apertura");

        // Remover el color de hito punto de transicion
        establecerColorHitoFiltro('i[data-puntotransicion=c_nh_punto_transicion]', 0, "color_punto_transicion");

        // Remover  el color de hito punto de quiebre
        establecerColorHitoFiltro('i[data-puntoquiebre=c_nh_punto_quiebre]', 0, "color_punto_quiebre");

        //Remover clases de esclarecimiento
        establecerColorHitoFiltro('i[data-escuno=c_nh_esclarecimiento_1]', 0, "color_esclarecimiento_1");
        establecerColorHitoFiltro('i[data-escdos=c_nh_esclarecimiento_2]', 0, "color_esclarecimiento_2");
        establecerColorHitoFiltro('i[data-esctres=c_nh_esclarecimiento_3]', 0, "color_esclarecimiento_3");
        establecerColorHitoFiltro('i[data-esccuatro=c_nh_esclarecimiento_4]', 0, "color_esclarecimiento_4");
        establecerColorHitoFiltro('i[data-esccinco=c_nh_esclarecimiento_5]', 0, "color_esclarecimiento_5");
        establecerColorHitoFiltro('i[data-escseis=c_nh_esclarecimiento_6]', 0, "color_esclarecimiento_6");
        establecerColorHitoFiltro('i[data-escsiete=c_nh_esclarecimiento_7]', 0, "color_esclarecimiento_7");
        establecerColorHitoFiltro('i[data-escocho=c_nh_esclarecimiento_8]', 0, "color_esclarecimiento_8");
        establecerColorHitoFiltro('i[data-escnueve=c_nh_esclarecimiento_9]', 0, "color_esclarecimiento_9");
        establecerColorHitoFiltro('i[data-escdiez=c_nh_esclarecimiento_10]', 0, "color_esclarecimiento_10");

        // Adicionar clase de color Opaco para los hitos
        establecerColorHitoFiltro('i[data-eshito]', 1, "color_opaco");

        // Adicionar clase  color Cierre Hitos
        establecerColorHitoFiltro('i[data-clasecolorcierre=c_nh_cierre]', 1, "color_cierre");


        configurarModal(id_modal_descripciones,ID_MODAL_DEMOCRACIA_CIERRE);
        break;

      case id_nh_flexRadio_esclarecimiento_uno_mobile:
      case id_nh_flexRadio_esclarecimiento_uno_desktop:

        // Colocar titulo, subtitulo, descripcion segun la opción escogida
        if(datos_generales[0].espiral_esclarecimiento[0].descripcion[0].titulo !== undefined)
          id_titulo_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].descripcion[0].titulo;
        if(datos_generales[0].espiral_esclarecimiento[0].opcion1[0].subtitulo !== undefined)
          id_fecha_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].opcion1[0].subtitulo;
        if(datos_generales[0].espiral_esclarecimiento[0].opcion1[0].descripcion !== undefined)
          id_descripcion_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].opcion1[0].descripcion;


        // Remover clase de color natural para los hitos
        establecerColorHitoFiltro('i[data-eshito]', 0, "color_natural");

        // Remover clase de color apertura
        establecerColorHitoFiltro('i[data-clasecolorapertura=c_nh_apertura]', 0, "color_apertura");

        // Remover clase de Cierre
        establecerColorHitoFiltro('i[data-clasecolorcierre=c_nh_cierre]', 0, "color_cierre");

        // Remover el color de hito punto de transicion
        establecerColorHitoFiltro('i[data-puntotransicion=c_nh_punto_transicion]', 0, "color_punto_transicion");

        // Remover  el color de hito punto de quiebre
        establecerColorHitoFiltro('i[data-puntoquiebre=c_nh_punto_quiebre]', 0, "color_punto_quiebre");


        //Remover clases de esclarecimiento
        establecerColorHitoFiltro('i[data-escuno=c_nh_esclarecimiento_1]', 0, "color_esclarecimiento_1");
        establecerColorHitoFiltro('i[data-escdos=c_nh_esclarecimiento_2]', 0, "color_esclarecimiento_2");
        establecerColorHitoFiltro('i[data-esctres=c_nh_esclarecimiento_3]', 0, "color_esclarecimiento_3");
        establecerColorHitoFiltro('i[data-esccuatro=c_nh_esclarecimiento_4]', 0, "color_esclarecimiento_4");
        establecerColorHitoFiltro('i[data-esccinco=c_nh_esclarecimiento_5]', 0, "color_esclarecimiento_5");
        establecerColorHitoFiltro('i[data-escseis=c_nh_esclarecimiento_6]', 0, "color_esclarecimiento_6");
        establecerColorHitoFiltro('i[data-escsiete=c_nh_esclarecimiento_7]', 0, "color_esclarecimiento_7");
        establecerColorHitoFiltro('i[data-escocho=c_nh_esclarecimiento_8]', 0, "color_esclarecimiento_8");
        establecerColorHitoFiltro('i[data-escnueve=c_nh_esclarecimiento_9]', 0, "color_esclarecimiento_9");
        establecerColorHitoFiltro('i[data-escdiez=c_nh_esclarecimiento_10]', 0, "color_esclarecimiento_10");


        // Adicionar clase de color Opaco para los hitos
        establecerColorHitoFiltro('i[data-eshito]', 1, "color_opaco");

        // Adicionar clase de color para esclarecimiento 1
        establecerColorHitoFiltro('i[data-escuno=c_nh_esclarecimiento_1]', 1, "color_esclarecimiento_1");


        configurarModal(id_modal_descripciones,ID_MODAL_ESCLARECIMIENTO_UNO);
        break;

      case id_nh_flexRadio_esclarecimiento_dos_mobile:
      case id_nh_flexRadio_esclarecimiento_dos_desktop:

        // Colocar titulo, subtitulo, descripcion segun la opción escogida
        if(datos_generales[0].espiral_esclarecimiento[0].descripcion[0].titulo !== undefined)
          id_titulo_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].descripcion[0].titulo;
        if(datos_generales[0].espiral_esclarecimiento[0].opcion2[0].subtitulo !== undefined)
          id_fecha_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].opcion2[0].subtitulo;
        if(datos_generales[0].espiral_esclarecimiento[0].opcion2[0].descripcion !== undefined)
          id_descripcion_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].opcion2[0].descripcion;


        // Remover clase de color natural para los hitos
        establecerColorHitoFiltro('i[data-eshito]', 0, "color_natural");

        // Remover clase de color apertura
        establecerColorHitoFiltro('i[data-clasecolorapertura=c_nh_apertura]', 0, "color_apertura");

        // Remover clase de Cierre
        establecerColorHitoFiltro('i[data-clasecolorcierre=c_nh_cierre]', 0, "color_cierre");

        // Remover el color de hito punto de transicion
        establecerColorHitoFiltro('i[data-puntotransicion=c_nh_punto_transicion]', 0, "color_punto_transicion");

        // Remover  el color de hito punto de quiebre
        establecerColorHitoFiltro('i[data-puntoquiebre=c_nh_punto_quiebre]', 0, "color_punto_quiebre");


        //Remover clases de esclarecimiento
        establecerColorHitoFiltro('i[data-escuno=c_nh_esclarecimiento_1]', 0, "color_esclarecimiento_1");
        establecerColorHitoFiltro('i[data-escdos=c_nh_esclarecimiento_2]', 0, "color_esclarecimiento_2");
        establecerColorHitoFiltro('i[data-esctres=c_nh_esclarecimiento_3]', 0, "color_esclarecimiento_3");
        establecerColorHitoFiltro('i[data-esccuatro=c_nh_esclarecimiento_4]', 0, "color_esclarecimiento_4");
        establecerColorHitoFiltro('i[data-esccinco=c_nh_esclarecimiento_5]', 0, "color_esclarecimiento_5");
        establecerColorHitoFiltro('i[data-escseis=c_nh_esclarecimiento_6]', 0, "color_esclarecimiento_6");
        establecerColorHitoFiltro('i[data-escsiete=c_nh_esclarecimiento_7]', 0, "color_esclarecimiento_7");
        establecerColorHitoFiltro('i[data-escocho=c_nh_esclarecimiento_8]', 0, "color_esclarecimiento_8");
        establecerColorHitoFiltro('i[data-escnueve=c_nh_esclarecimiento_9]', 0, "color_esclarecimiento_9");
        establecerColorHitoFiltro('i[data-escdiez=c_nh_esclarecimiento_10]', 0, "color_esclarecimiento_10");

        // Adicionar clase de color Opaco para los hitos
        establecerColorHitoFiltro('i[data-eshito]', 1, "color_opaco");

        // Adicionar clase de color para esclarecimiento 2
        establecerColorHitoFiltro('i[data-escdos=c_nh_esclarecimiento_2]', 1, "color_esclarecimiento_2");

        configurarModal(id_modal_descripciones,ID_MODAL_ESCLARECIMIENTO_DOS);
        break;

      case id_nh_flexRadio_esclarecimiento_tres_mobile:
      case id_nh_flexRadio_esclarecimiento_tres_desktop:

        // Colocar titulo, subtitulo, descripcion segun la opción escogida
        if(datos_generales[0].espiral_esclarecimiento[0].descripcion[0].titulo !== undefined)
          id_titulo_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].descripcion[0].titulo;
        if(datos_generales[0].espiral_esclarecimiento[0].opcion3[0].subtitulo !== undefined)
          id_fecha_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].opcion3[0].subtitulo;
        if(datos_generales[0].espiral_esclarecimiento[0].opcion3[0].descripcion !== undefined)
          id_descripcion_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].opcion3[0].descripcion;


        // Remover clase de color natural para los hitos
        establecerColorHitoFiltro('i[data-eshito]', 0, "color_natural");

        // Remover clase de color apertura
        establecerColorHitoFiltro('i[data-clasecolorapertura=c_nh_apertura]', 0, "color_apertura");

        // Remover clase de Cierre
        establecerColorHitoFiltro('i[data-clasecolorcierre=c_nh_cierre]', 0, "color_cierre");

        // Remover el color de hito punto de transicion
        establecerColorHitoFiltro('i[data-puntotransicion=c_nh_punto_transicion]', 0, "color_punto_transicion");

        // Remover  el color de hito punto de quiebre
        establecerColorHitoFiltro('i[data-puntoquiebre=c_nh_punto_quiebre]', 0, "color_punto_quiebre");


        //Remover clases de esclarecimiento
        establecerColorHitoFiltro('i[data-escuno=c_nh_esclarecimiento_1]', 0, "color_esclarecimiento_1");
        establecerColorHitoFiltro('i[data-escdos=c_nh_esclarecimiento_2]', 0, "color_esclarecimiento_2");
        establecerColorHitoFiltro('i[data-esctres=c_nh_esclarecimiento_3]', 0, "color_esclarecimiento_3");
        establecerColorHitoFiltro('i[data-esccuatro=c_nh_esclarecimiento_4]', 0, "color_esclarecimiento_4");
        establecerColorHitoFiltro('i[data-esccinco=c_nh_esclarecimiento_5]', 0, "color_esclarecimiento_5");
        establecerColorHitoFiltro('i[data-escseis=c_nh_esclarecimiento_6]', 0, "color_esclarecimiento_6");
        establecerColorHitoFiltro('i[data-escsiete=c_nh_esclarecimiento_7]', 0, "color_esclarecimiento_7");
        establecerColorHitoFiltro('i[data-escocho=c_nh_esclarecimiento_8]', 0, "color_esclarecimiento_8");
        establecerColorHitoFiltro('i[data-escnueve=c_nh_esclarecimiento_9]', 0, "color_esclarecimiento_9");
        establecerColorHitoFiltro('i[data-escdiez=c_nh_esclarecimiento_10]', 0, "color_esclarecimiento_10");


        // Adicionar clase de color Opaco para los hitos
        establecerColorHitoFiltro('i[data-eshito]', 1, "color_opaco");

        // Adicionar clase de color para esclarecimiento 3
        establecerColorHitoFiltro('i[data-esctres=c_nh_esclarecimiento_3]', 1, "color_esclarecimiento_3");

        configurarModal(id_modal_descripciones,ID_MODAL_ESCLARECIMIENTO_TRES);
        break;

      case id_nh_flexRadio_esclarecimiento_cuatro_mobile:
      case id_nh_flexRadio_esclarecimiento_cuatro_desktop:

        // Colocar titulo, subtitulo, descripcion segun la opción escogida
        if(datos_generales[0].espiral_esclarecimiento[0].descripcion[0].titulo !== undefined)
          id_titulo_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].descripcion[0].titulo;
        if(datos_generales[0].espiral_esclarecimiento[0].opcion4[0].subtitulo !== undefined)
          id_fecha_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].opcion4[0].subtitulo;
        if(datos_generales[0].espiral_esclarecimiento[0].opcion4[0].descripcion !== undefined)
          id_descripcion_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].opcion4[0].descripcion;


        // Remover clase de color natural para los hitos
        establecerColorHitoFiltro('i[data-eshito]', 0, "color_natural");

        // Remover clase de color apertura
        establecerColorHitoFiltro('i[data-clasecolorapertura=c_nh_apertura]', 0, "color_apertura");

        // Remover clase de Cierre
        establecerColorHitoFiltro('i[data-clasecolorcierre=c_nh_cierre]', 0, "color_cierre");

        // Remover el color de hito punto de transicion
        establecerColorHitoFiltro('i[data-puntotransicion=c_nh_punto_transicion]', 0, "color_punto_transicion");

        // Remover  el color de hito punto de quiebre
        establecerColorHitoFiltro('i[data-puntoquiebre=c_nh_punto_quiebre]', 0, "color_punto_quiebre");


        //Remover clases de esclarecimiento
        establecerColorHitoFiltro('i[data-escuno=c_nh_esclarecimiento_1]', 0, "color_esclarecimiento_1");
        establecerColorHitoFiltro('i[data-escdos=c_nh_esclarecimiento_2]', 0, "color_esclarecimiento_2");
        establecerColorHitoFiltro('i[data-esctres=c_nh_esclarecimiento_3]', 0, "color_esclarecimiento_3");
        establecerColorHitoFiltro('i[data-esccuatro=c_nh_esclarecimiento_4]', 0, "color_esclarecimiento_4");
        establecerColorHitoFiltro('i[data-esccinco=c_nh_esclarecimiento_5]', 0, "color_esclarecimiento_5");
        establecerColorHitoFiltro('i[data-escseis=c_nh_esclarecimiento_6]', 0, "color_esclarecimiento_6");
        establecerColorHitoFiltro('i[data-escsiete=c_nh_esclarecimiento_7]', 0, "color_esclarecimiento_7");
        establecerColorHitoFiltro('i[data-escocho=c_nh_esclarecimiento_8]', 0, "color_esclarecimiento_8");
        establecerColorHitoFiltro('i[data-escnueve=c_nh_esclarecimiento_9]', 0, "color_esclarecimiento_9");
        establecerColorHitoFiltro('i[data-escdiez=c_nh_esclarecimiento_10]', 0, "color_esclarecimiento_10");


        // Adicionar clase de color Opaco para los hitos
        establecerColorHitoFiltro('i[data-eshito]', 1, "color_opaco");

        // Adicionar clase de color para esclarecimiento 4
        establecerColorHitoFiltro('i[data-esccuatro=c_nh_esclarecimiento_4]', 1, "color_esclarecimiento_4");

        configurarModal(id_modal_descripciones,ID_MODAL_ESCLARECIMIENTO_CUATRO);
        break;

      case id_nh_flexRadio_esclarecimiento_cinco_mobile:
      case id_nh_flexRadio_esclarecimiento_cinco_desktop:

        // Colocar titulo, subtitulo, descripcion segun la opción escogida
        if(datos_generales[0].espiral_esclarecimiento[0].descripcion[0].titulo !== undefined)
        id_titulo_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].descripcion[0].titulo;
        if(datos_generales[0].espiral_esclarecimiento[0].opcion5[0].subtitulo !== undefined)
          id_fecha_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].opcion5[0].subtitulo;
        if(datos_generales[0].espiral_esclarecimiento[0].opcion5[0].descripcion !== undefined)
          id_descripcion_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].opcion5[0].descripcion;


        // Remover clase de color natural para los hitos
        establecerColorHitoFiltro('i[data-eshito]', 0, "color_natural");

        // Remover clase de color apertura
        establecerColorHitoFiltro('i[data-clasecolorapertura=c_nh_apertura]', 0, "color_apertura");

        // Remover clase de Cierre
        establecerColorHitoFiltro('i[data-clasecolorcierre=c_nh_cierre]', 0, "color_cierre");

        // Remover el color de hito punto de transicion
        establecerColorHitoFiltro('i[data-puntotransicion=c_nh_punto_transicion]', 0, "color_punto_transicion");

        // Remover  el color de hito punto de quiebre
        establecerColorHitoFiltro('i[data-puntoquiebre=c_nh_punto_quiebre]', 0, "color_punto_quiebre");


        //Remover clases de esclarecimiento
        establecerColorHitoFiltro('i[data-escuno=c_nh_esclarecimiento_1]', 0, "color_esclarecimiento_1");
        establecerColorHitoFiltro('i[data-escdos=c_nh_esclarecimiento_2]', 0, "color_esclarecimiento_2");
        establecerColorHitoFiltro('i[data-esctres=c_nh_esclarecimiento_3]', 0, "color_esclarecimiento_3");
        establecerColorHitoFiltro('i[data-esccuatro=c_nh_esclarecimiento_4]', 0, "color_esclarecimiento_4");
        establecerColorHitoFiltro('i[data-esccinco=c_nh_esclarecimiento_5]', 0, "color_esclarecimiento_5");
        establecerColorHitoFiltro('i[data-escseis=c_nh_esclarecimiento_6]', 0, "color_esclarecimiento_6");
        establecerColorHitoFiltro('i[data-escsiete=c_nh_esclarecimiento_7]', 0, "color_esclarecimiento_7");
        establecerColorHitoFiltro('i[data-escocho=c_nh_esclarecimiento_8]', 0, "color_esclarecimiento_8");
        establecerColorHitoFiltro('i[data-escnueve=c_nh_esclarecimiento_9]', 0, "color_esclarecimiento_9");
        establecerColorHitoFiltro('i[data-escdiez=c_nh_esclarecimiento_10]', 0, "color_esclarecimiento_10");


        // Adicionar clase de color Opaco para los hitos
        establecerColorHitoFiltro('i[data-eshito]', 1, "color_opaco");

        // Adicionar clase de color para esclarecimiento 5
        establecerColorHitoFiltro('i[data-esccinco=c_nh_esclarecimiento_5]', 1, "color_esclarecimiento_5");


        configurarModal(id_modal_descripciones,ID_MODAL_ESCLARECIMIENTO_CINCO);
        break;

      case id_nh_flexRadio_esclarecimiento_seis_mobile:
      case id_nh_flexRadio_esclarecimiento_seis_desktop:

        // Colocar titulo, subtitulo, descripcion segun la opción escogida
        if(datos_generales[0].espiral_esclarecimiento[0].descripcion[0].titulo !== undefined)
          id_titulo_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].descripcion[0].titulo;
        if(datos_generales[0].espiral_esclarecimiento[0].opcion6[0].subtitulo !== undefined)
          id_fecha_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].opcion6[0].subtitulo;
        if(datos_generales[0].espiral_esclarecimiento[0].opcion6[0].descripcion !== undefined)
          id_descripcion_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].opcion6[0].descripcion;


        // Remover clase de color natural para los hitos
        establecerColorHitoFiltro('i[data-eshito]', 0, "color_natural");

        // Remover clase de color apertura
        establecerColorHitoFiltro('i[data-clasecolorapertura=c_nh_apertura]', 0, "color_apertura");

        // Remover clase de Cierre
        establecerColorHitoFiltro('i[data-clasecolorcierre=c_nh_cierre]', 0, "color_cierre");

        // Remover el color de hito punto de transicion
        establecerColorHitoFiltro('i[data-puntotransicion=c_nh_punto_transicion]', 0, "color_punto_transicion");

        // Remover  el color de hito punto de quiebre
        establecerColorHitoFiltro('i[data-puntoquiebre=c_nh_punto_quiebre]', 0, "color_punto_quiebre");

        //Remover clases de esclarecimiento
        establecerColorHitoFiltro('i[data-escuno=c_nh_esclarecimiento_1]', 0, "color_esclarecimiento_1");
        establecerColorHitoFiltro('i[data-escdos=c_nh_esclarecimiento_2]', 0, "color_esclarecimiento_2");
        establecerColorHitoFiltro('i[data-esctres=c_nh_esclarecimiento_3]', 0, "color_esclarecimiento_3");
        establecerColorHitoFiltro('i[data-esccuatro=c_nh_esclarecimiento_4]', 0, "color_esclarecimiento_4");
        establecerColorHitoFiltro('i[data-esccinco=c_nh_esclarecimiento_5]', 0, "color_esclarecimiento_5");
        establecerColorHitoFiltro('i[data-escseis=c_nh_esclarecimiento_6]', 0, "color_esclarecimiento_6");
        establecerColorHitoFiltro('i[data-escsiete=c_nh_esclarecimiento_7]', 0, "color_esclarecimiento_7");
        establecerColorHitoFiltro('i[data-escocho=c_nh_esclarecimiento_8]', 0, "color_esclarecimiento_8");
        establecerColorHitoFiltro('i[data-escnueve=c_nh_esclarecimiento_9]', 0, "color_esclarecimiento_9");
        establecerColorHitoFiltro('i[data-escdiez=c_nh_esclarecimiento_10]', 0, "color_esclarecimiento_10");


        // Adicionar clase de color Opaco para los hitos
        establecerColorHitoFiltro('i[data-eshito]', 1, "color_opaco");

        // Adicionar clase de color para esclarecimiento 6
        establecerColorHitoFiltro('i[data-escseis=c_nh_esclarecimiento_6]', 1, "color_esclarecimiento_6");

        configurarModal(id_modal_descripciones,ID_MODAL_ESCLARECIMIENTO_SEIS);
        break;

      case id_nh_flexRadio_esclarecimiento_siete_mobile:
      case id_nh_flexRadio_esclarecimiento_siete_desktop:

        // Colocar titulo, subtitulo, descripcion segun la opción escogida
        if(datos_generales[0].espiral_esclarecimiento[0].descripcion[0].titulo !== undefined)
          id_titulo_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].descripcion[0].titulo;
        if(datos_generales[0].espiral_esclarecimiento[0].opcion7[0].subtitulo !== undefined)
          id_fecha_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].opcion7[0].subtitulo;
        if(datos_generales[0].espiral_esclarecimiento[0].opcion7[0].descripcion !== undefined)
          id_descripcion_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].opcion7[0].descripcion;

        // Remover clase de color natural para los hitos
        establecerColorHitoFiltro('i[data-eshito]', 0, "color_natural");

        // Remover clase de color apertura
        establecerColorHitoFiltro('i[data-clasecolorapertura=c_nh_apertura]', 0, "color_apertura");

        // Remover clase de Cierre
        establecerColorHitoFiltro('i[data-clasecolorcierre=c_nh_cierre]', 0, "color_cierre");

        // Remover el color de hito punto de transicion
        establecerColorHitoFiltro('i[data-puntotransicion=c_nh_punto_transicion]', 0, "color_punto_transicion");

        // Remover  el color de hito punto de quiebre
        establecerColorHitoFiltro('i[data-puntoquiebre=c_nh_punto_quiebre]', 0, "color_punto_quiebre");


        //Remover clases de esclarecimiento
        establecerColorHitoFiltro('i[data-escuno=c_nh_esclarecimiento_1]', 0, "color_esclarecimiento_1");
        establecerColorHitoFiltro('i[data-escdos=c_nh_esclarecimiento_2]', 0, "color_esclarecimiento_2");
        establecerColorHitoFiltro('i[data-esctres=c_nh_esclarecimiento_3]', 0, "color_esclarecimiento_3");
        establecerColorHitoFiltro('i[data-esccuatro=c_nh_esclarecimiento_4]', 0, "color_esclarecimiento_4");
        establecerColorHitoFiltro('i[data-esccinco=c_nh_esclarecimiento_5]', 0, "color_esclarecimiento_5");
        establecerColorHitoFiltro('i[data-escseis=c_nh_esclarecimiento_6]', 0, "color_esclarecimiento_6");
        establecerColorHitoFiltro('i[data-escsiete=c_nh_esclarecimiento_7]', 0, "color_esclarecimiento_7");
        establecerColorHitoFiltro('i[data-escocho=c_nh_esclarecimiento_8]', 0, "color_esclarecimiento_8");
        establecerColorHitoFiltro('i[data-escnueve=c_nh_esclarecimiento_9]', 0, "color_esclarecimiento_9");
        establecerColorHitoFiltro('i[data-escdiez=c_nh_esclarecimiento_10]', 0, "color_esclarecimiento_10");


        // Adicionar clase de color Opaco para los hitos
        establecerColorHitoFiltro('i[data-eshito]', 1, "color_opaco");

        // Adicionar clase de color para esclarecimiento 7
        establecerColorHitoFiltro('i[data-escsiete=c_nh_esclarecimiento_7]', 1, "color_esclarecimiento_7");

        configurarModal(id_modal_descripciones,ID_MODAL_ESCLARECIMIENTO_SIETE);
        break;

      case id_nh_flexRadio_esclarecimiento_ocho_mobile:
      case id_nh_flexRadio_esclarecimiento_ocho_desktop:

        // Colocar titulo, subtitulo, descripcion segun la opción escogida
        if(datos_generales[0].espiral_esclarecimiento[0].descripcion[0].titulo !== undefined)
          id_titulo_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].descripcion[0].titulo;
        if(datos_generales[0].espiral_esclarecimiento[0].opcion8[0].subtitulo !== undefined)
          id_fecha_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].opcion8[0].subtitulo;
        if(datos_generales[0].espiral_esclarecimiento[0].opcion8[0].descripcion !== undefined)
          id_descripcion_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].opcion8[0].descripcion;

        // Remover clase de color natural para los hitos
        establecerColorHitoFiltro('i[data-eshito]', 0, "color_natural");

        // Remover clase de color apertura
        establecerColorHitoFiltro('i[data-clasecolorapertura=c_nh_apertura]', 0, "color_apertura");

        // Remover clase de Cierre
        establecerColorHitoFiltro('i[data-clasecolorcierre=c_nh_cierre]', 0, "color_cierre");

        // Remover el color de hito punto de transicion
        establecerColorHitoFiltro('i[data-puntotransicion=c_nh_punto_transicion]', 0, "color_punto_transicion");

        // Remover  el color de hito punto de quiebre
        establecerColorHitoFiltro('i[data-puntoquiebre=c_nh_punto_quiebre]', 0, "color_punto_quiebre");


        //Remover clases de esclarecimiento
        establecerColorHitoFiltro('i[data-escuno=c_nh_esclarecimiento_1]', 0, "color_esclarecimiento_1");
        establecerColorHitoFiltro('i[data-escdos=c_nh_esclarecimiento_2]', 0, "color_esclarecimiento_2");
        establecerColorHitoFiltro('i[data-esctres=c_nh_esclarecimiento_3]', 0, "color_esclarecimiento_3");
        establecerColorHitoFiltro('i[data-esccuatro=c_nh_esclarecimiento_4]', 0, "color_esclarecimiento_4");
        establecerColorHitoFiltro('i[data-esccinco=c_nh_esclarecimiento_5]', 0, "color_esclarecimiento_5");
        establecerColorHitoFiltro('i[data-escseis=c_nh_esclarecimiento_6]', 0, "color_esclarecimiento_6");
        establecerColorHitoFiltro('i[data-escsiete=c_nh_esclarecimiento_7]', 0, "color_esclarecimiento_7");
        establecerColorHitoFiltro('i[data-escocho=c_nh_esclarecimiento_8]', 0, "color_esclarecimiento_8");
        establecerColorHitoFiltro('i[data-escnueve=c_nh_esclarecimiento_9]', 0, "color_esclarecimiento_9");
        establecerColorHitoFiltro('i[data-escdiez=c_nh_esclarecimiento_10]', 0, "color_esclarecimiento_10");


        // Adicionar clase de color Opaco para los hitos
        establecerColorHitoFiltro('i[data-eshito]', 1, "color_opaco");

        // Adicionar clase de color para esclarecimiento 8
        establecerColorHitoFiltro('i[data-escocho=c_nh_esclarecimiento_8]', 1, "color_esclarecimiento_8");


        configurarModal(id_modal_descripciones,ID_MODAL_ESCLARECIMIENTO_OCHO);
        break;


      case id_nh_flexRadio_esclarecimiento_nueve_mobile:
      case id_nh_flexRadio_esclarecimiento_nueve_desktop:

        // Colocar titulo, subtitulo, descripcion segun la opción escogida
        if(datos_generales[0].espiral_esclarecimiento[0].descripcion[0].titulo !== undefined)
          id_titulo_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].descripcion[0].titulo;
        if(datos_generales[0].espiral_esclarecimiento[0].opcion9[0].subtitulo !== undefined)
          id_fecha_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].opcion9[0].subtitulo;
        if(datos_generales[0].espiral_esclarecimiento[0].opcion9[0].descripcion !== undefined)
          id_descripcion_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].opcion9[0].descripcion;


        // Remover clase de color natural para los hitos
        establecerColorHitoFiltro('i[data-eshito]', 0, "color_natural");

        // Remover clase de color apertura
        establecerColorHitoFiltro('i[data-clasecolorapertura=c_nh_apertura]', 0, "color_apertura");

        // Remover clase de Cierre
        establecerColorHitoFiltro('i[data-clasecolorcierre=c_nh_cierre]', 0, "color_cierre");

        // Remover el color de hito punto de transicion
        establecerColorHitoFiltro('i[data-puntotransicion=c_nh_punto_transicion]', 0, "color_punto_transicion");

        // Remover  el color de hito punto de quiebre
        establecerColorHitoFiltro('i[data-puntoquiebre=c_nh_punto_quiebre]', 0, "color_punto_quiebre");


        //Remover clases de esclarecimiento
        establecerColorHitoFiltro('i[data-escuno=c_nh_esclarecimiento_1]', 0, "color_esclarecimiento_1");
        establecerColorHitoFiltro('i[data-escdos=c_nh_esclarecimiento_2]', 0, "color_esclarecimiento_2");
        establecerColorHitoFiltro('i[data-esctres=c_nh_esclarecimiento_3]', 0, "color_esclarecimiento_3");
        establecerColorHitoFiltro('i[data-esccuatro=c_nh_esclarecimiento_4]', 0, "color_esclarecimiento_4");
        establecerColorHitoFiltro('i[data-esccinco=c_nh_esclarecimiento_5]', 0, "color_esclarecimiento_5");
        establecerColorHitoFiltro('i[data-escseis=c_nh_esclarecimiento_6]', 0, "color_esclarecimiento_6");
        establecerColorHitoFiltro('i[data-escsiete=c_nh_esclarecimiento_7]', 0, "color_esclarecimiento_7");
        establecerColorHitoFiltro('i[data-escocho=c_nh_esclarecimiento_8]', 0, "color_esclarecimiento_8");
        establecerColorHitoFiltro('i[data-escnueve=c_nh_esclarecimiento_9]', 0, "color_esclarecimiento_9");
        establecerColorHitoFiltro('i[data-escdiez=c_nh_esclarecimiento_10]', 0, "color_esclarecimiento_10");


        // Adicionar clase de color Opaco para los hitos
        establecerColorHitoFiltro('i[data-eshito]', 1, "color_opaco");

        // Adicionar clase de color para esclarecimiento 9
        establecerColorHitoFiltro('i[data-escnueve=c_nh_esclarecimiento_9]', 1, "color_esclarecimiento_9");


        configurarModal(id_modal_descripciones,ID_MODAL_ESCLARECIMIENTO_NUEVE);
        break;

      case id_nh_flexRadio_esclarecimiento_diez_mobile:
      case id_nh_flexRadio_esclarecimiento_diez_desktop:

        // Colocar titulo, subtitulo, descripcion segun la opción escogida
        if(datos_generales[0].espiral_esclarecimiento[0].descripcion[0].titulo !== undefined)
          id_titulo_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].descripcion[0].titulo;
        if(datos_generales[0].espiral_esclarecimiento[0].opcion10[0].subtitulo !== undefined)
          id_fecha_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].opcion10[0].subtitulo;
        if(datos_generales[0].espiral_esclarecimiento[0].opcion10[0].descripcion !== undefined)
          id_descripcion_periodo.innerText = datos_generales[0].espiral_esclarecimiento[0].opcion10[0].descripcion;


        // Remover clase de color natural para los hitos
        establecerColorHitoFiltro('i[data-eshito]', 0, "color_natural");

        // Remover clase de color apertura
        establecerColorHitoFiltro('i[data-clasecolorapertura=c_nh_apertura]', 0, "color_apertura");

        // Remover clase de Cierre
        establecerColorHitoFiltro('i[data-clasecolorcierre=c_nh_cierre]', 0, "color_cierre");

        // Remover el color de hito punto de transicion
        establecerColorHitoFiltro('i[data-puntotransicion=c_nh_punto_transicion]', 0, "color_punto_transicion");

        // Remover  el color de hito punto de quiebre
        establecerColorHitoFiltro('i[data-puntoquiebre=c_nh_punto_quiebre]', 0, "color_punto_quiebre");

        //Remover clases de esclarecimiento
        establecerColorHitoFiltro('i[data-escuno=c_nh_esclarecimiento_1]', 0, "color_esclarecimiento_1");
        establecerColorHitoFiltro('i[data-escdos=c_nh_esclarecimiento_2]', 0, "color_esclarecimiento_2");
        establecerColorHitoFiltro('i[data-esctres=c_nh_esclarecimiento_3]', 0, "color_esclarecimiento_3");
        establecerColorHitoFiltro('i[data-esccuatro=c_nh_esclarecimiento_4]', 0, "color_esclarecimiento_4");
        establecerColorHitoFiltro('i[data-esccinco=c_nh_esclarecimiento_5]', 0, "color_esclarecimiento_5");
        establecerColorHitoFiltro('i[data-escseis=c_nh_esclarecimiento_6]', 0, "color_esclarecimiento_6");
        establecerColorHitoFiltro('i[data-escsiete=c_nh_esclarecimiento_7]', 0, "color_esclarecimiento_7");
        establecerColorHitoFiltro('i[data-escocho=c_nh_esclarecimiento_8]', 0, "color_esclarecimiento_8");
        establecerColorHitoFiltro('i[data-escnueve=c_nh_esclarecimiento_9]', 0, "color_esclarecimiento_9");
        establecerColorHitoFiltro('i[data-escdiez=c_nh_esclarecimiento_10]', 0, "color_esclarecimiento_10");

        // Adicionar clase de color Opaco para los hitos
        establecerColorHitoFiltro('i[data-eshito]', 1, "color_opaco");

        // Adicionar clase de color para esclarecimiento 10
        establecerColorHitoFiltro('i[data-escdiez=c_nh_esclarecimiento_10]', 1, "color_esclarecimiento_10");

        configurarModal(id_modal_descripciones,ID_MODAL_ESCLARECIMIENTO_DIEZ);
        break;

    }

  });

}

jQuery(function(){
  jQuery('#pills-democracia-tab').click(function(){
    jQuery('.volver.hidden').toggleClass('hidden');
    if(!jQuery('#pills-flecha-tab').hasClass('activo')){
      jQuery('#pills-flecha-tab').addClass('activo');
    }
  });

  jQuery('#pills-esclarecimiento-tab').click(function(){
    jQuery('.volver.hidden').toggleClass('hidden');
    if(!jQuery('#pills-flecha-tab').hasClass('activo')){
      jQuery('#pills-flecha-tab').addClass('activo');
    }
  })

  jQuery('#pills-flecha-tab').click(function(){
    jQuery('.volver.hidden').toggleClass('hidden');
    if(jQuery('#pills-flecha-tab').hasClass('activo')){
      jQuery('#pills-flecha-tab').removeClass('activo');
    }
  })
})
/*if(data-tituloperiodo = undefined ) {
  if("ochiiiiiiii" !== undefined)
    id_titulo_periodo.innerText = "ochiiiiiiii";
  if(datos_generales[0].espiral_natural[0].descripcion[0].fecha !== undefined)
    id_fecha_periodo.innerText = datos_generales[0].espiral_natural[0].descripcion[0].fecha;
  if(datos_generales[0].espiral_natural[0].descripcion[0].descripcion !== undefined)
    id_descripcion_periodo.innerText = datos_generales[0].espiral_natural[0].descripcion[0].descripcion;
}


// Script audio
/*
let player = null;
var reproductor = null;

document.addEventListener('DOMContentLoaded', function () {
    player = document.getElementById('id_nh_audio_home_espiral');
    reproductor = document.getElementById('reproductor');

    jQuery('#modalInfoCev').on('show.bs.modal', function () {
        document.getElementById('pausar').click();
        console.log('mostrando modal')
    });

    jQuery('#modalInfoCev').on('hidden.bs.modal', function () {
        document.getElementById('reproducir').click();
        console.log('modal cerrado');
    });

    var tmp = Math.round(player.duration);
    var thora = Math.floor(tmp / 3600);
    var tminuto = Math.floor((tmp / 60) % 60);
    var tsegundo = Math.round(tmp % 60);
    if (tminuto < 10) { tminuto = '0' + tminuto; }
    if (tsegundo < 10) { tsegundo = '0' + tsegundo; }
    if (thora == 0) {
        var timer = tminuto + ':' + tsegundo;
    } else {
        var timer = thora + ':' + tminuto + ':' + tsegundo;
    }
    document.getElementById('fin').innerHTML = timer;

    var fin = setInterval(function () { verifica_fin(); }, 1000);

});



function pausa() {
    player.pause();
    document.getElementById('pausar').setAttribute('style', 'display:none');
    document.getElementById('reproducir').removeAttribute('style');
}

function tocar() {
    
    player.play();
    temporizador();
    document.getElementById('reproducir').setAttribute('style', 'display:none;');
    document.getElementById('pausar').removeAttribute('style');
}

function verifica_fin() {
    var progres = player.duration;
    if (player.paused == true || player.ended == true) {
        clearInterval(fin);
    } else {
        var tiempoActual = Math.round(player.currentTime);
        var thora = Math.floor(tiempoActual / 3600);
        var tminuto = Math.floor((tiempoActual / 60) % 60);
        var tsegundo = Math.round(tiempoActual % 60);
        if (tminuto < 10) { tminuto = '0' + tminuto; }
        if (tsegundo < 10) { tsegundo = '0' + tsegundo; }
        if (thora == 0) {
            var timer = tminuto + ':' + tsegundo;
        } else {
            var timer = thora + ':' + tminuto + ':' + tsegundo;
        }

        document.getElementById('inicio').innerHTML = timer;
        document.getElementById('progreso').setAttribute('style', 'width:' + ((tiempoActual / progres) * 100) + '%');

    }
}

function temporizador() {
    player.onloadeddata = (event) => {
        var tmp = Math.round(event.target.duration);
        var thora = Math.floor(tmp / 3600);
        var tminuto = Math.floor((tmp / 60) % 60);
        var tsegundo = Math.round(tmp % 60);
        if (tminuto < 10) { tminuto = '0' + tminuto; }
        if (tsegundo < 10) { tsegundo = '0' + tsegundo; }
        if (thora == 0) {
            var timer = tminuto + ':' + tsegundo;
        } else {
            var timer = thora + ':' + tminuto + ':' + tsegundo;
        }
        document.getElementById('fin').innerHTML = timer;
        var fin = setInterval(function () { verifica_fin(); }, 1000);
    }
}
*/



// START
window.onload = () => {
  
  if(window.sessionStorage.fist_load_modal1 === undefined){
    jQuery('#how-to-use-modal').modal('show')
    window.sessionStorage.fist_load_modal1 = true
  }

  jQuery("#how-to-use-modal .btn-close").click(() => {
    jQuery("#how-to-use-modal").modal("hide");
    soundControl.click();
    playSound(audioBg);
  });


};
