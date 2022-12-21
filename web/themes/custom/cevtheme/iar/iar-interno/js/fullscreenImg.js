$("img[data-zoomable]")
  .addClass("img-zoomable")
  .click(function () {
    let src = $(this).attr("src");
    let modal;

    function removeModal() {
      modal.remove();
      $("body").off("keyup.modal-close");
    }

    modal = $("<div>")
      .css({
        background: "RGBA(0,0,0,.5) url(" + src + ") no-repeat center",
        backgroundSize: "80%",
        width: "100%",
        height: "100%",
        position: "fixed",
        zIndex: "10000",
        top: "0",
        left: "0",
        cursor: "zoom-out",
      })
      .click(function () {
        removeModal();
      })
      .appendTo("body");
    //handling ESC
    $("body").on("keyup.modal-close", function (e) {
      if (e.key === "Escape") {
        removeModal();
      }
    });
  });
