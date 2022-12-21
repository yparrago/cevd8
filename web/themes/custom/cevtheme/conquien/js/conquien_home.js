jQuery(document).ready(function () {
  sessionStorage.setItem("region_seleccionada_sesion", "");
  let buscar_nombre = jQuery(".conquien #buscar_nombre");

  jQuery
    .getJSON("/themes/custom/cevtheme/conquien/json/jsondb.json", function (data) {

      buscar_nombre.empty();

      var option_buscar_nombre =
        " <option value='buscar_nombre_option' selected><span class='text-dift'>BUSCAR</span> </option>";

      buscar_nombre.append(option_buscar_nombre);

      data.forEach(function (aliado, index) {
        //console.log("Persona " + index + " | Nombre: " + aliado.nombre + " id: " + aliado.id)
        option_buscar_nombre =
          " <option value='" +
          aliado.id +
          "'><span class='text-dift'>" +
          aliado.nombre +
          "</option>";
        buscar_nombre.append(option_buscar_nombre);
      });

      buscar_nombre.select2({
        width: "resolve",
      });

      //fin
    })
    .fail(function () {
      console.log("Error al leer los registros del json.");
    });

  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var $state = jQuery(
      "<span>" +
        '<img src="/themes/custom/cevtheme/conquien/assets/select2-icon/' +
        state.element.value.toLowerCase().replace(/ /g, "") +
        '.svg" class="img-flag img-option-select" /> ' +
        state.text +
        "</span>"
    );
    return $state;
  }

  jQuery("#tipo_grafica").select2({
    width: "resolve",
    templateResult: formatState,
  });

  jQuery("#buscar_nombre").select2({
    width: "resolve", // need to override the changed default
  });

  jQuery("#buscar_nombre").change(function () {
    // jQuery(this).val() will work here
    //alert(jQuery(this).val());
    sessionStorage.setItem("id_aliado", jQuery(this).val());
    window.location.href = "/con-quien-detalle";
  });

  jQuery("#tipo_grafica").change(function () {
    sessionStorage.setItem("tipo_grafica_seleccionado", jQuery(this).val());
    window.location.href = "/con-quien-index";
  });

  jQuery("#btn_LineaTiempo").click(function () {
    sessionStorage.setItem("tipo_grafica_seleccionado", "LineaTiempo");
    window.location.href = "/con-quien-index";
  });

  jQuery("#btn_TipoAliado").click(function () {
    sessionStorage.setItem("tipo_grafica_seleccionado", "TipoAliado");
    window.location.href = "/con-quien-index";
  });

  jQuery("#btn_Nacional").click(function () {
    sessionStorage.setItem("tipo_grafica_seleccionado", "Nacional");
    window.location.href = "/con-quien-index";
  });

  jQuery("#btn_Internacional").click(function () {
    sessionStorage.setItem("tipo_grafica_seleccionado", "Internacional");
    window.location.href = "/con-quien-index";
  });

  jQuery("#btn_TemaTrabajo").click(function () {
    sessionStorage.setItem("tipo_grafica_seleccionado", "TemaTrabajo");
    window.location.href = "/con-quien-index";
  });

});