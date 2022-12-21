var tarjeta = document.querySelectorAll('.card');
var check = document.querySelectorAll('input[type=checkbox]');
for(var i=0; i<check.length; i++){
    check[i].addEventListener('change', function(e){
        if(this.id == 'check1'){
            if(this.checked){
                color(this.id);
    
            }else{
                noColor(this.id);
            }

        }
        if(this.id == 'check2'){
            if(this.checked){
                color(this.id);
    
            }else{
                noColor(this.id);
            }

        }
        if(this.id == 'check3'){
            if(this.checked){
                color(this.id);
    
            }else{
                noColor(this.id);
            }

        }
        if(this.id == 'check4'){
            if(this.checked){
                color(this.id);
    
            }else{
                noColor(this.id);
            }

        }
        if(this.id == 'check5'){
            if(this.checked){
                color(this.id);
    
            }else{
                noColor(this.id);
            }

        }
        if(this.id == 'check6'){
            if(this.checked){
                color(this.id);
    
            }else{
                noColor(this.id);
            }

        }
        if(this.id == 'check7'){
            if(this.checked){
                color(this.id);
    
            }else{
                noColor(this.id);
            }

        }
       
    })
}

function color(valor){
    if(valor == 'check1'){
        var imagen1 = document.querySelectorAll('.unoCard');
        for(var i =0; i < imagen1.length; i++){
            imagen1[i].classList.toggle('filtro1');
            imagen1[i].children[2].classList.toggle('car-ver');
        }

    }
    if(valor == 'check2'){
        var imagen1 = document.querySelectorAll('.dosCard');
        for(var i =0; i < imagen1.length; i++){
            imagen1[i].classList.toggle('filtro2');
            imagen1[i].children[2].classList.toggle('car-ver');
        }

    }
    if(valor == 'check3'){
        var imagen1 = document.querySelectorAll('.tresCard');
        for(var i =0; i < imagen1.length; i++){
            imagen1[i].classList.toggle('filtro3');
            imagen1[i].children[2].classList.toggle('car-ver');
        }
    }
    if(valor == 'check4'){
        var imagen1 = document.querySelectorAll('.cuatroCard');
        for(var i =0; i < imagen1.length; i++){
            imagen1[i].classList.toggle('filtro4');
            imagen1[i].children[2].classList.toggle('car-ver');
        }
    }
    if(valor == 'check5'){
        var imagen1 = document.querySelectorAll('.cincoCard');
        for(var i =0; i < imagen1.length; i++){
            imagen1[i].classList.toggle('filtro5');
            imagen1[i].children[2].classList.toggle('car-ver');
        }
    }
    if(valor == 'check6'){
        var imagen1 = document.querySelectorAll('.seisCard');
        for(var i =0; i < imagen1.length; i++){
            imagen1[i].classList.toggle('filtro6');
            imagen1[i].children[2].classList.toggle('car-ver');
        }
    }
    if(valor == 'check7'){
        var imagen1 = document.querySelectorAll('.sieteCard');
        for(var i =0; i < imagen1.length; i++){
            imagen1[i].classList.toggle('filtro7');
            imagen1[i].children[2].classList.toggle('car-ver');
        }
    }
}
function noColor(valor){
    if(valor == 'check1'){
        var imagen1 = document.querySelectorAll('.unoCard');
        for(var i =0; i < imagen1.length; i++){
            imagen1[i].classList.toggle('filtro1');
            imagen1[i].children[2].classList.toggle('car-ver');
        }
    }
    if(valor == 'check2'){
        var imagen1 = document.querySelectorAll('.dosCard');
        for(var i =0; i < imagen1.length; i++){
            imagen1[i].classList.toggle('filtro2');
            imagen1[i].children[2].classList.toggle('car-ver');
        }

    }
    if(valor == 'check3'){
        var imagen1 = document.querySelectorAll('.tresCard');
        for(var i =0; i < imagen1.length; i++){
            imagen1[i].classList.toggle('filtro3');
            imagen1[i].children[2].classList.toggle('car-ver');
        }
    }
    if(valor == 'check4'){
        var imagen1 = document.querySelectorAll('.cuatroCard');
        for(var i =0; i < imagen1.length; i++){
            imagen1[i].classList.toggle('filtro4');
            imagen1[i].children[2].classList.toggle('car-ver');
        }
    }
    if(valor == 'check5'){
        var imagen1 = document.querySelectorAll('.cincoCard');
        for(var i =0; i < imagen1.length; i++){
            imagen1[i].classList.toggle('filtro5');
            imagen1[i].children[2].classList.toggle('car-ver');
        }
    }
    if(valor == 'check6'){
        var imagen1 = document.querySelectorAll('.seisCard');
        for(var i =0; i < imagen1.length; i++){
            imagen1[i].classList.toggle('filtro6');
            imagen1[i].children[2].classList.toggle('car-ver');
        }
    }
    if(valor == 'check7'){
        var imagen1 = document.querySelectorAll('.sieteCard');
        for(var i =0; i < imagen1.length; i++){
            imagen1[i].classList.toggle('filtro7');
            imagen1[i].children[2].classList.toggle('car-ver');
        }
    }
}

var btnCerrar  = document.querySelectorAll('.cerrarCard');
for(var i  = 0; i < btnCerrar.length; i++){
    btnCerrar[i].addEventListener('click', function(e){
        var btnC = document.querySelector('.cardImagenHover');
        if(btnC.classList.contains('cardImagenHover')){
            btnC.classList.remove('cardImagenHover');
            btnC.classList.add('cerrado');
        }

    });
}
document.addEventListener("DOMContentLoaded", selectores());
window.addEventListener("resize",function(){
    selectores();
});

function selectores(){
    var selMovil = document.getElementById('navBarprensa-movil');
    var selDesktop = document.getElementById('navBarprensa-desktop');
    var listItemMovil = document.querySelectorAll('.listidsMovil');
    var listItemDescktop = document.querySelectorAll('.listidsDescktop');
    if(screen.width > 765){
        selMovil.classList.add('d-none');
        selDesktop.classList.remove('d-none');
        for(var i=0; i< listItemDescktop.length; i++){
            listItemDescktop[i].classList.remove('d-none');
            listItemMovil[i].classList.add('d-none');
        }
    }else{
        selMovil.classList.remove('d-none');
        selDesktop.classList.add('d-none');
        for(var i=0; i< listItemDescktop.length; i++){
            listItemMovil[i].classList.remove('d-none');
            listItemDescktop[i].classList.add('d-none');
        }
    }
}