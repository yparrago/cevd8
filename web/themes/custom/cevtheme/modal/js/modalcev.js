jQuery(function ($) {
  jQuery("body").on("click", ".modal_cev", function (e) {
    e.preventDefault();
    var infoModal = jQuery("#modalInfoCev");
    var nid = jQuery(this).data("nid");
    var clase = jQuery(this).data("class");
    jQuery.ajax({
      url: "/nodecev/" + nid + "/modal",
      method: "GET",
      success: function (node) {
        htmlData = node;
        infoModal
          .removeClass("modal-institucional")
          .find(".modal-content")
          .attr("class", "")
          .addClass(clase)
          .addClass("modal-content");
        infoModal.find(".modal-content-cev").html(htmlData);
        infoModal.modal("show");
        // var myCarousel = document.querySelector(".carousel");
        // if (myCarousel != null) {
        //   var carousel = new bootstrap.Carousel(myCarousel);
        // }
        jQuery('video').addClass('embed-responsive-item');
        jQuery('video').attr('width', '100%');
        jQuery('video').attr('height', 'auto');
      },
    });
    $('.btn-close').click(function () {
      infoModal.modal("hide");
    })
  });
  $("*[data-video]").each((i, elem) => {
    let el = $(elem);
    el.click(() => {
      // if (!el.data("frame") || !$(el.data("frame"))) return;
      // $(el.data("frame")).attr("src", el.data("video"));
      el.parents(".video-collection")
        .find("iframe")
        .attr("src", el.data("video"));
    });
  });

  const collectionGroup = $('div[data-collection-group="group-1"');
  let currentCollection = "#collection-1";
  const buttonsCollection = $("button[data-collection]");

  const addActive = (id) => {
    buttonsCollection.each((i, btn) => {
      $(btn).removeClass("active");
    });

    $(`button[data-collection="${id}"`).addClass("active");
  };

  buttonsCollection.each((i, btn) => {
    $(btn).click(() => {
      let id = $(btn).data("collection");
      let collection = $(id);

      currentCollection = id;

      addActive(id);

      if (collection && collection.hasClass("d-none")) {
        collection.removeClass("d-none");

        collectionGroup.each((i, ele) => {
          let el = $(ele);

          if (el.attr("id") != id.slice(1) && !el.hasClass("d-none")) {
            el.addClass("d-none");
          }
        });
      }
    });
  });
  new ClipboardJS('.copy-clipboard', {
    container: document.getElementById('modalInfoCev')
  });

  var collection = document.querySelectorAll(".arch-relacionados .nav-link");
    if(collection.length!=0){
        collection[0].click();
     }
   jQuery('.arch-relacionados .tab-pane a').attr('target','_blank');
});
