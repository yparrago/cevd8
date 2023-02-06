document.addEventListener('DOMContentLoaded', function () {
    // car_u_sel();
    var cardsRegion = document.querySelectorAll('.card');
    for (var i = 0; i < cardsRegion.length; i++) {
        cardsRegion[i].addEventListener('mouseenter', entradaCard);
        cardsRegion[i].addEventListener('mouseleave', salidaCard);
    }
})

function car_u_sel() {
    let items = document.querySelectorAll('#carruselPPal .carousel-item')

    items.forEach((el) => {
        const minPerSlide = 3
        let next = el.nextElementSibling
        for (var i=1; i<minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
              }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })

}

window.onresize = function () {
    car_u_sel();
}
function entradaCard() {
    switch (this.classList[1]) {
        case 'region1':
            document.getElementById('amazonia').classList.add('region1');
            break;
        case 'region2':
            document.getElementById('orinoquia').classList.add('region1');
            break;
        case 'region3':
            document.getElementById('frontera').classList.add('region1');
            break;
        case 'region4':
            document.getElementById('centro').classList.add('region1');
            break;
        case 'region5':
            document.getElementById('dinamicas').classList.add('region1');
            break;
        case 'region6':
            document.getElementById('magdalenamedio').classList.add('region1');
            break;
        case 'region7':
            document.getElementById('caribe').classList.add('region1');
            break;
        case 'region8':
            document.getElementById('antioquia').classList.add('region1');
            break;
        case 'region9':
            document.getElementById('choco').classList.add('region1');
            break;
        case 'region10':
            document.getElementById('valle').classList.add('region1');
            break;
        case 'region11':
            document.getElementById('narino').classList.add('region1');
            break;
        case 'region12':
            document.getElementById('').classList.add('region1');
            break;
        default: console.log('region no inicializada');
    }
}
function salidaCard() {
    switch (this.classList[1]) {
        case 'region1':
            document.getElementById('amazonia').classList.remove('region1');
            break;
        case 'region2':
            document.getElementById('orinoquia').classList.remove('region1');
            break;
        case 'region3':
            document.getElementById('frontera').classList.remove('region1');
            break;
        case 'region4':
            document.getElementById('centro').classList.remove('region1');
            break;
        case 'region5':
            document.getElementById('dinamicas').classList.remove('region1');
            break;
        case 'region6':
            document.getElementById('magdalenamedio').classList.remove('region1');
            break;
        case 'region7':
            document.getElementById('caribe').classList.remove('region1');
            break;
        case 'region8':
            document.getElementById('antioquia').classList.remove('region1');
            break;
        case 'region9':
            document.getElementById('choco').classList.remove('region1');
            break;
        case 'region10':
            document.getElementById('valle').classList.remove('region1');
            break;
        case 'region11':
            document.getElementById('narino').classList.remove('region1');
            break;
        case 'region12':
            document.getElementById('').classList.remove('region1');
            break;
        default: console.log('region no inicializada');
    }
}



// jQuery('.multi-item-carousel').carousel({
//     interval: false
//   });
  
// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
jQuery('.multi-item-carousel .carousel-item').each(function(){
var next = jQuery(this).next();
if (!next.length) {
    next = jQuery(this).siblings(':first');
}
next.children(':first-child').clone().appendTo(jQuery(this));

if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo(jQuery(this));
} else {
    jQuery(this).siblings(':first').children(':first-child').clone().appendTo(jQuery(this));
}
});