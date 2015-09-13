var ts = 1;
var nt = 0;

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
};

window.setInterval(function(){
  if(nt == 1){
    $('.nathiefpopup').toggle();
    playGP();
  }
}, 8000);

window.setInterval(function(){
  $('.nathiefpopup').hide();
}, 3000);

$(document).ready( function(){
  $('.nathiefpopup').hide();
  $('.nathief').hide();
  $('.thieving').hide();
  main();
});
