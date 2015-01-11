$(document).ready(function(){
	$(".support_tile").css("height", $(".support_tile").width());

	$("#meetings h2").hover(function(){
		$(this).html("<p>Ghana: Tuesdays @ 8:00pm (Mudd 337)</p><p>Morocco: Tuesdays @ 8:30pm (Hamilton 607)</p><p>Uganda: Fridays @ 5:30pm (Mudd 834)</p>");
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
		$(this).html('<span class="glyphicon glyphicon-inbox" aria-hidden="true"></span><br>Send an Email');
		$(this).addClass("meeting_hover");
	}, function(){
		$(this).html("Contact");
		$(this).removeClass("meeting_hover");
	});
});

$( window ).resize(function() {
	$(".support_tile").css("height", $(".support_tile").width());
});