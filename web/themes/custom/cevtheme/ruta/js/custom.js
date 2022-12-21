var timestamp = new Date().getTime();

var image = document.getElementById("reload-img");

image.src =
  "https://intuitionagencia.com/salas/ruta-de-investigacion/img/logo-paz.svg?t=" +
  timestamp;

jQuery(".more-info").on("click", function () {
  jQuery(this).parent().parent().next(".full-info").toggleClass("show-info");

  jQuery(
    ".story-inner-slider-controls , .circle-pagination-container , .aside-button"
  ).toggleClass("hide");
});

jQuery(".close-info").on("click", function () {
  jQuery(this).parent().removeClass("show-info");

  jQuery(
    ".story-inner-slider-controls , .circle-pagination-container , .aside-button"
  ).removeClass("hide");
});

jQuery(".full-info").hover(
  function () {
    swiperpage.mousewheel.disable();
  },

  function () {
    swiperpage.mousewheel.enable();
  }
);

jQuery(".aside-button").on("click", function () {
  jQuery(this).toggleClass("showing");

  jQuery("aside").toggleClass("show");
});

jQuery("html , body").on("click", function () {
  jQuery(".aside-button").removeClass("showing");

  jQuery("aside").removeClass("show");
});

jQuery(".aside-button").on("click", function (e) {
  e.stopPropagation();
});

jQuery("#button-detachable").on("click", function () {
  jQuery("#text-detachable").toggleClass("height-detachable");
});

jQuery('.button-item button').click(function() {
  const nid = jQuery(this).data("modal-nid");
  const modal = !!nid && jQuery(`.modal_cev[data-nid=${nid}]`);
  if (modal) {
    modal.modal("show");
    modal.find('[data-bs-dismiss="modal"]').click(() => {
      modal.modal("hide");
    });
  }
})

/*iconos*/
var sclink = document.querySelectorAll('.section-link');
for(var i=0; i< sclink.length; i++){
  sclink[i].addEventListener('click', function(){
    /*retirar activo */
    var sclink2 = document.querySelectorAll('.section-link');
    for(var j=0; j<sclink2.length;j++){
      sclink2[j].classList.remove('active');
    }
    this.classList.add('active');
  })
}
gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".sec").forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      end:'bottom 50%',
      toggleClass:'seccion-Activa',
      onToggle: self => verActivo()
    });
  });
function verActivo(){
  var itemActivo = document.querySelector('.seccion-Activa');
  var linksIndicadores = document.querySelectorAll('.section-link');
  for(var i=0; i< linksIndicadores.length; i++){
    linksIndicadores[i].classList.remove('active');
  }
  var cadena = "[data-scroll='"+itemActivo.id+"']";
  var item = document.querySelector(cadena);
  item.classList.add('active');
}
 