var flug = "1";
var mtlug = "1";
var molug = "1";
var rlug = "1";
var result = 0;

var dist = "?";
var time = "?";
var vi = "?";
var vf = "?";
var accel = "?";


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

  $('.kinematicslink').click(function() {
      $('.kinematics').toggle();
      $('.menu').animate({
        left: "-285px"
      }, 200);
      $('body').animate({
        left: "0px"
      }, 200);
  });

  $('.contactlink').click(function() {
      $('.contactsheet').toggle();
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
      if(Math.abs(Math.round(result) - result) < .0001) {
        result = Math.round(result);
      }
    }
    if($('#molug').val() == "?") {
      var r = parseInt($('#rlug').val(), 10) * 3;
      var f = parseInt($('#flug').val(), 10) * 3;
      var m2 = parseInt($('#mtlug').val(), 10) * 3;
      result = (f * r * r) / ((6.674 * Math.pow(10, -11)) * m2);
      var thresult = (3 * 3 * 3) / ((6.674 * Math.pow(10, -11)) * 3);
      result /= thresult;
      if(Math.abs(Math.round(result) - result) < .0001) {
        result = Math.round(result);
      }
    }
    if($('#rlug').val() == "?") {
      var f = parseInt($('#flug').val(), 10) * 3;
      var m1 = parseInt($('#molug').val(), 10) * 3;
      var m2 = parseInt($('#mtlug').val(), 10) * 3;
      result = ((6.674 * Math.pow(10, -11)) * m1 * m2) / f;
      var thresult = ((6.674 * Math.pow(10, -11)) * 3 * 3) / 3;
      result /= thresult;
      if(Math.abs(Math.round(result) - result) < .0001) {
        result = Math.round(result);
      }
    }
    if($('#mtlug').val() == "?") {
      var r = parseInt($('#rlug').val(), 10) * 3;
      var m1 = parseInt($('#molug').val(), 10) * 3;
      var f = parseInt($('#flug').val(), 10) * 3;
      result = (f * r * r) / ((6.674 * Math.pow(10, -11)) * m1);
      var thresult = (3 * 3 * 3) / ((6.674 * Math.pow(10, -11)) * 3);
      result /= thresult;
      if(Math.abs(Math.round(result) - result) < .0001) {
        result = Math.round(result);
      }
    }
    alert("The missing coefficient is " + result);
  });
};


$(document).ready( function(){
  $('.fsheet').hide();
  $('.equations').hide();
  $('.kinematics').hide();
  $('.contactsheet').hide();
  main();
});
