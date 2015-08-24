var flug = "1";
var mtlug = "1";
var molug = "1";
var rlug = "1";
var result = 0;

var main = function() {
  $('.icon-menu').click(function() {
    $('.start').hide();

    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });

  $('.formula').click(function() {
      $('.fsheet').toggle();

      $('.menu').animate({
        left: "-285px"
      }, 200);

      $('body').animate({
        left: "0px"
      }, 200);
  });

  $('.equationlink').click(function() {
      $('.equations').toggle();

      $('.menu').animate({
        left: "-285px"
      }, 200);

      $('body').animate({
        left: "0px"
      }, 200);
  });

  $('#lug').on('click', function(event) {
    event.preventDefault();
    $("#lugeq").submit()
  });

  $('#lugeq').submit(function(event) {
    event.preventDefault();
    if($('#flug').val() == "?") {
      var r = parseInt($('#rlug').val(), 10) * 3;
      var m1 = parseInt($('#molug').val(), 10) * 3;
      var m2 = parseInt($('#mtlug').val(), 10) * 3;
      result = (6.674 * Math.pow(10, -11)) * m1 * m2 / (Math.pow(r, 2));
      var thresult = (6.674 * Math.pow(10, -11)) * 3 * 3 / (Math.pow(3, 2));
      result /= thresult;
      alert("The missing coefficient is " + result);
    }
  });
};


$(document).ready( function(){
  $('.fsheet').hide();
  $('.equations').hide();
  main();
});
