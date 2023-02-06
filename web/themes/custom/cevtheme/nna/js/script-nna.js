/*datos*/
const nnaHomeDataInicio  = [
  {
      'home':{      
        'titulo':'Niños, niñas y adolescentes',
        'subtitulo':' No es un mal menor',
        'etiquetas':[
          {'texto':'Orfandad','url':'/etiquetas/orfandad'},
          {'texto':'Reclutamiento','url':'/etiquetas/reclutamiento'},
          {'texto':'No Repetición','url':'/etiquetas/no-repeticion'},
          {'texto':'Escuela','url':'/etiquetas/escuela'},
          {'texto':'Desplazamiento','url':'/etiquetas/desplazamiento'},
          {'texto':'Infancia','url':'/etiquetas/infancia'}
        ],  
        'urlSilueta':'/themes/custom/cevtheme/nna/img/nna-silueta.png',        
        'urlOnda':'/themes/custom/cevtheme/nna/img/nna-onda.png'
    },
    
      'generaciones':{
        'titulo':'Tres generaciones en medio de la guerra',
        'texto':'Escucha las voces de niñas, niños y adolescentes que vivieron el conflicto armado colombiano.',
        'url':'/tres-generaciones-en-medio-de-la-guerra'
    },
      'escuelas':{
        'titulo':'Conflicto y escuela',
        'texto':'Las escuelas han estado en medio de la confrontación armada. La comunidad educativa nos cuenta sus historias.',
        'url':'/conflicto-y-escuela'
      }      
    }
  ]

var inicio = nnaHomeDataInicio[0];
var tagsh='';
for(var h=0; h<inicio.home.etiquetas.length; h++)
  {    
    tagsh=tagsh+'<a href="'+inicio.home.etiquetas[h].url+'">'+inicio.home.etiquetas[h].texto+'</a>';
    if(h!=(inicio.home.etiquetas.length-1))
    {tagsh=tagsh+' | ';}
  }

const jstitulo = document.getElementById("homeTitulo");
jstitulo.innerHTML=inicio.home.titulo;
const jsubtitulo = document.getElementById("Subtitulo");
jsubtitulo.innerHTML=inicio.home.subtitulo;
/*------------const jstags = document.getElementById("tagshome");----------------------------*/ 
 /*------------jstags.innerHTML=tagsh;------------------------------*/ 

const div = document.getElementById('silueta');
div.style.backgroundImage="url("+inicio.home.urlSilueta+")";
div.style.backgroundRepeat= "no-repeat";
const div1 = document.getElementById('onda');
div1.style.backgroundImage="url("+inicio.home.urlOnda+")";
div1.style.backgroundRepeat= "no-repeat";

 /*------------producto_tres_generaciones------------------------------*/
 const jsgeneracionUrl = document.getElementById("enlace_generaciones");
 jsgeneracionUrl.setAttribute("href",inicio.generaciones.url);
 const jsgeneracion = document.getElementById("prod_generaciones");
 jsgeneracion.innerHTML=inicio.generaciones.titulo;
 const jstxtgeneraciones = document.getElementById("texto-generaciones");
 jstxtgeneraciones.innerHTML=inicio.generaciones.texto;
 
 /*------------producto_escuelas------------------------------*/
 const jsescuelasUrl = document.getElementById("enlace_escuelas");
 jsescuelasUrl.setAttribute("href",inicio.escuelas.url);
 const jsescuelas = document.getElementById("prod_escuelas");
 jsescuelas.innerHTML=inicio.escuelas.titulo;
 const jstxtescuelas = document.getElementById("texto-escuelas");
 jstxtescuelas.innerHTML=inicio.escuelas.texto;
 