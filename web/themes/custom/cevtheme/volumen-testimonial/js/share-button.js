jQuery("a[data-share-menu]").on("click", function (e) {
  e.preventDefault();
  jQuery(this).next().toggleClass("open");
});

jQuery(".share-item").on("click", function () {
  jQuery(".x-share-button").addClass("shared");
  setTimeout(function () {
    jQuery(".x-share-button").removeClass("open");
    jQuery(".x-share-button").removeClass("shared");
  }, 200);
});
