const pistas =[
    {'pista':0,'url':'./audios/pista1.mp3'},
    {'pista':1,'url':'./audios/pista2.mp3'},
    {'pista':2,'url':'./audios/pista1.mp3'}
];
const tiempos =[]; 
const tmp =[];


$( document ).ready(function() {
    
    var contenedor = document.getElementById('pistas');
    for(var i = 0; i<pistas.length;i++){
        contenedor.innerHTML += '<audio id="audio'+i+'" src="'+pistas[i].url+'" preload="auto"></audio>'
    }
    
    function segundosCadena(segundos){
        var hora= Math.floor(segundos/3600);
        hoar = (hora<10)? '0'+ hora:hora;
        var minutos = Math.floor((segundos/60)%60);
        minutos = (minutos < 10)? '0'+ minutos:minutos;
        var segundos = Math.round(segundos % 60);
        segundos =(segundos < 10) ? '0' + segundos : segundos;
        
        return hora+':'+minutos+':'+segundos;

        
    }
    var audios = document.querySelectorAll('audio');
    var valor = '';
    for(var i = 0; i<audios.length; i++){
        var duraci = document.getElementById(audios[i].id);
        duraci.onloadeddata = (event) =>{
            tmp.push({
                'segundos':Math.round(event.target.duration)
            });
            valor = segundosCadena(event.target.duration);
            tiempos.push({
                'tiempo':valor
            });
        }
    }
});
var numero = 0;






$('.botones').on('click', function(e){ 

    var dato = ''; 
    if(e.target.id === 'play'){
        dato = 'play';
        document.getElementById('play').classList.add('noVer');
        document.getElementById('pausa').classList.remove('noVer');
        reproductor(dato);
    }else if(e.target.id === 'pausa'){
        dato = 'pausa';
        document.getElementById('pausa').classList.add('noVer');
        document.getElementById('play').classList.remove('noVer');
        reproductor(dato);
    }else if(e.target.id === 'next'){
        dato = 'poximo';
        reproductor(dato);
    }else if(e.target.id === 'previo'){
        dato ='anterior';
        reproductor(dato);
    }else if(e.target.id === 'silenciar'){
        dato ='mute';
        reproductor(dato);
        document.getElementById('silenciar').classList.add('noVer');
        document.getElementById('sonido').classList.remove('noVer');
    }else{  
        dato ='desmute';
        reproductor(dato); 
        document.getElementById('sonido').classList.add('noVer');
        document.getElementById('silenciar').classList.remove('noVer');
    }
});

var  context,audio, canvas, ctx, source, analyser, bufferLength, dataArray, bars, bar_x, bar_width, bar_height;
function reproducir(pista,id, dato){
    if( dato === 0 ){
        initMp3Player(id);        
        pista.play();
        
    }else{
        pista.play();
        
    }
    context.firstLaunch = false;
   
    var fin = setInterval(function(){
        verifica_fin(id);
        },1000);       
}




var  audio, canvas, ctx, source, analyser, bufferLength, dataArray, bars, bar_x, bar_width, bar_height;
const NODOS_AUDIOS = new WeakMap();


function initMp3Player(valor){
    context = new AudioContext();
    const gainNode = context.createGain();
    context.firstLaunch = true;
    analyser = context.createAnalyser();
    canvas = document.getElementById('ecualizador');
    ctx = canvas.getContext('2d');
    audio = document.getElementById(valor);
    if (NODOS_AUDIOS.has(audio)) {
        source = NODOS_AUDIOS.get(audio);
      } else {
        source = context.createMediaElementSource(audio);
        NODOS_AUDIOS.set(audio, source);

      }
    source.connect(analyser);
    analyser.connect(context.destination);
    bufferLength = analyser.frequencyBinCount;
    
    frameLooper();
}
function frameLooper(){
    window.requestAnimationFrame(frameLooper);
    fbc_array = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(fbc_array);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00b7f8";
    for(var i = 0; i < fbc_array.length; i++){
       bar_x = i * 3;
       bar_width = 2;
       bar_height = -(fbc_array[i] / 2);
       ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
        // var w = 600;
        // var x = i*2;
        // var y = canvas.height - (fbc_array[i]/4);
        // ctx.beginPath();
        // ctx.arc(x,y/2,w/200,0,2*Math.PI);
        // ctx.fill();
    }
}
var tiempoActual;
var tope=0;
function verifica_fin(valor){
    var progreso = valor.split('o');
    progreso = parseInt(progreso[1]);
    progres = tmp[progreso].segundos;
    var audio = document.getElementById(valor);
    if(audio.ended || audio.paused){
        clearInterval(fin);
    }else{
        tiempoActual = Math.round(audio.currentTime);
        var segundos = tiempoActual.toString();
        document.getElementById('inicio').innerHTML = segundos.seteado();
        document.getElementById('fin').innerHTML = tiempos[progreso].tiempo;
        document.getElementById('progreso').setAttribute('style','width:'+((tiempoActual/progres)*100)+'%');
    }
}


String.prototype.seteado = function(){
    var tsegundo = parseInt(this);
    var thoras = Math.floor(tsegundo/3600);
    var tminutos = Math.floor((tsegundo/60)%60);
    var tsegundos =Math.round(tsegundo % 60);
    if(thoras < 10 ){thoras = '0'+ thoras;}
    if(tminutos < 10){tminutos = '0'+ tminutos;}
    if(tsegundos < 10){tsegundos = '0'+tsegundos;}
    var timer = thoras+':'+tminutos+':'+tsegundos;
    return timer;
}

function pausar(pista){
    pista.pause();
    dato=1;
}
function proxima(anterior,pista,id){
    anterior.pause();
    anterior.currentTime =0;
    ////////////////////
    initMp3Player(id);
    /////////////////
    pista.play();    
}
function anterior(anterior,pista,id){
    anterior.pause();
    anterior.currentTime =0;
    ///////////////////
    initMp3Player(id);
    ///////////////////
    pista.play();
}
function silenciar(pista){
    pista.muted= true;
}
function nosilenciar(pista){
    pista.muted= false;
}
var dato = 0;
var audioActual = 0;
function reproductor (valor){
    var lista = document.querySelectorAll('audio');        
    if(valor === 'play'){
        reproducir(lista[audioActual],lista[audioActual].id, dato);
    }else if(valor === 'pausa'){        
        pausar(lista[audioActual],lista[audioActual].id);
    }else if(valor === 'poximo'){
        audioActual++;
        if(audioActual < lista.length){
            proxima(lista[audioActual-1],lista[audioActual],lista[audioActual].id);
        }else{
            audioActual--;
        }    
    }else if(valor === 'anterior'){
        audioActual--;
        if(audioActual >= 0){
            anterior(lista[audioActual+1],lista[audioActual],lista[audioActual].id);
        }else{
            audioActual =0;
        }
    }

    if(valor === 'mute'){
        nosilenciar(lista[audioActual]);
    }else if(valor === 'desmute'){
        silenciar(lista[audioActual]);
        
    }
}

