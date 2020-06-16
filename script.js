$(document).ready(function () {
  $(".messaggio-verde-utente").hide();
  $("#click-messaggio").click(function(){
    var testoMessaggio = $("#messaggio").val();
    var cloneMessaggio = $(".messaggio-verde-utente .to-do-item").text(testoMessaggio);
    $("to-do p").append(cloneMessaggio);
    $(".messaggio-verde-utente").show();

  });
});
