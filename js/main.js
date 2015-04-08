$(document).ready(function(){

	$('.navbar-nav li:first-child').hide();

	$(".navbar-nav li a").click(function(event) {
	    $(".navbar-collapse").collapse('hide');
	});

	$(".support_tile").css("height", $(".support_tile").width());

	$("#meetings h2").hover(function(){
		$(this).html("<p>Ghana: Tuesdays @ 8:00pm (Hamilton 511)</p><p>Morocco: Tuesdays @ 8:30pm (Hamilton 603)</p><p>Uganda: Fridays @ 5:00pm (Mudd 834)</p>");
		$(this).addClass("meeting_hover");
	}, function(){
		$(this).html("Meetings");
		$(this).removeClass("meeting_hover");
	});

	$("#donate h2").hover(function(){
		$(this).html('<span class="glyphicon glyphicon-gift" aria-hidden="true"></span><br>Support our Chapter');
		$(this).addClass("meeting_hover");
	}, function(){
		$(this).html("Donate");
		$(this).removeClass("meeting_hover");
	});

	$("#follow h2").hover(function(){
		$(this).html('<span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span><br>Like us on Facebook');
		$(this).addClass("meeting_hover");
	}, function(){
		$(this).html("Follow");
		$(this).removeClass("meeting_hover");
	});

	$("#contact h2").hover(function(){
		$(this).html('<span class="glyphicon glyphicon-inbox" aria-hidden="true"></span><br>Send us an Email');
		$(this).addClass("meeting_hover");
	}, function(){
		$(this).html("Contact");
		$(this).removeClass("meeting_hover");
	});

	$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
            if(this.hash.length > 3) {
             $('html,body').animate({
                 scrollTop: target.offset().top-70
            }, 900);
            return false;
          }
        }
    }
  });
});

$( window ).resize(function() {
	$(".support_tile").css("height", $(".support_tile").width());
});

$(window).scroll(function() {
    if ($(this).scrollTop()<$("#slide1").height())
     {
        $('.navbar-nav li:first-child').fadeOut();
     }
    else
     {
      	$('.navbar-nav li:first-child').fadeIn();
     }
 });



