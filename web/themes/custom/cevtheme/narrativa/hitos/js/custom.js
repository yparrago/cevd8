//ubicar elementos donde corresponden
//galeria de fondo
const contenedoresNodos = Array.from(document.querySelectorAll('.contenedor'))
contenedoresNodos.forEach(contenedor => {
  const list = contenedor.querySelector(".galeriaCopia");
  const nodosReversa = Array.from(contenedor.querySelectorAll('.galeriaReferencia'))
  const nodos = nodosReversa.reverse();
  nodos.forEach(nodo => {
    list.insertBefore(nodo, list.children[0]);
  });
  const list2 = contenedor.querySelector("#slides-info");
  const nodos1Reversa = Array.from(contenedor.querySelectorAll('#full-info-copia'));
  const nodos1 = nodos1Reversa.reverse();
  nodos1.forEach(nodo => {
    list2.insertBefore(nodo, list2.children[0]);
  });
});
//etiquetas poner al primero
const node0 = document.getElementById("etiquetas");
if (node0) {
  const list1 = document.getElementById("etiquetasCopia");
  list1.insertBefore(node0, list1.children[0]);
  list1.classList.remove('hidden');
}
//capitulos siguientes poner primero
const node1 = document.getElementById("story-line-referencia");
if (node1) {
  const list1 = document.getElementsByClassName("story-line-copia");
  listsize = list1.length - 1;
  list1[listsize].insertBefore(node1, list1[listsize].children[0]);
  list1[listsize].classList.remove('hidden');
}


//audio
function escucharAudio() {
  canPlay = !canPlay;
  if (canPlay == true) {
    icono_audio.classList.remove("icon-audio-off");
    icono_audio.classList.add("icon-paisaje-sonoro");
    id_audio.muted = true;
    id_audio.pause();
  } else {
    icono_audio.classList.remove("icon-paisaje-sonoro");
    icono_audio.classList.add("icon-audio-off");
    id_audio.muted = false;
    id_audio.volume = 0.5;
    id_audio.play();
  }
}
icono_audio = document.getElementById("id_nhito_icono_audio");
jQuery("body").on("click", ".btn-music", function (e) { console.log("llegue"); escucharAudio(); });



canPlay = true;
id_audio = document.getElementById("id_nhito_audio");
id_source_audio = document.getElementById("id_nhito_source_audio");





//script de hitos
jQuery(function ($) {
  // swiper de todos los paneles
  var count = 0;
  const allAttributes = $(".page-swiper >.swiper-wrapper >.swiper-slide").map(function () {
    return $(this).data("slidename");
  }).toArray();

  var menu = allAttributes;

  var swiperpage = new Swiper(".page-swiper", {
    direction: "vertical",
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
      el: ".circle-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        if (index == 0) $('.slider-names span').text(menu[index])
        return '<span class="' + className + '" title="' + (menu[index]) + '"></span>';
      },

    },

    navigation: {
      nextEl: ".page-arrows .next",
      prevEl: ".page-arrows .prev",
    },
    on: {
      slideChange: (sw) => {
        removerInfo();
        $('.circle-pagination').css({ 'transform': 'rotate(-' + (30 * sw.realIndex) + 'deg)' })
        $('.slider-names span').text(menu[sw.realIndex])
      }
    },

    breakpoints: {
      768: {
        allowTouchMove: false,
      }
    }

  });

  //abrir modal
  $('.disclaimer-btn').on('click', function () {
    var modalName = $(this).data('modal-id');
    $('#' + modalName).addClass('show-disclaimer')
  })

  //cerrar modal
  $('.close-disclaimer').on('click', function () {
    $(this).parent().parent().removeClass('show-disclaimer')
  })


  var swiper = new Swiper(".story-inner-slider", {
    slidesPerView: 1,
    allowTouchMove: true,
    navigation: {
      nextEl: ".story-inner-slider-controls .next",
      prevEl: ".story-inner-slider-controls .prev",
    }

  });


  //galeria normal
  var galleryswiper = new Swiper(".gallery-slider", {
    preventClicksPropagation: false,
    pagination: {
      el: ".gallery-pagination",
      clickable: true,
    },

    breakpoints: {
      991: {
        slidesPerView: 2.6,
      },
      768: {
        slidesPerView: 2,
      },
      100: {
        slidesPerView: 1,
      }
    }
  });


  // galeria fondo
  /*var ppswiper = new Swiper(".pp-slider", {
    slidesPerView: 1,
    allowTouchMove: false,
    navigation: {
      nextEl: ".pp-controls .next",
      prevEl: ".pp-controls .prev",
    },
    on: {
      slideChange: (sw) => {
        removerInfo();
      }
    }
  });*/

  // Se inicializan galerías dinámicamente
  var galeriasImagenesBack = Array.from(document.querySelectorAll('.pp-slider'));
  galeriasImagenesBack.forEach(galeriaImagen => {
    let attributeValue = galeriaImagen.getAttribute("data-galeria-id");
    
    
    var mininfoswiper = new Swiper("#galeria-info-" + attributeValue, {
      slidesPerView: 1,
      allowTouchMove: false,
      navigation: {
        nextEl: "#galeria-control-" + attributeValue + " .next",
        prevEl: "#galeria-control-" + attributeValue + " .prev",
      }
    });

    var ppswiper = new Swiper("#galeria-back-" + attributeValue, {
      slidesPerView: 1,
      allowTouchMove: false,
      navigation: {
        nextEl: "#galeria-control-" + attributeValue + " .next",
        prevEl: "#galeria-control-" + attributeValue + " .prev",
      },
      on: {
        slideChange: (sw) => {
          removerInfo();
        }
      }
    });

    /*const list = contenedor.querySelector(".galeriaCopia");
    const nodosReversa = Array.from(contenedor.querySelectorAll('.galeriaReferencia'))
    const nodos = nodosReversa.reverse();
    nodos.forEach(nodo => {
      list.insertBefore(nodo, list.children[0]);
    });
    const list2 = contenedor.querySelector("#slides-info");
    const nodos1Reversa = Array.from(contenedor.querySelectorAll('#full-info-copia'));
    const nodos1 = nodos1Reversa.reverse();
    nodos1.forEach(nodo => {
      list2.insertBefore(nodo, list2.children[0]);
    });*/
  });




  function removerInfo() {
    const informacionGaleria = Array.from(document.querySelectorAll('.show-info'));
    informacionGaleria.forEach(info => {
      info.classList.remove('show-info');
    });
  }
  $('.inside-slider').on('click', function () {
    var currentgalleryslide = (galleryswiper.clickedIndex);
    ppswiper.slideTo(currentgalleryslide, 0, true)
  })

  $('.close-pp-slider').on('click', function () {
    $('.modal_body').removeClass('show-modal');
  })



  jQuery("body").on("click", '.content-current-slide a', function (e) {
    $('.informacion-' + $(this).data('id')).toggleClass('show-info');
    $('.slides-info').toggleClass('activo');
  });

  var swiper = new Swiper(".history-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".history-arrows .next",
      prevEl: ".history-arrows .prev",
    },
    pagination: {
      el: ".history-pagination",
      clickable: true,
    },
    breakpoints: {
      991: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      100: {
        slidesPerView: 1,
      }
    }
  });

  $('.more-info').on('click', function () {
    $(this).parent().parent().next('.full-info').toggleClass('show-info');
    $('.story-inner-slider-controls , .circle-pagination-container , .aside-button').toggleClass('hide');
  })

  $('.close-info').on('click', function () {
    $(this).parent().removeClass('show-info');
    $('.slides-info').toggleClass('activo');
    $('.story-inner-slider-controls , .circle-pagination-container , .aside-button').removeClass('hide');
  })

  $('.full-info').hover(
    function () {
      swiperpage.mousewheel.disable()
    },
    function () {
      swiperpage.mousewheel.enable()
    }
  );

  $('.aside-button').on('click', function () {
    $(this).toggleClass('showing')
    $('aside').toggleClass('show')
  })



  $('html , body').on('click', function () {
    $('.aside-button').removeClass('showing')
    $('aside').removeClass('show')
  })



  $(".aside-button").on("click", function (e) {
    e.stopPropagation();
  });


  // boton ver mas
  var botonestrike = document.querySelectorAll('.button-strike');
  for (var i = 0; i < botonestrike.length; i++) {
    botonestrike[i].dataset.id = i;
    botonestrike[i].addEventListener('click', function () {
      $("body").find(".text-strike").eq($(this).data('id')).toggleClass('height-detachable');
    });
  }

  $('.pp-controls button.next').on('click', function () {
    $('.slides-info').removeClass('activo');
  });

  $('.pp-controls button.prev').on('click', function () {
    $('.slides-info').removeClass('activo');
  });


});

