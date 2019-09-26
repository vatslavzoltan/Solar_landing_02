document.addEventListener("DOMContentLoaded", function() {
  $(".gallery-item").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  });
  $('a[href*="#"]').on("click", function(e) {
    e.preventDefault();
    $(".page_nav").removeClass("active");
    $(".hamburger").removeClass("active");

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 100
      },
      500,
      "linear"
    );
  });
  $(".hamburger").on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".page_nav").toggleClass("active");
  });
});
$(document).ready(function() {
  //E-mail Ajax Send
  $("form.callback_banner, form.callback_page").submit(function(e) {
    //Change
    e.preventDefault();
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "telegram.php", //Change
      data: th.serialize()
    }).done(function() {
      $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
      }).done(function() {
        console.log("Sent to mail");
      });
      $(th)
        .find(".success")
        .addClass("active")
        .css("display", "flex")
        .hide()
        .fadeIn();
      setTimeout(function() {
        $(th)
          .find(".success")
          .removeClass("active")
          .fadeOut();
        th.trigger("reset");
      }, 3000);
    });

    return false;
  });
});
