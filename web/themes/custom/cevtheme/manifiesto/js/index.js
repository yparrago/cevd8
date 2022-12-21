$("#btn-play").on("click", () => {
  $(".video-container").append(`
    <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1" title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      autoplay
      style="width: 100%; height: 100%"
    ></iframe>
    `);
  $(".video-container").removeClass("d-none");
});

const gradientTop = $(".gradient-top");
const gradientBottom = $(".gradient-bottom");

gradientBottom.css({
  height: $(".scrollable-text").height() * 0.70,
})
$(".scrollable-text").on("scroll", function () {
  if (
    $(this).prop("scrollTop") + $(this).height() + 90 >
    $(this).prop("scrollHeight")
  ) {
    gradientBottom.addClass('opacity-25')
    return;
  }
  gradientBottom.css({
    top: $(this).height() + 50 + $(this).scrollTop() - gradientBottom.height(),
  });

  gradientBottom.removeClass('opacity-25')
});

$(document).ready(() => {
  $('.footer-placeholder').css({height: ($('footer').height())})
})
