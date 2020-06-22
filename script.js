$(document).ready(function () {

  // DROPDOWN

  $(document).on("click",".freccia",function(){
    $(this).parent().siblings().find(".dropdown").removeClass("active");
    $(this).siblings(".dropdown").toggleClass("active");
  });

  // FUNZIONE MESSAGGIO DEL COMPUTER
  $(document).on("click","#click-messaggio",function(){
    invioMessaggioUtente();
    $(".accesso-ora").text("Sto scrivendo...");
    setTimeout(computerMessaggio, 2200);
    setTimeout(spuntablue, 3800);
  });

  $("#input-messaggio").keypress(function(event){
    if (event.which===13 || event.keycode===13) {
      invioMessaggioUtente();
      $(".accesso-ora").text("Sto scrivendo...");
      setTimeout(computerMessaggio, 2200);
      setTimeout(spuntablue, 3800);

    }
  });

  // Funzione di invio messaggio utente
  function invioMessaggioUtente(){
    var chatMessaggio = $("#input-messaggio").val();
    // se la chat non è vuota allora clonami il messaggio
    if (chatMessaggio !="") {
      var nuovoMessaggio = $(".template .messaggio").clone();
      // prendo il figlio di messaggio(testo-messaggio) e inserisco
      // il valor dell input messaggio
      nuovoMessaggio.children(".testo-messaggio").text(chatMessaggio);
      //aggiungo la classe inviato
      nuovoMessaggio.addClass("inviato");
      // variabili per funziene oraesatta
      var data = new Date();
      var oraCorrente = data.getHours();
      var minutoCorrente = data.getMinutes();
      var oraEsatta = aggiungiZero(oraCorrente) + ":" + aggiungiZero(minutoCorrente);
      nuovoMessaggio.children(".ora-messaggio").text(oraEsatta);
      $(".finestra-chat.active").append(nuovoMessaggio);
      //reset dell input messaggio
      $("#input-messaggio").val("");
      // scroll barrra chat
      $(".contenitore-messaggio").scrollTop($(".contenitore-messaggio").prop("scrollHeight"));
    }else if (chatMessaggio === "") {
      nuovoMessaggio.children(".testo-messaggio").text();
      nuovoMessaggio.addClass("inviato");
    }

  }

  function spuntablue() {
  $('.check_message i').addClass("spunta");
  }

  // Funzione di risposta computer dopo 1 secondo
  function computerMessaggio() {
    var testoMessaggio = "Ok!";
    var nuovoMessaggio = $(".template .messaggio").clone();
    nuovoMessaggio.children(".testo-messaggio").text(testoMessaggio);
    nuovoMessaggio.addClass("ricevuto");
    var data = new Date();
    var oraCorrente = data.getHours();
    var minutoCorrente = data.getMinutes();
    var oraEsatta = aggiungiZero(oraCorrente) + ':' + aggiungiZero(minutoCorrente);
    nuovoMessaggio.children(".ora-messaggio").text(oraEsatta);
    $(".finestra-chat.active").append(nuovoMessaggio);
    //reset messaggio
    $("#input-messaggio").val("");
    // scroll barrra chat
    $(".contenitore-messaggio").scrollTop($(".contenitore-messaggio").prop("scrollHeight"));
    $(".accesso-ora").text("Ultimo accesso oggi alle ore: " + oraEsatta);
    $(".ricevuto .check_message i").hide();
  }


  // FUNZIONE ORACORRENTE
  function aggiungiZero(num){
    if (num < 10) {
      return "0" + num;
    }
    return num;
  }

  // RICERCA DEI CONTATTI

  $('#cerca').keyup(function(){
    var cercaContatto = $(this).val().toLowerCase();
    $('.scheda').each(function(){
      var nomeFiltro = $(this).find('.utente').text().toLowerCase();
      if (nomeFiltro.includes(cercaContatto)) {
        $(this).show();
      }else{
        $(this).hide();
      }
    });
  });

  // SELEZIONE PAGINA CHAT CORRENTE

  $(".scheda").click(function(){
    var dataScheda = $(this).attr("data-contact");
    var cloneScheda = $(this).clone(".scheda");
    console.log(cloneScheda);
    $(".finestra-chat").removeClass("active");
    var select = '.finestra-chat[data-chat="'+ dataScheda +'"]';
    cloneScheda.append(".replica");
    $(select).addClass("active");
    var nomeFiltro = $(this).find('.utente').text();
    $(".accesso-nome").text(nomeFiltro);
    // variabili per funziene oraesatta
    var data = new Date();
    var oraCorrente = data.getHours();
    var minutoCorrente = data.getMinutes();
    var oraEsatta = aggiungiZero(oraCorrente) + ':' + aggiungiZero(minutoCorrente);
    $(".orarioAggiornato").text(oraEsatta);
    // sostituisco l'immagine di default cn quella cliccata
    var attributoImmagine = $(this).find('img').attr('src');
    $('.immagine_da_sostituire').attr('src', attributoImmagine);

  });

  // FUNZIONE CANCELLA MESSAGGI
    $(document).on('click', '#cancella-messaggio', function() {
    $(this).closest('.messaggio').remove();
    });
});
