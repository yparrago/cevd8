var columnas = document.querySelectorAll('.columnas');
for(var i=0; i< columnas.length; i++){
    columnas[i].addEventListener('click', function(){
        this.children[0].classList.toggle('nover');
        this.children[1].classList.toggle('contenidoShow');
    })
}