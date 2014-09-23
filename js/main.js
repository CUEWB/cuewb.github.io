$(document).ready(function() {
    $(".main").onepage_scroll();
    selectNav();
});

function selectNav() {
	$('a[href*=#]').click(function () {
		$("#nav-menu li.selected").removeClass("selected");
		var hash = $(this).attr("href");
    	$('#nav-menu li a[href="'+ hash+ '"]').parent().addClass("selected");
    })
}