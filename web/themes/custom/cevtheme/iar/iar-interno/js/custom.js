jQuery('.aside-button').on('click', function(){
  jQuery(this).toggleClass('showing')
  jQuery('aside').toggleClass('show')
})


jQuery('html , body').on('click', function(){
  jQuery('.aside-button').removeClass('showing')
  jQuery('aside').removeClass('show')
})

jQuery(".aside-button").on("click", function (e) {
e.stopPropagation();
});
const hideScroll = () => jQuery('.mouse-scroll-container').fadeOut(300);
  jQuery(document).on('scroll', function (e) {
    hideScroll();
  })
  jQuery('.row-container').on('scroll', function (e) {
    hideScroll();
  })

// Carrusoel Los cuidados de la vida

jQuery(document).ready(function () {
jQuery('#items-carousel-cuidados').slick({
  dots: true,
  arrows: false,
  infinite: false,
  mobileFirst: true,
  centerMode: true,
  responsive: [{
      breakpoint: 1024,
      settings: "unslick"
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '100px',
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesPerRow: 1,
        centerPadding: '10px',
      }
    }
  ]
});
});

jQuery('#items-carousel-cuidados').on('init', function () {
jQuery(this).removeClass('d-none')
});



// carrusel Directo

jQuery(document).ready(function () {
  jQuery('#items-carousel-directo').slick({
    dots: true,
    mobileFirst: true,
    infinite: true,
    arrows: false,
    centerMode: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: 0,
          arrows: true,
          dots: true,
          //infinite: false,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          centerPadding: 0,
          //infinite: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
          centerPadding: '10px',
        }
      }
    ]
  });
  })
  
  jQuery('#items-carousel-directo').on('init', function () {
  jQuery(this).removeClass('d-none')
  });
  

// carrusel Oruga

jQuery(document).ready(function () {
  jQuery('#items-carousel-oruga').slick({
    dots: true,
    mobileFirst: true,
    infinite: true,
    arrows: false,
    centerMode: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: 0,
          arrows: true,
          dots: true,
          //infinite: false,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          centerPadding: 0,
          //infinite: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
          centerPadding: '10px',
        }
      }
    ]
  });
  })
  
  jQuery('#items-carousel-oruga').on('init', function () {
  jQuery(this).removeClass('d-none')
  });


// Carusel Impactos a la naturaleza

jQuery(document).ready(function () {
jQuery('#documental-videos-impactos').slick({
  dots: true,
        mobileFirst: true,
        infinite: false,
        arrows: false,
        centerMode: true,
        responsive: [{
            breakpoint: 760,
            settings: 'unslick',
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              slidesPerRow: 1,
              centerPadding: '10px',
            }
          }
        ]
      });
    });

jQuery('#documental-videos-impactos').on('init', function () {
jQuery(this).removeClass('d-none')
});

jQuery(document).ready(function () {
  jQuery('#documental-videos').slick({
    dots: true,
    mobileFirst: true,
    infinite: false,
    arrows: false,
    centerMode: true,
    responsive: [{
        breakpoint: 760,
        settings: 'unslick',
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          slidesPerRow: 1,
          centerPadding: '10px',
        }
      }
    ]
  });
});

jQuery('#items-carousel-impactos-directos').slick({
arrows: false,
dots: true,
infinite: false,
mobileFirst: true,
centerMode: true,
responsive: [{
    breakpoint: 760,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: false,
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '10px',
    }
  }
]
});
/*
const hideScroll = () => jQuery('.mouse-scroll-container').fadeOut(300)
jQuery(document).on('scroll', function (e) {
hideScroll()
})*/

jQuery('.row-container').on('scroll', function (e) {
hideScroll()
})



//modificación modal 
jQuery("body").on("click", ".modal_cev", function (e) {
e.preventDefault();
var infoModal = jQuery("#modalInfoCev");
var clase = jQuery(this).data("class");

if(infoModal.hasClass("internas-iar")){
  infoModal.removeClass("internas-iar"); 
}
infoModal.addClass(clase);

});