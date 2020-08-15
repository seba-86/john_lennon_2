$('.carousel').carousel({
  interval: 7000
});

$(function () {
  $(".nav-link ").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var scroll = this.hash;

      $("html, body").animate({
        scrollTop: $(scroll).offset().top
      },
        900, function () {

          location.hash = scroll;

        });
    }
  });

});

