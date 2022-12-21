var tope=0;
var int;
document.addEventListener("DOMContentLoaded", function(e) {    
    intervalo();
});

 function ver(){
     let contenedor = document.querySelector('.contenedor-dibujo');
     contenedor.classList.add('nover');
     tope++;
     if(tope>0){
         window.clearTimeout(int);
         int= '';
     }
 }

window.addEventListener('resize',function(event){
    let contenedor = document.querySelector('.contenedor-dibujo');
    contenedor.classList.remove('nover');
    intervalo();
});
document.addEventListener('scroll', function(e){
    ver();
});
function intervalo() { 
    int = window.setTimeout('ver()',5000);
}
