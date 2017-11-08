$(window).on("load", function() {
  $(".curtain").fadeOut(6000, function() {
    $(this).data("z-index", "-69");
  });
})
