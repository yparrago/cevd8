window.addEventListener('resize',function(event){carrusel(screen.width),menulateral(screen.width);});
window.addEventListener('DOMContentLoaded',function(event){carrusel(screen.width),menulateral(screen.width);});
function carrusel(valor){
    let contenedor = document.getElementById('carrusel');
    let cadena1='<div class="row"><div class="col-md-12 carrusel"><ul><li><a href="#"><img src="https://comisiondelaverdad.co/images/logo-sistema-integral-paz.png"></a></li><li><a href="https://comisiondelaverdad.co/"><img src="https://comisiondelaverdad.co/images/logo-cev-sistema-integral.svg"></a></li><li><a href="https://www.jep.gov.co"><img src="https://comisiondelaverdad.co/images/logo-jep-sistema-integral.svg"></a></li><li><a href="https://www.ubpdbusquedadesaparecidos.co"><img src="https://comisiondelaverdad.co/images/logo-ubpd-sistema-integral.svg"></a></li></ul></div></div>';
    let cadena2='<p  class="imgenes-footer" style="display: flex; align-items: center; justify-content: center; flex-wrap: nowrap;"><a href="#" rel="noopener"><img class="img-footer" src="https://comisiondelaverdad.co/images/logo-sistema-integral-paz.png" alt="logo unidad"></a><span class="separador"></span><a href="https://comisiondelaverdad.co/" target="_blank" rel="noopener"><img class="img-footer" src="https://comisiondelaverdad.co/images/logo-cev-sistema-integral.svg" alt="logo unidad"></a><span class="separador"></span><a href="https://www.jep.gov.co" target="_blank" rel="noopener"><img class="img-footer" src="https://comisiondelaverdad.co/images/logo-jep-sistema-integral.svg" alt="logo sistema integral"></a><span class="separador"></span><a href="https://www.ubpdbusquedadesaparecidos.co" target="_blank" rel="noopener"><img class="img-footer" src="https://comisiondelaverdad.co/images/logo-ubpd-sistema-integral.svg" alt="logo unidad"></a></p>';
  
    if(valor > 768){    
      contenedor.innerHTML=cadena2; 
    }else{
      contenedor.innerHTML=cadena1;
    }
  }
  function menulateral(valor){
    let comple =1;
    $('#btnMenu').click(function(){
      $('#navbarNav').animate({
          left:'0'
      });
    });
    if(valor<768){
      if(comple === 1){
          $('#navbarNav').animate({
            left:'0'
        });
        comple =0;
      }else{
        $('#navbarNav').animate({
          left:'-100%'
      });
      comple = 1
      }
    }
  }