

$(".choice").on("click", function(){
    $(".choice").removeClass("expand unset");
    $(".choice").addClass("small");
    $(this).removeClass("small");
    $(this).addClass("expand");
    setTimeout(function(){ver(this);},1000);
   
    var etiqueta = document.querySelectorAll('div.expand  .card-body .row > .col-6');
     etiqueta[0].style.display = '';
     etiqueta[0].children[0].style.opacity ='1';
     etiqueta[0].style= 'z-index:1;';
     etiqueta[1].style.width ='50%';
    var etiquetasNo = document.querySelectorAll('.small .card-body .row .col-6');
    for(var i = 0; i < etiquetasNo.length; i++){
      
       if(etiquetasNo[i].style.display == '' && etiquetasNo[i+1].style.width == '50%'){
          etiquetasNo[i].style.display = 'none';
          etiquetasNo[i+1].style.width = '100%';
       }
    }
    
  }
);
function ver(valor){
  // console.log(valor,'si');
  //this.children[0].childNodes[1].children[0].childNodes[3].animate([{opacity:'1'}],[{duration:'1000'}])
}


function boton(valor){
  // console.log(valor.id);
}



// NOTE:
// scrollTo-functionality corrected on June 9th, 2021
// panelsSection.offsetTop exchanged with panelsSection.parentElement.offsetTop
const scroll = document.querySelectorAll('.thumbnail');
var wh = document.querySelector('.container2').offsetWidth;
var total =0;
for(let i= 0; i<scroll.length;i++){
  total += scroll[i].clientWidth;

}

// if(wh <=360){
//   wh = wh+850;
// }else if(wh < 360){
//   wh = 3600-wh;
// }else if(wh <=550){
//   wh = wh + 1200;
// }else if(wh <=720){
//   wh = wh+1900;
// }else if(wh <=760){
//   wh = wh+2900;
// }else if(wh <= 960){
//   wh = wh+2550;
// }else if(wh > 960){
//   wh =3350-wh;
// }

//wh=wh+1250;


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

//const scrubValue = true;
const scrubValue = 0.5;

let container = document.querySelector('.wrapper');
//var container = document.querySelector('.wrapper');

// const scrollBar = gsap.to('.scrollbar', { x: () => { return window.innerWidth - (150 + 20) }, ease: "none" })

// ScrollTrigger.create({
//   trigger: container,
//   start: "top top",
//   end:total,
//   pinSpacing:false,
//   pin: false,
//   anticipatePin: 1,
//   scrub: scrubValue,
//   invalidateOnRefresh: true,
// })
gsap.to(container,{
  xPercent: -100*(container.length -1),
  ease:'none',
  scrollTrigger:{
    trigger:'.container2',
    pin:true,
    scrub:1,
    snap:1/(container.length-1),
    end:()=>"+="+ (wh*10)
  }
});



let thumbNails = gsap.utils.toArray(".thumbnail");

thumbNails.forEach((thumb, i) => {

  if (thumb.classList.contains('fakePin')) {

    function prevAll(element) {
      var result = [];

      while (element = element.previousElementSibling)
        result.push(element);
      return result;
    }    

    // console.log(prevAll(thumb))

    var totalWidthToMove;

    function getTotalWidthToMove() {

      totalWidthToMove = 0;

      prevAll(thumb).forEach((thumbBefore, i) => {

        let style = thumbBefore.currentStyle || window.getComputedStyle(thumbBefore);      
        let marginRight = parseInt(style.marginRight);

        totalWidthToMove += thumbBefore.offsetWidth + marginRight;

      });    

      return totalWidthToMove;

    }
    //getTotalWidthToMove();    
    //console.log(totalWidthToMove)

    gsap.to(thumb, {
      x: () => { return - getTotalWidthToMove() },
      ease: "none",
      scrollTrigger: {
        trigger: ".wrapper",
        start: 'top top',
        scrub: scrubValue,
        invalidateOnRefresh: true,
        end: () => "+=" + getTotalWidthToMove(),
      }
    });

  }
  else {

    gsap.to(thumb, {
      x: () => { return - (container.scrollWidth) },
      ease: "none",
      scrollTrigger: {
        trigger: ".wrapper",
        start: 'top top',
        scrub: scrubValue,
        invalidateOnRefresh: true,
        end: () => "+=" + (container.scrollWidth),
      }
    });

  }

  //console.log(thumb.offsetWidth)

});

/* Main navigation */
const panelsSection = document.querySelector(".container");

document.querySelectorAll(".anchor").forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    e.preventDefault();

    const targetElem = document.querySelector(e.target.getAttribute("href"));

//    if(e.target.getAttribute("href").slice(9) === 'inner') {
//      containerOffset = panelsSection.parentElement.offsetTop + targetElem.parentElement.offsetLeft + targetElem.offsetLeft;
//    }
//    else {
//      containerOffset = panelsSection.parentElement.offsetTop + targetElem.offsetLeft - 10;
//    }
        
    const containerOffset = e.target.getAttribute("href").slice(9) === 'inner' ? 
          panelsSection.parentElement.offsetTop + targetElem.parentElement.offsetLeft + targetElem.offsetLeft : 
          panelsSection.parentElement.offsetTop + targetElem.offsetLeft - 10;
      
    gsap.to(window, {
      scrollTo: {
        y: containerOffset,
        autoKill: false
      },
      duration: 1
    });

  });

}); 