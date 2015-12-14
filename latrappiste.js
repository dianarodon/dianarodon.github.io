$(function(){
  $("#slides").slidesjs({
    width: 300,
    height: 200
  });
});

$(function(){
  $("#slides").slidesjs({
    navigation: {
      active: true,
      effect: "slide"
    }
  });
});

$(function(){
  $("#slides").slidesjs({
    pagination: {
      active: true,
      effect: "slide"
    }
  });
});

$(function(){
  $("#slides").slidesjs({
    play: {
      active: true,
      effect: "slide",
      interval: 5000,
      auto: false,
      swap: true,
      pauseOnHover: false,
      restartDelay: 2500
    }
  });
});

$(function(){
  $("#slides").slidesjs({
    effect: {
      slide: {
        speed: 200,
      },
      fade: {
        speed: 300,
        crossfade: true
      }
    }
  });
});

$(".1").click(function () {
  $(".hide1").show();
});

$(".hide1").addClass('animated fadeInLeft');

$(".1").click(function () {
  $(".hide6").show();
});

$(".hide6").addClass('animated bounceInDown');

$(".1").click(function () {
  $(".hide12").show();
});

$(".hide12").addClass('animated bounceInDown');

$(".1").click(function () {
  $(".hide18").show();
});

$(".hide18").addClass('animated bounceInDown');

$(".2").click(function () {
  $(".hide2").show();
});

$(".hide2").addClass('animated fadeInLeft');

$(".3").click(function () {
  $(".hide3").show();
});

$(".hide3").addClass('animated fadeInLeft');

$(".3").click(function () {
  $(".hide9").show();
});

$(".hide9").addClass('animated bounceInDown');

$(".3").click(function () {
  $(".hide15").show();
});

$(".hide15").addClass('animated bounceInDown');

$(".3").click(function () {
  $(".hide19").show();
});

$(".hide19").addClass('animated bounceInDown');

$(".4").click(function () {
  $(".hide4").show();
});

$(".hide4").addClass('animated fadeInLeft');

$(".5").click(function () {
  $(".hide5").show();
});

$(".hide5").addClass('animated fadeInLeft');

$(".7").click(function () {
  $(".hide7").show();
});

$(".hide7").addClass('animated fadeInLeft');

$(".8").click(function () {
  $(".hide8").show();
});

$(".hide8").addClass('animated fadeInLeft');

$(".10").click(function () {
  $(".hide10").show();
});

$(".hide10").addClass('animated fadeInLeft');

$(".11").click(function () {
  $(".hide11").show();
});

$(".hide11").addClass('animated fadeInLeft');

$(".13").click(function () {
  $(".hide13").show();
});

$(".hide13").addClass('animated fadeInLeft');

$(".14").click(function () {
  $(".hide14").show();
});

$(".hide14").addClass('animated fadeInLeft');

$(".16").click(function () {
  $(".hide16").show();
});

$(".hide16").addClass('animated fadeInLeft');

$(".17").click(function () {
  $(".hide17").show();
});

$(".hide1").addClass('animated fadeInLeft');
