jQuery(document).ready(function(){

  initSliders();

  //NOTE: To append in different container
  var appendToContainer = function(htmlele, record){
    console.log(record)
  };

  var afterFilter = function(result, jQ){
    jQuery('#total_recomendaciones').text(result.length);

    var checkboxes  = jQuery("#genre_criteria :input:gt(0)");

    checkboxes.each(function(){
      var c = jQuery(this), count = 0

      if(result.length > 0){
        count = jQ.where({ 'genre': c.val() }).count;
      }
      c.next().text(c.val() + '(' + count + ')')
    });
  }

  var FJS = FilterJS(recomendaciones, '#recomendaciones', {
    template: '#recomendaciones-template',
    search: { ele: '#searchbox' },
    //search: {ele: '#searchbox', fields: ['runtime']}, // With specific fields
    callbacks: {
      afterFilter: afterFilter 
    },
    pagination: {
      container: '#pagination',
      visiblePages: 3,
      perPage: {
        values: [12, 15, 18],
        container: '#per_page'
      },
    }
  });

  FJS.addCallback('beforeAddRecords', function(){
    if(this.recordsCount >= 450){
      this.stopStreaming();
    }
  });

  FJS.addCallback('afterAddRecords', function(){
    var percent = (this.recordsCount - 250)*100/250;

    jQuery('#stream_progress').text(percent + '%').attr('style', 'width: '+ percent +'%;');

    if (percent == 100){
      jQuery('#stream_progress').parent().fadeOut(1000);
    }
  });

  FJS.setStreaming({
    data_url: 'data/stream_recomendaciones.json',
    stream_after: 1,
    batch_size: 50
  });

  FJS.addCriteria({field: 'year', ele: '#year_filter', type: 'range', all: 'all'});
  FJS.addCriteria({field: 'rating', ele: '#rating_filter', type: 'range'});
  FJS.addCriteria({field: 'runtime', ele: '#runtime_filter', type: 'range'});
 /* FJS.addCriteria({field: 'genre', ele: '#genre_criteria input:checkbox'});*/
  FJS.addCriteria({field: 'genre', ele: '#genre_criteria', all: 'all'});
  FJS.addCriteria({field: 'Tema', ele: '#tema_filter_section', all: 'all'});
  FJS.addCriteria({field: 'Subtema', ele: '#subtema_filter', all: 'all'});
  FJS.addCriteria({field: 'Enfoque', ele: '#enfoque_filter', all: 'all'});
  FJS.addCriteria({field: 'Destinatario', ele: '#destinatario_filter', all: 'all'});
  FJS.addCriteria({field: 'Plazo', ele: '#plazo_filter', all: 'all'});
    
    
    jQuery("#tema_filter_section").change(function() {
    var value = jQuery("option:selected", this).val();
    jQuery('#subtema_filter').empty();
    if(value == "all"){
      jQuery('#subtema_filter').append(jQuery("<option />").val('all').text('Subtema (elegir tema)'));
    }
    else if(value == "Construcción de paz"){
      jQuery('#subtema_filter').append(jQuery("<option />").val('all').text('Subtema (elegir tema)'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Implementación integral del Acuerdo Final de Paz').text('Implementación integral del Acuerdo Final de Paz'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Creación de un Ministerio para la Paz y la Reconciliación').text('Creación de un Ministerio para la Paz y la Reconciliación'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Cooperación internacional para la paz').text('Cooperación internacional para la paz'));
    } else if (value == "Víctimas"){
      jQuery('#subtema_filter').append(jQuery("<option />").val('all').text('Subtema (elegir tema)'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Reparación Integral').text('Reparación Integral'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Salud integral y atención psicosocial como medida de reparación').text('Salud integral y atención psicosocial como medida de reparación'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Memoria').text('Memoria'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Víctimas de desaparición').text('Víctimas de desaparición'));
    } else if (value == "Democracia"){
      jQuery('#subtema_filter').append(jQuery("<option />").val('all').text('Subtema (elegir tema)'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Pacto Político Nacional').text('Pacto Político Nacional'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Reforma Política').text('Reforma Política'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Participación Ciudadana').text('Participación Ciudadana'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Protesta social y movilización').text('Protesta social y movilización'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Ejercicio de la política libre de violencia').text('Ejercicio de la política libre de violencia'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Inclusión de grupos históricamente excluidos').text('Inclusión de grupos históricamente excluidos'));
    } else if (value == "Narcotráfico"){
      jQuery('#subtema_filter').append(jQuery("<option />").val('all').text('Subtema (elegir tema)'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Transitar hacia la regulación legal estricta').text('Transitar hacia la regulación legal estricta'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Cooperación internacional sobre política drogas').text('Cooperación internacional sobre política drogas'));
     } else if (value == "Impunidad y acceso a la justicia"){
      jQuery('#subtema_filter').append(jQuery("<option />").val('all').text('Subtema (elegir tema)'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Independencia y transparencia').text('Independencia y transparencia'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Investigación penal').text('Investigación penal'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Reconocimiento de las víctimas del sistema judicial').text('Reconocimiento de las víctimas del sistema judicial'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Acceso a la justicia local').text('Acceso a la justicia local'));
     } else if (value == "Seguridad"){
      jQuery('#subtema_filter').append(jQuery("<option />").val('all').text('Subtema (elegir tema)'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Nueva visión de seguridad').text('Nueva visión de seguridad'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Transformación del sector con base en la nueva visión de seguridad').text('Transformación del sector con base en la nueva visión de seguridad'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Archivos de Inteligencia y de DDHH').text('Archivos de Inteligencia y de DDHH'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Empresas de seguridad privada y control de armas').text('Empresas de seguridad privada y control de armas'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Seguridad para la ruralidad y zonas de frontera').text('Seguridad para la ruralidad y zonas de frontera'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Cooperación internacional').text('Cooperación internacional'));
     } else if (value == "Para contribuir a la paz territorial"){
      jQuery('#subtema_filter').append(jQuery("<option />").val('all').text('Subtema (elegir tema)'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Estrategia como base para la paz territorial').text('Estrategia como base para la paz territorial'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Descentralización, autonomía territorial y organización político administrativa').text('Descentralización, autonomía territorial y organización político administrativa'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Acceso equitativo, democrático y ambientalmente sostenible a la tierra y los territorios').text('Acceso equitativo, democrático y ambientalmente sostenible a la tierra y los territorios'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Uso sostenible de tierras y territorios, y prevención y gestión de conflictos socioambientales').text('Uso sostenible de tierras y territorios, y prevención y gestión de conflictos socioambientales'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Desarrollo con enfoque territorial y provisión de bienes y servicios públicos para la ruralidad').text('Desarrollo con enfoque territorial y provisión de bienes y servicios públicos para la ruralidad'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Prevención y reversión del despojo de tierras y territorios; y la reparación efectiva de las víctimas').text('Prevención y reversión del despojo de tierras y territorios; y la reparación efectiva de las víctimas'));
     } else if(value == "Transformaciones culturales"){
      jQuery('#subtema_filter').append(jQuery("<option />").val('all').text('Subtema (elegir tema)'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Educación para una cultura de paz').text('Educación para una cultura de paz'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Estrategia para la consolidación de una cultura de paz').text('Estrategia para la consolidación de una cultura de paz'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Contribuciones a la cultura de paz desde medios de comunicación y comunidades de fe').text('Contribuciones a la cultura de paz desde medios de comunicación y comunidades de fe'));
     } else if(value == "Legado"){
      jQuery('#subtema_filter').append(jQuery("<option />").val('all').text('Subtema (elegir tema)'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('Legado').text('Legado'));
    }
})
  /*
   * Add multiple criterial.
    FJS.addCriteria([
      {field: 'genre', ele: '#genre_criteria input:checkbox'},
      {field: 'year', ele: '#year_filter', type: 'range'}
    ])
    */
      FJS.addCriteria([
      {field: 'Tema', ele: '#tema_filter', all: 'all'},
      {field: 'Enfoque', ele: '#enfoque_filter', all: 'all'}
    ])

  window.FJS = FJS;
});

function initSliders(){
  jQuery("#rating_slider").slider({
    min: 8,
    max: 10,
    values:[8, 10],
    step: 0.1,
    range:true,
    slide: function( event, ui ) {
      jQuery("#rating_range_label" ).html(ui.values[ 0 ] + ' - ' + ui.values[ 1 ]);
      jQuery('#rating_filter').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
    }
  });

  jQuery("#runtime_slider").slider({
    min: 50,
    max: 250,
    values:[0, 250],
    step: 10,
    range:true,
    slide: function( event, ui ) {
      jQuery("#runtime_range_label" ).html(ui.values[ 0 ] + ' mins. - ' + ui.values[ 1 ] + ' mins.');
      jQuery('#runtime_filter').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
    }
  });

  jQuery('#genre_criteria :checkbox').prop('checked', true);
  jQuery('#all_genre').on('click', function(){
    jQuery('#genre_criteria :checkbox').prop('checked', jQuery(this).is(':checked'));
  });
}

