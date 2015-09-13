var ts = 1;
var nt = 0;
var za = 0;

function toggleSound() {
  if(ts == 1) {
    ts = 0;
  }
  else {
    ts = 1;
  }
}

function playGP() {
  if(ts == 1) {
    var sound = new Audio("gpsound.wav");
    sound.play();
    sound.currentTime = 0;
  }
}

var main = function() {
  $('.nathieflink').click(function() {
      $('.nathief').toggle();
      if(nt == 1) {
        nt = 0;
      }
      else {
        nt = 1;
      }
  });

  $('.thievinglink').click(function() {
      $('.thieving').toggle();
  });

  $('.zammylink').click(function() {
      $('.zammy').toggle();
      if(za == 1) {
        za = 0;
      }
      else {
        za = 1;
      }
  });

  $('.magiclink').click(function() {
      $('.magic').toggle();
  });
};

window.setInterval(function(){
  if(nt == 1){
    $('.nathiefpopup').toggle();
    playGP();
  }
}, 15000);

window.setInterval(function(){
  if(za == 1){
    $('.zammypopup').toggle();
    playGP();
  }
}, 30000);

window.setInterval(function(){
  $('.nathiefpopup').hide();
  $('.zammypopup').hide();
}, 3000);

$(document).ready( function(){
  $('.nathiefpopup').hide();
  $('.nathief').hide();
  $('.thieving').hide();
  $('.zammypopup').hide();
  $('.zammy').hide();
  $('.magic').hide();
  main();
});
