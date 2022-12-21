jQuery(window).on('load resize', function(){



   var width = jQuery(window).width();



   if((width) >= 991){



    jQuery('.card-first .card-principal').on('click',function(){

        green();

    })

    // jQuery('.information-scale-2').on('click',function(){

    //     home();

    // })

    jQuery('.card-second .card-principal').on('click',function(){

        blue();

    })

    // jQuery('.card-second .card-blue').on('click',function(){

    //     home();

    // })

    jQuery('.item-container-principal-3.card-principal').on('click',function(){

        // red();
        console.log('luego de que exista contenido, por favor quitar comentario a linea 39, y eliminar linea 40, del archivo de funciones');

    })

    jQuery('.arrow-home').on('click', function(){

        home()

    })

    // jQuery('.card-third .card-red').on('click',function(){



    //     // jQuery('.card-red').removeClass('card-show-100');



    //     home();



    // })



   } else{


        jQuery('.card-first .card-principal').on('click',function(){

            green_mobile();

        })



        // jQuery('.card-first .card-green').on('click',function(){
        //     jQuery('.card-green').hide();
        //     alert('holii')
        //     jQuery('.card-principal').show();
        // })



        jQuery('.card-second .card-principal').on('click',function(){
            jQuery('.card-principal').hide();
            jQuery('.card-blue').show(); 
        })


        // jQuery('.card-second .card-blue').on('click',function(){
        //     jQuery('.card-blue').hide();
        //     jQuery('.card-principal').show();
        // })





        jQuery('.card-third .card-principal').on('click',function(){
            // jQuery('.card-principal').hide();
            // jQuery('.card-red').show();
            console.log('luego de que exista contenido, por favor quitar comentario a linea 101 y 102, y eliminar linea 103, del archivo de funciones');

        })



        jQuery('.card-third .card-red').on('click',function(){
            // jQuery('.card-red').hide();

            // jQuery('.card-principal').show();
        })


          // navegación superior mobile

          jQuery('.card-first .card-principal , .card-second .card-principal , .card-third .card-principal').on('click', function(){
            jQuery(window).scrollTop(0);
            jQuery('.wrapper').css('margin-top', '45px')
            jQuery('.wrapper .information-principal').css('padding', '0')
        })
            

        jQuery('.card-first').on('click', function(){
            jQuery('.section-links button:nth-child(1)').addClass('current-showing')
            jQuery('.row-content').addClass('active-green')
        })

        jQuery('.card-second').on('click', function(){
            jQuery('.section-links button:nth-child(2)').addClass('current-showing')
            jQuery('.row-content').addClass('active-blue')

        })

        jQuery('.card-third').on('click', function(){

            jQuery('.section-links button:nth-child(3)').addClass('current-showing')

            jQuery('.row-content').addClass('active-red')

        })

        jQuery('.section-links .green-btn').on('click',function(){

            green_mobile();

            jQuery('.row-content').addClass('active-green')

            jQuery('.componen').removeClass('d-none')

            jQuery('.row-content').removeClass('active-red , active-blue')

        })

        jQuery('.section-links .blue-btn , .componen').on('click',function(){

            blue_mobile();

            jQuery('.row-content').addClass('active-blue')

            jQuery('.row-content').removeClass('active-red , active-green')

            jQuery('.componen').removeClass('d-none')

        })

        jQuery('.section-links .red-btn , .publicacion').on('click',function(){

            red_mobile();

            jQuery('.row-content').removeClass('active-blue , active-green')

            jQuery('.row-content').addClass('active-red')

        })

        jQuery('.publicacion , .componen').on('click', function(){
            jQuery(window).scrollTop(0);
            jQuery('.section-links button').removeClass('current-showing , d-none')

        })

        jQuery('.publicacion').on('click', function(){

            jQuery('.section-links .red-btn').addClass('current-showing')

        })

        jQuery('.section-links button').on('click',function(){
            
            if(jQuery(this).hasClass('current-showing')){

                jQuery('.card-green , .card-blue , .card-red').hide();

                jQuery('.card-principal').show();

                jQuery('.section-links button').removeClass('current-showing')

                jQuery('.section-links').removeClass('show-sections-links')

                jQuery('.wrapper').css('margin-top', '')
                jQuery('.wrapper .information-principal').css('padding', '')

                jQuery('.row-content').removeClass('active-blue , active-red , active-green')

            }else{
                jQuery(window).scrollTop(0);

                jQuery('.section-links button').removeClass('current-showing')

                jQuery(this).addClass('current-showing')

            }

        })

        // navegación superior mobile



        jQuery('.item-container-principal.card-principal , .item-container-principal-2.card-principal , .item-container-principal-3.card-principal').on('click', function(){

            jQuery('.section-links').toggleClass('show-sections-links')

            jQuery('.section-links button').removeClass('d-none')

        })

        jQuery('.item-container-principal-2').on('click', function(){

            jQuery('.section-links button:nth-child(3)').addClass('d-none')

        })

        jQuery('.item-container-principal-3').on('click', function(){

            jQuery('.componen').addClass('d-none')

            jQuery('.section-links button').removeClass('d-none')

        })

        jQuery('.item-container-principal').on('click', function(){

            jQuery('.section-links button:nth-child(2) , .section-links button:nth-child(3)').addClass('d-none')

        })


   }



});

 









jQuery(window).on('load resize', function() {

	width = jQuery(window).width();

	if (width <= 991) {

		jQuery(window).on("resize", function() {

            location.reload();

        });



      
	}

})











// jQuery('.item-container-principal-3').on('click', function(){

//     jQuery('.componen').addClass('d-none')

// })



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



jQuery('.que_es').on('click', function(){



    green();



})

jQuery('.componen').on('click', function(){



    blue();



})



jQuery('.publicacion').on('click', function(){



    red();



})













function card_first_principal(){



    jQuery('.card-principal').hide();



    jQuery('.card-green').css('display', 'flex');



    jQuery('.card-red').hide();



    jQuery('.card-blue').hide();



}

function card_second_principal(){



    jQuery('.card-principal').hide();



    jQuery('.card-green').hide();



    jQuery('.card-red').hide();



    jQuery('.card-blue').css('display', 'flex');



}

function red(){



    jQuery('.card-principal').addClass('card-close');



    jQuery('.card-first .card-red').addClass('card-show-300');



    jQuery('.card-first .card-blue').removeClass('card-show-200');



    jQuery('.card-first .card-green').removeClass('card-show-100');



    jQuery('.card-second .card-red').addClass('card-show-300');



    jQuery('.card-second .card-blue').removeClass('card-show-200');



    jQuery('.card-second .card-green').removeClass('card-show-100');



    jQuery('.card-third .card-red').addClass('card-show-300');



    jQuery('.card-third .card-blue').removeClass('card-show-200');



    jQuery('.card-third .card-green').removeClass('card-show-100');



}

function blue(){



    jQuery('.card-principal').addClass('card-close');



    jQuery('.card-first .card-blue').addClass('card-show-200');



    jQuery('.card-first .card-red').removeClass('card-show-300');



    jQuery('.card-first .card-green').removeClass('card-show-100');



    jQuery('.card-second .card-blue').addClass('card-show-200');



    jQuery('.card-second .card-red').removeClass('card-show-300');



    jQuery('.card-second .card-green').removeClass('card-show-100');



    jQuery('.card-third .card-blue').addClass('card-show-200');



    jQuery('.card-third .card-red').removeClass('card-show-300');



    jQuery('.card-third .card-green').removeClass('card-show-100');



}



function green(){



    jQuery('.card-principal').addClass('card-close');



    jQuery('.card-first .card-green').addClass('card-show-100');



    jQuery('.card-first .card-red').removeClass('card-show-300');



    jQuery('.card-first .card-blue').removeClass('card-show-200');



    jQuery('.card-second .card-green').addClass('card-show-100');



    jQuery('.card-second .card-red').removeClass('card-show-300');



    jQuery('.card-second .card-blue').removeClass('card-show-200');



    jQuery('.card-third .card-green').addClass('card-show-100');



    jQuery('.card-third .card-red').removeClass('card-show-300');



    jQuery('.card-third .card-blue').removeClass('card-show-200');



}



// Función que permite que cuando una crad este abierta podamos ir al home //



function home(){



         jQuery('.card-principal').removeClass('card-close');



        jQuery('.card-first .card-green').removeClass('card-show-100');



        jQuery('.card-second .card-green').removeClass('card-show-100');



        jQuery('.card-third .card-green').removeClass('card-show-100');



        jQuery('.card-first .card-blue').removeClass('card-show-200');



        jQuery('.card-second .card-blue').removeClass('card-show-200');



        jQuery('.card-third .card-blue').removeClass('card-show-200');





        jQuery('.card-first .card-red').removeClass('card-show-300');



        jQuery('.card-second .card-red').removeClass('card-show-300');



        jQuery('.card-third .card-red').removeClass('card-show-300');



}





function green_mobile(){

    jQuery('.card-principal').hide();

    jQuery('.card-green').show();

    jQuery('.card-blue , .card-red').hide()

    jQuery('.componen').show()

    jQuery('.section-links button:nth-child(3), .section-links button:nth-child(2)').addClass('d-none')

}

function blue_mobile(){

    jQuery('.card-principal').hide();

    jQuery('.card-blue').show();

    jQuery('.card-green , .card-red').hide()

    jQuery('.section-links button:nth-child(3)').addClass('d-none')

    jQuery('.section-links button:nth-child(2)').removeClass('d-none')

}

function red_mobile(){

    jQuery('.card-principal').hide();

    jQuery('.card-red').show();

    jQuery('.card-green , .card-blue').hide()

    jQuery('.componen').hide()

    jQuery('.section-links button:nth-child(3), .section-links button:nth-child(2)').removeClass('d-none')

}







