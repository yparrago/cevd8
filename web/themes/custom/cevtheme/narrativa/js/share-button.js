$("a[data-share-menu]").on("click", function (e) {
  e.preventDefault();
  $(this).next().toggleClass("open");
});

$(".share-item").on("click", function () {
  $(".x-share-button").addClass("shared");
  setTimeout(function () {
    $(".x-share-button").removeClass("open");
    $(".x-share-button").removeClass("shared");
  }, 200);
});
