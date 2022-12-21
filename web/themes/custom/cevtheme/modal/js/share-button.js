jQuery(function($){

  $('body').on('click', 'a[data-share-menu]', function(e) {
      e.preventDefault();
      jQuery(this).next().toggleClass("open");
  });

  $('body').on('click', '.share-item', function() {
    $(".x-share-button").addClass("shared");
    setTimeout(function () {
      $(".x-share-button").removeClass("open");
      $(".x-share-button").removeClass("shared");
    }, 200);
  });
});
