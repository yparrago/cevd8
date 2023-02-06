jQuery(document).ready(function () {

    jQuery(".svg-colombia").hide();
    jQuery(".svg-world").hide();

    var id_aliado = sessionStorage.getItem("id_aliado");
    if (id_aliado > 0) {
        //console.log("Id: " + id_aliado);
        jQuery.getJSON("/themes/custom/cevtheme/conquien/json/jsondb.json", function (data) {
            /*data.forEach(function(aliado, index) {
                ////console.log(aliado.nombre + " - "+ aliado.id+" vs id get "+id_aliado);
                ////console.log("Persona " + index + " | Nombre: " + aliado.nombre + " id: " + aliado.id)
                if (aliado.id === id_aliado) {
                    jQuery("#nombre_aliado").text(aliado.nombre);
                }
            });*/
            let obj = data.filter(element => element.id == id_aliado);
            if (obj.length > 0) {
                var nombre_aliado = obj[0].nombre;
                if (obj[0].sigla.trim() != "") {
                    nombre_aliado = nombre_aliado+" / "+obj[0].sigla;
                }
                jQuery("#nombre_aliado").text(nombre_aliado);
                jQuery("#tipo_de_aliado").text(obj[0].tipo);
                if (obj[0].dependencia.trim() != "") {
                    jQuery("#dependencia_de_aliado").text(obj[0].dependencia);
                } else {
                    jQuery("#div_dependencia").hide();
                }
                let pais = obj[0].pais_origen;
                jQuery("#pais_de_aliado").text(pais);
                let result = pais.replace(' ', '');
                pais = result.toLowerCase();
                var img_pais_origen = "<img src='/themes/custom/cevtheme/conquien/assets/mapas-circulares/"+pais+".png' width='109px' height='109px'/>";
                jQuery("#linea-tiempo-3").html(img_pais_origen);

                var temas_html = "";
                obj[0]["temas"].forEach(function (tema, index) {
                    //alert(obj[0]["temas"][0]);
                    var txt_tooltip = "";
                    if(tema=="Escucha amplia y diversa"){
                        txt_tooltip = "<p class=\"parrafo_tooltip\">Contribución a la investigación para el esclarecimiento de la verdad por medio de entrevistas individuales y colectivas, historias de vida; entrega de testimonios, informes, casos e investigaciones; entre otros formatos públicos y privados de escucha. </p>";
                    }
                    if(tema=="Diálogo social y público"){
                        txt_tooltip = "<p class=\"parrafo_tooltip\">Fortalecimiento de diversas estrategias públicas para dignificar a las víctimas, promover el reconocimiento de responsabilidades, y movilizar a la sociedad hacia un compromiso colectivo con la convivencia y la no repetición. </p>";
                    }
                    if(tema=="Fortalecimiento institucional"){
                        txt_tooltip = "<p class=\"parrafo_tooltip\">Contribución a la presencia de la Comisión en todo el territorio nacional y en 23 países, al desarrollo del Sistema de Información Misional y, en general, al fortalecimiento temático y metodológico. </p>";
                    }
                    if(tema=="Enfoques poblaciones y diferenciales"){
                        txt_tooltip = "<p class=\"parrafo_tooltip\">Inclusión de los enfoques de género; niños, niñas, adolescentes y jóvenes; personas mayores; pueblos étnicos y contra el racismo; población en condición de discapacidad y el apoyo psicosocial a víctimas y responsables.  </p>";
                    }
                    if(tema=="Relacionamiento ético y político"){
                        txt_tooltip = "<p class=\"parrafo_tooltip\">Respaldo y acompañamiento para posicionar la verdad ética y política y fortalecer el mandato del Sistema Integral para la Paz, en diálogo permanente con el Gobierno Nacional, las ramas del poder, la comunidad internacional y otros actores sociales y políticos.  </p>";
                    }
                    
                    temas_html = temas_html + "<label class=\'control-label descripcion\'>" + tema + "<i class=\'fa fa-question-circle btn_tooltip\' data-tippy-content=\'" + txt_tooltip + "\'></i></label>";
                });
                if (temas_html === "") {
                    temas_html = "<label class='control-label descripcion'>Este aliado aún no cuenta con temas</label>";
                }
                jQuery("#temas_de_aliado").html(temas_html);
                /*Construcción tooltips de los temas*/
                tippy('[data-tippy-content]', {
                    arrow: true,
                    placement: 'right',
                    interactive: true,
                    theme: 'gris',
                    allowHTML: true
                });

                var regiones = "";
                var clase_region_nacional;
                /* Validar que tipos de regiones tiene para mostrar el menu de tipo de mapa*/
                if (obj[0].internacional === "si" || obj[0].nacional === "si") {
                    jQuery(".menu_tipo_mapa_none").removeClass("menu_tipo_mapa_none");
                    if(obj[0].internacional === "si"){
                        jQuery("#link_mapa_detalle").html("Seleccione una región del mapa para navegarla en el exilio.");
                        jQuery("#opcion_internacional").removeClass("opcion_tipo_mapa_none").addClass("active");
                        jQuery(".region_articulacion").text("Global");
                        jQuery(".svg-world").show();
                    }
                    if(obj[0].nacional === "si"){
                        jQuery("#opcion_nacional").removeClass("opcion_tipo_mapa_none");
                        if(obj[0].internacional === "no" && obj[0].nacional === "si"){
                            jQuery("#link_mapa_detalle").html("Seleccione una región del mapa para navegarla en el atlas de la verdad.");
                            jQuery("#opcion_nacional").addClass("active");
                            clase_region_nacional = "";
                            jQuery(".region_articulacion").text("Nacional");
                            jQuery(".svg-colombia").show();
                        }
                        else{
                            clase_region_nacional = "region_nacional_none";
                        }
                    }
                }
                
                /*Carga el listado de regiones dependiendo del tipo de mapa que se encuentra activo al cargar la pagina*/
                if (obj[0].internacional === "si") {
                    if (obj[0]["territorializacion"][0]["internacional"].length-1 > 0) {
                        obj[0]["territorializacion"][0]["internacional"].forEach(function (region, index) {
                            ////console.log(tema);
                            if (index != 0) {
                                regiones = regiones + "<label class='control-label descripcion region region-other region_internacional'>" + region + "</label>";
                                jQuery(
                                    ".column-4 .svg-world path[name='" +
                                    region +
                                    "'],.column-4 .svg-world path[class='" +
                                    region +
                                    "']"
                                ).addClass("incidence-country");
                            }
                        });
                    } else {
                        regiones = regiones + "<label class='control-label descripcion region-other region_internacional'>El aliado tiene incidencia a nivel nacional.</label>";
                    }
                } 
                if(obj[0].nacional === "si"){
                    if (obj[0]["territorializacion"][0]["nacional"].length === 0) {
                        regiones = regiones + "<label class='control-label descripcion region-other region_nacional " + clase_region_nacional + "'>El aliado tiene incidencia a nivel nacional.</label>";
                    } else {
                        obj[0]["territorializacion"][0]["nacional"].forEach(function (region, index) {
                            var txt_tooltip_subregion = "";
                            jQuery.getJSON("/themes/custom/cevtheme/conquien/json/jsondbsubregion.json", function (data_subregion) {
                                data_subregion.forEach(function(element){
                                    if(region==element.nombre){
                                        var departamento_txt = "";
                                        element.departamentos.forEach(function(departamento){
                                            departamento_txt = departamento_txt + departamento + "<br/>";
                                        });
                                        txt_tooltip_subregion = "<p class=\"parrafo_tooltip\">"+departamento_txt+"</p>";
                                    }
                                });
                                if(txt_tooltip_subregion!=""){
                                    regiones = regiones +"<label class=\'control-label descripcion region region-other region_nacional " + clase_region_nacional + "\'>" + region + "</label>";
                                }
                                else{
                                    regiones = regiones + "<label class='control-label descripcion region region-other region_nacional " + clase_region_nacional + "'>" + region + "</label>";
                                }

                                jQuery(".column-4 .svg-colombia path[name='" + region + "']").addClass("incidence-country");
                                jQuery("#regiones").html(regiones);
                                /*Construcción tooltips de los temas*/
                                tippy('.btn_tooltip_subtiporegion', {
                                    arrow: true,
                                    placement: 'right',
                                    interactive: false,
                                    theme: 'gris_mapa_subregion',
                                    allowHTML: true
                                });
                            });
                        });
                    }
                }
                
                jQuery("#regiones").html(regiones);

                //Años
                obj[0]["anios_reporte_comision"].forEach(function (anio, index) {
                    jQuery("#"+anio).addClass('active');
                });
                //fin

            } else {
                //console.log("Error al encontrar el aliado.");
            }
            //console.log(obj[0].internacional);
        }).fail(function () {
            //console.log("Error al leer los registros del json.");
        });
    } else {
        window.location.href = "/con-quien-index";
    }
    
    jQuery(".opcion_tipo_mapa").on("click", function () {
        if(this.id=="opcion_internacional"){
            jQuery("#link_mapa_detalle").html("Seleccione una región del mapa para navegarla en el exilio.");
            jQuery("#opcion_nacional").removeClass("active");
            jQuery(".region_nacional").addClass("region_nacional_none");
            jQuery(".svg-colombia").hide();
            jQuery("#opcion_internacional").addClass("active");
            jQuery(".region_internacional").removeClass("region_internacional_none");
            jQuery(".region_articulacion").text("Global");
            jQuery(".svg-world").show();
        }
        else{
            jQuery("#link_mapa_detalle").html("Seleccione una región del mapa para navegarla en el atlas de la verdad.");
            jQuery("#opcion_internacional").removeClass("active");
            jQuery(".region_internacional").addClass("region_internacional_none");
            jQuery(".svg-world").hide();
            jQuery("#opcion_nacional").addClass("active");
            jQuery(".region_nacional").removeClass("region_nacional_none");
            jQuery(".region_articulacion").text("Nacional");
            jQuery(".svg-colombia").show();
        }
    });
});
    
$(document).on("mouseover", ".region", function(){
    var region_seleccionada = $(this).text();
    var svg_mapa = "";
    if($(this).hasClass("region_internacional")) {
        svg_mapa = ".svg-world";
    }
    else{
        svg_mapa = ".svg-colombia";
    }

    jQuery(
        ".column-4 " + svg_mapa + " path[name='" +
          region_seleccionada +
          "'],.column-4 " + svg_mapa + " path[class='" +
          region_seleccionada +
          "']"
      ).addClass("selected-country");
});

$(document).on("mouseleave", ".region", function(){
    var region_seleccionada = $(this).text();
    var svg_mapa = "";
    if($(this).hasClass("region_internacional")) {
        svg_mapa = ".svg-world";
    }
    else{
        svg_mapa = ".svg-colombia";
    }
    jQuery(
        ".column-4 " + svg_mapa + " path[name='" +
          region_seleccionada +
          "'],.column-4 " + svg_mapa + " path[class='" +
          region_seleccionada +
          "']"
      ).removeClass("selected-country");
});

$(document).on("mouseover", ".pais_hover", function(){
    jQuery(
        ".pais_hover"
    ).removeClass("hover-pais");
    var pais_seleccionado = jQuery(this).attr("name");
    jQuery(
        ".column-4 .svg-world path[name='" +
        pais_seleccionado +
          "'],.column-4 .svg-world path[class='" +
          pais_seleccionado +
          "']"
    ).addClass("hover-pais");
});

$(document).on("mouseout", ".pais_hover", function(){
    jQuery(
        ".pais_hover"
    ).removeClass("hover-pais");
});

$(document).on("click", ".pais_hover", function(){
    var pais_seleccionado = jQuery(this).attr("name");
    jQuery
    .getJSON("/themes/custom/cevtheme/conquien/json/jsondbpais.json", function (data) {
        data.forEach(function (pais, index) {
            if(pais_seleccionado==pais.nombre){
                window.location.href = pais.link_mapa;
            }
        });
    })
    .fail(function () {
        //console.log("Error al leer los registros del json.");
    });
});

$(document).on("click", ".macroregion_hover", function(){
    var region_seleccionada = jQuery(this).attr("name");
    jQuery
    .getJSON("/themes/custom/cevtheme/conquien/json/jsondbsubregion.json", function (data) {
        data.forEach(function (subregion, index) {
            if(region_seleccionada==subregion.nombre){
                window.location.href = subregion.link_mapa;
            }
        });
    })
    .fail(function () {
        //console.log("Error al leer los registros del json.");
    });
});

/*jQuery(".menu_tipo_mapa_none").on("click", ".region-other", function () {
    region_selected = jQuery(this).text();
    if (jQuery(this).hasClass("region_internacional")) {
        clase_mapa = "svg-world";
    }
    if (jQuery(this).hasClass("region_nacional")) {
        clase_mapa = "svg-colombia";
    }
    if (!jQuery(this).hasClass("region-selected")) {
        //Agregar clase seleccionada y seleccionar lugar mapa
        //console.log(clase_mapa+" Region seleccionada. "+region_selected);
        jQuery(this).removeClass("descripcion").addClass("region-selected text-detalle");
        jQuery(".column-4 ."+clase_mapa+" path[name='"+region_selected+"'],.column-4 ."+clase_mapa+" path[class='"+region_selected+"']").removeClass("incidence-country").addClass("selected-country");

    } else {
        //Quitar clase seleccionada y des-seleccionar lugar mapa
        //console.log(clase_mapa+" Region NO seleccionada. "+region_selected);
        jQuery(this).removeClass("region-selected text-detalle").addClass("descripcion");
        jQuery(".column-4 ."+clase_mapa+" path[name='"+region_selected+"'],.column-4 ."+clase_mapa+" path[class='"+region_selected+"']").removeClass("selected-country").addClass("incidence-country");
    }
});
});*/

