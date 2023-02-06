jQuery(document).ready(function () {
  sessionStorage.setItem("region_seleccionada_sesion", "");
  let tipo_grafica = jQuery(".conquien #tipo_grafica");
  let tipo_aliado = jQuery(".conquien #tipo_aliado");
  let tipo_aliado_dos = jQuery(".conquien #tipo_aliado_dos");
  let tipo_aliado_tres = jQuery(".conquien #tipo_aliado_tres");
  let tipo_aliado_cuatro = jQuery(".conquien #tipo_aliado_cuatro");
  let tipo_aliado_cinco = jQuery(".conquien #tipo_aliado_cinco");
  let lista_asesores = jQuery("#select_listado_asesores");
  let select_nacional = jQuery("#select_nacional");
  let select_internacional = jQuery("#select_internacional");
  let max_aliados = jQuery(".conquien #max_aliados");
  let buscar_nombre = jQuery(".conquien #buscar_nombre");

  let aliadoseleccionado = "";
  let idaliadoseleccionado = "";
  var tipo_grafica_seleccionado = sessionStorage.getItem(
    "tipo_grafica_seleccionado"
  );
  jQuery("#tipo_grafica").val("").trigger("change");
  jQuery("#tipo_grafica").val(tipo_grafica_seleccionado).trigger("change");
  jQuery(".desc-tiempo").hide();

  jQuery
    .getJSON("/themes/custom/cevtheme/conquien/json/jsondb.json", function (data) {
      //Consulto los tipos
      var tipos = [...new Set(data.flatMap((item) => item.tipo))];
      ////console.log("Tipos");
      ////console.log(tipos);

      tipos = [
        ...new Set(
          [].concat.apply(
            [],
            tipos.map(function (tipo) {
              var tipos = data.filter((item) => item.tipo == tipo);

              var element = [];
              element.push({
                tipo: tipo,
                count: tipos.length,
              });

              return element;
            })
          )
        ),
      ];
      ////console.log("tipos con numero de aliados en cada uno");
      ////console.log(tipos);

      tipos.sort(function (a, b) {
        if (a.count < b.count) {
          return 1;
        }
        if (a.count > b.count) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      ////console.log("tipos ordenados");
      ////console.log(tipos);

      tipo_aliado.empty();
      tipo_aliado_dos.empty();
      tipo_aliado_tres.empty();
      tipo_aliado_cuatro.empty();
      tipo_aliado_cinco.empty();

      var option_tipo_aliado =
        " <option value='Todos' selected><span class='text-dift'>Todos los aliados</span></option>";

      tipo_aliado.append(option_tipo_aliado);
      tipo_aliado_dos.append(option_tipo_aliado);
      tipo_aliado_tres.append(option_tipo_aliado);
      tipo_aliado_cuatro.append(option_tipo_aliado);
      tipo_aliado_cinco.append(option_tipo_aliado);

      tipos.forEach(function (tipo) {
        option_tipo_aliado =
          " <option value='" +
          tipo.tipo +
          "'><span class='text-dift'>" +
          tipo.tipo +
          "</option>";

        tipo_aliado.append(option_tipo_aliado);
        tipo_aliado_dos.append(option_tipo_aliado);
        tipo_aliado_tres.append(option_tipo_aliado);
        tipo_aliado_cuatro.append(option_tipo_aliado);
        tipo_aliado_cinco.append(option_tipo_aliado);
      });

      tipo_aliado.select2({
        width: "resolve",
        templateResult: formatState,
      });
      tipo_aliado_dos.select2({
        width: "resolve",
        templateResult: formatState,
      });
      tipo_aliado_tres.select2({
        width: "resolve",
        templateResult: formatState,
      });

      tipo_aliado_cuatro.select2({
        width: "resolve",
        templateResult: formatState,
      });
      tipo_aliado_cinco.select2({
        width: "resolve",
        templateResult: formatState,
      });

      var TipoGrafica = jQuery("#tipo_grafica").val();
      var TipoAliado = tipo_aliado.val();

      LoadTimeLine(TipoGrafica, TipoAliado);

      buscar_nombre.empty();

      var option_buscar_nombre =
        " <option value='buscar_nombre_option' selected><span class='text-dift'>BUSCAR</span> </option>";

      buscar_nombre.append(option_buscar_nombre);

      data.forEach(function (aliado, index) {
        ////console.log("Persona " + index + " | Nombre: " + aliado.nombre + " id: " + aliado.id)
        option_buscar_nombre =
          " <option value='" +
          aliado.id +
          "'><span class='text-dift'>" +
          aliado.nombre +
          "</option>";
        buscar_nombre.append(option_buscar_nombre);
      });

      buscar_nombre.select2({
        width: "resolve",
      });

      var TipoAliado = buscar_nombre.val();

      //fin
    })
    .fail(function () {
      // //console.log("Error al leer los registros del json.");
    });

  lista_asesores.empty();

    var option_lista_asesores =
      " <option value='default_asesor' selected>Seleccione un asesor</option>";

    lista_asesores.append(option_lista_asesores);

    jQuery.getJSON("/themes/custom/cevtheme/conquien/json/jsondbasesores.json", function (data) {
            
      data.forEach(function (asesor, index) {
        var id = asesor.nombre.replace(" ", "-");
        option_lista_asesores =
        " <option id='"+id+"' value='"+asesor.nombre+"' >" +
        asesor.nombre +
        "</option>";

        lista_asesores.append(option_lista_asesores);
      });
  
    })
    .fail(function () {
      // //console.log("Error al leer los registros del json.");
    });

    lista_asesores.select2({
      width: "resolve",
      templateResult: formatStateDefault,
    });

  select_nacional.select2({
    width: "resolve",
    templateResult: formatStateDefault,
  });

  select_internacional.select2({
    width: "resolve",
    templateResult: formatStateDefault,
  });

  function LoadTimeLine(TipoGrafica = "LineaTiempo", TipoAliado = "Todos") {
    //console.clear();

    //console.clear();
    jQuery
      .getJSON("/themes/custom/cevtheme/conquien/json/jsondb.json", function (data) {
        let idtime = window.setTimeout(function () {
          window.clearTimeout(idtime);
        }, 900);

        //Relaciono los tipos con los colores

        const MapTipos = new Map();

        MapTipos.set(
          "Organizaciones, plataformas sociales y territoriales",
          "tipo-organizaciones"
        );
        MapTipos.set("Comunidad Internacional", "tipo-comunidad_internacional");
        MapTipos.set("Comunidad Académica", "tipo-comunidad_academica");
        MapTipos.set(
          "Institucionalidad pública e instancias nacionales y territoriales",
          "tipo-institucionalidad"
        );
        /*MapTipos.set("Figuras públicas", "tipo-figuras_publicas");*/
        MapTipos.set(
          "Medios de comunicación (públicos, privados y comunitarios)",
          "tipo-medios"
        );
        MapTipos.set("Sector empresarial", "tipo-sector_privado");
        MapTipos.set("", "#ff0000");
        MapTipos.set("Sociedad política", "tipo-sociedad_politica");
        MapTipos.set("Comunidad académica", "tipo-comunidad_academica");
        MapTipos.set("Comunidad internacional", "tipo-comunidad_internacional");
        // MapTipos.set("Personas aliadas", "tipo-personas_aliadas");
        MapTipos.set(
          "Consejo Asesor de la Comisión de la Verdad",
          "tipo-consejo_asesor"
        );

        //Obtengo el elemento DOM
        var RowTimeLine = jQuery(".conquien .row-time-line");
        var RowTimeLine1 = jQuery(".conquien .row-time-line-1");
        var RowTimeLine2 = jQuery(".conquien .row-time-line-2");

        var maxaliados = 0;

        if (TipoGrafica == "LineaTiempo") {
          /*Cargar imagen minimap*/
          document.getElementById("img_minimap").src =
            "./themes/custom/cevtheme/conquien/assets/minimap/progress_con_quien.svg";

          //Limpio el elemento DOM
          RowTimeLine.empty();
          RowTimeLine1.empty();
          RowTimeLine2.empty();

          jQuery(".desc-tiempo").show();
          //jQuery("#desc-territorio").addClass("d-block")
          jQuery("#desc-territorio").removeClass("d-block");
          jQuery("#desc-territorio").addClass("d-none");
          jQuery("#desc-temas").removeClass("d-block");
          jQuery("#desc-temas").addClass("d-none");
          jQuery("#desc-tipos").removeClass("d-block");
          jQuery("#desc-tipos").addClass("d-none");
          jQuery("#desc-nacional").addClass("d-none");
          jQuery("#desc-nacional").removeClass("d-block");
          jQuery("#desc-internacional").addClass("d-none");
          jQuery("#desc-internacional").removeClass("d-block");

          //Consulto los años
          var years = [
            ...new Set(data.flatMap((item) => item.anios_reporte_comision)),
          ];

          // //console.log("Años");
          // //console.log(years);

          //Relaciono los registros al año

          var items = [
            ...new Set(
              [].concat.apply(
                [],
                data.map(function (item) {
                  var elements = [];

                  item.anios_reporte_comision.forEach((anio_reporte_comision) =>
                    elements.push({
                      id: item.id,
                      nombre: item.nombre,
                      tipo: item.tipo,
                      pais_origen: item.pais_origen,
                      anio_reporte_comision: anio_reporte_comision,
                    })
                  );

                  return elements;
                })
              )
            ),
          ];

          // //console.log("Registros");
          // //console.log(items);

          years = [
            ...new Set(
              [].concat.apply(
                [],
                years.map(function (year) {
                  var aliados = items.filter(
                    (item) =>
                      parseInt(item.anio_reporte_comision) == parseInt(year) &&
                      (TipoAliado == "Todos" || item.tipo == TipoAliado)
                  );

                  var element = [];
                  element.push({
                    year: year,
                    count: aliados.length,
                  });

                  return element;
                })
              )
            ),
          ];

          // //console.log("Años");
          // //console.log(years);

          //Itero los años
          var num_columna_anyo;
          years
            .sort(function (a, b) {
              return a.year - b.year;
            })
            .forEach(function (year, index) {
            if(index==0){
                num_columna_anyo = index;
              }
              else{
                num_columna_anyo = num_columna_anyo + 1;
              }

              var aliados = items
                .filter(
                  (item) =>
                    parseInt(item.anio_reporte_comision) ==
                      parseInt(year.year) &&
                    (TipoAliado == "Todos" || item.tipo == TipoAliado)
                )
                .sort(function (a, b) {
                  return a.nombre - b.nombre;
                });

              maxaliados =
                maxaliados < aliados.length ? aliados.length : maxaliados;

              var ColYearTimeLineTxt = jQuery(
                "<div class='col-sm-12 col-md-6 col-year-time-line col-year-time-line-sm col-year-time-line-md col-year-time-line-lg col-year-time-line-xl' id = 'col-year-time-line-" +
                num_columna_anyo +
                  "' style='width: 218px !important;'></div>"
              );

              var RowTimeLineInfoTxt = jQuery(
                "<div class='row-time-line-info row-time-line-info-sm row-time-line-info-md row-time-line-info-lg row-time-line-info-xl' id = 'row-time-line-info-" +
                  num_columna_anyo +
                  "'><h4 class='row-time-line-info-year' style='display: inline !important;'>" +
                  year.year +
                  "</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h6 class='row-time-line-info-aliados' style='display: inline !important;'>" +
                  aliados.length +
                  "&nbsp;aliados</h6></div>"
              );

              ColYearTimeLineTxt.append(RowTimeLineInfoTxt);

              var txt_year = "";

              if (year.year == "2017") {
                txt_year =
                  "Creación de la Comisión de la Verdad mediante el Decreto 588 de 2017. En noviembre el Comité de escogencia elige a 11 Comisionados/as y realizan su primera reunión.";
              } else if (year.year == "2018") {
                txt_year =
                  "Fase de alistamiento, asignación de presupuesto general de la nación para su funcionamiento y el 28 de nov, inicio formal del desarrollo del mandato.";
              } else if (year.year == "2019") {
                txt_year =
                  "Fase de desarrollo del mandato, atravesada desde marzo del 2020 por la pandemia.";
              } else if (year.year == "2020") {
                txt_year =
                  "Fase de desarrollo del mandato, atravesada desde marzo del 2020 por la pandemia.";
              } else if (year.year == "2021") {
                txt_year =
                  "Fase de desarrollo del mandato, atravesada desde marzo del 2020 por la pandemia.";
              } else if (year.year == "2022") {
                txt_year =
                  "Extensión del mandato (7 meses) por fallo de la Corte Constitucional y adición de 2 meses de julio y agosto para la amplia difusión del informe final. Finales de Agosto inicia liquidación de la Comisión.";
              }

              var RowTimeLineItemsTxt = jQuery(
                "<div class='row-time-line-items row-time-line-items-lg row-time-line-items-xl' id = 'row-time-line-items-txt-" +
                  num_columna_anyo +
                  "'><div style='margin-left: 20px; color: white; font-size: 14px;'>" +
                  txt_year +
                  "</div></div>"
              );

              ColYearTimeLineTxt.append(RowTimeLineItemsTxt);
              RowTimeLine.append(ColYearTimeLineTxt);

              num_columna_anyo = num_columna_anyo + 1;

              var ColYearTimeLine = jQuery(
                "<div class='col-sm-12 col-md-6 col-year-time-line col-year-time-line-sm col-year-time-line-md col-year-time-line-lg col-year-time-line-xl' id = 'col-year-time-line-" +
                num_columna_anyo +
                  "'></div>"
              );

              var RowTimeLineInfo = jQuery(
                "<div class='row-time-line-info row-time-line-info-sm row-time-line-info-md row-time-line-info-lg row-time-line-info-xl' id = 'row-time-line-info-" +
                num_columna_anyo +
                  "' anyo='"+year.year+"'></div>"
              );

              ColYearTimeLine.append(RowTimeLineInfo);
              
              var RowTimeLineItems = jQuery(
                "<div class='row-time-line-items row-time-line-items-lg row-time-line-items-xl' id = 'row-time-line-items-" +
                  num_columna_anyo +
                  "'></div>"
              );

              aliados.forEach(function (item) {
                var colorclass = MapTipos.get(item.tipo);

                const AnimationTimeShow = Math.floor(Math.random() * 6) + 1;

                var ItemTimeLine = jQuery(
                  "<i class='fa fa-circle item-time-line " +
                    colorclass +
                    " item-time-show-" +
                    AnimationTimeShow +
                    "' title = '" +
                    item.nombre +
                    " - " +
                    item.tipo +
                    "' aliado = '" +
                    item.nombre +
                    "' tipo = '" +
                    item.tipo +
                    "' pais_origen = '" +
                    item.pais_origen +
                    "' aliado_id = '" +
                    item.id +
                    "'></i>"
                );

                RowTimeLineItems.append(ItemTimeLine);
              });

              ColYearTimeLine.append(RowTimeLineItems);

              RowTimeLine.append(ColYearTimeLine);
            });

          jQuery("html, body").animate(
            {
              scrollTop: jQuery(".conquien #row-time-line-info-0").offset().top,
            },
            500
          );
        } else if (TipoGrafica == "TipoAliado") {
          /*Carga imagen minimap*/
          document.getElementById("img_minimap").src =
            "./themes/custom/cevtheme/conquien/assets/minimap/progress_con_quien_tipo_aliado.svg";

          TipoAliado = "Todos";
          //Limpio el elemento DOM
          RowTimeLine.empty();
          RowTimeLine1.empty();
          RowTimeLine2.empty();
          //muestro el texto
          jQuery(".desc-tiempo").hide();
          jQuery("#desc-tipos").addClass("d-block");
          jQuery("#desc-tipos").removeClass("d-none");
          jQuery("#desc-temas").addClass("d-none");
          jQuery("#desc-territorio").addClass("d-none");
          jQuery("#desc-nacional").addClass("d-none");
          jQuery("#desc-nacional").removeClass("d-block");
          jQuery("#desc-internacional").addClass("d-none");
          jQuery("#desc-internacional").removeClass("d-block");

          //Consulto los tipos
          var types = [{ type: "Todos" }];

          //console.log("Tipos");
          //console.log(types);

          //Relaciono los registros al tipo

          var items = [
            ...new Set(
              [].concat.apply(
                [],
                data.map(function (item) {
                  var element = {
                    nombre: item.nombre,
                    tipo: item.tipo,
                    pais_origen: item.pais_origen,
                    id: item.id,
                  };
                  return element;
                })
              )
            ),
          ];

          //console.log("Registros");
          //console.log(items);

          //console.log("Tipos");
          //console.log(types);

          //Itero los tipos
          types
            .sort(function (a, b) {
              return a.count - b.count;
            })
            .filter((type) => TipoAliado == "Todos" || type.type == TipoAliado)
            .forEach(function (type, index) {
              var aliados = items.sort(function (a, b) {
                return a.nombre - b.nombre;
              });

              maxaliados =
                maxaliados < aliados.length ? aliados.length : maxaliados;

              var ColYearTimeLine = jQuery(
                "<div class='col-sm-12 col-md-6 col-year-time-line col-year-time-line-sm col-year-time-line-md col-year-time-line-lg col-year-time-line-xl' id = 'col-year-time-line-" +
                  index +
                  "'></div>"
              );

              var RowTimeLineInfo = jQuery(
                "<div class='row-time-line-info row-time-line-info-sm row-time-line-info-md row-time-line-info-lg row-time-line-info-xl' id = 'row-time-line-info-" +
                  index +
                  "'></div>"
              );

              ColYearTimeLine.append(RowTimeLineInfo);

              var RowTimeLineItems = jQuery(
                "<div class='row-time-line-items row-time-line-items-lg row-time-line-items-xl' id = 'row-time-line-items-" +
                  index +
                  "'></div>"
              );

              let random = 0;

              aliados.forEach(function (item) {
                var colorclass = MapTipos.get(item.tipo);

                const AnimationTimeShow = Math.floor(Math.random() * 6) + 1;

                var ItemTimeLine = jQuery(
                  "<i class='fa fa-circle item-time-line " +
                    colorclass +
                    " item-time-show-" +
                    AnimationTimeShow +
                    "' title = '" +
                    item.nombre +
                    " - " +
                    item.tipo +
                    "' aliado = '" +
                    item.nombre +
                    "' tipo = '" +
                    item.tipo +
                    "' pais_origen = '" +
                    item.pais_origen +
                    "' aliado_id = '" +
                    item.id +
                    "'></i>"
                );

                RowTimeLineItems.append(ItemTimeLine);
              });

              ColYearTimeLine.append(RowTimeLineItems);

              RowTimeLine.append(ColYearTimeLine);
            });

          jQuery("html, body").animate(
            {
              scrollTop: jQuery(".conquien #row-time-line-info-0").offset().top,
            },
            500
          );
        } else if (TipoGrafica == "TemaTrabajo") {
          /*Carga imagen minimap*/
          document.getElementById("img_minimap").src =
            "./themes/custom/cevtheme/conquien/assets/minimap/progress_con_quien_tema.svg";

          //Limpio el elemento DOM
          RowTimeLine.empty();
          RowTimeLine1.empty();
          RowTimeLine2.empty();

          jQuery(".desc-tiempo").hide();
          //jQuery("#desc-territorio").addClass("d-block")
          jQuery("#desc-temas").removeClass("d-none");
          jQuery("#desc-territorio").removeClass("d-block");
          jQuery("#desc-tipos").removeClass("d-block");
          jQuery("#desc-territorio").addClass("d-none");
          jQuery("#desc-tipos").addClass("d-none");
          jQuery("#desc-nacional").addClass("d-none");
          jQuery("#desc-nacional").removeClass("d-block");
          jQuery("#desc-internacional").addClass("d-none");
          jQuery("#desc-internacional").removeClass("d-block");

          //Consulto los temas
          var topics = [...new Set(data.flatMap((item) => item.temas))];

          //console.log("Temas");
          //console.log(topics);

          //Relaciono los registros al tema

          var items = [
            ...new Set(
              [].concat.apply(
                [],
                data.map(function (item) {
                  var elements = [];

                  item.temas.forEach((tema) =>
                    elements.push({
                      nombre: item.nombre,
                      tipo: item.tipo,
                      pais_origen: item.pais_origen,
                      id: item.id,
                      tema: tema,
                    })
                  );

                  return elements;
                })
              )
            ),
          ];

          //console.log("Registros");
          //console.log(items);

          topics = [
            ...new Set(
              [].concat.apply(
                [],
                topics.map(function (topic) {
                  var aliados = items.filter(
                    (item) =>
                      item.tema == topic &&
                      (TipoAliado == "Todos" || item.tipo == TipoAliado)
                  );

                  var element = [];
                  element.push({
                    topic: topic,
                    count: aliados.length,
                  });

                  return element;
                })
              )
            ),
          ];

          //console.log("Temas");
          //console.log(topics);

          //Itero los temas
          var num_columna_topic;
          topics
            .sort(function (a, b) {
              return a.count - b.count;
            })
            .forEach(function (topic, index) {
              
              if(index==0){
                num_columna_topic = index;
              }
              else{
                num_columna_topic = num_columna_topic + 1;
              }

              var aliados = items
                .filter(
                  (item) =>
                    item.tema == topic.topic &&
                    (TipoAliado == "Todos" || item.tipo == TipoAliado)
                )
                .sort(function (a, b) {
                  return a.nombre - b.nombre;
                });

              maxaliados =
                maxaliados < aliados.length ? aliados.length : maxaliados;

              var ColYearTimeLineTxt = jQuery(
                "<div class='col-sm-12 col-md-6 col-year-time-line col-year-time-line-sm col-year-time-line-md col-year-time-line-lg col-year-time-line-xl' id = 'col-year-time-line-" +
                  num_columna_topic +
                  "' style='width: 218px !important;'></div>"
              );

              var RowTimeLineInfoTxt = jQuery(
                "<div class='row-time-line-info row-time-line-info-sm row-time-line-info-md row-time-line-info-lg row-time-line-info-xl' id = 'row-time-line-info-" +
                  num_columna_topic +
                  "'><h4 class='row-time-line-info-year' style='display: inline !important;'>" +
                  topic.topic +
                  "</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h6 class='row-time-line-info-aliados' style='display: inline !important;'>" +
                  aliados.length +
                  "&nbsp;aliados</h6></div>"
              );

              ColYearTimeLineTxt.append(RowTimeLineInfoTxt);

              var txt_topic = "";

              if (topic.topic == "Relacionamiento ético y político") {
                txt_topic =
                  "Respaldo y acompañamiento para posicionar la verdad ética y política y fortalecer el mandato del Sistema Integral para la Paz, en diálogo permanente con el Gobierno Nacional, las ramas del poder, la comunidad internacional y otros actores sociales y políticos.";
              } else if (topic.topic == "Enfoques poblaciones y diferenciales") {
                txt_topic =
                  "Inclusión de los enfoques de género; niños, niñas, adolescentes y jóvenes; personas mayores; pueblos étnicos y contra el racismo; población en condición de discapacidad y el apoyo psicosocial a víctimas y responsables.";
              } else if (topic.topic == "Fortalecimiento institucional") {
                txt_topic =
                  "Contribución a la presencia de la Comisión en todo el territorio nacional y en 23 países, al desarrollo del Sistema de Información Misional y, en general, al fortalecimiento temático y metodológico.";
              } else if (topic.topic == "Escucha amplia y diversa") {
                txt_topic =
                  "Contribución a la investigación para el esclarecimiento de la verdad por medio de entrevistas individuales y colectivas, historias de vida; entrega de testimonios, informes, casos e investigaciones; entre otros formatos públicos y privados de escucha.";
              } else if (topic.topic == "Diálogo social y público") {
                txt_topic =
                  "Fortalecimiento de diversas estrategias públicas para dignificar a las víctimas, promover el reconocimiento de responsabilidades, y movilizar a la sociedad hacia un compromiso colectivo con la convivencia y la no repetición.";
              }

              var RowTimeLineItemsTxt = jQuery(
                "<div class='row-time-line-items row-time-line-items-lg row-time-line-items-xl' id = 'row-time-line-items-txt-" +
                num_columna_topic +
                  "'><div style='margin-left: 20px; color: white; font-size: 14px;'>" +
                  txt_topic +
                  "</div></div>"
              );

              ColYearTimeLineTxt.append(RowTimeLineItemsTxt);
              RowTimeLine.append(ColYearTimeLineTxt);

              num_columna_topic = num_columna_topic + 1;

              var ColYearTimeLine = jQuery(
                "<div class='col-sm-12 col-md-6 col-year-time-line col-year-time-line-sm col-year-time-line-md col-year-time-line-lg col-year-time-line-xl' id = 'col-year-time-line-" +
                num_columna_topic +
                  "'></div>"
              );

              var RowTimeLineInfo = jQuery(
                "<div class='row-time-line-info row-time-line-info-sm row-time-line-info-md row-time-line-info-lg row-time-line-info-xl' id = 'row-time-line-info-" +
                  num_columna_topic +
                  "' topic='"+topic.topic+"'></div>"
              );

              ColYearTimeLine.append(RowTimeLineInfo);

              var RowTimeLineItems = jQuery(
                "<div class='row-time-line-items row-time-line-items-lg row-time-line-items-xl' id = 'row-time-line-items-" +
                  num_columna_topic +
                  "'></div>"
              );

              aliados.forEach(function (item) {
                var colorclass = MapTipos.get(item.tipo);

                const AnimationTimeShow = Math.floor(Math.random() * 6) + 1;

                var ItemTimeLine = jQuery(
                  "<i class='fa fa-circle item-time-line " +
                    colorclass +
                    " item-time-show-" +
                    AnimationTimeShow +
                    "' title = '" +
                    item.nombre +
                    " - " +
                    item.tipo +
                    "' aliado = '" +
                    item.nombre +
                    "' tipo = '" +
                    item.tipo +
                    "' pais_origen = '" +
                    item.pais_origen +
                    "' aliado_id = '" +
                    item.id +
                    "'></i>"
                );

                RowTimeLineItems.append(ItemTimeLine);
              });

              ColYearTimeLine.append(RowTimeLineItems);

              RowTimeLine.append(ColYearTimeLine);
            });

          jQuery("html, body").animate(
            {
              scrollTop: jQuery(".conquien #row-time-line-info-0").offset().top,
            },
            500
          );
        } else if (TipoGrafica == "RegionIncidencia") {
          //Limpio el elemento DOM
          RowTimeLine.empty();
          RowTimeLine1.empty();
          RowTimeLine2.empty();

          //Mostrar textos
          jQuery("#desc-tipos").addClass("d-none");
          jQuery(".desc-tiempo").hide();
          jQuery(".desc-tipos").hide();
          //jQuery("#desc-territorio").addClass("d-block")
          jQuery("#desc-territorio").removeClass("d-none");
          jQuery("#desc-temas").removeClass("d-block");
          jQuery("#desc-temas").addClass("d-none");
          jQuery("#desc-tipos").removeClass("d-block");
          jQuery("#desc-nacional").addClass("d-none");
          jQuery("#desc-nacional").removeClass("d-block");
          jQuery("#desc-internacional").addClass("d-none");
          jQuery("#desc-internacional").removeClass("d-block");

          //Consulto las Regiones
          var regions = [
            ...new Set([
              ...[
                ...new Set(
                  data
                    .flatMap((item) => item.territorializacion)
                    .flatMap((item) => item.internacional)
                ),
              ].map(function (item) {
                return {
                  region: item,
                  tiporegion: "internacional",
                };
              }),
              ...[
                ...new Set(
                  data
                    .flatMap((item) => item.territorializacion)
                    .flatMap((item) => item.nacional)
                ),
              ].map(function (item) {
                return {
                  region: item,
                  tiporegion: "nacional",
                };
              }),
            ]),
          ];

          //console.log("Regiones");
          //console.log(regions);

          //Relaciono los registros a la region

          var items = [
            ...new Set(
              [].concat.apply(
                [],
                data.map(function (item) {
                  var elements = [];

                  item.territorializacion.forEach((territori) =>
                    [
                      ...territori.internacional.map(function (item) {
                        return {
                          region: item,
                          tiporegion: "internacional",
                        };
                      }),
                      ...territori.nacional.map(function (item) {
                        return {
                          region: item,
                          tiporegion: "nacional",
                        };
                      }),
                    ].forEach((regionterritori) =>
                      elements.push({
                        nombre: item.nombre,
                        tipo: item.tipo,
                        pais_origen: item.pais_origen,
                        id: item.id,
                        region: regionterritori.region,
                        tiporegion: regionterritori.tiporegion,
                      })
                    )
                  );

                  return elements;
                })
              )
            ),
          ];

          //console.log("Registros");
          //console.log(items);

          regions = [
            ...new Set(
              [].concat.apply(
                [],
                regions.map(function (region) {
                  var aliados = items.filter(
                    (item) =>
                      item.region == region.region &&
                      (TipoAliado == "Todos" || item.tipo == TipoAliado)
                  );

                  var element = [];
                  element.push({
                    region: region.region,
                    tiporegion: region.tiporegion,
                    count: aliados.length,
                  });

                  return element;
                })
              )
            ),
          ];

          //console.log("Regiones");
          //console.log(regions);

          //Itero las regiones
          [
            ...regions
              .filter((item) => item.tiporegion == "internacional")
              .sort(function (a, b) {
                return a.count - b.count;
              }),
            ...regions
              .filter((item) => item.tiporegion == "nacional")
              .sort(function (a, b) {
                return a.count - b.count;
              }),
          ].forEach(function (region, index) {
            var aliados = items
              .filter(
                (item) =>
                  item.region == region.region &&
                  (TipoAliado == "Todos" || item.tipo == TipoAliado)
              )
              .sort(function (a, b) {
                return a.nombre - b.nombre;
              });

            maxaliados =
              maxaliados < aliados.length ? aliados.length : maxaliados;

            var ColYearTimeLine = jQuery(
              "<div class='col-sm-12 col-md-6 col-year-time-line col-year-time-line-sm col-year-time-line-md col-year-time-line-lg col-year-time-line-xl' id = 'col-year-time-line-" +
                index +
                "'></div>"
            );

            var RowTimeLineInfo = jQuery(
              "<div class='row-time-line-info row-time-line-info-sm row-time-line-info-md row-time-line-info-lg row-time-line-info-xl' id = 'row-time-line-info-" +
                index +
                "'><h4 class='row-time-line-info-year' style='display: inline !important;'>" +
                region.region +
                "</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h6 class='row-time-line-info-aliados' style='display: inline !important;'>" +
                aliados.length +
                "&nbsp;aliados</h6></div>"
            );

            ColYearTimeLine.append(RowTimeLineInfo);

            var RowTimeLineItems = jQuery(
              "<div class='row-time-line-items row-time-line-items-lg row-time-line-items-xl' id = 'row-time-line-items-" +
                index +
                "'></div>"
            );

            aliados.forEach(function (item) {
              var colorclass = MapTipos.get(item.tipo);

              const AnimationTimeShow = Math.floor(Math.random() * 6) + 1;

              var ItemTimeLine = jQuery(
                "<i class='fa fa-circle item-time-line " +
                  colorclass +
                  " item-time-show-" +
                  AnimationTimeShow +
                  "' title = '" +
                  item.nombre +
                  " - " +
                  item.tipo +
                  "' aliado = '" +
                  item.nombre +
                  "' tipo = '" +
                  item.tipo +
                  "' pais_origen = '" +
                  item.pais_origen +
                  "' aliado_id = '" +
                  item.id +
                  "'></i>"
              );

              RowTimeLineItems.append(ItemTimeLine);
            });

            ColYearTimeLine.append(RowTimeLineItems);

            RowTimeLine.append(ColYearTimeLine);
          });

          jQuery("html, body").animate(
            {
              scrollTop: jQuery(".conquien #row-time-line-info-0").offset().top,
            },
            500
          );
        } else if (TipoGrafica == "Nacional") {
          /*Carga imagen minimap*/
          document.getElementById("img_minimap").src =
            "./themes/custom/cevtheme/conquien/assets/minimap/progress_con_quien_nacional.svg";

          //Limpio el elemento DOM
          RowTimeLine.empty();
          RowTimeLine1.empty();
          RowTimeLine2.empty();

          //Mostrar textos
          jQuery("#desc-tipos").addClass("d-none");
          jQuery(".desc-tiempo").hide();
          jQuery(".desc-tipos").hide();
          jQuery("#desc-nacional").addClass("d-block");
          jQuery("#desc-nacional").removeClass("d-none");
          jQuery("#desc-temas").removeClass("d-block");
          jQuery("#desc-temas").addClass("d-none");
          jQuery("#desc-tipos").removeClass("d-block");
          jQuery("#desc-internacional").addClass("d-none");
          jQuery("#desc-internacional").removeClass("d-block");
          jQuery("a.region.region-other.region_nacional.text-detalle")
            .removeClass("text-detalle")
            .addClass("descripcion");
          desmarcar_mapa(
            ".svg-colombia",
            sessionStorage.getItem("region_seleccionada_sesion"),
            "column-4"
          );
          sessionStorage.setItem("region_seleccionada_sesion", "");
          jQuery("#nombre-region").text("");
          jQuery("#num_aliados").text("");
          jQuery("#select_tipo_aliado_cuatro").removeClass("d-block");
          jQuery("#select_tipo_aliado_cuatro").addClass("d-none");         
          jQuery("#tipo_aliado_cuatro").val("Todos").trigger('change');
          rest_seleted_mapa(".svg-colombia", "column-4");
        } else if (TipoGrafica == "Internacional") {
          /*Carga imagen minimap*/
          document.getElementById("img_minimap").src =
            "./themes/custom/cevtheme/conquien/assets/minimap/progress_con_quien_internacional.svg";

          //Limpio el elemento DOM
          RowTimeLine.empty();
          RowTimeLine1.empty();
          RowTimeLine2.empty();

          //Mostrar textos
          jQuery("#desc-tipos").addClass("d-none");
          jQuery(".desc-tiempo").hide();
          jQuery(".desc-tipos").hide();
          jQuery("#desc-nacional").addClass("d-none");
          jQuery("#desc-nacional").removeClass("d-block");
          jQuery("#desc-internacional").addClass("d-block");
          jQuery("#desc-internacional").removeClass("d-none");
          jQuery("#desc-temas").removeClass("d-block");
          jQuery("#desc-temas").addClass("d-none");
          jQuery("#desc-tipos").removeClass("d-block");
          jQuery("a.region.region-other.region_internacional.text-detalle")
            .removeClass("text-detalle")
            .addClass("descripcion");
          desmarcar_mapa(
            ".svg-internacional",
            sessionStorage.getItem("region_seleccionada_sesion"),
            "mapamundi"
          );
          sessionStorage.setItem("region_seleccionada_sesion", "");
          jQuery("#nombre-interregion").text("");
          jQuery("#inter_num_aliados").text("");
          jQuery("#select_tipo_aliado_tres").removeClass("d-block");
          jQuery("#select_tipo_aliado_tres").addClass("d-none");
          jQuery("#tipo_aliado_tres").val("Todos").trigger('change');
          rest_seleted_mapa(".svg-internacional", "mapamundi");
        }

        max_aliados.val(maxaliados);

        ConsultarCirculosAliado("", "");
        AlinearFilaItems();

        jQuery(".conquien .col-year-time-line").each(function (index) {
          let idcol = jQuery(this).attr("id");

          let segundos = 4;

          let milisegundos = segundos * 1000;
          let milisegundosparte = milisegundos / 4;

          let idtime = window.setTimeout(function () {
            window.clearTimeout(idtime);
          }, 900);
         
          if (TipoGrafica == "TipoAliado") {
            lucesled();
          }
          if (TipoGrafica === "TemaTrabajo") {
            lucesled();
          }
          if (TipoGrafica === "Nacional") {
            movimiento();
          }
          if (TipoGrafica === "LineaTiempo") {
            movimiento();
          }
          
          function movimiento(){          
            anime({
              targets: ".conquien #" + idcol + " .item-time-line",
              scale: [
                {value: .1, easing: 'easeOutSine', duration: 100},
                {value: 1, easing: 'easeInOutQuad', duration: 600}
              ],
              delay: anime.stagger(200, {grid: [100, 16], from: 'center'})
            });
          }

          function lucesled () {
              
                let ciclos = 12;
                let segundos = 1;
                let milisegundos = (segundos * 1000) / ciclos;

                let elementosled = jQuery(
                  ".conquien #" + idcol + " .item-time-line"
                );

                let cantidad = elementosled.length;

                let count = 0;

                let idinterv = setInterval(function () {
                  count++;

                  elementosled
                    .removeClass("item-time-line-transparent")
                    .removeClass("item-time-line-white");

                  elementosled.addClass("item-time-line-transparent");

                  let aleatorios = elementosled.filter(function () {
                    return (
                      Math.floor((cantidad / 3) * 2.5) <=
                      Math.floor(
                        Math.random() *
                          Math.floor(cantidad + (cantidad * 3) / 3.5)
                      )
                    );
                  });

                  aleatorios
                    .removeClass("item-time-line-transparent")
                    .addClass("item-time-line-white");

                  if (count >= ciclos) {
                    window.clearTimeout(idinterv);

                    elementosled
                      .removeClass("item-time-line-transparent")
                      .removeClass("item-time-line-white");
                  }
                }, milisegundos);
              
            };
          
        });
        ancho_linea_minimap();
        jQuery('.body__preloader').addClass('loaded');
        intervalo();
        //fin
      })
      .fail(function () {
        //console.log("Error al leer los registros del json.");
      });
  }

  tipo_grafica.change(function () {
    var TipoGrafica = jQuery(this).val();
    if (TipoGrafica === "TipoAliado") {
      tipo_aliado.select2("destroy");
      tipo_aliado.hide();
      jQuery("#tipo_aliado_dos").val("Todos").trigger("change");
    } else {
      tipo_aliado.show();
      tipo_aliado.select2({
        width: "resolve",
        templateResult: formatState,
      });
    }
    var TipoAliado = tipo_aliado.val();
    LoadTimeLine(TipoGrafica, TipoAliado);
    if (TipoGrafica === "TemaTrabajo") {
      jQuery("#tipo_aliado_cinco").val("Todos").trigger("change");
      document.getElementById("img_minimap").src =
        "./themes/custom/cevtheme/conquien/assets/minimap/progress_con_quien_tema.svg";
    } else if (TipoGrafica === "TipoAliado") {
      document.getElementById("img_minimap").src =
        "./themes/custom/cevtheme/conquien/assets/minimap/progress_con_quien_tipo_aliado.svg";
    } else if (TipoGrafica === "Nacional") {
      jQuery("#row-time-line-info-nacional")
      .addClass(
        "d-none"
      );
     document.getElementById("img_minimap").src =
        "./themes/custom/cevtheme/conquien/assets/minimap/progress_con_quien_nacional.svg";
      
      jQuery("#select_nacional").val("Seleccione region nacional").trigger("change");
    } else if (TipoGrafica === "Internacional") {
      jQuery("#row-time-line-info-internacional")
      .addClass(
        "d-none"
      );
      document.getElementById("img_minimap").src =
        "./themes/custom/cevtheme/conquien/assets/minimap/progress_con_quien_internacional.svg";
      
      jQuery("#select_internacional").val("Seleccione pais").trigger("change");
    } else {
      document.getElementById("img_minimap").src =
        "./themes/custom/cevtheme/conquien/assets/minimap/progress_con_quien.svg";
    }
    
    jQuery("#datos_consejo_asesor")
      .addClass(
        "d-none"
      );

    jQuery("#div-circle-time-line").removeAttr("style");

    jQuery(".item_asesor")
      .removeClass("text-detalle")
      .addClass("descripcion");

    jQuery("#select_listado_asesores").val("default_asesor").trigger("change");

    jQuery("#img_asesor")
      .removeClass("d-block")
      .addClass("d-none");

    jQuery("#txt_asesor")
      .removeClass("d-block")
      .addClass("d-none");
  });

  tipo_aliado.change(function () {
    var TipoGrafica = tipo_grafica.val();
    var TipoAliado = jQuery(this).val();
    var nombre_region = jQuery("#nombre-region").text().trim().replace(":", "");
    var nombre_interregion = jQuery("#nombre-interregion")
      .text()
      .trim()
      .replace(":", "");

    if (TipoGrafica == "Nacional" || TipoGrafica == "Internacional") {
      if (TipoGrafica == "Nacional") {
        if (nombre_region != "") {
          var RowTimeLine1 = jQuery(".conquien .row-time-line-1");
          //Limpio el elemento DOM
          RowTimeLine1.empty();
          jQuery
            .getJSON("/themes/custom/cevtheme/conquien/json/jsondb.json", function (data) {
              //Relaciono los tipos con los colores
              const MapTipos = new Map();
              MapTipos.set(
                "Organizaciones, plataformas sociales y territoriales",
                "tipo-organizaciones"
              );
              MapTipos.set(
                "Comunidad Internacional",
                "tipo-comunidad_internacional"
              );
              MapTipos.set("Comunidad Académica", "tipo-comunidad_academica");
              MapTipos.set(
                "Institucionalidad pública e instancias nacionales y territoriales",
                "tipo-institucionalidad"
              );
              /*MapTipos.set("Figuras públicas", "tipo-figuras_publicas");*/
              MapTipos.set(
                "Medios de comunicación (públicos, privados y comunitarios)",
                "tipo-medios"
              );
              MapTipos.set("Sector empresarial", "tipo-sector_privado");
              MapTipos.set("", "#ff0000");
              MapTipos.set("Sociedad política", "tipo-sociedad_politica");
              MapTipos.set("Comunidad académica", "tipo-comunidad_academica");
              MapTipos.set(
                "Comunidad internacional",
                "tipo-comunidad_internacional"
              );
              // MapTipos.set("Personas aliadas", "tipo-personas_aliadas");
              MapTipos.set(
                "Consejo Asesor de la Comisión de la Verdad",
                "tipo-consejo_asesor"
              );

              //Consulto las regiones
              var elementos = [];

              data.forEach(function (aliado, index) {
                if (aliado.territorializacion[0]["nacional"].length > 0) {
                  aliado.territorializacion[0]["nacional"].forEach(function (
                    region,
                    index
                  ) {
                    if (region == nombre_region && TipoAliado == "Todos") {
                      elementos.push(aliado);
                    } else {
                      //region == region_seleccionada != TipoAliado == "Todos"
                      if (
                        region == nombre_region &&
                        TipoAliado == aliado.tipo
                      ) {
                        elementos.push(aliado);
                      }
                    }
                  });
                }
              });

              //console.log("Elementos");
              //console.log(elementos.length);
              jQuery("#num_aliados").text(elementos.length + " aliados");
              var ColYearTimeLine = jQuery(
                "<div class='col-sm-12 col-md-12 col-year-time-line col-year-time-line-sm col-year-time-line-md col-year-time-line-lg col-year-time-line-xl' id = 'col-year-time-line-" +
                  0 +
                  "'></div>"
              );
              var RowTimeLineItems = jQuery(
                "<div class='row-time-line-items row-time-line-items-lg row-time-line-items-xl' id = 'row-time-line-items-" +
                  0 +
                  "'></div>"
              );
              elementos.forEach(function (elemento, index) {
                var colorclass = MapTipos.get(elemento.tipo);
                const AnimationTimeShow = Math.floor(Math.random() * 6) + 1;
                var ItemTimeLine = jQuery(
                  "<i class='fa fa-circle item-time-line " +
                    colorclass +
                    " item-time-show-" +
                    AnimationTimeShow +
                    "' title = '" +
                    elemento.nombre +
                    " - " +
                    elemento.tipo +
                    "' aliado = '" +
                    elemento.nombre +
                    "' tipo = '" +
                    item.tipo +
                    "' pais_origen = '" +
                    elemento.pais_origen +
                    "' aliado_id = '" +
                    elemento.id +
                    "'></i>"
                );

                RowTimeLineItems.append(ItemTimeLine);
              });

              ColYearTimeLine.append(RowTimeLineItems);

              RowTimeLine1.append(ColYearTimeLine);

              jQuery("html, body").animate(
                {
                  scrollTop: jQuery(".conquien #row-time-line-info-0").offset()
                    .top,
                },
                500
              );
              //fin
            })
            .fail(function () {
              //console.log("Error al leer los registros del json.");
            });
        } else {
          jQuery(".conquien .row-time-line-1").empty();
        }
      } else {
        //jQuery("#tipo_grafica").val() == "Internacional"
        if (nombre_interregion != "") {
          var RowTimeLine1 = jQuery(".conquien .row-time-line-2");
          //Limpio el elemento DOM
          RowTimeLine1.empty();
          jQuery
            .getJSON("/themes/custom/cevtheme/conquien/json/jsondb.json", function (data) {
              //Relaciono los tipos con los colores

              const MapTipos = new Map();

              MapTipos.set(
                "Organizaciones, plataformas sociales y territoriales",
                "tipo-organizaciones"
              );
              MapTipos.set(
                "Comunidad Internacional",
                "tipo-comunidad_internacional"
              );
              MapTipos.set("Comunidad Académica", "tipo-comunidad_academica");
              MapTipos.set(
                "Institucionalidad pública e instancias nacionales y territoriales",
                "tipo-institucionalidad"
              );
              /*MapTipos.set("Figuras públicas", "tipo-figuras_publicas");*/
              MapTipos.set(
                "Medios de comunicación (públicos, privados y comunitarios)",
                "tipo-medios"
              );
              MapTipos.set("Sector empresarial", "tipo-sector_privado");
              MapTipos.set("", "#ff0000");
              MapTipos.set("Sociedad política", "tipo-sociedad_politica");
              MapTipos.set("Comunidad académica", "tipo-comunidad_academica");
              MapTipos.set(
                "Comunidad internacional",
                "tipo-comunidad_internacional"
              );
              // MapTipos.set("Personas aliadas", "tipo-personas_aliadas");
              MapTipos.set(
                "Consejo Asesor de la Comisión de la Verdad",
                "tipo-consejo_asesor"
              );

              //Consulto las regiones
              var elementos = [];

              data.forEach(function (aliado, index) {
                if (aliado.territorializacion[0]["internacional"].length > 0) {
                  aliado.territorializacion[0]["internacional"].forEach(
                    function (region, index) {
                      if (
                        region == nombre_interregion &&
                        TipoAliado == "Todos"
                      ) {
                        elementos.push(aliado);
                      } else {
                        //region == region_seleccionada != TipoAliado == "Todos"
                        if (
                          region == nombre_interregion &&
                          TipoAliado == aliado.tipo
                        ) {
                          elementos.push(aliado);
                        }
                      }
                    }
                  );
                }
              });

              //console.log("Elementos");
              //console.log(elementos.length);
              jQuery("#inter_num_aliados").text(elementos.length + " aliados");
              var ColYearTimeLine = jQuery(
                "<div class='col-sm-12 col-md-12 col-year-time-line col-year-time-line-sm col-year-time-line-md col-year-time-line-lg col-year-time-line-xl' id = 'col-year-time-line-" +
                  0 +
                  "'></div>"
              );
              var RowTimeLineItems = jQuery(
                "<div class='row-time-line-items row-time-line-items-lg row-time-line-items-xl' id = 'row-time-line-items-" +
                  0 +
                  "'></div>"
              );
              elementos.forEach(function (elemento, index) {
                var colorclass = MapTipos.get(elemento.tipo);
                const AnimationTimeShow = Math.floor(Math.random() * 6) + 1;
                var ItemTimeLine = jQuery(
                  "<i class='fa fa-circle item-time-line " +
                    colorclass +
                    " item-time-show-" +
                    AnimationTimeShow +
                    "' title = '" +
                    elemento.nombre +
                    " - " +
                    elemento.tipo +
                    "' aliado = '" +
                    elemento.nombre +
                    "' tipo = '" +
                    item.tipo +
                    "' pais_origen = '" +
                    elemento.pais_origen +
                    "' aliado_id = '" +
                    elemento.id +
                    "'></i>"
                );

                RowTimeLineItems.append(ItemTimeLine);
              });

              ColYearTimeLine.append(RowTimeLineItems);

              RowTimeLine1.append(ColYearTimeLine);

              //fin
            })
            .fail(function () {
              //console.log("Error al leer los registros del json.");
            });
        } else {
          jQuery(".conquien .row-time-line-2").empty();
        }
      }
    } else {
      LoadTimeLine(TipoGrafica, TipoAliado);
    }
    intervalo2();
  });

  tipo_aliado_dos.change(function () {
    let show_tipo_aliado = jQuery(this).val();
    jQuery(".conquien .aliado-selecci").text(": " + show_tipo_aliado);

    if(show_tipo_aliado==="Consejo Asesor de la Comisión de la Verdad"){
      jQuery("#div-circle-time-line").attr("style","display: none !important;");

      jQuery("#datos_consejo_asesor")
        .removeClass(
          "d-none"
        );

      jQuery
      .getJSON("/themes/custom/cevtheme/conquien/json/jsondbasesores.json", function (data) {
        var listado_asesores = '';
        data.forEach(function (asesor, index) {
          var id = asesor.nombre.split(" ").join("-");
          listado_asesores = listado_asesores + '<label class="descripcion item_asesor" id="'+id+'">'+asesor.nombre+'</label><br/>';
        });

        jQuery("#listado_asesores")
        .html(
          listado_asesores
        );
  
      })
      .fail(function () {
        //console.log("Error al leer los registros del json.");
      });

      progressLineIndicator.style.width = "99%";
      jQuery(".indicator").removeClass("d-block");
      jQuery(".indicator").addClass("d-none");
    }
    else{

      jQuery("#datos_consejo_asesor")
        .addClass(
          "d-none"
        );

      jQuery("#div-circle-time-line").removeAttr("style");

      jQuery(".conquien .item-time-line, .conquien .item-time-line-transparent")
      .addClass("item-time-line-transparent")
      .filter(function () {
        return (
          "Todos" == show_tipo_aliado ||
          jQuery(this).attr("tipo") == show_tipo_aliado
        );
      })
      .removeClass("item-time-line-transparent");
      
      jQuery(".item_asesor")
        .removeClass("text-detalle")
        .addClass("descripcion");
      
      jQuery("#select_listado_asesores").val("default_asesor").trigger("change");

      jQuery("#img_asesor")
        .removeClass("d-block")
        .addClass("d-none");

      jQuery("#txt_asesor")
        .removeClass("d-block")
        .addClass("d-none");

      ancho_linea_minimap();

    }
    intervalo2();
    //console.log('intervalo2');
  });

  tipo_aliado_tres.change(function () {
    var TipoAliado = jQuery(this).val();
    var nombre_interregion = jQuery("#nombre-interregion")
      .text()
      .trim()
      .replace(":", "");

    if (nombre_interregion != "") {
      var RowTimeLine1 = jQuery(".conquien .row-time-line-2");
      //Limpio el elemento DOM
      RowTimeLine1.empty();
      jQuery
      .getJSON("/themes/custom/cevtheme/conquien/json/jsondb.json", function (data) {
        //Relaciono los tipos con los colores

        const MapTipos = new Map();

        MapTipos.set(
          "Organizaciones, plataformas sociales y territoriales",
          "tipo-organizaciones"
        );
        MapTipos.set(
          "Comunidad Internacional",
          "tipo-comunidad_internacional"
        );
        MapTipos.set("Comunidad Académica", "tipo-comunidad_academica");
        MapTipos.set(
          "Institucionalidad pública e instancias nacionales y territoriales",
          "tipo-institucionalidad"
        );
        // MapTipos.set("Figuras públicas", "tipo-figuras_publicas");
        MapTipos.set(
          "Medios de comunicación (públicos, privados y comunitarios)",
          "tipo-medios"
        );
        MapTipos.set("Sector empresarial", "tipo-sector_privado");
        MapTipos.set("", "#ff0000");
        MapTipos.set("Sociedad política", "tipo-sociedad_politica");
        MapTipos.set("Comunidad académica", "tipo-comunidad_academica");
        MapTipos.set(
          "Comunidad internacional",
          "tipo-comunidad_internacional"
        );
        // MapTipos.set("Personas aliadas", "tipo-personas_aliadas");
        MapTipos.set(
          "Consejo Asesor de la Comisión de la Verdad",
          "tipo-consejo_asesor"
        );

        //Consulto las regiones
        var elementos = [];

        data.forEach(function (aliado, index) {
          if (aliado.territorializacion[0]["internacional"].length > 0) {
            aliado.territorializacion[0]["internacional"].forEach(
              function (region, index) {
                if (
                  region == nombre_interregion &&
                  TipoAliado == "Todos"
                ) {
                  elementos.push(aliado);
                } else {
                  //region == region_seleccionada != TipoAliado == "Todos"
                  if (
                    region == nombre_interregion &&
                    TipoAliado == aliado.tipo
                  ) {
                    elementos.push(aliado);
                  }
                }
              }
            );
          }
        });

        jQuery("#inter_num_aliados").text(elementos.length + " aliados");
        var ColYearTimeLine = jQuery(
          "<div class='col-sm-12 col-md-12 col-year-time-line col-year-time-line-sm col-year-time-line-md col-year-time-line-lg col-year-time-line-xl' id = 'col-year-time-line-" +
          0 +
          "'></div>"
        );
        var RowTimeLineItems = jQuery(
          "<div class='row-time-line-items row-time-line-items-lg row-time-line-items-xl' id = 'row-time-line-items-" +
          0 +
          "'></div>"
        );
        elementos.forEach(function (elemento, index) {
          var colorclass = MapTipos.get(elemento.tipo);
          const AnimationTimeShow = Math.floor(Math.random() * 6) + 1;
          var ItemTimeLine = jQuery(
            "<i class='fa fa-circle item-time-line " +
            colorclass +
            " item-time-show-" +
            AnimationTimeShow +
            "' title = '" +
            elemento.nombre +
            " - " +
            elemento.tipo +
            "' aliado = '" +
            elemento.nombre +
            "' tipo = '" +
            elemento.tipo +
            "' pais_origen = '" +
            elemento.pais_origen +
            "' aliado_id = '" +
            elemento.id +
            "'></i>"
          );

          RowTimeLineItems.append(ItemTimeLine);
        });

        ColYearTimeLine.append(RowTimeLineItems);

        RowTimeLine1.append(ColYearTimeLine);

        //fin
      })
      .fail(function () {
        //console.log("Error al leer los registros del json.");
      });
    } else {
      jQuery(".conquien .row-time-line-2").empty();
    }
  });
  
  tipo_aliado_cuatro.change(function () {
    var TipoAliado = jQuery(this).val();
    var nombre_region = jQuery("#nombre-region").text().trim().replace(":", "");

    if (nombre_region != "") {
      var RowTimeLine1 = jQuery(".conquien .row-time-line-1");
      //Limpio el elemento DOM
      RowTimeLine1.empty();
      jQuery
      .getJSON("/themes/custom/cevtheme/conquien/json/jsondb.json", function (data) {
        //Relaciono los tipos con los colores
        const MapTipos = new Map();
        MapTipos.set(
          "Organizaciones, plataformas sociales y territoriales",
          "tipo-organizaciones"
        );
        MapTipos.set(
          "Comunidad Internacional",
          "tipo-comunidad_internacional"
        );
        MapTipos.set("Comunidad Académica", "tipo-comunidad_academica");
        MapTipos.set(
          "Institucionalidad pública e instancias nacionales y territoriales",
          "tipo-institucionalidad"
        );
        MapTipos.set("Figuras públicas", "tipo-figuras_publicas");
        MapTipos.set(
          "Medios de comunicación (públicos, privados y comunitarios)",
          "tipo-medios"
        );
        MapTipos.set("Sector empresarial", "tipo-sector_privado");
        MapTipos.set("", "#ff0000");
        MapTipos.set("Sociedad política", "tipo-sociedad_politica");
        MapTipos.set("Comunidad académica", "tipo-comunidad_academica");
        MapTipos.set(
          "Comunidad internacional",
          "tipo-comunidad_internacional"
        );
        MapTipos.set("Personas aliadas", "tipo-personas_aliadas");
        MapTipos.set(
          "Consejo Asesor de la Comisión de la Verdad",
          "tipo-consejo_asesor"
        );

        //Consulto las regiones
        var elementos = [];

        data.forEach(function (aliado, index) {
          if (aliado.territorializacion[0]["nacional"].length > 0) {
            aliado.territorializacion[0]["nacional"].forEach(function (
              region,
              index
            ) {
              if (region == nombre_region && TipoAliado == "Todos") {
                elementos.push(aliado);
              } else {
                //region == region_seleccionada != TipoAliado == "Todos"
                if (
                  region == nombre_region &&
                  TipoAliado == aliado.tipo
                ) {
                  elementos.push(aliado);
                }
              }
            });
          }
        });

        //console.log("Elementos");
        //console.log(elementos.length);
        jQuery("#num_aliados").text(elementos.length + " aliados");
        var ColYearTimeLine = jQuery(
          "<div class='col-sm-12 col-md-12 col-year-time-line col-year-time-line-sm col-year-time-line-md col-year-time-line-lg col-year-time-line-xl' id = 'col-year-time-line-" +
          0 +
          "'></div>"
        );
        var RowTimeLineItems = jQuery(
          "<div class='row-time-line-items row-time-line-items-lg row-time-line-items-xl' id = 'row-time-line-items-" +
          0 +
          "'></div>"
        );
        elementos.forEach(function (elemento, index) {
          var colorclass = MapTipos.get(elemento.tipo);
          const AnimationTimeShow = Math.floor(Math.random() * 6) + 1;
          var ItemTimeLine = jQuery(
            "<i class='fa fa-circle item-time-line " +
            colorclass +
            " item-time-show-" +
            AnimationTimeShow +
            "' title = '" +
            elemento.nombre +
            " - " +
            elemento.tipo +
            "' aliado = '" +
            elemento.nombre +
            "' tipo = '" +
            elemento.tipo +
            "' pais_origen = '" +
            elemento.pais_origen +
            "' aliado_id = '" +
            elemento.id +
            "'></i>"
          );

          RowTimeLineItems.append(ItemTimeLine);
        });

        ColYearTimeLine.append(RowTimeLineItems);

        RowTimeLine1.append(ColYearTimeLine);

        jQuery("html, body").animate(
          {
            scrollTop: jQuery(".conquien #row-time-line-info-nacional").offset()
              .top,
          },
          500
        );
        //fin
      })
      .fail(function () {
        //console.log("Error al leer los registros del json.");
      });
    } else {
      jQuery(".conquien .row-time-line-1").empty();
    }
      
  });

  tipo_aliado_cinco.change(function () {
    var TipoGrafica = tipo_grafica.val();
    var TipoAliado = jQuery(this).val();
    LoadTimeLine(TipoGrafica, TipoAliado);
    intervalo2();
    //console.log('intervalo2');
  });
  
  jQuery(".conquien .image-clik").click(function (e) {
    var PosXImg = parseInt(e.pageX) - parseInt(jQuery(this).offset().left);
    var PorcXImg = (parseInt(PosXImg) * 100) / parseInt(jQuery(this).width());
    var PosXScroll =
      (parseInt(jQuery(".conquien .div-time-line")[0].scrollWidth) *
        parseInt(PorcXImg)) /
      100;
    jQuery(".conquien .div-time-line").animate(
      {
        scrollLeft: PosXScroll,
      },
      1500
    );
  });

  jQuery(".conquien").on("click", ".item-time-line", function () {
    if (!jQuery(this).hasClass("item-time-line-click")) {
      ver();
      jQuery(
        ".conquien .item-time-line-select, .conquien .item-time-line-click, .conquien .item-time-line-other"
      )
        .removeClass(
          "item-time-line-select item-time-line-click fa-times-circle"
        )
        .addClass("fa-circle");

      jQuery(".conquien .alert-aliado").hide();

      jQuery(this)
        .removeClass("fa-circle")
        .addClass("item-time-line-click fa-times-circle");

      jQuery(".conquien .svg-world .selected-country").removeClass(
        "selected-country"
      );

      jQuery(".conquien .svg-world").hide();

      aliadoseleccionado = jQuery(this).attr("aliado");
      idaliadoseleccionado = jQuery(this).attr("aliado_id");
      ConsultarCirculosAliado(aliadoseleccionado, idaliadoseleccionado);
    } else {
      aliadoseleccionado = "";
      idaliadoseleccionado = "";
      ConsultarCirculosAliado("", "");
    }
  });

  function ConsultarCirculosAliado(aliado = "", id = "") {
    if (aliado != "") {
      console.clear();

      let aliadolineas = jQuery(".conquien .row-lines-aliado");
      aliadolineas.empty();

      let circulos = jQuery(
        ".conquien .item-time-line, .conquien .item-time-line-click, .conquien .item-time-line-select"
      )
        .addClass("item-time-line-other")
        .filter(function () {
          return jQuery(this).attr("aliado") == aliado;
        })
        .sort(function (a, b) {
          return jQuery(window).width() >= 767
            ? parseInt(jQuery(a).offset().left) -
                parseInt(jQuery(b).offset().left)
            : parseInt(jQuery(a).offset().top) -
                parseInt(jQuery(b).offset().top);
        })
        .removeClass("item-time-line-other")
        .addClass("item-time-line-select");

      let AlertAliado = jQuery(".conquien .alert-aliado");

      let TitleAlertAliado = jQuery(".conquien .title-alert-aliado");

      TitleAlertAliado.text(aliado);
      sessionStorage.setItem("id_aliado", idaliadoseleccionado);

      let circuloclick = jQuery(".conquien .item-time-line-click")
        .removeClass("fa-circle")
        .addClass("fa-times-circle");

      let pais_origen = jQuery(circuloclick).attr("pais_origen");

      jQuery(".conquien .svg-world").show();

      jQuery(
        ".conquien .svg-world path[name='" +
          pais_origen +
          "'],.conquien .svg-world path[class='" +
          pais_origen +
          "']"
      ).addClass("selected-country");

      // Set Position
      jQuery(AlertAliado).show().css("position", "absolute");

      let top_alert = 0;
      let left_alert = 0;

      if (jQuery(window).width() >= 767) {
        /*Anterior if (
          parseInt(circuloclick.offset().top + 25) +
            parseInt(AlertAliado.height()) >
          parseInt(jQuery(".conquien #row-time-line-info-0").offset().top)
        ) {
          top_alert =
            parseInt(circuloclick.offset().top) -
            parseInt(AlertAliado.height() + 25);
        } else {
          top_alert = parseInt(circuloclick.offset().top + 25);
        }*/
        
        if (
          parseInt(jQuery(".conquien .div-time-line").scrollLeft()) +
            parseInt(circuloclick.offset().left) +
            parseInt(AlertAliado.width()) >
          parseInt(jQuery(".conquien .div-time-line")[0].scrollWidth)
        ) {
          left_alert =
            parseInt(circuloclick.offset().left) -
            parseInt(AlertAliado.width());
        } else {
          left_alert = parseInt(circuloclick.offset().left);
        }

        var TipoGrafica = jQuery("#tipo_grafica").val();
        //console.log(TipoGrafica);
        if(TipoGrafica=="Nacional"){
          if((jQuery(".conquien #row-time-line-info-nacional").offset().top-circuloclick.offset().top-25)>=AlertAliado.height()){
            top_alert = parseInt(circuloclick.offset().top + 25);
          }
          else if((circuloclick.offset().top-105)>=AlertAliado.height()){
            top_alert =
              parseInt(circuloclick.offset().top) -
              parseInt(AlertAliado.height() + 25);
          }
          else {
            top_alert = 160;
          if (
            parseInt(jQuery(".conquien .div-time-line").scrollLeft()) +
                parseInt(circuloclick.offset().left) +
                parseInt(AlertAliado.width()) >
              parseInt(jQuery(".conquien .div-time-line")[0].scrollWidth)
            ) {
              left_alert = left_alert - 25;
            } else {
              left_alert = left_alert + 25;
            }
          }
        }
        else if(TipoGrafica=="Internacional"){
          if((jQuery(".conquien #row-time-line-info-internacional").offset().top-circuloclick.offset().top-25)>=AlertAliado.height()){
            top_alert = parseInt(circuloclick.offset().top + 25);
          }
          else if((circuloclick.offset().top-105)>=AlertAliado.height()){
            top_alert =
              parseInt(circuloclick.offset().top) -
              parseInt(AlertAliado.height() + 25);
          }
          else {
            top_alert = 160;
          if (
            parseInt(jQuery(".conquien .div-time-line").scrollLeft()) +
                parseInt(circuloclick.offset().left) +
                parseInt(AlertAliado.width()) >
              parseInt(jQuery(".conquien .div-time-line")[0].scrollWidth)
            ) {
              left_alert = left_alert - 25;
            } else {
              left_alert = left_alert + 25;
            }
          }
        }
        else{
          if((jQuery(".conquien #row-time-line-info-0").offset().top-circuloclick.offset().top-25)>=AlertAliado.height()){
            top_alert = parseInt(circuloclick.offset().top + 25);
          }
          else if((circuloclick.offset().top-105)>=AlertAliado.height()){
            top_alert =
              parseInt(circuloclick.offset().top) -
              parseInt(AlertAliado.height() + 25);
          }
          else {
            top_alert = 160;
          if (
            parseInt(jQuery(".conquien .div-time-line").scrollLeft()) +
                parseInt(circuloclick.offset().left) +
                parseInt(AlertAliado.width()) >
              parseInt(jQuery(".conquien .div-time-line")[0].scrollWidth)
            ) {
              left_alert = left_alert - 25;
            } else {
              left_alert = left_alert + 25;
            }
          }
        }

        /* anterior if (
          parseInt(jQuery(".conquien .div-time-line").scrollLeft()) +
            parseInt(circuloclick.offset().left) +
            parseInt(AlertAliado.width()) >
          parseInt(jQuery(".conquien .div-time-line")[0].scrollWidth)
        ) {
          left_alert =
            parseInt(circuloclick.offset().left) -
            parseInt(AlertAliado.width());
        } else {
          left_alert = parseInt(circuloclick.offset().left);
        }*/
      } else {
        if (
          parseInt(circuloclick.offset().top + 25) +
            parseInt(AlertAliado.height()) >
          parseInt(jQuery(".conquien").height())
        ) {
          top_alert =
            parseInt(circuloclick.offset().top) -
            parseInt(AlertAliado.height() + 25);
        } else {
          top_alert = parseInt(circuloclick.offset().top + 25);
        }

        if (
          parseInt(circuloclick.offset().left) + parseInt(AlertAliado.width()) >
          parseInt(jQuery(".conquien .div-time-line").width())
        ) {
          left_alert =
            parseInt(circuloclick.offset().left) -
            parseInt(AlertAliado.width());
        } else {
          left_alert = parseInt(circuloclick.offset().left);
        }
      }

      jQuery(AlertAliado).offset({
        top: top_alert,
        left: left_alert,
      });

      let PrimerCirculo = null;
      let SegundoCirculo = null;

      let NumeroLinea = 1;

      if (circulos.length >= 2) {
        circulos.each(function (index) {
          if (index == 0) {
            PrimerCirculo = jQuery(this);
          } else {
            let Linea = jQuery(
              "<div class='line-aliado line-aliado-" + NumeroLinea + "'></div>"
            );

            aliadolineas.append(Linea);

            Linea = jQuery(
              ".conquien .row-lines-aliado .line-aliado-" + NumeroLinea
            );

            SegundoCirculo = jQuery(this);

            DibujarLinea(PrimerCirculo, SegundoCirculo, Linea);

            PrimerCirculo = jQuery(this);

            NumeroLinea = NumeroLinea + 1;
          }
        });
      }
    } else {
      let aliadolineas = jQuery(".conquien .row-lines-aliado");
      aliadolineas.empty();

      jQuery(
        ".conquien .item-time-line-select, .conquien .item-time-line-click, .conquien .item-time-line-other"
      )
        .removeClass(
          "item-time-line-select item-time-line-click item-time-line-other fa-times-circle"
        )
        .addClass("fa-circle");

      jQuery(".conquien .svg-world .selected-country").removeClass(
        "selected-country"
      );

      jQuery(".conquien .alert-aliado").hide();

      jQuery(".conquien .svg-world").hide();
    }
  }

  jQuery(window).on("wheel", function (event) {
    var PosXScroll = jQuery(".conquien .div-time-line").scrollLeft();

    var NewPosXScroll =
      event.originalEvent.wheelDelta >= 0 ? PosXScroll - 150 : PosXScroll + 150;

    if (jQuery(window).width() >= 767) {
      jQuery(".conquien .div-time-line").scrollLeft(NewPosXScroll);
    }
  });

  jQuery(window).on("keydown", function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    var PosXScroll = jQuery(".conquien .div-time-line").scrollLeft();

    var NewPosXScroll =
      code == 33 || code == 37 || code == 38
        ? PosXScroll - 150
        : code == 34 || code == 39 || code == 40
        ? PosXScroll + 150
        : code == 35
        ? jQuery(".conquien .div-time-line")[0].scrollWidth
        : code == 36
        ? 0
        : PosXScroll;

    if (jQuery(window).width() >= 767) {
      jQuery(".conquien .div-time-line").scrollLeft(NewPosXScroll);
    }
  });

  function AlinearFilaItems() {
    if (jQuery(window).width() >= 767) {
      var TipoGrafica = tipo_grafica.val();
      /*let minheight = parseInt(
        jQuery(window).height() -
          jQuery(".fixed-top").height() -
          jQuery(".conquien .div-menu-time-line").height() -
          jQuery(".fixed-bottom").height()
      );*/

      let minheight = parseInt(
        jQuery(window).height() -
        53 -
          jQuery(".conquien .div-menu-time-line").height()
          -37
      );

      jQuery(".conquien .div-time-line").css("min-height", minheight + "px");
      //jQuery(".conquien .div-time-line").css("max-height", minheight + "px");

      if(TipoGrafica=="TemaTrabajo"){
        var tipoAliadoTemas = jQuery("#tipo_aliado_cinco").val();
        if(
           tipoAliadoTemas=="Medios de comunicación (públicos, privados y comunitarios)" ||
           tipoAliadoTemas=="Sector empresarial" ||
           tipoAliadoTemas=="Sociedad política" ||
           tipoAliadoTemas=="Consejo Asesor de la Comisión de la Verdad"
        ){
          jQuery(".conquien .row-time-line").css("bottom", 70 + "px");
        }
        else {
          jQuery(".conquien .row-time-line").css("bottom", 50 + "px");
        }
      }
      else {
        jQuery(".conquien .row-time-line").css("bottom", 50 + "px");
      }

      var maxaliados = max_aliados.val();

      jQuery(".conquien .col-year-time-line").each(function (index) {
        var TipoAliado = tipo_aliado.val();
        jQuery(this).width(parseInt(24 * 10));
        //jQuery(this).width(width_inicial);//Fijo para la primera columna

        let idcol = jQuery(this).attr("id");

        //valida que el ancho de la columna para cuando el ancho del texto info es mayor que el de la columna
        if (
          parseInt(24 * 10) <
          parseInt(
            jQuery(".conquien #" + idcol + " .row-time-line-info-year").width()
          )
        ) {
          jQuery(this).width(
            parseInt(
              jQuery(
                ".conquien #" + idcol + " .row-time-line-info-year"
              ).width()
            ) + parseInt(24 * 3)
          );
        }

        let totalitems = parseInt(
          jQuery(".conquien #" + idcol + " .item-time-line").length
        );

        var PorcYRows = parseInt(
          (parseInt(totalitems) * 100) / parseInt(maxaliados)
        );

        var MinHeightYRows =
          parseInt((parseInt(minheight) * parseInt(PorcYRows)) / 100) -
          parseInt(24 * 2);

        MinHeightYRows =
          PorcYRows <= 0
            ? parseInt(MinHeightYRows) + parseInt(24 * 2)
            : parseInt(MinHeightYRows) + 0;

        let filas = parseInt(parseInt(MinHeightYRows) / 24) - parseInt(1);

        if (index == 0 && filas > 10) {
          filas = 10;
        }

        if (filas <= 1) {
          filas = 3;
        }

        let columnas = parseInt(parseInt(jQuery(this).width()) / 24);

        let totalitemscol = parseInt(columnas * filas);

        while (totalitemscol < totalitems) {
          columnas = parseInt(jQuery(this).width() / 24);

          totalitemscol = parseInt(columnas * filas);

          jQuery(this).width(parseInt(jQuery(this).width()) + parseInt(24 * 3));
          if (TipoGrafica == "TemaTrabajo" && TipoAliado == "Todos") {
            if (totalitems > 1300) {
              jQuery(this).width(
                parseInt(jQuery(this).width()) + parseInt(24 * 4 + 100)
              );
            }
          }
          if (TipoGrafica == "TipoAliado" && TipoAliado == "Todos") {
            if (totalitems > 1300) {
              jQuery(this).width(
                parseInt(jQuery(this).width()) + parseInt(24 * 4 + 100)
              );
            }
          }
        }
        if (TipoGrafica == "TemaTrabajo") {
          //var width_inicial = parseInt(150);
          if(index == 0){
            jQuery(this).width(357);
          }
          if(index == 2){
            jQuery(this).width(394);
          }
          if(index == 4){
            jQuery(this).width(335);
          }
          if(index == 6){
            jQuery(this).width(335);
          }
          if(index == 8){
            jQuery(this).width(335);
          }
        }
        if (TipoGrafica == "LineaTiempo" && TipoAliado == "Todos") {
          //var width_inicial = parseInt(150);
          if(index % 2 == 0){
            jQuery(this).width(240);
          }
          else{
            let year_iteracion = jQuery(
              ".conquien #row-time-line-info-" +
                index
            ).attr("anyo");
            //console.log(year_iteracion);
            if (year_iteracion == "2017") {
              jQuery(this).width(180);
            } else if (year_iteracion == "2018") {
              jQuery(this).width(1400);
            } else if (year_iteracion == "2019") {
              jQuery(this).width(3800);
            } else if (year_iteracion == "2020") {
              jQuery(this).width(4500);
            } else if (year_iteracion == "2021") {
              jQuery(this).width(5500);
            } else if (year_iteracion == "2022") {
              var width_inicial = 0;
              if (totalitems <= 451) {
                width_inicial = parseInt(700);
              } else if (totalitems >= 452 && totalitems <= 548) {
                width_inicial = parseInt(800);
              } else if (totalitems >= 549 && totalitems <= 693) {
                width_inicial = parseInt(900);
              } else if (totalitems >= 694 && totalitems <= 894) {
                width_inicial = parseInt(1000);
              } else if (totalitems >= 895 && totalitems <= 1171) {
                width_inicial = parseInt(1100);
              } else if (totalitems >= 1172 && totalitems <= 1471) {
                width_inicial = parseInt(1400);
              } else if (totalitems >= 1472 && totalitems <= 2000) {
                width_inicial = parseInt(1800);
              } else {
                while (totalitemscol < totalitems) {
                  columnas = parseInt(jQuery(this).width() / 24);
  
                  totalitemscol = parseInt(columnas * filas);
  
                  width_inicial =
                    parseInt(jQuery(this).width()) + parseInt(24 * 3);
                }
              }
              jQuery(this).width(width_inicial);
            }
          }
          ////console.log(totalitems);
        } //else {var width_inicial = parseInt(24 * 10);}// Igual a 240
      });
    }
  }

  jQuery(window).resize(function () {
    AlinearFilaItems();
    ConsultarCirculosAliado(aliadoseleccionado, idaliadoseleccionado);
  });

  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var $state = jQuery(
      "<span>" +
        '<img src="./themes/custom/cevtheme/conquien/assets/select2-icon/' +
        state.element.value.toLowerCase().replace(/ /g, "") +
        '.svg" class="img-flag img-option-select" /> ' +
        state.text +
        "</span>"
    );
    return $state;
  }

  function formatStateDefault(state) {
    var $state = jQuery(
      "<span>" +
        '<img src="./themes/custom/cevtheme/conquien/assets/select2-icon/todos.svg" class="img-flag img-option-select" /> ' +
        state.text +
        "</span>"
    );
    return $state;
  }

  jQuery("#tipo_grafica").select2({
    width: "resolve",
    templateResult: formatState,
  });

  jQuery("#buscar_nombre").select2({
    width: "resolve", // need to override the changed default
  });

  jQuery("#etiquetas").select2({
    width: "resolve", // need to override the changed default
  });

  function DistanciaLinea(x, y, x0, y0) {
    return Math.sqrt((x -= x0) * x + (y -= y0) * y);
  }

  function DibujarLinea(a, b, line) {
    var pointA = jQuery(a).offset();
    var pointB = jQuery(b).offset();

    var angle =
      (Math.atan2(pointB.top - pointA.top, pointB.left - pointA.left) * 180) /
      Math.PI;

    var distance = DistanciaLinea(
      pointA.left,
      pointA.top,
      pointB.left,
      pointB.top
    );

    // Set Angle
    jQuery(line).css("transform", "rotate(" + angle + "deg)");

    // Set Width
    jQuery(line).css("width", distance + "px");

    // Set Position
    jQuery(line).css("position", "absolute");

    jQuery(line).offset({
      top: pointA.top <= pointB.top ? pointA.top + 7 : pointB.top + 7,
      left: pointA.left <= pointB.left ? pointA.left + 7 : pointB.left + 7,
    });
  }

  jQuery("#buscar_nombre").change(function () {
    // jQuery(this).val() will work here
    //alert(jQuery(this).val());
    sessionStorage.setItem("id_aliado", jQuery(this).val());
    window.location.href = "/con-quien-detalle";
  });
  
  //Seleccionar región de acuerdo a select nacional
  jQuery(document).on("change", "#select_nacional", function () {
    var region_seleccionada = jQuery(this).val();
    var clase_contenedora = "column-4";
    var svg_mapa = "";
    var region_seleccionada_sesion = sessionStorage.getItem(
      "region_seleccionada_sesion"
    );
    
    let tipo_aliado = jQuery(".conquien #tipo_aliado_cuatro");
    var TipoAliado = tipo_aliado.val();
    svg_mapa = ".svg-colombia";
    if(region_seleccionada=="Seleccione region nacional"){
      jQuery("#row-time-line-info-nacional")
        .addClass(
          "d-none"
        );
      
      var TipoGrafica = tipo_grafica.val();
      LoadTimeLine(TipoGrafica, TipoAliado);

    }
    else{
      jQuery("#row-time-line-info-nacional")
      .removeClass("d-none");
      if (region_seleccionada_sesion != region_seleccionada) {
        jQuery(".conquien .alert-aliado").hide();
        jQuery(".conquien .svg-world").hide();

        desmarcar_mapa(svg_mapa, region_seleccionada_sesion, clase_contenedora);

        sessionStorage.setItem("region_seleccionada_sesion", region_seleccionada);
        if (jQuery("#puntos-nacional").hasClass("d-none")) {
          jQuery("#puntos-nacional").addClass("d-block");
          jQuery("#puntos-nacional").removeClass("d-none");
        }
        if (jQuery("#select_tipo_aliado_cuatro").hasClass("d-none")) {
          jQuery("#select_tipo_aliado_cuatro").addClass("d-block");
          jQuery("#select_tipo_aliado_cuatro").removeClass("d-none");
        }
          
        jQuery("#nombre-region").text(region_seleccionada + ":");
        var RowTimeLine1 = jQuery(".conquien .row-time-line-1");
        //Limpio el elemento DOM
        RowTimeLine1.empty();
        jQuery
          .getJSON("/themes/custom/cevtheme/conquien/json/jsondb.json", function (data) {
          //Relaciono los tipos con los colores

          const MapTipos = new Map();

          MapTipos.set(
            "Organizaciones, plataformas sociales y territoriales",
            "tipo-organizaciones"
          );
          MapTipos.set(
            "Comunidad Internacional",
            "tipo-comunidad_internacional"
          );
          MapTipos.set("Comunidad Académica", "tipo-comunidad_academica");
          MapTipos.set(
            "Institucionalidad pública e instancias nacionales y territoriales",
            "tipo-institucionalidad"
          );
          // MapTipos.set("Figuras públicas", "tipo-figuras_publicas");
          MapTipos.set(
            "Medios de comunicación (públicos, privados y comunitarios)",
            "tipo-medios"
          );
          MapTipos.set("Sector empresarial", "tipo-sector_privado");
          MapTipos.set("", "#ff0000");
          MapTipos.set("Sociedad política", "tipo-sociedad_politica");
          MapTipos.set("Comunidad académica", "tipo-comunidad_academica");
          MapTipos.set(
            "Comunidad internacional",
            "tipo-comunidad_internacional"
          );
          // MapTipos.set("Personas aliadas", "tipo-personas_aliadas");
          MapTipos.set(
            "Consejo Asesor de la Comisión de la Verdad",
            "tipo-consejo_asesor"
          );

          //Consulto las regiones
          var elementos = [];

          data.forEach(function (aliado, index) {
            if (aliado.territorializacion[0]["nacional"].length > 0) {
              aliado.territorializacion[0]["nacional"].forEach(function (
                region,
                index
              ) {
                if (region == region_seleccionada && TipoAliado == "Todos") {
                  elementos.push(aliado);
                } else {
                  //region == region_seleccionada != TipoAliado == "Todos"
                  if (
                    region == region_seleccionada &&
                    TipoAliado == aliado.tipo
                  ) {
                    elementos.push(aliado);
                  }
                }
              });
            }
          });

          jQuery("#num_aliados").text(elementos.length + " aliados");
          var ColYearTimeLine = jQuery(
            "<div class='col-sm-12 col-md-12 col-year-time-line col-year-time-line-sm col-year-time-line-md col-year-time-line-lg col-year-time-line-xl' id = 'col-year-time-line-" +
            0 +
            "'></div>"
          );
          var RowTimeLineInfo = jQuery(
            "<div class='row-time-line-info row-time-line-info-sm row-time-line-info-md row-time-line-info-lg row-time-line-info-xl' id = 'row-time-line-info-" +
            0 +
            "'></div>"
          );
          var RowTimeLineItems = jQuery(
            "<div class='row-time-line-items row-time-line-items-lg row-time-line-items-xl' id = 'row-time-line-items-" +
            0 +
            "'></div>"
          );
          elementos.forEach(function (elemento, index) {
            var colorclass = MapTipos.get(elemento.tipo);
            const AnimationTimeShow = Math.floor(Math.random() * 6) + 1;
            var ItemTimeLine = jQuery(
              "<i class='fa fa-circle item-time-line " +
              colorclass +
              " item-time-show-" +
              AnimationTimeShow +
              "' title = '" +
              elemento.nombre +
              " - " +
              elemento.tipo +
              "' aliado = '" +
              elemento.nombre +
              "' tipo = '" +
              elemento.tipo +
              "' pais_origen = '" +
              elemento.pais_origen +
              "' aliado_id = '" +
              elemento.id +
              "'></i>"
            );

            RowTimeLineItems.append(ItemTimeLine);
          });

          ColYearTimeLine.append(RowTimeLineItems);

          RowTimeLine1.append(ColYearTimeLine);
          jQuery("html, body").animate(
            {
              scrollTop: jQuery(".conquien #row-time-line-info-nacional").offset().top,
            },
            500
          );

          let ciclos = 12;
          let segundos = 3;
          let milisegundos = (segundos * 1000) / ciclos;

          let elementosled = jQuery(".conquien .item-time-line");

          let cantidad = elementosled.length;

          let count = 0;

          let idinterv = setInterval(function () {
            count++;

            elementosled
            .removeClass("item-time-line-transparent")
            .removeClass("item-time-line-white");

            elementosled.addClass("item-time-line-transparent");

            let aleatorios = elementosled.filter(function () {
              return (
                Math.floor((cantidad / 3) * 2.5) <=
                Math.floor(
                  Math.random() * Math.floor(cantidad + (cantidad * 3) / 3.5)
                )
              );
            });

            aleatorios
            .removeClass("item-time-line-transparent")
            .addClass("item-time-line-white");

            if (count >= ciclos) {
              window.clearTimeout(idinterv);

              elementosled
              .removeClass("item-time-line-transparent")
              .removeClass("item-time-line-white");
            }
          }, milisegundos);

          //fin
        })
        .fail(function () {
          //console.log("Error al leer los registros del json.");
        });
      }
      marcar_mapa(svg_mapa, region_seleccionada, clase_contenedora);
    }
  });

  //Seleccionar región de acuerdo a select internacional
  jQuery(document).on("change", "#select_internacional", function () {
    var region_seleccionada = jQuery(this).val();
    var clase_contenedora = "column-4";
    var svg_mapa = "";
    var region_seleccionada_sesion = sessionStorage.getItem(
      "region_seleccionada_sesion"
    );

    let tipo_aliado = jQuery(".conquien #tipo_aliado_tres");
    var TipoAliado = tipo_aliado.val();
    svg_mapa = ".svg-internacional";

    if(region_seleccionada=="Seleccione pais"){
      jQuery("#row-time-line-info-internacional")
        .addClass(
          "d-none"
        );
      
      var TipoGrafica = tipo_grafica.val();
      LoadTimeLine(TipoGrafica, TipoAliado);
    }
    else{
      clase_contenedora = "mapamundi";
      jQuery("#row-time-line-info-internacional")
        .removeClass("d-none");
        
      if (region_seleccionada_sesion != region_seleccionada) {
        jQuery(".conquien .alert-aliado").hide();
        jQuery(".conquien .svg-world").hide();

        desmarcar_mapa(svg_mapa, region_seleccionada_sesion, clase_contenedora);
        sessionStorage.setItem("region_seleccionada_sesion", region_seleccionada);
        
        if (jQuery("#puntos-internacional").hasClass("d-none")) {
          jQuery("#puntos-internacional").addClass("d-block");
          jQuery("#puntos-internacional").removeClass("d-none");
        }
        if (jQuery("#select_tipo_aliado_tres").hasClass("d-none")) {
          jQuery("#select_tipo_aliado_tres").addClass("d-block");
          jQuery("#select_tipo_aliado_tres").removeClass("d-none");
        }
          
        jQuery("#nombre-interregion").text(region_seleccionada + ":");
        var RowTimeLine1 = jQuery(".conquien .row-time-line-2");
        //Limpio el elemento DOM
        RowTimeLine1.empty();
        jQuery
          .getJSON("/themes/custom/cevtheme/conquien/json/jsondb.json", function (data) {
          //Relaciono los tipos con los colores

          const MapTipos = new Map();

          MapTipos.set(
            "Organizaciones, plataformas sociales y territoriales",
            "tipo-organizaciones"
          );
          MapTipos.set(
            "Comunidad Internacional",
            "tipo-comunidad_internacional"
          );
          MapTipos.set("Comunidad Académica", "tipo-comunidad_academica");
          MapTipos.set(
            "Institucionalidad pública e instancias nacionales y territoriales",
            "tipo-institucionalidad"
          );
          // MapTipos.set("Figuras públicas", "tipo-figuras_publicas");
          MapTipos.set(
            "Medios de comunicación (públicos, privados y comunitarios)",
            "tipo-medios"
          );
          MapTipos.set("Sector empresarial", "tipo-sector_privado");
          MapTipos.set("", "#ff0000");
          MapTipos.set("Sociedad política", "tipo-sociedad_politica");
          MapTipos.set("Comunidad académica", "tipo-comunidad_academica");
          MapTipos.set(
            "Comunidad internacional",
            "tipo-comunidad_internacional"
          );
          // MapTipos.set("Personas aliadas", "tipo-personas_aliadas");
          MapTipos.set(
            "Consejo Asesor de la Comisión de la Verdad",
            "tipo-consejo_asesor"
          );

          //Consulto las regiones
          var elementos = [];

          data.forEach(function (aliado, index) {
            if (aliado.territorializacion[0]["internacional"].length > 0) {
              aliado.territorializacion[0]["internacional"].forEach(function (
                region,
                index
              ) {
                if (region == region_seleccionada && TipoAliado == "Todos") {
                  elementos.push(aliado);
                } else {
                  //region == region_seleccionada != TipoAliado == "Todos"
                  if (
                    region == region_seleccionada &&
                    TipoAliado == aliado.tipo
                  ) {
                    elementos.push(aliado);
                  }
                }
              });
            }
          });

          jQuery("#inter_num_aliados").text(elementos.length + " aliados");
          var ColYearTimeLine = jQuery(
            "<div class='col-sm-12 col-md-12 col-year-time-line col-year-time-line-sm col-year-time-line-md col-year-time-line-lg col-year-time-line-xl' id = 'col-year-time-line-" +
            0 +
            "'></div>"
          );
          /*var RowTimeLineInfo = jQuery(
            "<div class='row-time-line-info row-time-line-info-sm row-time-line-info-md row-time-line-info-lg row-time-line-info-xl' id = 'row-time-line-info-" +
            0 +
            "'></div>"
          );*/
          var RowTimeLineItems = jQuery(
            "<div class='row-time-line-items row-time-line-items-lg row-time-line-items-xl' id = 'row-time-line-items-" +
            0 +
            "'></div>"
          );
          elementos.forEach(function (elemento, index) {
            var colorclass = MapTipos.get(elemento.tipo);
            const AnimationTimeShow = Math.floor(Math.random() * 6) + 1;
            var ItemTimeLine = jQuery(
              "<i class='fa fa-circle item-time-line " +
              colorclass +
              " item-time-show-" +
              AnimationTimeShow +
              "' title = '" +
              elemento.nombre +
              " - " +
              elemento.tipo +
              "' aliado = '" +
              elemento.nombre +
              "' tipo = '" +
              elemento.tipo +
              "' pais_origen = '" +
              elemento.pais_origen +
              "' aliado_id = '" +
              elemento.id +
              "'></i>"
            );

            RowTimeLineItems.append(ItemTimeLine);
          });

          ColYearTimeLine.append(RowTimeLineItems);
          //ColYearTimeLine.append(RowTimeLineInfo);

          RowTimeLine1.append(ColYearTimeLine);
          jQuery("html, body").animate(
            {
              scrollTop: jQuery(".conquien #row-time-line-info-internacional").offset().top,
            },
            500
          );

          let ciclos = 12;
          let segundos = 3;
          let milisegundos = (segundos * 1000) / ciclos;

          let elementosled = jQuery(".conquien .item-time-line");

          let cantidad = elementosled.length;

          let count = 0;

          let idinterv = setInterval(function () {
            count++;

            elementosled
            .removeClass("item-time-line-transparent")
            .removeClass("item-time-line-white");

            elementosled.addClass("item-time-line-transparent");

            let aleatorios = elementosled.filter(function () {
              return (
                Math.floor((cantidad / 3) * 2.5) <=
                Math.floor(
                  Math.random() * Math.floor(cantidad + (cantidad * 3) / 3.5)
                )
              );
            });

            aleatorios
            .removeClass("item-time-line-transparent")
            .addClass("item-time-line-white");

            if (count >= ciclos) {
              window.clearTimeout(idinterv);

              elementosled
              .removeClass("item-time-line-transparent")
              .removeClass("item-time-line-white");
            }
          }, milisegundos);

          //fin
        })
        .fail(function () {
          //console.log("Error al leer los registros del json.");
        });
      }
      marcar_mapa(svg_mapa, region_seleccionada, clase_contenedora);
    }

  });

});

/*
  Dibujo
*/
var tope = 0;
var int;
let div_linea_tiempo = document.getElementsByClassName("div-time-line");

function ver() {
  let contenedor = document.querySelector(".contenedor-dibujo");
  contenedor.classList.add("nover");
  tope++;
  if (tope > 0) {
    window.clearTimeout(int);
    int = "";
  }
}


/*window.addEventListener('resize',function(event){
  let contenedor = document.querySelector('.contenedor-dibujo');
  contenedor.classList.remove('nover');
  intervalo();
});*/

document.addEventListener("scroll", function (e) {
  ver();
});

jQuery(".div-time-line").scroll(function () {
  ver();
  updateProgressIndicator();
});

function intervalo() {
  int = window.setTimeout("ver()", 1000);
}
function intervalo2() {
  let contenedor = document.querySelector(".contenedor-dibujo");
  contenedor.classList.remove("nover");

  int = window.setTimeout("ver()", 5000);
}


/* Indicador minimap*/
let progressLineIndicator = document.querySelector(".indicator-line");
let wheel = document.querySelector(".div-time-line");
let slider = document.querySelector(".div-content-time-line");
let breakpoint = window.innerWidth;

function getScrollPos() {
  return (wheel.pageXOffset || wheel.scrollLeft) - (wheel.clientLeft || 0);
}
function updateProgressIndicator(pos) {
  let calc = Math.floor((getScrollPos() * 100) / wheel.scrollWidth);

  progressLineIndicator.style.left = calc + "%";
}

function ancho_linea_minimap() {
  let ancho_pagina = window.innerWidth;
  let ancho_scroll = document.querySelector(".div-time-line").scrollWidth;
  if (ancho_scroll <= ancho_pagina) {
    progressLineIndicator.style.width = "99%";
    jQuery(".indicator").removeClass("d-block");
    jQuery(".indicator").addClass("d-none");
  } else {
    document.querySelector(".div-time-line").scrollLeft = 0;
    let divisiones_scroll_pagina = (ancho_pagina * 100) / ancho_scroll;
    progressLineIndicator.style.width = divisiones_scroll_pagina + "%";
    jQuery(".indicator").removeClass("d-none");
    jQuery(".indicator").addClass("d-block");
  }
}
//jQuery(document).on("mouseover", ".region", function(){
jQuery(document).on("click", ".region", function () {
  var region_seleccionada = jQuery(this).text();
  var clase_contenedora = "column-4";
  //var nombre_region_seleccionada = $(".region .region-other .region_nacional").text();
  //console.log(region_seleccionada);
  var svg_mapa = "";
  let tipo_aliado = jQuery(".conquien #tipo_aliado");
  var TipoAliado = tipo_aliado.val();

  if (jQuery(this).hasClass("region_internacional")) {
    let tipo_aliado = jQuery(".conquien #tipo_aliado_tres");
    var TipoAliado = tipo_aliado.val();
    svg_mapa = ".svg-internacional";
    clase_contenedora = "mapamundi";
    jQuery("#row-time-line-info-internacional")
      .removeClass("d-none");
    var region_seleccionada_sesion = sessionStorage.getItem(
      "region_seleccionada_sesion"
    );
    var label_region_selec_sesion = sessionStorage.getItem(
      "label_region_selec_sesion"
    );
    if (region_seleccionada_sesion != region_seleccionada) {
      jQuery(".conquien .alert-aliado").hide();
      jQuery(".conquien .svg-world").hide();

      desmarcar_mapa(svg_mapa, region_seleccionada_sesion, clase_contenedora);
      jQuery("a.region.region-other.region_internacional.text-detalle")
        .removeClass("text-detalle")
        .addClass("descripcion");

      sessionStorage.setItem("region_seleccionada_sesion", region_seleccionada);
      //console.log(jQuery(this));
      if (jQuery("#puntos-internacional").hasClass("d-none")) {
        jQuery("#puntos-internacional").addClass("d-block");
        jQuery("#puntos-internacional").removeClass("d-none");
      }
      if (jQuery("#select_tipo_aliado_tres").hasClass("d-none")) {
        jQuery("#select_tipo_aliado_tres").addClass("d-block");
        jQuery("#select_tipo_aliado_tres").removeClass("d-none");
      }
      jQuery(this).removeClass("descripcion").addClass("text-detalle");
      jQuery("#nombre-interregion").text(region_seleccionada + ":");
      var RowTimeLine1 = jQuery(".conquien .row-time-line-2");
      //Limpio el elemento DOM
      RowTimeLine1.empty();
      jQuery
        .getJSON("/themes/custom/cevtheme/conquien/json/jsondb.json", function (data) {
          //Relaciono los tipos con los colores

          const MapTipos = new Map();

          MapTipos.set(
            "Organizaciones, plataformas sociales y territoriales",
            "tipo-organizaciones"
          );
          MapTipos.set(
            "Comunidad Internacional",
            "tipo-comunidad_internacional"
          );
          MapTipos.set("Comunidad Académica", "tipo-comunidad_academica");
          MapTipos.set(
            "Institucionalidad pública e instancias nacionales y territoriales",
            "tipo-institucionalidad"
          );
          // MapTipos.set("Figuras públicas", "tipo-figuras_publicas");
          MapTipos.set(
            "Medios de comunicación (públicos, privados y comunitarios)",
            "tipo-medios"
          );
          MapTipos.set("Sector empresarial", "tipo-sector_privado");
          MapTipos.set("", "#ff0000");
          MapTipos.set("Sociedad política", "tipo-sociedad_politica");
          MapTipos.set("Comunidad académica", "tipo-comunidad_academica");
          MapTipos.set(
            "Comunidad internacional",
            "tipo-comunidad_internacional"
          );
          // MapTipos.set("Personas aliadas", "tipo-personas_aliadas");
          MapTipos.set(
            "Consejo Asesor de la Comisión de la Verdad",
            "tipo-consejo_asesor"
          );

          //Consulto las regiones
          var elementos = [];

          data.forEach(function (aliado, index) {
            if (aliado.territorializacion[0]["internacional"].length > 0) {
              aliado.territorializacion[0]["internacional"].forEach(function (
                region,
                index
              ) {
                if (region == region_seleccionada && TipoAliado == "Todos") {
                  elementos.push(aliado);
                } else {
                  //region == region_seleccionada != TipoAliado == "Todos"
                  if (
                    region == region_seleccionada &&
                    TipoAliado == aliado.tipo
                  ) {
                    elementos.push(aliado);
                  }
                }
              });
            }
          });

          //console.log("Elementos");
          //console.log(elementos.length);
          jQuery("#inter_num_aliados").text(elementos.length + " aliados");
          var ColYearTimeLine = jQuery(
            "<div class='col-sm-12 col-md-12 col-year-time-line col-year-time-line-sm col-year-time-line-md col-year-time-line-lg col-year-time-line-xl' id = 'col-year-time-line-" +
              0 +
              "'></div>"
          );
          /*var RowTimeLineInfo = jQuery(
            "<div class='row-time-line-info row-time-line-info-sm row-time-line-info-md row-time-line-info-lg row-time-line-info-xl' id = 'row-time-line-info-" +
              0 +
              "'></div>"
          );*/
          var RowTimeLineItems = jQuery(
            "<div class='row-time-line-items row-time-line-items-lg row-time-line-items-xl' id = 'row-time-line-items-" +
              0 +
              "'></div>"
          );
          elementos.forEach(function (elemento, index) {
            var colorclass = MapTipos.get(elemento.tipo);
            const AnimationTimeShow = Math.floor(Math.random() * 6) + 1;
            var ItemTimeLine = jQuery(
              "<i class='fa fa-circle item-time-line " +
                colorclass +
                " item-time-show-" +
                AnimationTimeShow +
                "' title = '" +
                elemento.nombre +
                " - " +
                elemento.tipo +
                "' aliado = '" +
                elemento.nombre +
                "' tipo = '" +
                elemento.tipo +
                "' pais_origen = '" +
                elemento.pais_origen +
                "' aliado_id = '" +
                elemento.id +
                "'></i>"
            );

            RowTimeLineItems.append(ItemTimeLine);
          });

          ColYearTimeLine.append(RowTimeLineItems);
          //ColYearTimeLine.append(RowTimeLineInfo);

          RowTimeLine1.append(ColYearTimeLine);
          jQuery("html, body").animate(
            {
              scrollTop: jQuery(".conquien #row-time-line-info-internacional").offset().top,
            },
            500
          );

          let ciclos = 12;
          let segundos = 3;
          let milisegundos = (segundos * 1000) / ciclos;

          let elementosled = jQuery(".conquien .item-time-line");

          let cantidad = elementosled.length;

          let count = 0;

          let idinterv = setInterval(function () {
            count++;

            elementosled
              .removeClass("item-time-line-transparent")
              .removeClass("item-time-line-white");

            elementosled.addClass("item-time-line-transparent");

            let aleatorios = elementosled.filter(function () {
              return (
                Math.floor((cantidad / 3) * 2.5) <=
                Math.floor(
                  Math.random() * Math.floor(cantidad + (cantidad * 3) / 3.5)
                )
              );
            });

            aleatorios
              .removeClass("item-time-line-transparent")
              .addClass("item-time-line-white");

            if (count >= ciclos) {
              window.clearTimeout(idinterv);

              elementosled
                .removeClass("item-time-line-transparent")
                .removeClass("item-time-line-white");
            }
          }, milisegundos);

          //fin
        })
        .fail(function () {
          //console.log("Error al leer los registros del json.");
        });
    }
  } else {
    let tipo_aliado = jQuery(".conquien #tipo_aliado_cuatro");
    var TipoAliado = tipo_aliado.val();
    svg_mapa = ".svg-colombia";
    jQuery("#row-time-line-info-nacional")
      .removeClass("d-none");
    var region_seleccionada_sesion = sessionStorage.getItem(
      "region_seleccionada_sesion"
    );
    if (region_seleccionada_sesion != region_seleccionada) {
      jQuery(".conquien .alert-aliado").hide();
      jQuery(".conquien .svg-world").hide();

      desmarcar_mapa(svg_mapa, region_seleccionada_sesion, clase_contenedora);
      /*jQuery("a.region.region-other.region_nacional.text-detalle")
        .removeClass("text-detalle")
          .addClass("descripcion");*/

      sessionStorage.setItem("region_seleccionada_sesion", region_seleccionada);
      if (jQuery("#puntos-nacional").hasClass("d-none")) {
        jQuery("#puntos-nacional").addClass("d-block");
        jQuery("#puntos-nacional").removeClass("d-none");
      }
      if (jQuery("#select_tipo_aliado_cuatro").hasClass("d-none")) {
        jQuery("#select_tipo_aliado_cuatro").addClass("d-block");
        jQuery("#select_tipo_aliado_cuatro").removeClass("d-none");
      }
      
      //jQuery(this).removeClass("descripcion").addClass("text-detalle");
      jQuery("#nombre-region").text(region_seleccionada + ":");
      var RowTimeLine1 = jQuery(".conquien .row-time-line-1");
      //Limpio el elemento DOM
      RowTimeLine1.empty();
      jQuery
        .getJSON("/themes/custom/cevtheme/conquien/json/jsondb.json", function (data) {
          //Relaciono los tipos con los colores

          const MapTipos = new Map();

          MapTipos.set(
            "Organizaciones, plataformas sociales y territoriales",
            "tipo-organizaciones"
          );
          MapTipos.set(
            "Comunidad Internacional",
            "tipo-comunidad_internacional"
          );
          MapTipos.set("Comunidad Académica", "tipo-comunidad_academica");
          MapTipos.set(
            "Institucionalidad pública e instancias nacionales y territoriales",
            "tipo-institucionalidad"
          );
          // MapTipos.set("Figuras públicas", "tipo-figuras_publicas");
          MapTipos.set(
            "Medios de comunicación (públicos, privados y comunitarios)",
            "tipo-medios"
          );
          MapTipos.set("Sector empresarial", "tipo-sector_privado");
          MapTipos.set("", "#ff0000");
          MapTipos.set("Sociedad política", "tipo-sociedad_politica");
          MapTipos.set("Comunidad académica", "tipo-comunidad_academica");
          MapTipos.set(
            "Comunidad internacional",
            "tipo-comunidad_internacional"
          );
          // MapTipos.set("Personas aliadas", "tipo-personas_aliadas");
          MapTipos.set(
            "Consejo Asesor de la Comisión de la Verdad",
            "tipo-consejo_asesor"
          );

          //Consulto las regiones
          var elementos = [];

          data.forEach(function (aliado, index) {
            if (aliado.territorializacion[0]["nacional"].length > 0) {
              aliado.territorializacion[0]["nacional"].forEach(function (
                region,
                index
              ) {
                //console.log(TipoAliado);
                if (region == region_seleccionada && TipoAliado == "Todos") {
                  elementos.push(aliado);
                } else {
                  //region == region_seleccionada != TipoAliado == "Todos"
                  if (
                    region == region_seleccionada &&
                    TipoAliado == aliado.tipo
                  ) {
                    elementos.push(aliado);
                  }
                }
              });
            }
          });

          //console.log("Elementos");
          //console.log(elementos.length);
          jQuery("#num_aliados").text(elementos.length + " aliados");
          var ColYearTimeLine = jQuery(
            "<div class='col-sm-12 col-md-12 col-year-time-line col-year-time-line-sm col-year-time-line-md col-year-time-line-lg col-year-time-line-xl' id = 'col-year-time-line-" +
              0 +
              "'></div>"
          );
          /*var RowTimeLineInfo = jQuery(
            "<div class='row-time-line-info row-time-line-info-sm row-time-line-info-md row-time-line-info-lg row-time-line-info-xl' id = 'row-time-line-info-" +
              0 +
              "'></div>"
          );*/
          var RowTimeLineItems = jQuery(
            "<div class='row-time-line-items row-time-line-items-lg row-time-line-items-xl' id = 'row-time-line-items-" +
              0 +
              "'></div>"
          );
          elementos.forEach(function (elemento, index) {
            var colorclass = MapTipos.get(elemento.tipo);
            const AnimationTimeShow = Math.floor(Math.random() * 6) + 1;
            var ItemTimeLine = jQuery(
              "<i class='fa fa-circle item-time-line " +
                colorclass +
                " item-time-show-" +
                AnimationTimeShow +
                "' title = '" +
                elemento.nombre +
                " - " +
                elemento.tipo +
                "' aliado = '" +
                elemento.nombre +
                "' tipo = '" +
                elemento.tipo +
                "' pais_origen = '" +
                elemento.pais_origen +
                "' aliado_id = '" +
                elemento.id +
                "'></i>"
            );

            RowTimeLineItems.append(ItemTimeLine);
          });

          ColYearTimeLine.append(RowTimeLineItems);
          //ColYearTimeLine.append(RowTimeLineInfo);

          RowTimeLine1.append(ColYearTimeLine);
          jQuery("html, body").animate(
            {
              scrollTop: jQuery(".conquien #row-time-line-info-nacional").offset().top,
            },
            500
          );

          let ciclos = 12;
          let segundos = 3;
          let milisegundos = (segundos * 1000) / ciclos;

          let elementosled = jQuery(".conquien .item-time-line");

          let cantidad = elementosled.length;

          let count = 0;

          let idinterv = setInterval(function () {
            count++;

            elementosled
              .removeClass("item-time-line-transparent")
              .removeClass("item-time-line-white");

            elementosled.addClass("item-time-line-transparent");

            let aleatorios = elementosled.filter(function () {
              return (
                Math.floor((cantidad / 3) * 2.5) <=
                Math.floor(
                  Math.random() * Math.floor(cantidad + (cantidad * 3) / 3.5)
                )
              );
            });

            aleatorios
              .removeClass("item-time-line-transparent")
              .addClass("item-time-line-white");

            if (count >= ciclos) {
              window.clearTimeout(idinterv);

              elementosled
                .removeClass("item-time-line-transparent")
                .removeClass("item-time-line-white");
            }
          }, milisegundos);

          //fin
        })
        .fail(function () {
          //console.log("Error al leer los registros del json.");
        });
    }
  }
  marcar_mapa(svg_mapa, region_seleccionada, clase_contenedora);
});

/*jQuery(document).on("mouseleave", ".region", function(){
    var region_seleccionada = $(this).text();
    var clase_contenedora = "column-4";
    var svg_mapa = "";
    if(jQuery(this).hasClass("region_internacional")) {
        svg_mapa = ".svg-internacional";
        clase_contenedora = "mapamundi";
    } else{
        svg_mapa = ".svg-colombia";
    }
    desmarcar_mapa(svg_mapa, region_seleccionada, clase_contenedora);
});*/

jQuery(document).on("click", ".colombia", function () {
  var region_seleccionada = jQuery(this).attr("name");
  //console.log("region mapa: " + region_seleccionada);
  var svg_mapa = ".svg-colombia";
  jQuery("#row-time-line-info-nacional")
      .removeClass("d-none");
  var region_seleccionada_sesion = sessionStorage.getItem(
    "region_seleccionada_sesion"
  );
  let tipo_aliado = jQuery(".conquien #tipo_aliado_cuatro");
  var TipoAliado = tipo_aliado.val();

  jQuery(".conquien .alert-aliado").hide();
  jQuery(".conquien .svg-world").hide();

  if (region_seleccionada_sesion != region_seleccionada) {
    jQuery("#select_nacional").val(region_seleccionada).trigger("change");
    /*desmarcar_mapa(svg_mapa, region_seleccionada_sesion);
    jQuery("a.region.region-other.region_nacional.text-detalle")
      .removeClass("text-detalle")
      .addClass("descripcion");

    sessionStorage.setItem("region_seleccionada_sesion", region_seleccionada);
    if (jQuery("#puntos-nacional").hasClass("d-none")) {
      jQuery("#puntos-nacional").addClass("d-block");
      jQuery("#puntos-nacional").removeClass("d-none");
    }
    if (jQuery("#select_tipo_aliado_cuatro").hasClass("d-none")) {
      jQuery("#select_tipo_aliado_cuatro").addClass("d-block");
      jQuery("#select_tipo_aliado_cuatro").removeClass("d-none");
    }
    
    var id_resaltar = region_seleccionada.replace(/ /g, "-");
    jQuery("#" + id_resaltar)
      .removeClass("descripcion")
      .addClass("text-detalle");
    jQuery("#nombre-region").text(region_seleccionada + ":");
    var RowTimeLine1 = jQuery(".conquien .row-time-line-1");
    //Limpio el elemento DOM
    RowTimeLine1.empty();
    jQuery
      .getJSON("/themes/custom/cevtheme/conquien/json/jsondb.json", function (data) {
        //Relaciono los tipos con los colores

        const MapTipos = new Map();

        MapTipos.set(
          "Organizaciones, plataformas sociales y territoriales",
          "tipo-organizaciones"
        );
        MapTipos.set("Comunidad Internacional", "tipo-comunidad_internacional");
        MapTipos.set("Comunidad Académica", "tipo-comunidad_academica");
        MapTipos.set(
          "Institucionalidad pública e instancias nacionales y territoriales",
          "tipo-institucionalidad"
        );
        // MapTipos.set("Figuras públicas", "tipo-figuras_publicas");
        MapTipos.set(
          "Medios de comunicación (públicos, privados y comunitarios)",
          "tipo-medios"
        );
        MapTipos.set("Sector empresarial", "tipo-sector_privado");
        MapTipos.set("", "#ff0000");
        MapTipos.set("Sociedad política", "tipo-sociedad_politica");
        MapTipos.set("Comunidad académica", "tipo-comunidad_academica");
        MapTipos.set("Comunidad internacional", "tipo-comunidad_internacional");
        // MapTipos.set("Personas aliadas", "tipo-personas_aliadas");
        MapTipos.set(
          "Consejo Asesor de la Comisión de la Verdad",
          "tipo-consejo_asesor"
        );

        //Consulto las regiones
        var elementos = [];

        data.forEach(function (aliado, index) {
          if (aliado.territorializacion[0]["nacional"].length > 0) {
            aliado.territorializacion[0]["nacional"].forEach(function (
              region,
              index
            ) {
              if (region == region_seleccionada && TipoAliado == "Todos") {
                elementos.push(aliado);
              } else {
                //region == region_seleccionada != TipoAliado == "Todos"
                if (
                  region == region_seleccionada &&
                  TipoAliado == aliado.tipo
                ) {
                  elementos.push(aliado);
                }
              }
            });
          }
        });

        //console.log("Elementos");
        //console.log(elementos.length);
        jQuery("#num_aliados").text(elementos.length + " aliados");
        var ColYearTimeLine = jQuery(
          "<div class='col-sm-12 col-md-12 col-year-time-line col-year-time-line-sm col-year-time-line-md col-year-time-line-lg col-year-time-line-xl' id = 'col-year-time-line-" +
            0 +
            "'></div>"
        );
        /*var RowTimeLineInfo = jQuery(
          "<div class='row-time-line-info row-time-line-info-sm row-time-line-info-md row-time-line-info-lg row-time-line-info-xl' id = 'row-time-line-info-" +
            0 +
            "'></div>"
        );*/
        /*var RowTimeLineItems = jQuery(
          "<div class='row-time-line-items row-time-line-items-lg row-time-line-items-xl' id = 'row-time-line-items-" +
            0 +
            "'></div>"
        );
        elementos.forEach(function (elemento, index) {
          var colorclass = MapTipos.get(elemento.tipo);
          const AnimationTimeShow = Math.floor(Math.random() * 6) + 1;
          var ItemTimeLine = jQuery(
            "<i class='fa fa-circle item-time-line " +
              colorclass +
              " item-time-show-" +
              AnimationTimeShow +
              "' title = '" +
              elemento.nombre +
              " - " +
              elemento.tipo +
              "' aliado = '" +
              elemento.nombre +
              "' tipo = '" +
              elemento.tipo +
              "' pais_origen = '" +
              elemento.pais_origen +
              "' aliado_id = '" +
              elemento.id +
              "'></i>"
          );

          RowTimeLineItems.append(ItemTimeLine);
        });

        ColYearTimeLine.append(RowTimeLineItems);
        //ColYearTimeLine.append(RowTimeLineInfo);

        RowTimeLine1.append(ColYearTimeLine);
        jQuery("html, body").animate(
          {
            scrollTop: jQuery(".conquien #row-time-line-info-nacional").offset().top,
          },
          500
        );
        let ciclos = 12;
          let segundos = 3;
          let milisegundos = (segundos * 1000) / ciclos;

          let elementosled = jQuery(".conquien .item-time-line");

          let cantidad = elementosled.length;

          let count = 0;

          let idinterv = setInterval(function () {
            count++;

            elementosled
              .removeClass("item-time-line-transparent")
              .removeClass("item-time-line-white");

            elementosled.addClass("item-time-line-transparent");

            let aleatorios = elementosled.filter(function () {
              return (
                Math.floor((cantidad / 3) * 2.5) <=
                Math.floor(
                  Math.random() * Math.floor(cantidad + (cantidad * 3) / 3.5)
                )
              );
            });

            aleatorios
              .removeClass("item-time-line-transparent")
              .addClass("item-time-line-white");

            if (count >= ciclos) {
              window.clearTimeout(idinterv);

              elementosled
                .removeClass("item-time-line-transparent")
                .removeClass("item-time-line-white");
            }
          }, milisegundos);

        //fin
      })
      .fail(function () {
        //console.log("Error al leer los registros del json.");
      });*/
  }
  marcar_mapa(svg_mapa, region_seleccionada);
});

/*jQuery(document).on("mouseleave", ".colombia", function(){
    var region_seleccionada = jQuery(this).attr('name');
    ////console.log("region mapa: "+region_seleccionada);
    var svg_mapa = ".svg-colombia";
    desmarcar_mapa(svg_mapa, region_seleccionada);
});*/

function marcar_mapa(
  svg_mapa,
  region_seleccionada,
  clase_contenedora = "column-4"
) {
  jQuery(
    "." +
      clase_contenedora +
      " " +
      svg_mapa +
      " path[name='" +
      region_seleccionada +
      "'],." +
      clase_contenedora +
      " " +
      svg_mapa +
      " path[class='" +
      region_seleccionada +
      "']"
  ).addClass("selected-country");
}

function desmarcar_mapa(
  svg_mapa,
  region_seleccionada,
  clase_contenedora = "column-4"
) {
  jQuery(
    "." +
      clase_contenedora +
      " " +
      svg_mapa +
      " path[name='" +
      region_seleccionada +
      "'],." +
      clase_contenedora +
      " " +
      svg_mapa +
      " path[class='" +
      region_seleccionada +
      "']"
  ).removeClass("selected-country");
}

function rest_seleted_mapa(svg_mapa, clase_contenedora = "column-4") {
  jQuery("." + clase_contenedora + " " + svg_mapa + " path").removeClass(
    "selected-country"
  );
}

jQuery(document).on("click", ".mapa-resumen", function () {
  var region_seleccionada = jQuery(this).attr("name");
  var clase_contenedora = "mapamundi";
  //console.log("region mapa internacional: " + region_seleccionada);
  var svg_mapa = ".svg-internacional";
  jQuery("#row-time-line-info-internacional")
      .removeClass("d-none");
  var region_seleccionada_sesion = sessionStorage.getItem(
    "region_seleccionada_sesion"
  );
  let tipo_aliado = jQuery(".conquien #tipo_aliado_tres");
  var TipoAliado = tipo_aliado.val();

  jQuery(".conquien .alert-aliado").hide();
  jQuery(".conquien .svg-world").hide();

  if (region_seleccionada_sesion != region_seleccionada) {
    jQuery("#select_internacional").val(region_seleccionada).trigger("change");
    /*desmarcar_mapa(svg_mapa, region_seleccionada_sesion, clase_contenedora);
    jQuery("a.region.region-other.region_internacional.text-detalle")
      .removeClass("text-detalle")
      .addClass("descripcion");

    sessionStorage.setItem("region_seleccionada_sesion", region_seleccionada);
    if (jQuery("#puntos-internacional").hasClass("d-none")) {
      jQuery("#puntos-internacional").addClass("d-block");
      jQuery("#puntos-internacional").removeClass("d-none");
    }
    
    if (jQuery("#select_tipo_aliado_tres").hasClass("d-none")) {
      jQuery("#select_tipo_aliado_tres").addClass("d-block");
      jQuery("#select_tipo_aliado_tres").removeClass("d-none");
    }
    
    var id_resaltar = region_seleccionada.replace(/ /g, "-");
    jQuery("#" + id_resaltar)
      .removeClass("descripcion")
      .addClass("text-detalle");
    jQuery("#nombre-interregion").text(region_seleccionada + ":");
    var RowTimeLine1 = jQuery(".conquien .row-time-line-2");
    //Limpio el elemento DOM
    RowTimeLine1.empty();
    jQuery
      .getJSON("/themes/custom/cevtheme/conquien/json/jsondb.json", function (data) {
        //Relaciono los tipos con los colores

        const MapTipos = new Map();

        MapTipos.set(
          "Organizaciones, plataformas sociales y territoriales",
          "tipo-organizaciones"
        );
        MapTipos.set("Comunidad Internacional", "tipo-comunidad_internacional");
        MapTipos.set("Comunidad Académica", "tipo-comunidad_academica");
        MapTipos.set(
          "Institucionalidad pública e instancias nacionales y territoriales",
          "tipo-institucionalidad"
        );
        // MapTipos.set("Figuras públicas", "tipo-figuras_publicas");
        MapTipos.set(
          "Medios de comunicación (públicos, privados y comunitarios)",
          "tipo-medios"
        );
        MapTipos.set("Sector empresarial", "tipo-sector_privado");
        MapTipos.set("", "#ff0000");
        MapTipos.set("Sociedad política", "tipo-sociedad_politica");
        MapTipos.set("Comunidad académica", "tipo-comunidad_academica");
        MapTipos.set("Comunidad internacional", "tipo-comunidad_internacional");
        // MapTipos.set("Personas aliadas", "tipo-personas_aliadas");
        MapTipos.set(
          "Consejo Asesor de la Comisión de la Verdad",
          "tipo-consejo_asesor"
        );

        //Consulto las regiones
        var elementos = [];

        data.forEach(function (aliado, index) {
          if (aliado.territorializacion[0]["internacional"].length > 0) {
            aliado.territorializacion[0]["internacional"].forEach(function (
              region,
              index
            ) {
              if (region == region_seleccionada && TipoAliado == "Todos") {
                elementos.push(aliado);
              } else {
                //region == region_seleccionada != TipoAliado == "Todos"
                if (
                  region == region_seleccionada &&
                  TipoAliado == aliado.tipo
                ) {
                  elementos.push(aliado);
                }
              }
            });
          }
        });

        //console.log("Elementos");
        //console.log(elementos.length);
        jQuery("#inter_num_aliados").text(elementos.length + " aliados");
        var ColYearTimeLine = jQuery(
          "<div class='col-sm-12 col-md-12 col-year-time-line col-year-time-line-sm col-year-time-line-md col-year-time-line-lg col-year-time-line-xl' id = 'col-year-time-line-" +
            0 +
            "'></div>"
        );
        /*var RowTimeLineInfo = jQuery(
          "<div class='row-time-line-info row-time-line-info-sm row-time-line-info-md row-time-line-info-lg row-time-line-info-xl' id = 'row-time-line-info-" +
            0 +
            "'></div>"
       );*/
        /*var RowTimeLineItems = jQuery(
          "<div class='row-time-line-items row-time-line-items-lg row-time-line-items-xl' id = 'row-time-line-items-" +
            0 +
            "'></div>"
        );
        elementos.forEach(function (elemento, index) {
          var colorclass = MapTipos.get(elemento.tipo);
          const AnimationTimeShow = Math.floor(Math.random() * 6) + 1;
          var ItemTimeLine = jQuery(
            "<i class='fa fa-circle item-time-line " +
              colorclass +
              " item-time-show-" +
              AnimationTimeShow +
              "' title = '" +
              elemento.nombre +
              " - " +
              elemento.tipo +
              "' aliado = '" +
              elemento.nombre +
              "' tipo = '" +
              elemento.tipo +
              "' pais_origen = '" +
              elemento.pais_origen +
              "' aliado_id = '" +
              elemento.id +
              "'></i>"
          );

          RowTimeLineItems.append(ItemTimeLine);
        });

        ColYearTimeLine.append(RowTimeLineItems);
        //ColYearTimeLine.append(RowTimeLineInfo);

        RowTimeLine1.append(ColYearTimeLine);
        jQuery("html, body").animate(
          {
            scrollTop: jQuery(".conquien #row-time-line-info-internacional").offset().top,
          },
          500
        );
        //fin
      })
      .fail(function () {
        //console.log("Error al leer los registros del json.");
      });*/
  }
  marcar_mapa(svg_mapa, region_seleccionada, clase_contenedora);

});

jQuery(document).on("click", ".item_asesor", function () {
  
  var asesor = jQuery(this).text();
  let id_asesor = asesor.split(" ").join("-");

  jQuery(".item_asesor")
  .removeClass("text-detalle")
  .addClass("descripcion");

  jQuery(this).removeClass("descripcion").addClass("text-detalle");

  jQuery("#select_listado_asesores").val(asesor).trigger("change");

  jQuery
  .getJSON("/themes/custom/cevtheme/conquien/json/jsondbasesores.json", function (data) {
    data.forEach(function (asesor_json, index) {
      if(asesor===asesor_json.nombre){
        document.getElementById("img_asesor").src = asesor_json.url_img;

        var html_parrafos = "";

        asesor_json.parrafos_descripcion.forEach(function (parrafo, index) {
          html_parrafos = html_parrafos + '<p class="parrafo_consejo_asesor">'+parrafo+'</p>';
        });

        jQuery("#div_parrafos_consejo_asesor").html(html_parrafos);
      }
    });
  
  })
  .fail(function () {
    //console.log("Error al leer los registros del json.");
  });

  jQuery("#img_asesor").removeClass("d-none");
  jQuery("#img_asesor").addClass("d-block");
  jQuery("#txt_asesor").removeClass("d-none");
  jQuery("#txt_asesor").addClass("d-block");

  jQuery("#txt_asesor h3").text(asesor);

});

/*Select asesores*/
jQuery(document).on("change", "#select_listado_asesores", function () {
  
  var asesor = jQuery(this).val();
  let id_asesor = asesor.split(" ").join("-");

  jQuery(".item_asesor")
  .removeClass("text-detalle")
  .addClass("descripcion");

  jQuery("#"+id_asesor).removeClass("descripcion").addClass("text-detalle");

  jQuery
  .getJSON("/themes/custom/cevtheme/conquien/json/jsondbasesores.json", function (data) {
    data.forEach(function (asesor_json, index) {
      if(asesor===asesor_json.nombre){
        document.getElementById("img_asesor").src = asesor_json.url_img;

        var html_parrafos = "";

        asesor_json.parrafos_descripcion.forEach(function (parrafo, index) {
          html_parrafos = html_parrafos + '<p class="parrafo_consejo_asesor">'+parrafo+'</p>';
        });

        jQuery("#div_parrafos_consejo_asesor").html(html_parrafos);
      }
    });
  
  })
  .fail(function () {
    //console.log("Error al leer los registros del json.");
  });

  if(asesor=="default_asesor"){
    jQuery("#img_asesor").removeClass("d-block");
    jQuery("#img_asesor").addClass("d-none");
    jQuery("#txt_asesor").removeClass("d-block");
    jQuery("#txt_asesor").addClass("d-none");
  }
  else{
    jQuery("#img_asesor").removeClass("d-none");
    jQuery("#img_asesor").addClass("d-block");
    jQuery("#txt_asesor").removeClass("d-none");
    jQuery("#txt_asesor").addClass("d-block");

    jQuery("#txt_asesor h3").text(asesor);
  }

});

