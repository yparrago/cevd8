//CAMBIO DE CARTA
var card = document.querySelectorAll('.card');
var linkatras = document.getElementById('linkAtras');
for(var i=0; i< card.length; i++){
    card[i].addEventListener('click', function(){
        if(linkatras.classList.contains('sinopaco')== false){
            linkatras.classList.add('sinopaco');
        }
        var padre = this.parentNode.parentNode.parentNode.parentNode.classList[1];
        var hijo = this.classList[1];
        switch(hijo){
            case'comision': 
                document.querySelector('.'+padre).classList.add('inactivo');
                document.querySelector('.opcion2').classList.remove('inactivo');
                texto = document.getElementById('marca1').innerHTML;
                document.getElementById('marca1copia').innerHTML= texto;
                texto = document.getElementById('titulo1').innerHTML;
                document.getElementById('titulo1copia').innerHTML= texto;
                texto = document.getElementById('descripcion1').innerHTML;
                document.getElementById('descripcion1copia').innerHTML= texto;
                break;
            case 'transmedia':
                document.querySelector('.'+padre).classList.add('inactivo');
                document.querySelector('.opcion3').classList.remove('inactivo');
                texto = document.getElementById('marca2').innerHTML;
                document.getElementById('marca2copia').innerHTML= texto;
                texto = document.getElementById('titulo2').innerHTML;
                document.getElementById('titulo2copia').innerHTML= texto;
                texto = document.getElementById('descripcion2').innerHTML;
                document.getElementById('descripcion2copia').innerHTML= texto;
                break;
            case 'escuela':
                document.querySelector('.'+padre).classList.add('inactivo');
                document.querySelector('.opcion4').classList.remove('inactivo');
                texto = document.getElementById('marca3').innerHTML;
                document.getElementById('marca3copia').innerHTML= texto;
                texto = document.getElementById('titulo3').innerHTML;
                document.getElementById('titulo3copia').innerHTML= texto;
                texto = document.getElementById('descripcion3').innerHTML;
                document.getElementById('descripcion3copia').innerHTML= texto;
                break;
            case 'qlvsdicha':
                document.querySelector('.'+padre).classList.add('inactivo');
                document.querySelector('.opcion5').classList.remove('inactivo');
                texto = document.getElementById('marca4').innerHTML;
                document.getElementById('marca4copia').innerHTML= texto;
                texto = document.getElementById('titulo4').innerHTML;
                document.getElementById('titulo4copia').innerHTML= texto;
                texto = document.getElementById('descripcion4').innerHTML;
                document.getElementById('descripcion4copia').innerHTML= texto;
                break;
            case 'botiquin':
                document.querySelector('.'+padre).classList.add('inactivo');
                document.querySelector('.opcion6').classList.remove('inactivo');
                texto = document.getElementById('marca5').innerHTML;
                document.getElementById('marca5copia').innerHTML= texto;
                texto = document.getElementById('titulo5').innerHTML;
                document.getElementById('titulo5copia').innerHTML= texto;
                texto = document.getElementById('descripcion5').innerHTML;
                document.getElementById('descripcion5copia').innerHTML= texto;
                break;
            default:console.log('ELEMENTO '+hijo+' NO CREADO AUN');
        }
    });
}


var indicadores2=null;
var indicadores3=null;
var indicadores4=null;
var indicadores5=null;
var indicadores6=null;
var cadena =''; 

document.addEventListener('DOMContentLoaded', function(){
    indicadores2 = document.getElementById('carousel-inner2').children;
    indicadores3 = document.getElementById('carousel-inner3').children;
    indicadores4 = document.getElementById('carousel-inner4').children;
    indicadores5 = document.getElementById('carousel-inner5').children;
    indicadores6 = document.getElementById('carousel-inner6').children;

    //llenador de carruseles
    //CARRUSEL 2
var multipleCardCarousel2 = document.getElementById("caruselOpcion2");
var mltCarr2 = document.querySelector("#caruselOpcion2");
    if (window.matchMedia("(min-width: 728px)").matches) {
            var carousel2 = new bootstrap.Carousel(mltCarr2, { interval: false});
            jQuery(multipleCardCarousel2).removeClass("slide"); 
            var items2 = indicadores2
            var anchoTotal2 = 0;
            var totalItem2 = items2.length;
            var posScroll2 = 0;
    

            jQuery("#carousel-control-next2").on("click", function () {       
                for(var i =0; i<items2.length; i++){
                    anchoTotal2 += items2[i].clientWidth;
                }     
                if (posScroll2 < anchoTotal2-(anchoTotal2/totalItem2) ) {
                    posScroll2 += (anchoTotal2/totalItem2);
                    jQuery("#carousel-inner2").animate({ scrollLeft: posScroll2 },600);           
                }else{        
                    posScroll2 = anchoTotal2 * 0;
                    jQuery("#carousel-inner2").animate({ scrollLeft: posScroll2 },600);
                }
            });

            jQuery("#carousel-control-prev2").on("click", function () {
                for(var i =0; i<items2.length; i++){
                    anchoTotal2 += items2[i].clientWidth;
                }
                
                if (posScroll2 > ((anchoTotal2/totalItem2)*0)) {
                    posScroll2 -= (anchoTotal2/totalItem2);
                    jQuery("#carousel-inner2").animate({ scrollLeft: posScroll2 },600); 
                    console.log('prev');

                }else{
                    posScroll2 = anchoTotal2-((anchoTotal2/totalItem2));
                    jQuery("#carousel-inner2").animate({ scrollLeft: posScroll2 },600);
                    console.log('prev');
                }
            });

            carousel2 = new bootstrap.Carousel(mltCarr2, {
                interval: 2000,
                touch: true,
              });
       

        } else {
            jQuery(multipleCardCarousel2).addClass("slide");
    }
    
    for(var i = 0; i< indicadores2.length; i++){
        if(i < 1){
            cadena+=`<button type="button" class="indicador active" data-bs-target="#caruselOpcion2" data-bs-slide-to="${i}"  aria-label="Slide ${i}"></button>`; 
        }else{
            cadena+=`<button type="button"class="indicador" data-bs-target="#caruselOpcion2" data-bs-slide-to="${i}"  aria-label="Slide ${i}"></button>`; 
        }
    }
   
    jQuery("#indicatorsopcion2").html(cadena);
    cadena = '';
    
//CARRUSEL 3
var multipleCardCarousel3 = document.getElementById("caruselOpcion3");
var mltCarr3 = document.querySelector("#caruselOpcion3");
    if (window.matchMedia("(min-width: 738px)").matches) {
        var carousel3 = new bootstrap.Carousel(mltCarr3, { interval: false});
        jQuery(multipleCardCarousel3).removeClass("slide"); 
        var items3 = indicadores3;
        var anchoTotal3 = 0;        
        var totalItem3 = items3.length;
        var posScroll3 = 0;
    

            jQuery("#carousel-control-next3").on("click", function () {
                for(var i =0; i<items3.length; i++){
                    anchoTotal3 += items3[i].clientWidth;
                }
                
                if (posScroll3 < anchoTotal3-(anchoTotal3/totalItem3) ) {
                        posScroll3 += (anchoTotal3/totalItem3);
                        jQuery("#carousel-inner3").animate({ scrollLeft: posScroll3 },600);           
                }else{        
                    posScroll3 = anchoTotal3 * 0;
                    jQuery("#carousel-inner3").animate({ scrollLeft: posScroll3 },600);
                }
            });

            jQuery("#carousel-control-prev3").on("click", function () {
                for(var i =0; i<items3.length; i++){
                    anchoTotal3 += items3[i].clientWidth;
                }
                if (posScroll3 > ((anchoTotal3/totalItem3)*0)) {
                    posScroll3 -= (anchoTotal3/totalItem3);
                    jQuery("#carousel-inner3").animate({ scrollLeft: posScroll3 },600); 

                }else{
                    posScroll3 = anchoTotal3-((anchoTotal3/totalItem3));
                    jQuery("#carousel-inner3").animate({ scrollLeft: posScroll3 },600);
                }
            });

            carousel3 = new bootstrap.Carousel(mltCarr3, {
                interval: 2000,
                touch: true,
              });
        

        } else {
            jQuery(multipleCardCarousel3).addClass("slide");
    }
    for(var i = 0; i< indicadores3.length; i++){
        if(i < 1){
            cadena+=`<button type="button"class="active indicador" data-bs-target="#caruselOpcion3" data-bs-slide-to="${i}"  aria-label="Slide ${i}"></button>`; 
        }else{
            cadena+=`<button type="button"class="indicador" data-bs-target="#caruselOpcion3" data-bs-slide-to="${i}"  aria-label="Slide ${i}"></button>`; 
        }
    }
   
    jQuery("#indicatorsopcion3").html(cadena);
    cadena = '';
//CARRUSEL 4
var multipleCardCarousel4 = document.getElementById("caruselOpcion4");
var mltCarr4 = document.querySelector("#caruselOpcion4");
    if (window.matchMedia("(min-width: 748px)").matches) {
        var carousel4 = new bootstrap.Carousel(mltCarr4, { interval: false});
        jQuery(multipleCardCarousel4).removeClass("slide"); 
        var items4 = indicadores4;
        var anchoTotal4 = 0;
        var totalItem4 = items4.length;
        var posScroll4 = 0;

            jQuery("#carousel-control-next4").on("click", function () {
                for(var i =0; i<items4.length; i++){
                    anchoTotal4 += items4[i].clientWidth;
                }

                if (posScroll4 < anchoTotal4-(anchoTotal4/totalItem4) ) {
                    
                        posScroll4 += (anchoTotal4/totalItem4);
                        jQuery("#carousel-inner4").animate({ scrollLeft: posScroll4 },600);           
                }else{        
                    posScroll4 = anchoTotal4 * 0;
                    jQuery("#carousel-inner4").animate({ scrollLeft: posScroll4 },600);
                }
            });

            jQuery("#carousel-control-prev4").on("click", function () {
                for(var i =0; i<items4.length; i++){
                    anchoTotal4 += items4[i].clientWidth;
                }
                if (posScroll4 > ((anchoTotal4/totalItem4)*0)) {
                    posScroll4 -= (anchoTotal4/totalItem4);
                    jQuery("#carousel-inner4").animate({ scrollLeft: posScroll4 },600); 

                }else{
                    posScroll4 = anchoTotal4-((anchoTotal4/totalItem4));
                    jQuery("#carousel-inner4").animate({ scrollLeft: posScroll4 },600);
                }
            });

            carousel4 = new bootstrap.Carousel(mltCarr4, {
                interval: 2000,
                touch: true,
              });


        } else {
            jQuery(multipleCardCarousel4).addClass("slide");
    }
    for(var i = 0; i< indicadores4.length; i++){
        if(i < 1){
            cadena+=`<button type="button"class="active indicador" data-bs-target="#caruselOpcion4" data-bs-slide-to="${i}"  aria-label="Slide ${i}"></button>`; 
        }else{
            cadena+=`<button type="button"class="indicador" data-bs-target="#caruselOpcion4" data-bs-slide-to="${i}"  aria-label="Slide ${i}"></button>`; 
        }
    }
   
    jQuery("#indicatorsopcion4").html(cadena);
    cadena = '';
//CARRUSEL 5
var multipleCardCarousel5 = document.getElementById("caruselOpcion5");
var mltCarr5 = document.querySelector("#caruselOpcion5");
    if (window.matchMedia("(min-width: 758px)").matches) {
        var carousel5 = new bootstrap.Carousel(mltCarr5, { interval: false});
        jQuery(multipleCardCarousel5).removeClass("slide"); 
        var items5 = indicadores5;
        var anchoTotal5 = 0;
        var totalItem5 = items5.length;
        var posScroll5 = 0;

            jQuery("#carousel-control-next5").on("click", function () {
                for(var i =0; i<items5.length; i++){
                    anchoTotal5 += items5[i].clientWidth;
                }
                
                if (posScroll5 < anchoTotal5-(anchoTotal5/totalItem5) ) {
                        posScroll5 += (anchoTotal5/totalItem5);
                        jQuery("#carousel-inner5").animate({ scrollLeft: posScroll5 },600);           
                }else{        
                    posScroll5 = anchoTotal5 * 0;
                    jQuery("#carousel-inner5").animate({ scrollLeft: posScroll5 },600);
                }
            });

            jQuery("#carousel-control-prev5").on("click", function () {
                for(var i =0; i<items5.length; i++){
                    anchoTotal5 += items5[i].clientWidth;
                }
                
                if (posScroll5 > ((anchoTotal5/totalItem5)*0)) {
                    posScroll5 -= (anchoTotal5/totalItem5);
                    jQuery("#carousel-inner5").animate({ scrollLeft: posScroll5 },600); 

                }else{
                    posScroll5 = anchoTotal5-((anchoTotal5/totalItem5));
                    jQuery("#carousel-inner5").animate({ scrollLeft: posScroll5 },600);
                }
            });
            carousel5 = new bootstrap.Carousel(mltCarr5, {
                interval: 2000,
                touch: true,
              });

        } else {
            jQuery(multipleCardCarousel5).addClass("slide");
    }
    for(var i = 0; i< indicadores5.length; i++){
        if(i < 1){
            cadena+=`<button type="button"class="active indicador" data-bs-target="#caruselOpcion5" data-bs-slide-to="${i}"  aria-label="Slide ${i}"></button>`; 
        }else{
            cadena+=`<button type="button"class="indicador" data-bs-target="#caruselOpcion5" data-bs-slide-to="${i}"  aria-label="Slide ${i}"></button>`; 
        }
    }
   
    jQuery("#indicatorsopcion5").html(cadena);
    cadena = '';
//CARRUSEL 6
var multipleCardCarousel6 = document.getElementById("caruselOpcion6");
var mltCarr6 = document.querySelector("#caruselOpcion6");
    if (window.matchMedia("(min-width: 768px)").matches) {
        var carousel6 = new bootstrap.Carousel(mltCarr6, { interval: false});
        jQuery(multipleCardCarousel6).removeClass("slide"); 
        var items6 = indicadores6;
        var anchoTotal6 = 0;
        
        var totalItem6 = items6.length;
        var posScroll6 = 0;

            jQuery("#carousel-control-next6").on("click", function () {   
                for(var i =0; i<items6.length; i++){
                    anchoTotal6 += items6[i].clientWidth;
                }             
                if (posScroll6 < anchoTotal6-(anchoTotal6/totalItem6) ) {
                        posScroll6 += (anchoTotal6/totalItem6);
                        jQuery("#carousel-inner6").animate({ scrollLeft: posScroll6 },600);           
                }else{        
                    posScroll6 = anchoTotal6 * 0;
                    jQuery("#carousel-inner6").animate({ scrollLeft: posScroll6 },600);
                }
            });

            jQuery("#carousel-control-prev6").on("click", function () {
                for(var i =0; i<items6.length; i++){
                    anchoTotal6 += items6[i].clientWidth;
                }
                
                if (posScroll6 > ((anchoTotal6/totalItem6)*0)) {
                    posScroll6 -= (anchoTotal6/totalItem6);
                    jQuery("#carousel-inner6").animate({ scrollLeft: posScroll6 },600); 

                }else{
                    posScroll6 = anchoTotal6-((anchoTotal6/totalItem6));
                    jQuery("#carousel-inner6").animate({ scrollLeft: posScroll6 },600);
                }
            });

            carousel6 = new bootstrap.Carousel(mltCarr6, {
                interval: 2000,
                touch: true,
              });
        

        } else {
            jQuery(multipleCardCarousel6).addClass("slide");
    }
    for(var i = 0; i< indicadores6.length; i++){
        if(i < 1){
            cadena+=`<button type="button"class="active indicador" data-bs-target="#caruselOpcion6" data-bs-slide-to="${i}"  aria-label="Slide ${i}"></button>`; 
        }else{
            cadena+=`<button type="button"class="indicador" data-bs-target="#caruselOpcion6" data-bs-slide-to="${i}"  aria-label="Slide ${i}"></button>`; 
        }
    }
   
    jQuery("#indicatorsopcion6").html(cadena);
    cadena = '';

});