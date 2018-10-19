$(document).scroll(function () { // oscultador de scroll
  var scroll_count = $(document).scrollTop();
  if (scroll_count > 200) {
    $('.back-to-top').addClass('go-to-top');
  } else {
    $('.back-to-top').removeClass('go-to-top');
  }
});