$('.aside-button').on('click', function(){
    $(this).toggleClass('showing')
    $('aside').toggleClass('show')
})


$('html , body').on('click', function(){
    $('.aside-button').removeClass('showing')
    $('aside').removeClass('show')
})

$(".aside-button").on("click", function (e) {
	e.stopPropagation();
});
