$(document).ready(function(){

  initSliders();

  //NOTE: To append in different container
  var appendToContainer = function(htmlele, record){
    console.log(record)
  };

  var afterFilter = function(result, jQ){
    $('#total_recomendaciones').text(result.length);

    var checkboxes  = $("#genre_criteria :input:gt(0)");

    checkboxes.each(function(){
      var c = $(this), count = 0

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

    $('#stream_progress').text(percent + '%').attr('style', 'width: '+ percent +'%;');

    if (percent == 100){
      $('#stream_progress').parent().fadeOut(1000);
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
  FJS.addCriteria({field: 'Propone', ele: '#propone_filter', all: 'all'});
  FJS.addCriteria({field: 'Macroterritorial', ele: '#macroterritorial_filter', all: 'all'}); 
    
    $("#tema_filter_section").change(function() {
    var value = $("option:selected", this).val();
    $('#subtema_filter').empty();
    if(value == "all"){
      $('#subtema_filter').append($("<option />").val('all').text('Subtema (elegir tema)'));
    }
    else if(value == "Construcción de paz"){
      $('#subtema_filter').append($("<option />").val('all').text('Subtema (elegir tema)'));
      $('#subtema_filter').append($("<option />").val('1. Garantizar un sistema político incluyente, amplio, democrático').text('1. Garantizar un sistema político incluyente, amplio, democrático'));
      $('#subtema_filter').append($("<option />").val('2. Garantizar la reincorporación de las y los excombatientes de las extintas FARC-EP').text('2. Garantizar la reincorporación de las y los excombatientes de las extintas FARC-EP'));
    } else if (value == "Víctimas"){
      $('#subtema_filter').append($("<option />").val('all').text('Subtema (elegir tema)'));
      $('#subtema_filter').append($("<option />").val('1. Fortalecer la reparación integral a las víctimas del conflicto armado').text('1. Fortalecer la reparación integral a las víctimas del conflicto armado'));
      $('#subtema_filter').append($("<option />").val('2. Promover la construcción de memoria').text('2. Promover la construcción de memoria'));
      $('#subtema_filter').append($("<option />").val('3. Fortalecer la atención psicosocial').text('3. Fortalecer la atención psicosocial'));
      $('#subtema_filter').append($("<option />").val('4. Fortalecer la participación efectiva de las víctimas').text('4. Fortalecer la participación efectiva de las víctimas'));
      $('#subtema_filter').append($("<option />").val('5. Avanzar en procesos de reconocimiento de responsabilidades').text('5. Avanzar en procesos de reconocimiento de responsabilidades'));
      $('#subtema_filter').append($("<option />").val('6. Fortalecer el reconocimiento social de la dignidad de las víctimas').text('6. Fortalecer el reconocimiento social de la dignidad de las víctimas'));
      $('#subtema_filter').append($("<option />").val('7. Fortalecer las medidas para víctimas de desaparición forzada').text('7. Fortalecer las medidas para víctimas de desaparición forzada'));
    } else if (value == "Democracia y Participación"){
      $('#subtema_filter').append($("<option />").val('all').text('Subtema (elegir tema)'));
      $('#subtema_filter').append($("<option />").val('1. Garantizar un sistema político incluyente, amplio, democrático').text('1. Garantizar un sistema político incluyente, amplio, democrático'));
      $('#subtema_filter').append($("<option />").val('2. Garantizar la participación ciudadana').text('2. Garantizar la participación ciudadana'));
      $('#subtema_filter').append($("<option />").val('3. Garantizar el ejercicio de la acción política y social libre de violencia  ').text('3. Garantizar el ejercicio de la acción política y social libre de violencia'));
      $('#subtema_filter').append($("<option />").val('4. Inclusión').text('4. Inclusión'));
    } else if (value == "Narcotráfico"){
      $('#subtema_filter').append($("<option />").val('all').text('Subtema (elegir tema)'));
      $('#subtema_filter').append($("<option />").val('1. Avanzar hacia la regulación del mercado de drogas').text('1. Avanzar hacia la regulación del mercado de drogas'));
      $('#subtema_filter').append($("<option />").val('2. Abordar el problema de los cultivos de uso ilícito').text('2. Abordar el problema de los cultivos de uso ilícito'));
      $('#subtema_filter').append($("<option />").val('3. Atender el consumo de drogas').text('3. Atender el consumo de drogas'));
      $('#subtema_filter').append($("<option />").val('4. Redefinir la política de cooperación internacional').text('4. Redefinir la política de cooperación internacional'));
      $('#subtema_filter').append($("<option />").val('5.Mejorar la respuesta y seguimiento a las rentas del narcotráfico').text('5.Mejorar la respuesta y seguimiento a las rentas del narcotráfico'));
      $('#subtema_filter').append($("<option />").val('6. Establecer un mecanismo de verdad y justicia del narcotráfico').text('6. Establecer un mecanismo de verdad y justicia del narcotráfico'));
     } else if (value == "Impunidad y Justicia"){
      $('#subtema_filter').append($("<option />").val('all').text('Subtema (elegir tema)'));
      $('#subtema_filter').append($("<option />").val('1.Mejorar la Justicia frente a las violaciones a los derechos humanos.').text('1.Mejorar la Justicia frente a las violaciones a los derechos humanos.'));
      $('#subtema_filter').append($("<option />").val('2. Garantizar la independencia judicial. ').text('2. Garantizar la independencia judicial. '));
      $('#subtema_filter').append($("<option />").val('3. Mejorar el funcionamiento del aparato judicial').text('3. Mejorar el funcionamiento del aparato judicial'));
      $('#subtema_filter').append($("<option />").val('4. Garantizar la implementación de la Justicia Transicional').text('4. Garantizar la implementación de la Justicia Transicional'));
      $('#subtema_filter').append($("<option />").val('5.Fortalecer justicias diversas').text('5.Fortalecer justicias diversas'));
     } else if (value == "Seguridad"){
      $('#subtema_filter').append($("<option />").val('all').text('Subtema (elegir tema)'));
      $('#subtema_filter').append($("<option />").val('1. Construir una nueva visión de seguridad').text('1. Construir una nueva visión de seguridad'));
      $('#subtema_filter').append($("<option />").val('2. Transformar la Fuerza Pública').text('2. Transformar la Fuerza Pública'));
      $('#subtema_filter').append($("<option />").val('3. Prevenir violaciones a los derechos humanos e infracciones al Derecho Internacional Humanitario por parte de agentes del Estado').text('3. Prevenir violaciones a los derechos humanos e infracciones al Derecho Internacional Humanitario por parte de agentes del Estado'));
      $('#subtema_filter').append($("<option />").val('4. Fortalecer el control sobre las empresas de seguridad y vigilancia privadas, y el porte y tenencia de armas por parte de particulares').text('4. Fortalecer el control sobre las empresas de seguridad y vigilancia privadas, y el porte y tenencia de armas por parte de particulares'));
      $('#subtema_filter').append($("<option />").val('5. Promover nuevos enfoques en la política de cooperación Internacional en temas de seguridad y defensa').text('5. Promover nuevos enfoques en la política de cooperación Internacional en temas de seguridad y defensa'));
      $('#subtema_filter').append($("<option />").val('6. Garantizar seguridad jurídica, política, económica y administrativa').text('6. Garantizar seguridad jurídica, política, económica y administrativa'));
      $('#subtema_filter').append($("<option />").val('7. Garantizar la depuración y el acceso a archivos de seguridad').text('7. Garantizar la depuración y el acceso a archivos de seguridad'));
      $('#subtema_filter').append($("<option />").val('8. Reconocer mecanismos de seguridad comunitarios y étnicos').text('8. Reconocer mecanismos de seguridad comunitarios y étnicos'));
     } else if (value == "Paz Territorial"){
      $('#subtema_filter').append($("<option />").val('all').text('Subtema (elegir tema)'));
      $('#subtema_filter').append($("<option />").val('1. Superar la exclusión económica y social histórica de comunidades y territorios rurales').text('1. Superar la exclusión económica y social histórica de comunidades y territorios rurales'));
      $('#subtema_filter').append($("<option />").val('2. Prevenir y revertir el despojo').text('2. Prevenir y revertir el despojo'));
      $('#subtema_filter').append($("<option />").val('3. Promover el acceso y uso equitativo y participativo de tierras y territorios').text('3. Promover el acceso y uso equitativo y participativo de tierras y territorios'));
      $('#subtema_filter').append($("<option />").val('4. Promover el aporte del empresariado en la construcción de paz').text('4. Promover el aporte del empresariado en la construcción de paz'));
      $('#subtema_filter').append($("<option />").val('5. Avanzar hacia una política social para la equidad').text('5. Avanzar hacia una política social para la equidad'));
      $('#subtema_filter').append($("<option />").val('6. Transformar la política y el modelo económico').text('6. Transformar la política y el modelo económico'));
     } else if(value == "Transformaciones culturales"){
      $('#subtema_filter').append($("<option />").val('all').text('Subtema (elegir tema)'));
      $('#subtema_filter').append($("<option />").val('1. Promover actitudes para una cultura de paz').text('1. Promover actitudes para una cultura de paz'));
      $('#subtema_filter').append($("<option />").val('2. Educar para la paz').text('2. Educar para la paz'));
      $('#subtema_filter').append($("<option />").val('3. Recuperar el tejido social que fue afectado a causa del conflicto armado').text('3. Recuperar el tejido social que fue afectado a causa del conflicto armado'));
      $('#subtema_filter').append($("<option />").val('4. Preservar el legado de la Comisión').text('4. Preservar el legado de la Comisión'));
      $('#subtema_filter').append($("<option />").val('5. Promover espacios de cuidado, desarrollo e interacción para los NNAJ').text('5. Promover espacios de cuidado, desarrollo e interacción para los NNAJ'));
      $('#subtema_filter').append($("<option />").val('6. Promover la construcción de paz desde las iglesias y las comunidades de fe').text('6. Promover la construcción de paz desde las iglesias y las comunidades de fe'));
     } else if(value == "Organizaciones armadas persistentes (OAP)"){
      $('#subtema_filter').append($("<option />").val('all').text('Subtema (elegir tema)'));
      $('#subtema_filter').append($("<option />").val('1. Promover el fin de la confrontación armada').text('1. Promover el fin de la confrontación armada'));
      $('#subtema_filter').append($("<option />").val('2. Promover la negociación').text('2. Promover la negociación'));
      $('#subtema_filter').append($("<option />").val('3. Desmantelar grupos armados').text('3. Desmantelar grupos armados'));
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
  $("#rating_slider").slider({
    min: 8,
    max: 10,
    values:[8, 10],
    step: 0.1,
    range:true,
    slide: function( event, ui ) {
      $("#rating_range_label" ).html(ui.values[ 0 ] + ' - ' + ui.values[ 1 ]);
      $('#rating_filter').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
    }
  });

  $("#runtime_slider").slider({
    min: 50,
    max: 250,
    values:[0, 250],
    step: 10,
    range:true,
    slide: function( event, ui ) {
      $("#runtime_range_label" ).html(ui.values[ 0 ] + ' mins. - ' + ui.values[ 1 ] + ' mins.');
      $('#runtime_filter').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
    }
  });

  $('#genre_criteria :checkbox').prop('checked', true);
  $('#all_genre').on('click', function(){
    $('#genre_criteria :checkbox').prop('checked', $(this).is(':checked'));
  });
}

