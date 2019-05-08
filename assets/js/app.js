//JQuery Module Pattern

// An object literal
var app = {
  init: function() {
    app.functionOne();
  },
  functionOne: function () {
  }
};
$("document").ready(function () {
  app.init();
});

$(document).ready(function(){
    $('#maincarousel').carousel(window.location.hash.substring(1));
});
