//arreglar boton a viva voz
var regex = /(\d+)/g;
const node = document.getElementById("aVivaVoz");
if(node){
  const list = document.getElementById("visibles");
  list.insertBefore(node, list.children[0]);
  const string = document.getElementById("aVivaVozModalId").innerHTML;
  const texto = string.match(regex);
  document.getElementById("aVivaVozReferencia").setAttribute("data-nid", texto);
}

//descargar capitulo PDF
const nodePdf = document.getElementById("descargarCapituloPdf");
if(nodePdf){ 
  const string = document.getElementById("descargarCapituloPdfId").innerHTML;
  const texto = string.match(regex);
  document.getElementById("descargarCapituloPdfReferencia").setAttribute("data-nid", texto);
}
//anexos
const nodeane = document.getElementById("anexosCopia");
if(nodeane){ 
  const list = document.getElementById("anexosReferencia");
  list.insertBefore(nodeane, list.children[0]);
  const nodename = document.getElementById("anexosNombre");
  const list2 = document.getElementById("anexosCopia");
  list2.insertBefore(nodename, list2.children[0]);
}

// Enlaces anexos
const enlaceAnexos = document.getElementById("anexos");
if(enlaceAnexos){ 
  const textoEnlace = document.getElementById("enlaceAnexoSeccionId").innerHTML;
  document.getElementById("enlaceAnexoSeccion").setAttribute("href", textoEnlace);
}

// Enlaces casos
const enlaceCasos = document.getElementById("casos");
if(enlaceCasos){ 
  const textoEnlace = document.getElementById("enlaceCasosSeccionId").innerHTML;
  document.getElementById("enlaceCasos").setAttribute("href", textoEnlace);
}

// Enlaces frente al espejo
const frenteAlEspejo = document.getElementById("frente-al-espejo");
if(frenteAlEspejo){ 
  const nidFrenteAlEspejo = document.getElementById("frenteAlEspejoId").innerHTML;
  const texto = nidFrenteAlEspejo.match(regex);
  document.getElementById("frenteAlEspejoReferencia").setAttribute("data-nid", texto);
}


//descargables
const nodedes = document.getElementById("descargablesCopia");
if(nodedes){ 
  const list = document.getElementById("descargablesReferencia");
  list.insertBefore(nodedes, list.children[0]);
  const nodedesname = document.getElementById("descargablesNombre");
  const list2 = document.getElementById("descargablesCopia");
  list2.insertBefore(nodedesname, list2.children[0]);
}
//copiar
var clipboard = new ClipboardJS('.copy-clipboard');
clipboard.on('success', function(e) {
  setTimeout(function() {
    jQuery("[data-bs-toggle='popover']").popover('hide'); 
  },1000);
  e.clearSelection();
});

clipboard.on('error', function(e) {
  console.error('Action:', e.action);
  console.error('Trigger:', e.trigger);
});

// cambiar a modo oscuro

jQuery("body").on("click", '.grayscale', function (e) { 
  //var cuerpoweb = document.body;
  //cuerpoweb.classList.toggle("oscuro");
  jQuery('head').append('<link rel="stylesheet" href="/themes/custom/cevtheme/botonera/css/styleGray.css" type="text/css" id="contraste-link" />');
  document.querySelector('.colores').style.display = '';
  this.style.display = 'none';
});
jQuery("body").on("click", '.colores', function (e) { 
  jQuery('head').find('link#contraste-link').remove();
  document.querySelector('.grayscale').style.display = '';
  this.style.display = 'none';
});

//cambiar letra
jQuery("body").on("click", '.cambiar_letra_grande', function (e) { 
  var cuerpoweb = document.body; 
  //cuerpoweb.classList.toggle("letraGrande"); 
  e.preventDefault();
		var curSize= parseInt(jQuery('html').css('font-size')) + 2;
    var anchoActual = jQuery('.leyenda .x-share-button-btn').width();
    
		if(curSize<=24) {
      jQuery('.leyenda .x-share-button-btn').width(anchoActual + 20);
			jQuery('html').css('font-size', curSize);
		}
});
jQuery("body").on("click", '.cambiar_letra_pequenia', function (e) {    
  e.preventDefault();
  var curSize= parseInt(jQuery('html').css('font-size')) - 2;
  var anchoActual = jQuery('.leyenda .x-share-button-btn').width();
  if(curSize>=10) {
    jQuery('html').css('font-size', curSize);
    jQuery('.leyenda .x-share-button-btn').width(anchoActual - 20);
  }
})

