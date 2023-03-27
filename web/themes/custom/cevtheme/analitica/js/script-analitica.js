//Agregar datos a la carta interna
//comision
texto = document.getElementById('marca1').innerHTML;
document.getElementById('marca1copia').innerHTML = texto;
texto = document.getElementById('titulo1').innerHTML;
document.getElementById('titulo1copia').innerHTML = texto;
texto = document.getElementById('descripcion1').innerHTML;
document.getElementById('descripcion1copia').innerHTML = texto;
//trasmedia
texto = document.getElementById('marca2').innerHTML;
document.getElementById('marca2copia').innerHTML = texto;
texto = document.getElementById('titulo2').innerHTML;
document.getElementById('titulo2copia').innerHTML = texto;
texto = document.getElementById('descripcion2').innerHTML;
document.getElementById('descripcion2copia').innerHTML = texto;
//escuela
texto = document.getElementById('marca3').innerHTML;
document.getElementById('marca3copia').innerHTML = texto;
texto = document.getElementById('titulo3').innerHTML;
document.getElementById('titulo3copia').innerHTML = texto;
texto = document.getElementById('descripcion3').innerHTML;
document.getElementById('descripcion3copia').innerHTML = texto;
//qlvsdicha
texto = document.getElementById('marca4').innerHTML;
document.getElementById('marca4copia').innerHTML = texto;
texto = document.getElementById('titulo4').innerHTML;
document.getElementById('titulo4copia').innerHTML = texto;
texto = document.getElementById('descripcion4').innerHTML;
document.getElementById('descripcion4copia').innerHTML = texto;
//botiquin
texto = document.getElementById('marca5').innerHTML;
document.getElementById('marca5copia').innerHTML = texto;
texto = document.getElementById('titulo5').innerHTML;
document.getElementById('titulo5copia').innerHTML = texto;
texto = document.getElementById('descripcion5').innerHTML;
document.getElementById('descripcion5copia').innerHTML = texto;

//mostrar cuando no llega de click

var linkatras = document.getElementById('linkAtras');
var URLhash = window.location.hash;
if (URLhash == '#c1') {
    document.querySelector('.opcion1').classList.add('inactivo');
    document.querySelector('#c1').classList.remove('inactivo');
    verificarActivos(document.querySelector('#c2'));
    verificarActivos(document.querySelector('#c3'));
    verificarActivos(document.querySelector('#c4'));
    verificarActivos(document.querySelector('#c5'));
    if (linkatras.classList.contains('sinopaco') == false) {
        linkatras.classList.add('sinopaco');
    }
} else if (URLhash == '#c2') {
    document.querySelector('.opcion1').classList.add('inactivo');
    document.querySelector('#c2').classList.remove('inactivo');
    verificarActivos(document.querySelector('#c1'));
    verificarActivos(document.querySelector('#c3'));
    verificarActivos(document.querySelector('#c4'));
    verificarActivos(document.querySelector('#c5'));
    if (linkatras.classList.contains('sinopaco') == false) {
        linkatras.classList.add('sinopaco');
    }
} else if (URLhash == '#c3') {
    document.querySelector('.opcion1').classList.add('inactivo');
    document.querySelector('#c3').classList.remove('inactivo');
    verificarActivos(document.querySelector('#c1'));
    verificarActivos(document.querySelector('#c2'));
    verificarActivos(document.querySelector('#c4'));
    verificarActivos(document.querySelector('#c5'));
    if (linkatras.classList.contains('sinopaco') == false) {
        linkatras.classList.add('sinopaco');
    }
} else if (URLhash == '#c4') {
    document.querySelector('.opcion1').classList.add('inactivo');
    document.querySelector('#c4').classList.remove('inactivo');
    verificarActivos(document.querySelector('#c1'));
    verificarActivos(document.querySelector('#c2'));
    verificarActivos(document.querySelector('#c3'));
    verificarActivos(document.querySelector('#c5'));
    if (linkatras.classList.contains('sinopaco') == false) {
        linkatras.classList.add('sinopaco');
    }
} else if (URLhash == '#c5') {
    document.querySelector('.opcion1').classList.add('inactivo');
    document.querySelector('#c5').classList.remove('inactivo');
    verificarActivos(document.querySelector('#c1'));
    verificarActivos(document.querySelector('#c2'));
    verificarActivos(document.querySelector('#c3'));
    verificarActivos(document.querySelector('#c4'));
    if (linkatras.classList.contains('sinopaco') == false) {
        linkatras.classList.add('sinopaco');
    }
} else {
    var nodoPedagogicas = document.querySelector('.opcion1');
    if (nodoPedagogicas.classList.contains('inactivo') == true) {
        nodoPedagogicas.classList.remove('inactivo');
    }
}


function verificarActivos(nodoPedagogicas) {
    if (nodoPedagogicas.classList.contains('inactivo') == false) {
        nodoPedagogicas.classList.add('inactivo');
    }
}

var indicadores2 = null;
var indicadores3 = null;
var indicadores4 = null;
var indicadores5 = null;
var indicadores6 = null;
var cadena = '';
var elementos2 = 0;
var elementos3 = 0;
var elementos4 = 0;
var elementos5 = 0;
var elementos6 = 0;

// document.addEventListener('DOMContentLoaded', function(){
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
    var carousel2 = new bootstrap.Carousel(multipleCardCarousel2, {
        interval: false,
        wrap: true
    });
    var btnIndicador2 = document.getElementById('indicatorsopcion2');
    jQuery(multipleCardCarousel2).removeClass("slide");
    var items2 = indicadores2
    var totalItem2 = items2.length;
    var posScroll2 = 0;
    var anchoTotal2 = 0;


    jQuery("#carousel-control-next2").on("click", function () {
        elementos2++;
        for (var i = 0; i < items2.length; i++) {
            anchoTotal2 = items2[i].clientWidth;
        }

        if (elementos2 < btnIndicador2.children.length) {
            for (var i = 0; i < btnIndicador2.children.length; i++) {
                btnIndicador2.children[i].classList.remove('active');
            }
            btnIndicador2.children[elementos2].classList.toggle('active');
            posScroll2 += items2[0].clientWidth;

        } else {
            for (var i = 0; i < btnIndicador2.children.length; i++) {
                btnIndicador2.children[i].classList.remove('active');
            }
            elementos2 = 0;
            btnIndicador2.children[elementos2].classList.toggle('active');
            posScroll2 = 0;
        }
        jQuery("#carousel-inner2").animate({ scrollLeft: posScroll2 }, 600);
    });

    jQuery("#carousel-control-prev2").on("click", function () {
        elementos2--;
        for (var i = 0; i < items2.length; i++) {
            anchoTotal2 = items2[i].clientWidth;
        }

        if (elementos2 > -1) {
            for (var i = 0; i < btnIndicador2.children.length; i++) {
                btnIndicador2.children[i].classList.remove('active');
            }
            btnIndicador2.children[elementos2].classList.toggle('active');
            posScroll2 -= items2[0].clientWidth;

        } else {
            for (var i = 0; i < btnIndicador2.children.length; i++) {
                btnIndicador2.children[i].classList.remove('active');
            }
            elementos2 = btnIndicador2.children.length - 1;
            btnIndicador2.children[elementos2].classList.toggle('active');
            posScroll2 = items2[0].clientWidth * (items2.length - 1);

        }
        jQuery("#carousel-inner2").animate({ scrollLeft: posScroll2 }, 600);
    });


} else {
    jQuery(multipleCardCarousel2).addClass("slide");
}

for (var i = 0; i < indicadores2.length; i++) {
    if (i < 1) {
        cadena += `<button type="button" class="indicador btncontrol2 active" data-bs-target="#caruselOpcion2" data-bs-slide-to="${i}"  aria-label="Slide ${i}" value=${i}></button>`;
    } else {
        cadena += `<button type="button"class="indicador btncontrol2" data-bs-target="#caruselOpcion2" data-bs-slide-to="${i}"  aria-label="Slide ${i}" value=${i}></button>`;
    }
}




jQuery("#indicatorsopcion2").html(cadena);
cadena = '';
botonesInteractivos('.btncontrol2', indicadores2, '#carousel-inner2');


//CARRUSEL 3
var multipleCardCarousel3 = document.getElementById("caruselOpcion3");
var mltCarr3 = document.querySelector("#caruselOpcion3");
if (window.matchMedia("(min-width: 738px)").matches) {
    var carousel3 = new bootstrap.Carousel(multipleCardCarousel3, {
        interval: false,
        wrap: true
    });
    var btnIndicador3 = document.getElementById('indicatorsopcion3');
    jQuery(multipleCardCarousel3).removeClass("slide");
    var items3 = indicadores3;
    var anchoTotal3 = 0;
    var totalItem3 = items3.length;
    var posScroll3 = 0;


    jQuery("#carousel-control-next3").on("click", function () {
        elementos3++;
        for (var i = 0; i < items3.length; i++) {
            anchoTotal2 = items3[i].clientWidth;
        }

        if (elementos3 < btnIndicador3.children.length) {
            for (var i = 0; i < btnIndicador3.children.length; i++) {
                btnIndicador3.children[i].classList.remove('active');
            }
            btnIndicador3.children[elementos3].classList.toggle('active');
            posScroll3 += items3[0].clientWidth;

        } else {
            for (var i = 0; i < btnIndicador3.children.length; i++) {
                btnIndicador3.children[i].classList.remove('active');
            }
            elementos3 = 0;
            btnIndicador3.children[elementos3].classList.toggle('active');
            posScroll3 = 0;
        }
        jQuery("#carousel-inner3").animate({ scrollLeft: posScroll3 }, 600);
    });
    jQuery("#carousel-control-prev3").on("click", function () {
        elementos3--;
        for (var i = 0; i < items3.length; i++) {
            anchoTotal3 = items3[i].clientWidth;
        }

        if (elementos3 > -1) {
            for (var i = 0; i < btnIndicador3.children.length; i++) {
                btnIndicador3.children[i].classList.remove('active');
            }
            btnIndicador3.children[elementos3].classList.toggle('active');
            posScroll3 -= items3[0].clientWidth;

        } else {
            for (var i = 0; i < btnIndicador3.children.length; i++) {
                btnIndicador3.children[i].classList.remove('active');
            }
            elementos3 = btnIndicador3.children.length - 1;
            btnIndicador3.children[elementos3].classList.toggle('active');
            posScroll3 = items3[0].clientWidth * (items3.length - 1);

        }
        jQuery("#carousel-inner3").animate({ scrollLeft: posScroll3 }, 600);
    });

} else {
    jQuery(multipleCardCarousel3).addClass("slide");
}
for (var i = 0; i < indicadores3.length; i++) {
    if (i < 1) {
        cadena += `<button type="button"class="btncontrol3 active indicador" data-bs-target="#caruselOpcion3" data-bs-slide-to="${i}"  aria-label="Slide ${i}" value=${i}></button>`;
    } else {
        cadena += `<button type="button"class="btncontrol3 indicador" data-bs-target="#caruselOpcion3" data-bs-slide-to="${i}"  aria-label="Slide ${i}" value=${i}></button>`;
    }
}

jQuery("#indicatorsopcion3").html(cadena);
cadena = '';
botonesInteractivos('.btncontrol3', indicadores3, '#carousel-inner3');
//CARRUSEL 4
var multipleCardCarousel4 = document.getElementById("caruselOpcion4");
var mltCarr4 = document.querySelector("#caruselOpcion4");
if (window.matchMedia("(min-width: 748px)").matches) {
    var carousel4 = new bootstrap.Carousel(multipleCardCarousel4, {
        interval: false,
        wrap: true
    });
    var btnIndicador4 = document.getElementById('indicatorsopcion4');
    jQuery(multipleCardCarousel4).removeClass("slide");
    var items4 = indicadores4;
    var anchoTotal4 = 0;
    var totalItem4 = items4.length;
    var posScroll4 = 0;

    jQuery("#carousel-control-next4").on("click", function () {
        elementos4++;
        for (var i = 0; i < items4.length; i++) {
            anchoTotal4 = items4[i].clientWidth;
        }

        if (elementos4 < btnIndicador4.children.length) {
            for (var i = 0; i < btnIndicador4.children.length; i++) {
                btnIndicador4.children[i].classList.remove('active');
            }
            btnIndicador4.children[elementos4].classList.toggle('active');
            posScroll4 += items4[0].clientWidth;

        } else {
            for (var i = 0; i < btnIndicador4.children.length; i++) {
                btnIndicador4.children[i].classList.remove('active');
            }
            elementos4 = 0;
            btnIndicador4.children[elementos4].classList.toggle('active');
            posScroll4 = 0;
        }
        jQuery("#carousel-inner4").animate({ scrollLeft: posScroll4 }, 600);
    });

    jQuery("#carousel-control-prev4").on("click", function () {
        elementos4--;
        for (var i = 0; i < items4.length; i++) {
            anchoTotal4 = items4[i].clientWidth;
        }

        if (elementos4 > -1) {
            for (var i = 0; i < btnIndicador4.children.length; i++) {
                btnIndicador4.children[i].classList.remove('active');
            }
            btnIndicador4.children[elementos4].classList.toggle('active');
            posScroll4 -= items4[0].clientWidth;
        } else {
            for (var i = 0; i < btnIndicador4.children.length; i++) {
                btnIndicador4.children[i].classList.remove('active');
            }
            elementos4 = btnIndicador4.children.length - 1;
            btnIndicador4.children[elementos4].classList.toggle('active');
            posScroll4 = items4[0].clientWidth * (items4.length - 1);
        }
        jQuery("#carousel-inner4").animate({ scrollLeft: posScroll4 }, 600);
    });

} else {
    jQuery(multipleCardCarousel4).addClass("slide");
}
for (var i = 0; i < indicadores4.length; i++) {
    if (i < 1) {
        cadena += `<button type="button"class="btncontrol4 active indicador" data-bs-target="#caruselOpcion4" data-bs-slide-to="${i}"  aria-label="Slide ${i}" value=${i}></button>`;
    } else {
        cadena += `<button type="button"class="btncontrol4 indicador" data-bs-target="#caruselOpcion4" data-bs-slide-to="${i}"  aria-label="Slide ${i}" value=${i}></button>`;
    }
}

jQuery("#indicatorsopcion4").html(cadena);
cadena = '';
botonesInteractivos('.btncontrol4', indicadores4, '#carousel-inner4');
//CARRUSEL 5
var multipleCardCarousel5 = document.getElementById("caruselOpcion5");
var mltCarr5 = document.querySelector("#caruselOpcion5");
if (window.matchMedia("(min-width: 758px)").matches) {
    jQuery(multipleCardCarousel5).removeClass("slide");
    var carousel5 = new bootstrap.Carousel(multipleCardCarousel5, {
        interval: false,
        wrap: true
    });
    var btnIndicador5 = document.getElementById('indicatorsopcion5');
    var items5 = indicadores5;
    var anchoTotal5 = 0;
    var totalItem5 = items5.length;
    var posScroll5 = 0;

    jQuery("#carousel-control-next5").on("click", function () {
        elementos5++;
        for (var i = 0; i < items5.length; i++) {
            anchoTotal5 = items5[i].clientWidth;
        }

        if (elementos5 < btnIndicador5.children.length) {
            for (var i = 0; i < btnIndicador5.children.length; i++) {
                btnIndicador5.children[i].classList.remove('active');
            }
            btnIndicador5.children[elementos5].classList.toggle('active');
            posScroll5 += items5[0].clientWidth;

        } else {
            for (var i = 0; i < btnIndicador5.children.length; i++) {
                btnIndicador5.children[i].classList.remove('active');
            }
            elementos5 = 0;
            btnIndicador5.children[elementos5].classList.toggle('active');
            posScroll5 = 0;
        }
        jQuery("#carousel-inner5").animate({ scrollLeft: posScroll5 }, 600);
    });

    jQuery("#carousel-control-prev5").on("click", function () {
        elementos5--;
        for (var i = 0; i < items5.length; i++) {
            anchoTotal5 = items5[i].clientWidth;
        }

        if (elementos5 > -1) {
            for (var i = 0; i < btnIndicador5.children.length; i++) {
                btnIndicador5.children[i].classList.remove('active');
            }
            btnIndicador5.children[elementos5].classList.toggle('active');
            posScroll5 -= items5[0].clientWidth;
        } else {
            for (var i = 0; i < btnIndicador5.children.length; i++) {
                btnIndicador5.children[i].classList.remove('active');
            }
            elementos5 = btnIndicador5.children.length - 1;
            btnIndicador5.children[elementos5].classList.toggle('active');
            posScroll5 = items5[0].clientWidth * (items5.length - 1);

        }
        jQuery("#carousel-inner5").animate({ scrollLeft: posScroll5 }, 600);
    });

} else {
    jQuery(multipleCardCarousel5).addClass("slide");
}
for (var i = 0; i < indicadores5.length; i++) {
    if (i < 1) {
        cadena += `<button type="button"class="btncontrol5 active indicador" data-bs-target="#caruselOpcion5" data-bs-slide-to="${i}"  aria-label="Slide ${i}" value=${i}></button>`;
    } else {
        cadena += `<button type="button"class="btncontrol5 indicador" data-bs-target="#caruselOpcion5" data-bs-slide-to="${i}"  aria-label="Slide ${i}" value=${i}></button>`;
    }
}

jQuery("#indicatorsopcion5").html(cadena);
cadena = '';
botonesInteractivos('.btncontrol5', indicadores5, '#carousel-inner5');
//CARRUSEL 6
var multipleCardCarousel6 = document.getElementById("caruselOpcion6");
var mltCarr6 = document.querySelector("#caruselOpcion6");
if (window.matchMedia("(min-width: 768px)").matches) {
    jQuery(multipleCardCarousel6).removeClass("slide");
    var carousel6 = new bootstrap.Carousel(multipleCardCarousel6, {
        interval: false,
        wrap: true
    });
    var btnIndicador6 = document.getElementById('indicatorsopcion6');
    var items6 = indicadores6;
    var anchoTotal6 = 0;

    var totalItem6 = items6.length;
    var posScroll6 = 0;

    jQuery("#carousel-control-next6").on("click", function () {
        elementos6++;
        for (var i = 0; i < items6.length; i++) {
            anchoTotal6 = items6[i].clientWidth;
        }

        if (elementos6 < btnIndicador6.children.length) {
            for (var i = 0; i < btnIndicador6.children.length; i++) {
                btnIndicador6.children[i].classList.remove('active');
            }
            btnIndicador6.children[elementos6].classList.toggle('active');
            posScroll6 += items6[0].clientWidth;

        } else {
            for (var i = 0; i < btnIndicador6.children.length; i++) {
                btnIndicador6.children[i].classList.remove('active');
            }
            elementos6 = 0;
            btnIndicador6.children[elementos6].classList.toggle('active');
            posScroll6 = 0;
        }
        jQuery("#carousel-inner6").animate({ scrollLeft: posScroll6 }, 600);
    });

    jQuery("#carousel-control-prev6").on("click", function () {
        elementos6--;
        for (var i = 0; i < items6.length; i++) {
            anchoTotal6 = items6[i].clientWidth;
        }

        if (elementos6 > -1) {
            for (var i = 0; i < btnIndicador6.children.length; i++) {
                btnIndicador6.children[i].classList.remove('active');
            }
            btnIndicador6.children[elementos6].classList.toggle('active');
            posScroll6 -= items6[0].clientWidth;
        } else {
            for (var i = 0; i < btnIndicador6.children.length; i++) {
                btnIndicador6.children[i].classList.remove('active');
            }
            elementos6 = btnIndicador6.children.length - 1;
            btnIndicador6.children[elementos6].classList.toggle('active');
            posScroll6 = items6[0].clientWidth * (items6.length - 1);

        }
        jQuery("#carousel-inner6").animate({ scrollLeft: posScroll6 }, 600);
    });

} else {
    jQuery(multipleCardCarousel6).addClass("slide");
}
for (var i = 0; i < indicadores6.length; i++) {
    if (i < 1) {
        cadena += `<button type="button"class="btncontrol6 active indicador" data-bs-target="#caruselOpcion6" data-bs-slide-to="${i}"  aria-label="Slide ${i}" value=${i}></button>`;
    } else {
        cadena += `<button type="button"class="btncontrol6 indicador" data-bs-target="#caruselOpcion6" data-bs-slide-to="${i}"  aria-label="Slide ${i}" value=${i}></button>`;
    }
}

jQuery("#indicatorsopcion6").html(cadena);
cadena = '';
botonesInteractivos('.btncontrol6', indicadores6, '#carousel-inner6');

// });

function botonesInteractivos(elemento, items, fuente) {
    var botones = document.querySelectorAll(elemento);
    for (var i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click', function () {
            var posSicion = 0;
            var posScroll = 0;
            var anchoTotal = 0;
            posSicion = parseInt(this.value);
            for (var i = 0; i < items.length; i++) {
                anchoTotal += items[i].clientWidth;
            }
            posScroll = (anchoTotal / items.length) * posSicion;
            jQuery(fuente).animate({ scrollLeft: posScroll }, 600);
        });

    }
    //console.log('interactivo: '+elemento+' creado')
}
