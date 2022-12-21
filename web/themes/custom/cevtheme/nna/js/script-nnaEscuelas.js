/*datos iniciales*/
const nnaEscuelaDataInicio  = [
  {
      'miga':{'retorno':'Niños, niñas y adolescentes','url':'/ninos-ninas-y-adolescentes'},
      'titulo':'Conflicto y escuela',
      'etiquetas':[
        {'texto':'Escuela','url':'/etiquetas/escuelas'},
        {'texto':'Desescolarización','url':'/etiquetas/desescolarizacion'},
        {'texto':'Docentes','url':'/etiquetas/docentes'},
        {'texto':'No Repetición','url':'/etiquetas/no-repeticion'},
        {'texto':'Reclutamiento','url':'/etiquetas/reclutamiento'},
        {'texto':'Desplazamiento','url':'/etiquetas/desplazamiento'},
        {'texto':'Reconocimiento','url':'/etiquetas/reconocimiento'},
        {'texto':'Esclarecimiento','url':'/etiquetas/esclarecimiento'}
      ],   
      'texto':'Según la Comisión de la Verdad y Educapaz, entre 1986 y 2021 se presentaron 881 casos de afectación a comunidades educativas durante el conflicto armado. Estos hechos fueron perpetrados por todos los actores armados. Estas son algunas de esas historias.',         
      'imagenFinal':'/themes/custom/cevtheme/nna/img/nnaE-m8.png',
      'distancia':200
    },
  ]
 /*datos historias*/ 
const nnaEscuelaData  = [  
  {
      'id': 0, 
      'titulo': 'Jambaló, Cauca',
      'imagen':{'escuela':'/themes/custom/cevtheme/nna/img/nnaE-e1.png','montañaM':'/themes/custom/cevtheme/nna/img/nnaE-montana1.png', 'montañaD':'/themes/custom/cevtheme/nna/img/nnaE-m1.png'},
      'introduccion':'Junto a los salones y el patio de juegos, esta escuela caucana tiene un búnker: un lugar para buscar resguardo cuando se presentan combates en sus alrededores.',
      'introducciondescarga':'Calidad alta .mp4 (91,3 MB)',
      'linkdescarga':'https://www.comisiondelaverdad.co/sites/default/files/2022-09/NNA_jambalo.mp4',
      'video':'https://www.youtube-nocookie.com/embed/x2qO1Erq33o',
      'etiquetas':[{'texto':'Escuela','url':'/etiquetas/escuela'},{'texto':'Desplazamiento', 'url':'/etiquetas/desplazamiento'},{'texto':'Desescolarización','url':'/etiquetas/desescolarizacion'},{'texto': 'Guerrilla', 'url':'/etiquetas/guerrilla'}]        
    },
    {
      'id': 1, 
      'titulo': 'Charalá, Santander',
      'imagen':{'escuela':'/themes/custom/cevtheme/nna/img/nnaE-e2.png','montañaM':'/themes/custom/cevtheme/nna/img/nnaE-montana2.png', 'montañaD':'/themes/custom/cevtheme/nna/img/nnaE-m2.png'},
      'introduccion':'En este municipio de Santander una generación quedó marcada por el horror que sembraron los paramilitares en uno de sus colegios.',
      'introducciondescarga':'Calidad alta .mp4 (97,9 MB)',
      'linkdescarga':'https://www.comisiondelaverdad.co/sites/default/files/2022-09/NNA_charala.mp4',
      'video':'https://www.youtube-nocookie.com/embed/uTOJyTpBRAY',    
      'etiquetas':[{'texto':'Escuela','url':'/etiquetas/escuela'},{'texto':'Paramilitares','url':'/etiquetas/paramilitares'},{'texto': 'Reclutamiento', 'url':'/etiquetas/reclutamiento'},{'texto':'Desescolarización', 'url':'/etiquetas/desescolarizacion'},{'texto':'Desplazamiento', 'url':'/etiquetas/desplazamiento'}] 
    },
    {
      'id': 2, 
      'titulo': 'Montes de María, Bolívar',
      'imagen':{'escuela':'/themes/custom/cevtheme/nna/img/nnaE-e3.png','montañaM':'/themes/custom/cevtheme/nna/img/nnaE-montana3.png', 'montañaD':'/themes/custom/cevtheme/nna/img/nnaE-m3.png'},
      'introduccion':'Decenas de docentes y estudiantes convivieron con la muerte de sus compañeros, en medio de combates y desplazamientos. Asistir a clases fue para ellos un acto de resistencia.',
      'introducciondescarga':'Calidad alta .mp4 (57,6 MB)',
      'linkdescarga':'https://www.comisiondelaverdad.co/sites/default/files/2022-09/NNA_montes_maria.mp4',
      'video':'https://www.youtube-nocookie.com/embed/9v4TGzckwY0',      
      'etiquetas':[{'texto':'Escuela','url':'/etiquetas/escuela'},{'texto': 'Paramilitares', 'url':'/etiquetas/paramilitares'},{'texto':'Reclutamiento', 'url':'/etiquetas/reclutamiento'},{'texto':'Desescolarización', 'url':'/etiquetas/desescolarizacion'},{'texto':'Desplazamiento','url':'/etiquetas/desplazamiento' },{'texto':'Guerrilla','url':'/etiquetas/guerrilla' }]        
    },
    {
      'id': 3, 
      'titulo': 'Pueblorrico, Antioquia',
      'imagen':{'escuela':'/themes/custom/cevtheme/nna/img/nnaE-e4.png','montañaM':'/themes/custom/cevtheme/nna/img/nnaE-montana4.png', 'montañaD':'/themes/custom/cevtheme/nna/img/nnaE-m4.png'},
      'introduccion':'“Mi vida cambió por culpa del Ejército”, dice Rafael, sobreviviente de una masacre. Vio morir a sus dos hermanos y a cuatro compañeros de clase a manos de soldados.',
      'introducciondescarga':'Calidad alta .mp4 (82 MB)',
      'linkdescarga':'https://www.comisiondelaverdad.co/sites/default/files/2022-09/NNA_pueblorrico.mp4',
      'video':'https://www.youtube-nocookie.com/embed/QKtyptK9jaE',      
      'etiquetas':[{'texto':'Escuela','url':'/etiquetas/escuela'},{'texto':'Desplazamiento', 'url':'/etiquetas/desplazamiento'},{'texto':'Desescolarización','url':'/etiquetas/desescolarizacion'},{'texto': 'Ejército', 'url':'/etiquetas/ejercito'}]         
    },
    {
      'id': 4, 
      'titulo': 'Balsillas, Caquetá',
      'imagen':{'escuela':'/themes/custom/cevtheme/nna/img/nnaE-e5.png','montañaM':'/themes/custom/cevtheme/nna/img/nnaE-montana5.png', 'montañaD':'/themes/custom/cevtheme/nna/img/nnaE-m5.png'},
      'introduccion':'Un líder social reconstruye el dolor que vivió su comunidad cuando perdieron a seis de sus habitantes durante un bazar escolar. Desde entonces, ningún estudiante regresó.',
      'introducciondescarga':'Calidad alta .mp4 (102,5 MB)',
      'linkdescarga':'https://www.comisiondelaverdad.co/sites/default/files/2022-09/NNA_Balsillas.mp4',
      'video':'https://www.youtube-nocookie.com/embed/6HmKTADt-vo',      
      'etiquetas':[{'texto':'Escuela','url':'/etiquetas/escuela'},{'texto':'Ejército', 'url':'/etiquetas/ejercito'},{'texto':'Desescolarización','url':'/etiquetas/desescolarizacion'}]        
    },
    {
      'id': 5, 
      'titulo': 'Caño Negro, Guaviare',
      'imagen':{'escuela':'/themes/custom/cevtheme/nna/img/nnaE-e6.png','montañaM':'/themes/custom/cevtheme/nna/img/nnaE-montana6.png', 'montañaD':'/themes/custom/cevtheme/nna/img/nnaE-m6.png'},
      'introduccion':'Miembros de una comunidad étnica narra cómo las FARC reclutaron niñas, niños y adolescentes. Muchos desaparecieron. ¿Qué peso tiene la guerra para la cultura y tradiciones de un pueblo?',
      'introducciondescarga':'Calidad alta .mp4 (117,3 MB)',
      'linkdescarga':'https://www.comisiondelaverdad.co/sites/default/files/2022-09/NNA_cano_negro.mp4',
      'video':'https://www.youtube-nocookie.com/embed/tzGFOZxkig0',      
      'etiquetas':[{'texto':'Escuela','url':'/etiquetas/escuela'},{'texto': 'Reclutamiento', 'url':'/etiquetas/reclutamiento'},{'texto':'Guerrilla','url':'/etiquetas/guerrilla'},{'texto': 'Zona de distensión','url':'/etiquetas/zona-de-distension'},{'texto': 'Desescolarización','url':'/etiquetas/desescolarizacion'},{'texto': 'Pueblos étnicos', 'url':'/etiquetas/pueblos-etnicos'}]        
    },
    {
      'id': 6, 
      'titulo': 'Comuna 13, Medellín',
      'imagen':{'escuela':'/themes/custom/cevtheme/nna/img/nnaE-e7.png','montañaM':'/themes/custom/cevtheme/nna/img/nnaE-montana7.png', 'montañaD':'/themes/custom/cevtheme/nna/img/nnaE-m7.png'},
      'introduccion':'La educación demostró ser un acto de resistencia. El rector de un colegio de la comuna 13, en Medellín, relata lo que fue vivir la operación Orión para su comunidad educativa.',
      'introducciondescarga':'Calidad alta .mp4 (88,6 MB)',
      'linkdescarga':'https://www.comisiondelaverdad.co/sites/default/files/2022-09/NNA-comuna13.mp4',
      'video':'https://www.youtube-nocookie.com/embed/sFTuHennEmk',      
      'etiquetas':[{'texto':'Escuela','url':'/etiquetas/escuela'},{'texto': 'Reclutamiento', 'url':'/etiquetas/reclutamiento'},{'texto':'Desescolarización', 'url':'/etiquetas/desescolarizacion'},{'texto':'Ejército','url':'/etiquetas/ejercito'}]        
    }

  ]
var inicio = nnaEscuelaDataInicio[0];
var tagsh='';
for(var h=0; h<inicio.etiquetas.length; h++)
  {    
    tagsh=tagsh+'<a href="'+inicio.etiquetas[h].url+'">'+inicio.etiquetas[h].texto+'</a>';
    if(h!=(inicio.etiquetas.length-1))
    {tagsh=tagsh+' | ';}
  }


/*------------Inicio------------------------------*/
const jsmiga = document.getElementById("miga");
jsmiga.innerHTML=inicio.miga.retorno;
jsmiga.setAttribute("href",inicio.miga.url);
const jstitulo = document.getElementById("titulo");
jstitulo.innerHTML=inicio.titulo;
const jstags = document.getElementById("tagshome");
jstags.innerHTML=tagsh;

const jstexto = document.getElementById("texto");
jstexto.innerHTML=inicio.texto;

var divAcordeon=document.getElementById("acordeon");
var escuelaHTML='';

for(var hst=0;hst<nnaEscuelaData.length;hst++)
{
 /*------------Se crea la cadena de tags-----*/
  var tags='';
  for(var a=0; a<nnaEscuelaData[hst].etiquetas.length; a++)
  {    
    tags=tags+'<a href="'+nnaEscuelaData[hst].etiquetas[a].url+'">'+nnaEscuelaData[hst].etiquetas[a].texto+'</a>';
    if(a!=(nnaEscuelaData[hst].etiquetas.length-1))
    {tags=tags+' | ';}
  }
var mt='';
/*------------Se define altura e imagenes de montañas segun la resolucion-----*/
  if(window.matchMedia("(max-width:1044px)").matches)
  {
    mt=nnaEscuelaData[hst].imagen.montañaM;  
  }
  else
  {
    mt=nnaEscuelaData[hst].imagen.montañaD;
  }
   /*------------se grafica al acordeon-----------------------------*/ 
  escuelaHTML += `
    <div class="accordion" id="accordion${nnaEscuelaData[hst].id}">
      <div id="mont" style="background-repeat: no-repeat; background-size:100% 100%; background-image: url(${mt});">
        <div class="row">                    
          <label class="item" id="${nnaEscuelaData[hst].id}" >`;
          /*------------se utiliza el if para definir el lado en que va la escuela--------------*/
            if(hst%2==0)
            { 
              escuelaHTML += `
              <div class="col-nna ">
                <div role="img" aria-label="Imagenes de las escuelas" class="contentImag">  
                  <img src="${nnaEscuelaData[hst].imagen.escuela}"  class="escuela${nnaEscuelaData[hst].id}" />
                </div>
              </div>
              <div class="col-nna">                                                                           
                <div class="accordion__header">
                  <div class="tituloHistoria" id="t${nnaEscuelaData[hst].id}">
                    <div class="tituloHeader" >${nnaEscuelaData[hst].titulo} </div>&nbsp
                    <div class="accordion__icon bi-chevron-double-down" id="accordion__icon${nnaEscuelaData[hst].id}"></div>
                  </div>
                </div>                                               
              </div>
              <div class="col-nna"> </div>`;          
            }
            else
            {

              escuelaHTML += `<div class="col-nna"></div>
              <div class="col-nna">
                <div class="accordion__header">
                  <div class="tituloHistoria" id="t${nnaEscuelaData[hst].id}">
                    <div class="tituloHeader" >${nnaEscuelaData[hst].titulo} </div>&nbsp
                    <div class="accordion__icon bi-chevron-double-down" id="accordion__icon${nnaEscuelaData[hst].id}"></div>
                  </div>
                </div>  
              </div>                      
              <div class="col-nna">
                <div role="img" aria-label="Imagenes de las escuelas" class="contentImag">                      
                  <img src="${nnaEscuelaData[hst].imagen.escuela}" class="escuela${nnaEscuelaData[hst].id}">
                </div>
              </div>`;
            }
            escuelaHTML += `
          </label>
          <div class="content-escuela" id="content-escuela${nnaEscuelaData[hst].id}">
            <div class="contenidoHistoria contenHistori${nnaEscuelaData[hst].id}" id="historia${nnaEscuelaData[hst].id}">
              <div class="d-grid gap-2 d-md-flex justify-content-end">
              <a class="btn btn-download" type="button" data-bs-toggle="popover" data-container=".testDiv " data-bs-html="true" data-bs-placement="bottom" data-bs-content="<div class=&quot;list-group list-group-flush text-end&quot;>
              <a href=&quot;${nnaEscuelaData[hst].linkdescarga}&quot; class=&quot;list-group-item list-group-item-action&quot; target=&quot;_blank&quot; download>${nnaEscuelaData[hst].introducciondescarga}</a>
                </div>" data-bs-original-title="" title="">
                <span class="icon icon-ico-download"></span>
              </a>
            </div>
              ${nnaEscuelaData[hst].introduccion}
              <div id="tags" class="tags" style="margin-bottom:20px; margin-top:20px;">${tags}</div>
              <div id="video${nnaEscuelaData[hst].id}" class="video-responsive">                    
              <iframe width="560" height="315" src="${nnaEscuelaData[hst].video}?enablejsapi=1" title="${nnaEscuelaData[hst].titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>                                                          
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;           
    
}

divAcordeon.innerHTML = escuelaHTML;
/*------------se adiciona la imagen de la montaña final al acordeon------------------*/
escuelaHTML += ` 
  <div class="accordion">
    <div id="mont" style=" background-repeat: no-repeat; background-image: url(${inicio.imagenFinal});">     
      <div class="imagenFinal"></div>
    </div>
  </div>`;
divAcordeon.innerHTML = escuelaHTML;

for(var b=0;b<nnaEscuelaData.length;b++){
  document.getElementById("content-escuela"+b).style.opacity= 0;
}


/*--------------------funcionalidad del acordeon--------------------*/
let accordions = document.querySelectorAll(".item");
accordions.forEach((element) => {  
  element.querySelector(".tituloHistoria").addEventListener("click", () => {toggleAccordion(element);});
});

function toggleAccordion(element) {  
  var posicion= element.id;   
  let isActive = element.classList.contains("active");
  for(var a=0;a<nnaEscuelaData.length;a++){
    toggleVideo('pause','video'+a);    
    $('#accordion'+a).removeClass('open');
    document.getElementById("accordion"+a).style.paddingBottom = "0px";
    document.getElementById("content-escuela"+a).style.opacity= 0;
    document.getElementById("accordion__icon"+a).style.transform = "rotate(0deg)";
  }
 
  if (isActive) {                   
    element.classList.remove("active");    
    $('#accordion'+posicion).click(function() {$('#accordion'+posicion).removeClass('open');})    
    document.getElementById("accordion"+element.id).style.paddingBottom = "0px";
    document.getElementById("content-escuela"+element.id).style.opacity= 0;    
    document.getElementById("accordion__icon"+element.id).style.transform = "rotate(0deg)";
  } 
  else 
  {      
    element.classList.add("active");
    $('#accordion'+posicion).click(function() {$(this).toggleClass('open');})
    var box = document.querySelector('.contenHistori'+element.id);    
    document.getElementById("accordion"+element.id).style.paddingBottom = (box.offsetHeight + inicio.distancia)+"px";
    document.getElementById("content-escuela"+element.id).style.opacity= 1;
    document.getElementById("accordion__icon"+element.id).style.transform = "rotate(-180deg)";
    
  }
  
}

function toggleVideo(state,video) {
  var div = document.getElementById(video);
  var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
  func = state == 'pause' ? 'pauseVideo' : 'playVideo';
  iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');

}
