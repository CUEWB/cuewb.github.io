var main = function() {
	var timer = setInterval(function() {slider()}, 10000);
}

function slider() {
	var currentSlide = $('.active-slide');
	var nextSlide = currentSlide.next();

	if(nextSlide.length == 0) {
		nextSlide = $('.slide').first();
	}

	currentSlide.hide("slide", 1000).removeClass('active-slide');
	nextSlide.show("slide", 1000).addClass('active-slide');
}

$(document).ready(function() {
    $(".main").onepage_scroll();
});
$(document).ready(main);