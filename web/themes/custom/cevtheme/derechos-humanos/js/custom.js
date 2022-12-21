var que_paso = 0;
var por_que_paso = 0;

jQuery('#item-container-principal').on('click',function(){

    por_que_paso = 0;

    if( que_paso == 0){
        jQuery('#item-container-principal').addClass("section1");
        jQuery('#item-container-principal').removeClass("section1-1");
        jQuery('#item-container-principal-2').addClass("section2");
        jQuery('#item-container-principal-3').removeClass("section3");
        jQuery('#item-container-principal-4').addClass("section4");
        jQuery('#item-container-principal-4').removeClass("section4-1");
        que_paso = 1;
    }else{
        jQuery('#item-container-principal').removeClass("section1");
        jQuery('#item-container-principal-4').removeClass("section4");
        jQuery('#item-container-principal-2').removeClass("section2");
        jQuery('#item-container-principal-4').removeClass("section4");
        que_paso = 0;
    }
})

// jQuery('#item-container-principal-3').on('click',function(){
//     jQuery('#item-container-principal').removeClass("prueba1");
//     jQuery('#item-container-principal-2').removeClass("prueba2");
//     jQuery('#item-container-principal-3').removeClass("prueba3");
// })

jQuery('#item-container-principal-4').on('click',function(){

    que_paso = 0;
    if( por_que_paso == 0){
        jQuery('#item-container-principal').removeClass("section1");
        jQuery('#item-container-principal').addClass("section1-1");
        jQuery('#item-container-principal-2').removeClass("section2");
        jQuery('#item-container-principal-3').addClass("section3");
        jQuery('#item-container-principal-4').removeClass("section4");
        jQuery('#item-container-principal-4').addClass("section4-1");
        por_que_paso = 1;
    }else{
        jQuery('#item-container-principal').removeClass("section1-1");
        jQuery('#item-container-principal-3').removeClass("section3");
        jQuery('#item-container-principal-4').removeClass("section4-1");
        por_que_paso = 0;
    }
})

jQuery( window ).on( "load resize", function() {
    var screen = jQuery(window).width();
    if(screen > 768){

     }  else {

    }
    new CBPGridGallery( document.getElementById( 'grid-gallery' ) );
    new CBPGridGallery( document.getElementById( 'grid-gallery-2' ) );
    new CBPGridGallery( document.getElementById( 'grid-gallery-3' ) );
});

// $('.aside-button').on('click', function(){
//     $(this).toggleClass('showing')
//     $('aside').toggleClass('show')
// })


// $('html , body').on('click', function(){
//     $('.aside-button').removeClass('showing')
//     $('aside').removeClass('show')
// })

// $(".aside-button").on("click", function (e) {
// 	e.stopPropagation();
// });
