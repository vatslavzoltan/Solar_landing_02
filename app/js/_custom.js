document.addEventListener("DOMContentLoaded", function() {
  $(".gallery-item").magnificPopup({
    type: "image",
    gallery: {
      enabled: true
    }
  });
  $('a[href*="#"]').on('click', function (e) {
		e.preventDefault();
		$('.page_nav').removeClass('active');
		$('.hamburger').removeClass('active');
	
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top-100
		}, 500, 'linear');
  });
  $('.hamburger').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $('.page_nav').toggleClass('active');
	});
});
