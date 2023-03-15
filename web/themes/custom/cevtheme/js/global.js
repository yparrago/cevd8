/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.artheme = {
    attach: function (context, settings) {

    }
  };

})(jQuery, Drupal);


function onSubmitSearchForm() {
    //document.selectDisplay.action = document.getElementById("periodDisplayed").value;

    console.log(document.getElementById("searchTarget").value);
    if(document.getElementById("searchTarget").value == 0){
      alert("Debe seleccionar un portal para su búsqueda.");
    } else if (document.getElementById("searchTarget").value == '1'){
      cevSearchForm.action = '/buscar';
    } else {
      cevSearchForm.action = 'https://archivo.comisiondelaverdad.co/explora/buscador';
    }
    
    return true;
}

/*  jQuery(function(){
    var myCarousel = document.querySelector(".carousel");
    if (myCarousel != null) {
      var carousel = new bootstrap.Carousel(myCarousel);
    }
  })*/

  function redireccionArchivo(opcion){
    if(opcion.value == '/archivo-del-esclarecimiento-de-la-verdad'){
      window.location = 'https://archivo.comisiondelaverdad.co'; 
    } else if(opcion.value == '/como-lo-hicimos'){
      window.location = 'https://comisiondelaverdad.co/recorridos/como-lo-hicimos'; 
    } else {
      window.location = opcion.value;
    }
  }



  jQuery(document).ready(function () {
    if( jQuery('#modalInfoCev').find('video').length )
    {
      jQuery('video').addClass('embed-responsive-item');
      jQuery('video').attr('width', '100%');
      jQuery('video').attr('height', 'auto');
    }
  });

