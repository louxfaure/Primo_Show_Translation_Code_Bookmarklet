


javascript:(function() {

  var showTranslatedSpan = document.querySelectorAll('span[translate]');
 

  for (var i=0, j=showTranslatedSpan.length; i < j; i++) {

   var codeOfTranslation = showTranslatedSpan[i].getAttribute('translate');
   var translationCodeSpan = document.createElement("span");
   showTranslatedSpan[i].innerHTML = codeOfTranslation;
  }
})();