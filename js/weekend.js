$(document).ready(function () {
  $('.list').on('click', function () {
    if (Number($(this).data('open'))) {
      $(this).data('open', 0)
      $(this).next().hide();
      $(this).removeClass('open')
    } else {
      $('.list').data('open', 0)
      $('.audio').hide();
      $('.list').removeClass('open')
      $(this).data('open', 1)
      $(this).next().show();
      $(this).addClass('open');
    }
  })
})