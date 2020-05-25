$(document).ready(function () {
  $(".list").on("click", function () {
    if (Number($(this).data("open"))) {
      $(this).data("open", 0);
      $(this).next().hide();
      $(this).removeClass("open");
      $(this).next().find("audio").get(0).pause();
    } else {
      $(".list").data("open", 0);
      $(".audio").hide();
      $(".list").removeClass("open");
      var audioEl = document.querySelectorAll("audio");
      for (var i = 0; i < audioEl.length; i++) {
        audioEl[i].pause();
      }
      $(this).data("open", 1);
      $(this).next().show();
      $(this).addClass("open");
    }
  });
});
