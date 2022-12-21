jQuery(document).ready(function(){

  initSliders();

  //NOTE: To append in different container
  var appendToContainer = function(htmlele, record){
    console.log(record)
  };

  var afterFilter = function(result, jQ){
    jQuery('#total_herramientas').text(result.length);

    var checkboxes  = jQuery("#genre_criteria :input:gt(0)");

    checkboxes.each(function(){
      var c = jQuery(this), count = 0

      if(result.length > 0){
        count = jQ.where({ 'genre': c.val() }).count;
      }
      c.next().text(c.val() + '(' + count + ')')
    });
  }

  var FJS = FilterJS(herramientas, '#herramientas', {
    template: '#herramientas-template',
    search: { ele: '#searchbox' },
    //search: {ele: '#searchbox', fields: ['runtime']}, // With specific fields
    callbacks: {
      afterFilter: afterFilter 
    },
    pagination: {
      container: '#pagination',
      visiblePages: 6,
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
    data_url: 'data/stream_herramientas.json',
    stream_after: 1,
    batch_size: 50
  });

  FJS.addCriteria({field: 'year', ele: '#year_filter', type: 'range', all: 'all'});
  FJS.addCriteria({field: 'rating', ele: '#rating_filter', type: 'range'});
  FJS.addCriteria({field: 'runtime', ele: '#runtime_filter', type: 'range'});
 /* FJS.addCriteria({field: 'genre', ele: '#genre_criteria input:checkbox'});*/
  FJS.addCriteria({field: 'genre', ele: '#genre_criteria', all: 'all'});
  FJS.addCriteria({field: 'Procedimiento', ele: '#Procedimiento_filter', all: 'all'});
  FJS.addCriteria({field: 'procesos', ele: '#procesos_filter', all: 'all'});
  FJS.addCriteria({field: 'categoria', ele: '#categoria_filter', all: 'all'});
  FJS.addCriteria({field: 'clasificacion_pedagogica', ele: '#clasificacion_pedagogica_filter', all: 'all'});
  FJS.addCriteria({field: 'objetivo', ele: '#objetivo_filter', all: 'all'});

    
   
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

