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


 /* FJS.addCriteria({field: 'genre', ele: '#genre_criteria input:checkbox'});*/
  FJS.addCriteria({field: 'genre', ele: '#genre_criteria', all: 'all'});
  FJS.addCriteria({field: 'Tema', ele: '#tema_filter_section', all: 'all'});
  FJS.addCriteria({field: 'Subtema', ele: '#subtema_filter', all: 'all'});
  FJS.addCriteria({field: 'Enfoque', ele: '#enfoque_filter', all: 'all'});
  FJS.addCriteria({field: 'Destinatario', ele: '#destinatario_filter', all: 'all'});
  FJS.addCriteria({field: 'Propone', ele: '#propone_filter', all: 'all'});
  FJS.addCriteria({field: 'Macroterritorial', ele: '#macroterritorial_filter', all: 'all'}); 
    
    jQuery("#tema_filter_section").change(function() {
    var value = jQuery("option:selected", this).val();
    jQuery('#subtema_filter').empty();
    if(value == "all"){
      jQuery('#subtema_filter').append(jQuery("<option />").val('all').text('Subtema (elegir tema)'));
    }
    else if(value == "Construcción de paz"){
      jQuery('#subtema_filter').append(jQuery("<option />").val('all').text('Subtema (elegir tema)'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('1. Garantizar un sistema político incluyente, amplio, democrático').text('1. Garantizar un sistema político incluyente, amplio, democrático'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('2. Garantizar la reincorporación de las y los excombatientes de las extintas FARC-EP').text('2. Garantizar la reincorporación de las y los excombatientes de las extintas FARC-EP'));
    } else if (value == "Víctimas"){
      jQuery('#subtema_filter').append(jQuery("<option />").val('all').text('Subtema (elegir tema)'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('1. Fortalecer la reparación integral a las víctimas del conflicto armado').text('1. Fortalecer la reparación integral a las víctimas del conflicto armado'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('2. Promover la construcción de memoria').text('2. Promover la construcción de memoria'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('3. Fortalecer la atención psicosocial').text('3. Fortalecer la atención psicosocial'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('4. Fortalecer la participación efectiva de las víctimas').text('4. Fortalecer la participación efectiva de las víctimas'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('5. Avanzar en procesos de reconocimiento de responsabilidades').text('5. Avanzar en procesos de reconocimiento de responsabilidades'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('6. Fortalecer el reconocimiento social de la dignidad de las víctimas').text('6. Fortalecer el reconocimiento social de la dignidad de las víctimas'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('7. Fortalecer las medidas para víctimas de desaparición forzada').text('7. Fortalecer las medidas para víctimas de desaparición forzada'));
    } else if (value == "Democracia y Participación"){
      jQuery('#subtema_filter').append(jQuery("<option />").val('all').text('Subtema (elegir tema)'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('1. Garantizar un sistema político incluyente, amplio, democrático').text('1. Garantizar un sistema político incluyente, amplio, democrático'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('2. Garantizar la participación ciudadana').text('2. Garantizar la participación ciudadana'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('3. Garantizar el ejercicio de la acción política y social libre de violencia  ').text('3. Garantizar el ejercicio de la acción política y social libre de violencia'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('4. Inclusión').text('4. Inclusión'));
    } else if (value == "Narcotráfico"){
      jQuery('#subtema_filter').append(jQuery("<option />").val('all').text('Subtema (elegir tema)'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('1. Avanzar hacia la regulación del mercado de drogas').text('1. Avanzar hacia la regulación del mercado de drogas'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('2. Abordar el problema de los cultivos de uso ilícito').text('2. Abordar el problema de los cultivos de uso ilícito'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('3. Atender el consumo de drogas').text('3. Atender el consumo de drogas'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('4. Redefinir la política de cooperación internacional').text('4. Redefinir la política de cooperación internacional'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('5.Mejorar la respuesta y seguimiento a las rentas del narcotráfico').text('5.Mejorar la respuesta y seguimiento a las rentas del narcotráfico'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('6. Establecer un mecanismo de verdad y justicia del narcotráfico').text('6. Establecer un mecanismo de verdad y justicia del narcotráfico'));
     } else if (value == "Impunidad y Justicia"){
      jQuery('#subtema_filter').append(jQuery("<option />").val('all').text('Subtema (elegir tema)'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('1.Mejorar la Justicia frente a las violaciones a los derechos humanos.').text('1.Mejorar la Justicia frente a las violaciones a los derechos humanos.'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('2. Garantizar la independencia judicial. ').text('2. Garantizar la independencia judicial. '));
      jQuery('#subtema_filter').append(jQuery("<option />").val('3. Mejorar el funcionamiento del aparato judicial').text('3. Mejorar el funcionamiento del aparato judicial'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('4. Garantizar la implementación de la Justicia Transicional').text('4. Garantizar la implementación de la Justicia Transicional'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('5.Fortalecer justicias diversas').text('5.Fortalecer justicias diversas'));
     } else if (value == "Seguridad"){
      jQuery('#subtema_filter').append(jQuery("<option />").val('all').text('Subtema (elegir tema)'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('1. Construir una nueva visión de seguridad').text('1. Construir una nueva visión de seguridad'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('2. Transformar la Fuerza Pública').text('2. Transformar la Fuerza Pública'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('3. Prevenir violaciones a los derechos humanos e infracciones al Derecho Internacional Humanitario por parte de agentes del Estado').text('3. Prevenir violaciones a los derechos humanos e infracciones al Derecho Internacional Humanitario por parte de agentes del Estado'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('4. Fortalecer el control sobre las empresas de seguridad y vigilancia privadas, y el porte y tenencia de armas por parte de particulares').text('4. Fortalecer el control sobre las empresas de seguridad y vigilancia privadas, y el porte y tenencia de armas por parte de particulares'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('5. Promover nuevos enfoques en la política de cooperación Internacional en temas de seguridad y defensa').text('5. Promover nuevos enfoques en la política de cooperación Internacional en temas de seguridad y defensa'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('6. Garantizar seguridad jurídica, política, económica y administrativa').text('6. Garantizar seguridad jurídica, política, económica y administrativa'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('7. Garantizar la depuración y el acceso a archivos de seguridad').text('7. Garantizar la depuración y el acceso a archivos de seguridad'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('8. Reconocer mecanismos de seguridad comunitarios y étnicos').text('8. Reconocer mecanismos de seguridad comunitarios y étnicos'));
     } else if (value == "Paz Territorial"){
      jQuery('#subtema_filter').append(jQuery("<option />").val('all').text('Subtema (elegir tema)'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('1. Superar la exclusión económica y social histórica de comunidades y territorios rurales').text('1. Superar la exclusión económica y social histórica de comunidades y territorios rurales'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('2. Prevenir y revertir el despojo').text('2. Prevenir y revertir el despojo'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('3. Promover el acceso y uso equitativo y participativo de tierras y territorios').text('3. Promover el acceso y uso equitativo y participativo de tierras y territorios'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('4. Promover el aporte del empresariado en la construcción de paz').text('4. Promover el aporte del empresariado en la construcción de paz'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('5. Avanzar hacia una política social para la equidad').text('5. Avanzar hacia una política social para la equidad'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('6. Transformar la política y el modelo económico').text('6. Transformar la política y el modelo económico'));
     } else if(value == "Transformaciones culturales"){
      jQuery('#subtema_filter').append(jQuery("<option />").val('all').text('Subtema (elegir tema)'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('1. Promover actitudes para una cultura de paz').text('1. Promover actitudes para una cultura de paz'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('2. Educar para la paz').text('2. Educar para la paz'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('3. Recuperar el tejido social que fue afectado a causa del conflicto armado').text('3. Recuperar el tejido social que fue afectado a causa del conflicto armado'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('4. Preservar el legado de la Comisión').text('4. Preservar el legado de la Comisión'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('5. Promover espacios de cuidado, desarrollo e interacción para los NNAJ').text('5. Promover espacios de cuidado, desarrollo e interacción para los NNAJ'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('6. Promover la construcción de paz desde las iglesias y las comunidades de fe').text('6. Promover la construcción de paz desde las iglesias y las comunidades de fe'));
     } else if(value == "Organizaciones armadas persistentes (OAP)"){
      jQuery('#subtema_filter').append(jQuery("<option />").val('all').text('Subtema (elegir tema)'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('1. Promover el fin de la confrontación armada').text('1. Promover el fin de la confrontación armada'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('2. Promover la negociación').text('2. Promover la negociación'));
      jQuery('#subtema_filter').append(jQuery("<option />").val('3. Desmantelar grupos armados').text('3. Desmantelar grupos armados'));
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

