$(document).ready(function () {
  $(".messaggio-verde-utente").hide();
  $("#click-messaggio").click(function(){
    var testoMessaggio = $("#messaggio").val();
    var cloneMessaggio = $(".messaggio-verde-utente .to-do-item").text(testoMessaggio);
    $("to-do p").append(cloneMessaggio);
    $(".messaggio-verde-utente").show();

  });

  $("#messaggio").keypress(function(event){
    console.log(event.which);
    if (event.which===13) {
      console.log("ciao");
      var testoMessaggio = $("#messaggio").val();
      var cloneMessaggio = $(".messaggio-verde-utente .to-do-item").text(testoMessaggio);
      console.log(cloneMessaggio);
      $("to-do p").append(cloneMessaggio);
      $(".messaggio-verde-utente").show();

    }

  });




});
