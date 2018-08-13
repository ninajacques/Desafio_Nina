$('.collapse').on('click', function() {
  var ident_open = $(this).hasClass('open');
  if (ident_open === false) {
    $('.collapse').removeClass('open');
    $(this).addClass('open');
  } else {
      $('.collapse').removeClass('open');
  }
})
$(document).scroll(function () { // oscultador de scroll
  var scroll_count = $(document).scrollTop();
  if (scroll_count > 200) {
    $('.back-to-top').addClass('go-to-top');
  } else {
    $('.back-to-top').removeClass('go-to-top');
  }
});
