var tope=0;
var int;
document.addEventListener("DOMContentLoaded", function(e) {
    intervalo();
});

function ver(){
    let contenedor = document.querySelector('.contenedor-dibujo');
    if(contenedor != null){
        if(contenedor.classList.contains('nover')){
            contenedor.classList.remove('nover');   
         }
         contenedor.classList.add('nover');
         tope++;
         if(tope>0){
             window.clearTimeout(int);
             int= '';
         }
    }
    
   
}

window.addEventListener('resize',function(event){
    let contenedor = document.querySelector('.contenedor-dibujo');
    if(contenedor != null){
        contenedor.classList.remove('nover');
        intervalo();
    }
});

document.addEventListener('scroll', function(e){
    ver();
});

function intervalo() { 
    int = window.setTimeout('ver()',2500);
}
