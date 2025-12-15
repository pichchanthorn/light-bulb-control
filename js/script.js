$(document).ready(function () {

  $('#btnOn').click(function () {
    $('.light-bulb').addClass('on');
    $('.status').addClass('on').text('Light is ON');
    $('body').addClass('lights-on');
  });

  $('#btnOff').click(function () {
    $('.light-bulb').removeClass('on');
    $('.status').removeClass('on').text('Light is OFF');
    $('body').removeClass('lights-on');
  });

});
