(() => {
  let wheel = document.getElementById("wheelDS");
  let soundControl = document.querySelector("#sound-controlDS .sound-iconDS");

  wheel.addEventListener("wheel", (event) => {
    if (!event.deltaY) {
      return;
    }

    event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
    event.preventDefault();
  });

  // Hide modal
  function hideModal() {
    document.querySelector(".modalDS.mobile").style.display = "none";
    document.querySelector(".modalDS.desktop").style.display = "none";
    localStorage.setItem("modal_viewed", true);
    soundControl.click();
  }

  document
    .querySelector(".modalDS.mobile .modal-buttonDS")
    .addEventListener("click", hideModal);
  document
    .querySelector(".modalDS.desktop .modal-buttonDS")
    .addEventListener("click", hideModal);
  document
    .querySelector(".modalDS.mobile .modal-overlayDS")
    .addEventListener("click", hideModal);
  document
    .querySelector(".modalDS.desktop .modal-overlayDS")
    .addEventListener("click", hideModal);

  // Comment these line for show always
  localStorage.removeItem("modal_viewed"); // Comment this line to show modal once time

  if (!localStorage.getItem("modal_viewed")) {
    document.querySelector(".modalDS.mobile").classList.add("display-block");
    document.querySelector(".modalDS.desktop").classList.add("display-block");
  }

  // Set view to center on onload
  document
    .querySelector(".middleDS-container .imagesDS")
    .scrollIntoView({ inline: "center" });

  setTimeout(() => {
    loadedDG = true;
  });
})();

//modificación modal 
jQuery("body").on("click", ".modal_cev", function (e) {
  e.preventDefault();
  var infoModal = jQuery("#modalInfoCev");
  var clase = jQuery(this).data("class");

  if(infoModal.hasClass("dg-modals")){
    infoModal.removeClass("dg-modals"); 
  }
  infoModal.addClass(clase);
  
});

//EAO 09/11/1984 