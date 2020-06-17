$(document).ready(function () {

  $(document).on("click","#click-messaggio",function(){
    invioMessaggioUtente();
  });

  $("#input-messaggio").keypress(function(event){
    if (event.which===13 || event.keycode===13) {
      invioMessaggioUtente();
    }
  });

  function invioMessaggioUtente(){
    var chatMessaggio = $("#input-messaggio").val();
    // se la chat non è vuota allora clonami il messaggio
    if (chatMessaggio != "") {
      var nuovoMessaggio = $(".template .messaggio").clone();
      // prendo il figlio di messaggio(testo-messaggio) e inserisco
      // il valor dell input messaggio
      nuovoMessaggio.children(".testo-messaggio").text(chatMessaggio);
      //aggiungo la classe inviato
      nuovoMessaggio.addClass("inviato");
      var data = new Date();
      var oraCorrente = data.getHours();
      var minutoCorrente = data.getMinutes();
      var oraEsatta = aggiungiZero(oraCorrente) + ":" + aggiungiZero(minutoCorrente);
      nuovoMessaggio.children(".ora-messaggio").text(oraEsatta);
      $(".finestra-chat").append(nuovoMessaggio);
      //reset dell input messaggio
      $("#input-messaggio").val("");
      $(".finestra-chat").scrollTop($(".finestra-chat").height());
    }
  }

  function aggiungiZero(num){
    if (num < 10) {
      return "0" + num;
    }
    return num;
  }

});
