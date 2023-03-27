// Audio Playlist 

var playerAudioplaylistStatic = undefined;
function cargarBotones() {
    jQuery(function ($) {
        var audios = document.querySelectorAll('.audio-track');
        let playListAudios = [];
        let transcripcion = [];
        for (var i = 0; i < audios.length; i++) {
            transcripcion = [];
            const elecciones2 = Array.from(document.querySelectorAll('.cs' + i))
            elecciones2.forEach(eleccion2 => {
                transcripcion.push($(eleccion2).data('transcription'));
            });
            audioTrack = $(audios[i]).data('track');
            audioName = $(audios[i]).data('title');
            audioColor = $(audios[i]).data('color');
            audioModal = $(audios[i]).data('nombremodal');
            playListAudios.push({
                name: audioName,
                src: audioTrack,
                color: audioColor,
                transcription: transcripcion,
                nombreModal: audioModal,
            });
        }
        // Audio Playlist botones

        var playerAudioplaylistStatic = setupPlayerRT("player-audio-playlist-static");
        console.log('Instancia player', playerAudioplaylistStatic);
        let playlistStaticCurrentPlaying = null;
        let playlistStaticHTML = '';
        let modalPlaylistStatic = $('#botonesMarimbula');

        //$('#modalInfoCev').on('hide.bs.modal', () => playerAudioplaylistStatic.pause());
        $('#modalInfoCev').on('hidden.bs.modal', function () {
            playerAudioplaylistStatic.pause();
            //playerAudioplaylistStatic = null;
            $('#modalInfoCev').find(".modal-content-cev .modal-media").remove();
        })

        function setupPlaylistLrcStatic(transcription) {
            $("#player-audio-playlist-static audio").off("timeupdate"); // Clean event
            const playlistLrc = new Lyricer({
                "divID": "audio-playlist-static-transcription",
                "showLines": 1,
                "lineidPrefix": 'lyric-audio-playlist-static',
                "clickable": false
            });

            playlistLrc.setLrc(transcription)

            $("#player-audio-playlist-static audio").on("timeupdate", function () {
                playlistLrc.move(this.currentTime);
            });
        }

        function playAudioPlaylistStatic(src, index) {

            if (playlistStaticCurrentPlaying === index){
                // console.log('El mismo',playlistStaticCurrentPlaying);
                return;
            }
            else {
                // console.log('Diferente',playlistStaticCurrentPlaying);
                playerAudioplaylistStatic.stop();
                if (playListAudios[index].transcription[0] == null) {
                    document.getElementById('language-selector').classList.add('hidden');
                    document.getElementById('language-selector').setAttribute('disabled', 'true');
                    document.getElementById('audio-playlist-static-transcription').style.display = 'none';
                } else {
                    document.getElementById('language-selector').classList.remove('hidden');
                    document.getElementById('language-selector').removeAttribute('disabled');
                    document.getElementById('audio-playlist-static-transcription').style.display = '';
                    setupPlaylistLrcStatic(playListAudios[index].transcription[0])
                    const elecciones1 = Array.from(document.querySelectorAll('.controlSeleccion'))
                    elecciones1.forEach(eleccion1 => {
                        eleccion1.classList.add('hidden');
                        eleccion1.setAttribute('disabled', 'true');
                    });
                    jQuery('#seleccion').find('.cs' + index + ':first').attr('selected', 'selected');
                }
                // console.log('Instancia player play', playerAudioplaylistStatic);
                
                playerAudioplaylistStatic.play(src);
                modalPlaylistStatic.find('li').each((i, e) => $(e).removeClass('active'))
                modalPlaylistStatic.find(`li:nth-child(${index + 1})`).addClass('active')
                playlistStaticCurrentPlaying = index;
                if (playListAudios[index].transcription[0] != null) {
                    const elecciones = Array.from(document.querySelectorAll('.cs' + index))
                    elecciones.forEach(eleccion => {
                        eleccion.classList.remove('hidden');
                        eleccion.removeAttribute('disabled');
                    });
                    const select = document.getElementById('seleccion');
                    select.addEventListener('change', (event) => {
                        setupPlaylistLrcStatic(playListAudios[index].transcription[event.target.value]);
                    })
                    setupPlaylistLrcStatic(playListAudios[index].transcription[0]);
                    jQuery('#seleccion').find('.cs' + index + ':first').attr('selected', 'selected');
                }
            }
        }

        for (let [index, p] of playListAudios.entries()) {
            playlistStaticHTML += `
        <div class="form-check form-check-inline control_botones" data-nombremodal="${p.nombreModal}" color="${p.color}"> 
            <input class="form-check-input control_audio" type="radio" name="inlineRadioOptions" data-title="${p.name}"
                style="background-color:${p.color}" data-src="${p.src}" data-ind="${index}" onclick="canvasMarimbulas(this,'${p.src}',${index});" >
            <label class="form-check-label" for="inlineRadio${index}"></label>
        </div>
         `
        }
        //var indicador = 0;
        jQuery("body").on("click", '.control_audio', function (e) {
            //playerAudioplaylistStatic.pause();
            document.getElementById('contenedorCanvas').style.display = null;
            document.getElementById('contenedorImagen').classList.add('d-none');
            document.getElementById('tituloPista').innerHTML = $(this).data('title');
            playAudioPlaylistStatic($(this).data('src'), $(this).data('ind'));
            //console.log('modal', indicador++);
        });

        //setupPlaylistLrcStatic(playListAudios[0].transcription[0])
        modalPlaylistStatic.html(playlistStaticHTML)

        const contenedores = Array.from(document.querySelectorAll('.controlModalesDS'))
        contenedores.forEach(contenedor => {
            contenedorIndividual = $(contenedor).data('nombremodal');
            const comprobadores = Array.from(contenedor.querySelectorAll('.control_botones'))
            comprobadores.forEach(comprobador => {
                if (contenedorIndividual != $(comprobador).data('nombremodal')) {
                    comprobador.remove();
                }
            });
        });


    });
}

var narrColor;
var canvas;
var analyser;
var context;
var ctx;
var source2;
var fbc_array;
var AudioContext = window.AudioContext || window.webkitAudioContext;
var click = 0;
var audio = null;
var pistaact = null;

function canvasMarimbulas(elemento, src, index) {
    click++;
    audio = index;
    setTimeout(function () {
        narrColor = [];
        fuente = null;
        var colores = elemento.parentNode.parentNode.parentNode.children[1];
        canvas = document.getElementsByTagName('canvas');
        for (var i = 0; i < colores.children.length; i++) {
            narrColor.push({ 'color': colores.children[i].attributes.color.value, 'id': (i + 1), 'color1': '#ffffff' });
        }
        var audi = document.getElementById('pistaAudio');
        if (click > 1) {
            if (audi.src == pistaact) {
            } else {
                mp3Player();
            }
            pistaact = src;
        } else {
            mp3Player();
        }

    }, 100);

}

function mp3Player() {
    if (context == undefined) {
        context = new AudioContext();
    }
    var source = document.getElementById('pistaAudio');
    analyser = context.createAnalyser();
    ctx = canvas[0].getContext('2d');
    source2 = context.createMediaElementSource(source);
    source2.connect(analyser);
    analyser.connect(context.destination);
    dibujador();
}
function dibujador() {
    try {
        window.requestAnimationFrame(dibujador);
        fbc_array = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(fbc_array);
        ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);
        //var gradient = ctx.createLinearGradient(0,0,0,100); /*CANVAS MUESTRA EN POSITIVO SOBRE EJE X */
        for (var i = 0; i < narrColor.length; i++) {
            var gradient = ctx.createLinearGradient(0, 0, 0, canvas[0].height);
            gradient.addColorStop(0.1, narrColor[i].color);
            gradient.addColorStop(0.8, narrColor[i].color);
            gradient.addColorStop(0.9, '#243138cb');
            gradient.addColorStop(1, '#243138cb');


            ctx.fillStyle = gradient;//COLORES DEL CANVAS POSITIVO
            //DISTANCIA ENTRE BARRAS
            if (narrColor.length > 0 && narrColor.length <= 4) {

                x = (canvas[0].width / 2.5) + (i * 18); //DISTANCIA ENTRE BARRAS Y POSICION

            } else if (narrColor.length > 5 && narrColor.length <= 7) {

                x = (canvas[0].width / 3) + (i * 18); //DISTANCIA ENTRE BARRAS Y POSICION

            } else if (narrColor.length > 7 && narrColor.length <= 9) {

                x = (canvas[0].width / 4) + (i * 18); //DISTANCIA ENTRE BARRAS Y POSICION

            } else {

                x = (canvas[0].width / 8) + (i * 18); //DISTANCIA ENTRE BARRAS Y POSICION
            }

            w = 16; //ANCHO DE LAS BARRAS
            r = 9; //curvatura de esquinas
            h = -(fbc_array[i] / 2);//ALTURA DE LAS BARRAS
            y = canvas[0].height;

            var x2 = x + w;
            var y2 = y + h;

            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.lineTo(x2 - r, y);
            ctx.quadraticCurveTo(x2, y, x2, y - r);
            ctx.lineTo(x2, y2 + r);
            ctx.quadraticCurveTo(x2, y2, x2 - r, y2);
            ctx.lineTo(x + r, y2);
            ctx.quadraticCurveTo(x, y2, x, y2 + r);
            ctx.lineTo(x, y - r);
            ctx.quadraticCurveTo(x, y, x + r, y);
            ctx.closePath();
            ctx.strokeStyle = narrColor[i].color;
            ctx.fill();
        }
    }
    catch (err) {
    }
}


window.addEventListener('load', function() {
    
    if(document.getElementById('despliegueDiccionarioSonoro') != null){
        cargarBotones();
    }
});