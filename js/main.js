// START PRELOADER //
$(window).on('load', function () {
	var $preloader = $('#page-preloader'),
	$spinner   = $preloader.find('.spinner');
	$spinner.fadeOut();
	$preloader.delay(500).fadeOut('slow');
});
		// START PRELOADER //
// START вызов библиотеки lightGallery //
$(document).ready(function() {
	$('#lightGallery').lightGallery({
		showThumbByDefault:true,
		addClass:'showThumbByDefault'
	});
});
// END вызов библиотеки lightGallery //
// START Плавная прокрутка страницы //
$(document).ready(function() {
    //Chrome Smooth Scroll
    try {
    	$.browserSelector();
    	if($("html").hasClass("chrome")) {
    		$.smoothScroll();
    	}
    } catch(err) {
    };
  });
// END Плавная прокрутка страницы //
// START адаптивное меню //
$(document).ready(function() {
	$("[data-toggle]").click(function() {
		var toggle_el = $(this).data("toggle");
		$(toggle_el).toggleClass("open-sidebar");
	});
});
$(".swipe-area").swipe({
	swipeStatus:function(event, phase, direction, distance, duration, fingers)
	{
		if (phase=="move" && direction =="right") {
			$(".container-2").addClass("open-sidebar");
			return false;
		}
		if (phase=="move" && direction =="left") {
			$(".container-2").removeClass("open-sidebar");
			return false;
		}
	}
});
// END адаптивное меню //