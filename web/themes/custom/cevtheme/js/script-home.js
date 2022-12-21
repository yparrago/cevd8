
jQuery(function ($) {
  etiquetas();
})
if (window.matchMedia("(min-width: 768px)").matches) {
jQuery(".choice").on("click", function () {
  jQuery(".choice").addClass("small");
  jQuery(this).addClass("mismo");

  if (this.classList.contains('mismo')) {
    if (this.classList.contains('expand')) {
      jQuery(this).addClass("small");
      jQuery(this).removeClass("expand");
    } else {
      jQuery(this).addClass("expand");
      jQuery(this).removeClass("small");
    }
  } else {
    jQuery(this).addClass("expand");
    jQuery(this).removeClass("small");
  }
  jQuery('.thumbnail.choice.mismo.expand.small').removeClass("mismo expand");


  setTimeout(function () { ver(this); }, 1000);

  this.children[0].children[0].children[0].style.width = '50%';
  this.children[0].children[0].children[1].style.width = '50%';
  this.children[0].children[0].children[0].style.visibility = 'visible';
  this.children[0].children[0].children[0].style.display = '';
  this.children[0].children[0].children[0].children[0].style.opacity = '1';

  var etiquetasNo = document.querySelectorAll('.thumbnail.choice.small');
  for (var i = 0; i < etiquetasNo.length; i++) {
    etiquetasNo[i].children[0].children[0].children[0].style.visibility = 'hidden';
    etiquetasNo[i].children[0].children[0].children[0].style.display = 'none';
    etiquetasNo[i].children[0].children[0].children[0].children[0].style.opacity = '0';
    etiquetasNo[i].children[0].children[0].children[0].style.width = '0%';
    etiquetasNo[i].children[0].children[0].children[1].style.width = '100%';
  }

}
);
}
function ver(valor) {
  console.log(valor, 'si');
  //this.children[0].childNodes[1].children[0].childNodes[3].animate([{opacity:'1'}],[{duration:'1000'}])
}



function boton(valor) {
  console.log(valor.id);
}


window.addEventListener('resize', function (event) { menulateral(screen.width); });


function menulateral(valor) {
  let comple = 1;
  jQuery('#btnMenu').click(function () {
    jQuery('#navbarNav').animate({
      left: '0'
    });
  });
  if (valor < 768) {
    if (comple === 1) {
      jQuery('#navbarNav').animate({
        left: '0'
      });
      comple = 0;
    } else {
      jQuery('#navbarNav').animate({
        left: '-100%'
      });
      comple = 1
    }
  }
}
// scroll
if (window.matchMedia("(min-width: 768px)").matches) {
  gsap.registerPlugin(ScrollTrigger);

  const sections = gsap.utils.toArray(".thumbnail");
  let maxWidth = 0;

  const getMaxWidth = () => {
    maxWidth = 0;
    sections.forEach((section) => {
      if (screen.width > 768) {
        maxWidth += (section.offsetWidth + 10);
      } else if (screen.width > 500) {
        maxWidth += (section.offsetWidth + 20);
      } else {
        maxWidth += (section.offsetWidth + 70);
      }
    });
  };
  getMaxWidth();
  ScrollTrigger.addEventListener("refreshInit", getMaxWidth);
  var contenedor = document.querySelector('.container2');
  var wrap = document.querySelector('.wrapper');
  var trigger = null;

  wrap.style.width = (maxWidth * 2) + 'px';
  trigger = contenedor;

  gsap.to(sections, {
    x: () => `-${maxWidth - window.innerWidth}`,
    ease: "none",
    scrollTrigger: {
      trigger: trigger,
      pin: true,
      scrub: true,
      snap: 1 / (sections.length - 1),
      end: () => `+=${maxWidth}`,
      invalidateOnRefresh: true
    }
  });
}

// sections.forEach((sct, i) => {
//   ScrollTrigger.create({
//     trigger: sct,
//     markers:true,
//     //start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth/2) * (maxWidth / (maxWidth - window.innerWidth)),
//     //end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
//     toggleClass: {targets: sct, className: "active"}
//   });
// });


function etiquetas() {
  menulateral(screen.width);
  var etiquetas = document.querySelectorAll('.card-body .row');

  for (let i = 0; i < etiquetas.length; i++) {
    etiquetas[i].children[0].style.display = 'none';
    etiquetas[i].children[1].style.width = '100%';
  }
}

jQuery(document).ready(function () {
  jQuery('[data-bs-toggle="popover"]').popover({
    html: true
  }).on("focus", function () {
    jQuery(this).popover("show");
  }).on("focusout", function () {
    var _this = this;
    if (!jQuery(".popover:hover").length) {
      jQuery(this).popover("hide");
    } else {
      jQuery('.popover').mouseleave(function () {
        jQuery(_this).popover("hide");
        jQuery(this).off('mouseleave');
      });
    }
  }).on('show.bs.popover', function () {
    setTimeout(linkPopover, 100);
  });
});

function linkPopover() {
  var enlaces = document.querySelectorAll('.enlacepopover');
  for (var i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener('click', function () {
      alert(this.id);
    })
  }
}