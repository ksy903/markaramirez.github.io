var main = function() {
  $('.icon-menu').click(function() {
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

  $(.'formula').click(function() {
    $('.jumbotron').css('background-image','url(http://www.yhpacademy.org/uploads/3/7/4/0/37401827/ap1_equation_sheet_page_2_53fd117ac240d.png)');
  });
};


$(document).ready(main);
