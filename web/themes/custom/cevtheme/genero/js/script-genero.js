let currentOptions = [];

jQuery(function ($) {
    /*jQuery("body").on("click", "[data-bs-toggle='popover']", function () {
        jQuery('[data-bs-toggle="popover"]').popover('show');
    });*/
    /*jQuery('.mdb-select').materialSelect({
        labels: {
            selectAll: 'Seleccionar todos',
            optionsSelected: 'Opciones seleccionadas'
        }
    });*/
    //computador
    jQuery("body").on("click", ".tid", function () {
        jQuery(this).toggleClass('tidselected');
        filterOptions();
        showDesc(this);
    });
    //celular
    const selectGenero = document.querySelector('.classic');
    selectGenero.addEventListener('change', (event) => {
        const eleccionesBorrar = Array.from(document.querySelectorAll('.serieMobiles'))
        eleccionesBorrar.forEach(eleccion => {
            eleccion.classList.remove('tidselected');
        });
        jQuery('#' + event.target.value).toggleClass('tidselected');
        filterOptions();
        console.log(event.target.value);
    })

    // Ajusta posición de descargables encima de footer
    footer = document.querySelector('footer.fixed-bottom');
    jQuery('.descargables').css('bottom', footer.clientHeight + 'px');

});


function filterOptions() {
    currentOptions = [];
    //Obtener todos los tids seleccionados
    jQuery(".tidselected").each(function (index) {
        currentOptions.push(jQuery(this).data("tid") + '')
    });
    jQuery(".mdb-select option:selected").each(function () {
        if (jQuery(this).val() != "")
            currentOptions.push(jQuery(this).val())
    });
    jQuery('.elemento').css('opacity', '0.2');
    jQuery.each(currentOptions, function (index, value) {
        jQuery(".elemento").each(function (index) {
            datatids = jQuery(this).data('tid');
            if (value == datatids) {
                jQuery(this).css('opacity', '1');
            }
        });
    });
    if (currentOptions.length == 0) {
        jQuery('.elemento').css('opacity', '1');
    }
}

function detectMob() {
    return ((window.innerWidth <= 800));
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        var elementos = document.querySelectorAll('.elemento');
        for (var i = 0; i < elementos.length; i++) {
            if (screen.width < 765) {
                elementos[0].parentNode.removeAttribute('style');
                elementos[0].parentNode.parentNode.removeAttribute('style');
                elementos[0].parentNode.parentNode.classList.add('vieportdiv2');
                elementos[0].parentNode.classList.add('vieportdiv');
                elementos[i].removeAttribute('style');
            }
        }
    }, 100);
});

document.addEventListener('DOMContentLoaded', function () {
    parrafos2();

});
window.addEventListener('resize', function () {
    parrafos2();
});
function parrafos2() {
    
}
function parrafos() {
    var lmas = document.getElementById('lmas');
    var lmenos = document.getElementById('lmenos');
    lmas.addEventListener('click', function () {
        this.style.display = 'none';
        var parr = document.querySelector('.parrafoppal');
        parr.classList.toggle('parrMas');
    });
    lmenos.addEventListener('click', function () {
        lmas.style.display = 'contents';
        var parr = document.querySelector('.parrafoppal');
        parr.classList.toggle('parrMas');
    });
}

function showDesc(elem){
    if(currentOptions.length == 0){
        desc = jQuery('#gen-desc-tmp').html();
        jQuery('#gen-desc').html('').append(desc);
    }
    else {
        desc = jQuery(elem).find('.hidden').html();
        jQuery('#gen-desc').html('').append(desc);
    }    
}