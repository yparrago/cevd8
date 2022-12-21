const regiones = [

];
/********************LANZADOR SCROLLTRIGGER***************************/
gsap.registerPlugin(ScrollTrigger);
jQuery(function ($) {
    init();
});



// boton.addEventListener('click', function(e){
//     e.path[1].children[1].children[0].classList.toggle('claseChuloRot');
//     e.path[2].classList.toggle('ocultarCinta');
// });

let canPlay = false;
let soundControl = document.querySelector("#sound-control .sound-icon");


function playSound() {
    canPlay = !canPlay;
    if (canPlay == true) {
        soundControl.classList.toggle("on");
        sound.muted = true;
        sound.pause();

    } else {
        soundControl.classList.toggle("on");
        sound.muted = false;
        sound.volume = 0.5;
        sound.play();

    }
}


function tocar() {
    temporizador();
    player.play();
    document.getElementById('reproducir').setAttribute('style', 'display:none;');
    document.getElementById('pausar').removeAttribute('style');
}

function playPista() {
    player.load();
    player.volume = 1;
    console.log('ReproduciendoPlay');
}

function reproducir() {
    console.log('Reproduciendo');
    panel = jQuery('.panel.activo');
    if (panel.length != 0) {
        src = jQuery(panel).find('.audiosrc source').attr('src');
        // //console.log('SRC', src);
        // jQuery('#pistas').attr('src',src);
        // playPista();
        document.getElementById('pausar').click();
        var locutor = document.querySelector('#nombrelocutor');
        locutortxt = jQuery(panel).find('.audiosrc .labelaudio').html();
        locutor.children[0].innerHTML = '';
        if (src.length == 0) {
            document.querySelector('#reproductor').style.display = 'none';
        } else {
            document.querySelector('#reproductor').style.display = 'block';
            player.innerHTML = `<source src="${src}" type="audio/mp3">`;
            playPista();
            if(locutortxt != undefined)
                locutor.children[0].innerHTML = locutortxt;
            tocar();
        }

    }

}

function pausa() {
    player.pause();
    document.getElementById('pausar').setAttribute('style', 'display:none');
    document.getElementById('reproducir').removeAttribute('style');
}

function verifica_fin() {
    var progres = player.duration;
    if (player.paused == true || player.ended == true) {
        clearInterval(fin);
    } else {
        var tiempoActual = Math.round(player.currentTime);
        var thora = Math.floor(tiempoActual / 3600);
        var tminuto = Math.floor((tiempoActual / 60) % 60);
        var tsegundo = Math.round(tiempoActual % 60);
        if (tminuto < 10) { tminuto = '0' + tminuto; }
        if (tsegundo < 10) { tsegundo = '0' + tsegundo; }
        if (thora == 0) {
            var timer = tminuto + ':' + tsegundo;
        } else {
            var timer = thora + ':' + tminuto + ':' + tsegundo;
        }

        document.getElementById('inicio').innerHTML = timer;
        document.getElementById('progreso').setAttribute('style', 'width:' + ((tiempoActual / progres) * 100) + '%');
    }
}

function temporizador() {
    player.onloadeddata = (event) => {
        var tmp = Math.round(event.target.duration);
        var thora = Math.floor(tmp / 3600);
        var tminuto = Math.floor((tmp / 60) % 60);
        var tsegundo = Math.round(tmp % 60);
        if (tminuto < 10) { tminuto = '0' + tminuto; }
        if (tsegundo < 10) { tsegundo = '0' + tsegundo; }
        if (thora == 0) {
            var timer = tminuto + ':' + tsegundo;
        } else {
            var timer = thora + ':' + tminuto + ':' + tsegundo;
        }
        document.getElementById('fin').innerHTML = timer;
        var fin = setInterval(function () { verifica_fin(); }, 1000);
    }


}


/*********************BOTONES CONTROL DE AVANCE DE CAPITULOS*********************************/
var btnNex = document.querySelectorAll('.next-pre-btn');
var capitulos = 0;
var region = 0;
/*FUNCION CREADORA PERMITE CAMBIO DE REGION*/
for (var i = 0; i < btnNex.length; i++) {
    btnNex[i].addEventListener('click', function () {
        console.log(this);
        // debugger;
        // ScrollTrigger.refresh();
        // if (this.classList[1] == 'derecha') {
        //     if (capitulos >= (regiones.length - 1)) {
        //         capitulos = 0;
        //     } else {
        //         capitulos++;
        //     }

        //     //inicializacion(capitulos);
        // } else {
        //     if (capitulos <= 0) {
        //         capitulos = regiones.length - 1;
        //     } else {
        //         capitulos--;
        //     }

        //     //inicializacion(capitulos);
        // }
        // var contppal = document.querySelector('.contenedorPPal');
        // contppal.scrollTop = 0;
    });
}

/*********************************FUNCION DE CREACION DE HTML*******************/

document.addEventListener('DOMContentLoaded', function () {
    // if (screen.width < 768) {
    //     var reproductor = document.getElementById('reproductor');
    //     reproductor.classList.remove('presentacion');
    //     reproductor.children[1].classList.add('row');
    //     reproductor.children[1].classList.remove('align-items-center');
    //     reproductor.children[1].classList.remove('d-flex');
    //     reproductor.children[1].innerHTML = ` <div class="col-12 prog-boton"><div class="botonesPP"><button class="btn mx-1" id="reproducir" onclick="tocar()"><i class="bi bi-play-circle"></i></button><button class="btn mx-1" id="pausar" onclick="pausa()" style="display:none"><i class="bi bi-pause-circle"></i></button></div><div class="barrapgaudio"><div class="progress"><div id="progreso" class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div></div></div><div class="col-12 temporizadores"><span class="timer" id="inicio">00:00</span><span class="timer" id="fin">00:00</span></div>`;
    // }
    //inicializacion(capitulos);
});

jQuery(function ($) {
    
});


var identificador = 0;
/*FUNCION CREADORA DE SECCIONES DE ACUERDO CON CAPITULOS*/
function creaSeccion(valor) {
    if (screen.width < 768) {
        return `<secction class="panel ${valor['id-sub-capitulo']} row">
        <div class="col-md-12 resumen">
        ${cargaContenido(valor.contenido.resumen)}
        </div>
        <div class="col-md-12 mapa">
        ${cargaImagen(valor.contenido.mapa)}
        </div>
        <div class="col-md-12 carrusell">
        <div id="carruselProfPoli-${valor['id-sub-capitulo']}" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">

        ${cargaProfunCarrusel(valor.contenido.profundizaciones)}
        ${cargaPolifoniaCarrusel(valor.contenido.polifonias)}

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carruselProfPoli-${valor['id-sub-capitulo']}" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carruselProfPoli-${valor['id-sub-capitulo']}" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button>
        </div>
        </div>    
        </secction>`;
        /*<!--${cargaProfunCarrusel(valor.contenido.profundizaciones)}--> */

    } else {
        return `<secction class="panel ${valor['id-sub-capitulo']} row">
        <div class="col-md-3 d-block polifonias">
        ${cargaPolifonias(valor.contenido.polifonias)}
        </div>
        <div class="col-md-8 segundoCuerpo">
        <div class="row">
        <div class="col-md-3 resumen">
        ${cargaContenido(valor.contenido.resumen)}
        </div>
        <div class="col-md-9 mapa">
        ${cargaImagen(valor.contenido.mapa)}
        </div>
        <div class="col-12 profundizaciones">
        <div class="row">  
        ${cargaProfundizaciones(valor.contenido.profundizaciones)}
        </div>
        </div>
        </div>
        </secction>`;
    }

    /*
    
    */
}
/*FUNCION CREADORA DE MAPA DENTRO DE SECCION*/
function cargaImagen(valor) {
    return `<img class="img-fluid" src="${valor}" alt="${valor}">`;
}
function cargaProfunCarrusel(datos) {
    var cadena = '';
    for (var i = 0; i < datos.length; i++) {
        if (i == 0) {
            cadena += `<div class="carousel-item active">
            <div class="row">
            <div class="col-6">
            <div class=" ${datos[i].tipo} iconoPROF iconprof2">
            <a class="boton" data-bs-toggle="modal" data-bs-target="#${datos[i].tipo}-${datos[i].ide}">${iconosDeCarrusel(datos[i].tipo)}</a>
            </div>
            </div>
            <div class="col-7 texto-prof2">
            <span><p>${datos[i].titulo}</p></span>
            </div>
            </div>
            </div>`;
        } else {
            cadena += `<div class="carousel-item">
            <div class="row">
            <div class="col-6">
            <div class="${datos[i].tipo} iconoPROF iconprof2">
            <a class="boton" data-bs-toggle="modal" data-bs-target="#${datos[i].tipo}-${datos[i].ide}">${iconosDeCarrusel(datos[i].tipo)}</a>
            </div>
            </div>
            <div class="col-7 texto-prof2">
            <span><p>${datos[i].titulo}</p></span>
            </div>
            </div>
            </div>`;
        }
    }
    crearModal(datos);
    return cadena;
}
function cargaPolifoniaCarrusel(datos) {
    var cadena = '';
    for (var i = 0; i < datos.length; i++) {

        cadena += `<div class="carousel-item">
        <div class="row">
        <div class="col-6">
        <img class="persona" src="${datos[i].imagePolifonia}" alt="imagen-${datos[i].titulo}"/>
        <div class="${datos[i].tipo} iconoPROF">
        <a class="boton" data-bs-toggle="modal" data-bs-target="#${datos[i].tipo}-${datos[i].ide}">${iconosDeCarrusel(datos[i].tipo)}</a>
        </div>
        </div>
        <div class="col-7">
        <span><p>${datos[i].titulo}</p></span>
        </div>
        </div>
        </div>`;

    }
    crearModal(datos);
    return cadena;
}
function iconosDeCarrusel(valor) {
    var icono = '';
    if (valor == 'video') {
        icono = ' <i class="bi bi-play-circle"></i>';
    } else if (valor == 'mapa') {
        icono = ' <i class="bi bi-map"></i>';
    } else if (valor == 'texto-foto') {
        icono = '<i class="bi bi-card-image"></i>';
    } else if (valor == 'texto') {
        icono = '<i class="bi bi-card-text"></i>';
    } else if (valor == 'pdf') {
        icono = '<i class="bi bi-file-pdf"></i>';
    } else if (valor == 'galeriafotos') {
        icono = '<i class="bi bi-images"></i>';
    } else if (valor == 'audio') {
        icono = '<i class="bi bi-soundwave"></i>';
    } else if (valor == 'datos') {
        icono = ' <i class="bi bi-clipboard-data"></i>';
    } else if (valor == 'link') {
        icono = '<i class="bi bi-link"></i>';
    } else {
        icono = ' sin asignar';
    }
    return icono;
}
/*FUNCION CREADORA DE PROFUNDIZACIONES DENTRO DE SECCION*/
function cargaProfundizaciones(datos) {
    var cadena = '';
    return cadena;
}
/*FUNCION CREADORA DE POLIFONIAS DENTRO DE SECCION*/
function cargaPolifonias(datos) {

    return '';
}

/*FUNCION CREADORA DE RESUMEN DENTRO DE SECCION*/
function cargaContenido(valor) {
    return `<div class="d-block">
    <span><p>${valor}</p></span>
    </div>`;
}
/*FUNCION CREADORA DE CARGAR BACKGROUN DENTRO DE SECCION*/
function creaBg(valor) {
    var cadena = valor.imagenbacground.split('.');

    if (cadena[2] == 'jpg' || cadena[2] == 'png' || cadena[2] == 'gif') {
        return `.${valor['id-sub-capitulo']}{background-image: url(${valor.imagenbacground});}`;
    } else {

        return insertVideo(valor);
    }


}
function insertVideo(valor) {
    var cadena = valor.imagenbacground.split('.');
    var seccion = document.querySelector('.' + valor['id-sub-capitulo']);
    if (cadena[2] == 'mp4' || cadena[2] == 'mov') {
        if (screen.width < 768) {
            seccion.innerHTML += `<video src="${valor.imagenbgVer}" id="video${valor['id-sub-capitulo']}" class="ratio ratio-16x9 videoBgrVer" autoplay loop ></video>`;
            return `.videoBgrVer {position: absolute;z-index: -1;padding: 0;width: 100%;}`;
        } else {
            seccion.innerHTML += `<video src="${valor.imagenbacground}" preload autoplay loop preload id="video${valor['id-sub-capitulo']}" class="videoBgr"></video>`;
            return `.videoBgr {position: absolute;z-index: -1;width: 100vw;padding: 0;}`;
        }

    } else {
        seccion.innerHTML += valor.imagenbacground;
        return `iframe {position: absolute;z-index: -1;width: 100vw;padding: 0 !important;height: 100vh;}`
    }

}
function crearModal(valor) {
    var cadena = '';
    document.getElementById('modales').innerHTML += cadena;
}


var hoja = document.createElement('style');
hoja.rel = 'stylesheet';
hoja.id = 'styleBg';
hoja.type = 'text/css';

var contenido = document.querySelector('.contenedorPPal');


/*FUNCION INIT DE CONTENIDO*/
function inicializacion(valor) {
    hoja.innerHTML = '';
    /*    document.querySelector('.nombreregion').innerHTML = regiones[valor].nombreregion;
        document.querySelector('.nombrecapitulo').innerHTML = regiones[valor].nombreCapitulo;
        document.querySelector('.numerocapitulo').innerHTML = regiones[valor].numeroCapitulo;
        document.querySelector('#miniMapa').src = regiones[valor].miniMapa;*/

    ScrollTrigger.refresh();
    // contenido.id = regiones[valor].id
    // var contN = document.getElementById(regiones[valor].id);
    // contN.innerHTML = '';

    // ScrollTrigger.defaults({
    //     toggleActions: "restart resume reverse pause",
    //     scroller: `#${regiones[valor].id}`
    // });

    var panel = document.querySelectorAll('.panel');
    for (var i = 0; i < panel.length; i++) {
        ScrollTrigger.create({
            trigger: "." + panel[i].classList[1],
            start: '20px 30px',
            end: 'bottom 100px',
            toggleActions: "restart resume reverse pause",
            toggleClass: "activo",
            onToggle: () => reproducir(regiones[valor].capitulos),
        });
    }

    // var iconCirlcle = document.querySelectorAll('.icon-circle');
    // for(var i=0; i<iconCirlcle.length;i++){
    //     iconCirlcle[i].addEventListener('click', function(e){
    //         console.log(this.classList[0]);
    //         /*DETECTOR DEL CLICK EN POLIFONIAS */
    //     });
    // }

    // var btnProf = document.querySelectorAll('.iconoPROF');
    // for(var i=0; i<btnProf.length;i++){
    //     btnProf[i].addEventListener('click', function(e){
    //         console.log(this.classList[0]);
    //         /*DETECTOR DEL CLICK EN PROFUNDIZACIONES*/
    //     });
    // }

    document.body.appendChild(hoja);
    //boton.click();
}
/*****************************ponga codigo nuevo aca ******* */



function init() {

    ScrollTrigger.refresh();
    ScrollTrigger.defaults({
        toggleActions: "restart resume reverse pause",
        scroller: '.contenedorPPal'
    });


    console.log('Iniciando');


        var panel = document.querySelectorAll('.panel');
        for (var i = 0; i < panel.length; i++) {
            console.log('Iniciando desktop', panel[i].id);
            ScrollTrigger.create({
                trigger: "#" + panel[i].id,
                start: '20px 30px',
                end: 'bottom 100px',
                toggleActions: "restart resume reverse pause",
                toggleClass: "activo",
                onToggle: () => reproducir(),
            });
        }
    
}

/* Tour */



var steps = [
    {
        title: "Bienvenido",
        content: "<p>Este es un tour de prueba</p>"
    }, {
        id: "region",
        title: "1st Panel",
        content: "This is the first panel"
    },
    {
        id: "resumen",
        title: "1st Panel",
        content: "Campo resumen"
    },
    {
        id: "mapa",
        title: "1st Panel",
        content: "This is the second panel"
    },
    {
        id: "nombrelocutor",
        title: "1st Panel",
        content: "This is the third panel"
    },
    {
        id: "audios",
        title: "1st Panel",
        content: "Texto para audio"
    }
];

var tour = new Tour(steps);


//tour.show();


// Función para ver más en los resúmenes
jQuery(function ($) {
    reproducir();
    $(".resumen").each(function (index) {
        height = 90;
        if (screen.width < 768) {
            height = 63;
        }
        if ($(this).height() > height) {
            $(this).addClass('vermas');
            $(this).addClass('active');
            readmore = $('<a>').addClass('readmore link-danger').html('Leer más');
            readmore.click(function () {
                $('.resumen').toggleClass('active');
                if ($(this).text() == "Leer más")
                    $(this).text("Cerrar")
                else
                    $(this).text("Leer más");
            });
            div = $('<div>').addClass('contvermas');
            $(div).html(readmore);
            $(this).after(div);
        }
    });
});

let player = null;
var reproductor = null;
var sound = null;
var boton = null;

var panels = null;


document.addEventListener('DOMContentLoaded', function () {
    player = document.getElementById('pistas');
    reproductor = document.getElementById('reproductor');
    sound = document.getElementById("selvaaudio");
    boton = document.getElementById('introduccion');
    panels = document.querySelectorAll('.panel');
    /*REPRODUCTORES Y AUDIOS AUTOMATICOS*/

    jQuery('#modalInfoCev').on('show.bs.modal', function () {
        document.getElementById('pausar').click();
        console.log('mostrando modal')
    });

    jQuery('#modalInfoCev').on('hidden.bs.modal', function () {
        document.getElementById('reproducir').click();
        console.log('modal cerrado');
    });
    currentChap = jQuery('.contenedorPPal').data('nid');
    jQuery('#radio'+currentChap).prop('checked', true);
    jQuery('.btn-chap-'+currentChap).hide();
})

jQuery("body").on("click", '.btn-cerrar-pcontenido', function (e) {
    this.parentNode.parentNode.children[0].checked = false;
    var btnCheck = document.querySelectorAll('.boton-radio');
    for (var j = 0; j < btnCheck.length; j++) {
        if (btnCheck[j].checked == false) {
            if (screen.width > 768) {
                document.querySelector('.timeline').style.top = '8%';

            } else {
                document.querySelector('.mini-mapa').removeAttribute('style');

            }

            if (screen.width < 768) {
                document.querySelector('.timeLine').style.height = '96px';
                document.querySelector('.timeLine').classList.add('movil');

                document.querySelector('.timeline').style.top = '6%';
            } else {
                document.querySelector('.mini-mapa').removeAttribute('style');
            }
        }
    }
});

var btnradio = document.querySelectorAll('.boton-radio');
for(var i = 0; i< btnradio.length; i++){
    btnradio[i].addEventListener('click', function(){
        document.querySelector('.timeLine').removeAttribute('style');
        document.querySelector('.timeline').removeAttribute('style');       
    })
}

var check = document.querySelectorAll('.boton-radio');
for(var i =0; i< check.length; i++){
    check[i].addEventListener('change', function(){
        if(screen.width > 768){
            if(this.id == 'radio'+check.length){
                document.querySelector('.mini-mapa').style='z-index:-1';
            }else{
                document.querySelector('.mini-mapa').removeAttribute('style');
            }
        }else{
            document.querySelector('.mini-mapa').style='z-index:-1';
        }
        
        
    })
}
