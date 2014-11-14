$(document).delegate("#openMenu", "click", function() {
    $('#nav').animate({ 'width': 'toggle' }, 100);
    $('.page-section').animate({ 'margin-left': '200px' }, 100);
});

$(document).delegate("#closeMenu", "click", function() {
    $('#nav').animate({ 'width': 'toggle' }, 100);
    $('.page-section').animate({ 'margin-left': '-=200px' }, 100);
});


// $(document).ready(function() {
//     $("#morocco span").mouseenter(function() {
//         $("#morocco-times").slideDown(100);
//     });
//     $("#morocco span").mouseleave(function() {
//         $("#morocco-times").slideUp(100);
//     });
//     $("#ghana span").mouseenter(function() {
//         $("#ghana-times").slideDown(100);
//     });
//     $("#ghana span").mouseleave(function() {
//         $("#ghana-times").slideUp(100);
//     });
//     $("#uganda span").mouseenter(function() {
//         $("#uganda-times").slideDown(100);
//     });
//     $("#uganda span").mouseleave(function() {
//         $("#uganda-times").slideUp(100);
//     });
// });



// $(document).ready(function() {
// 	scrollToAnchor();
// 	selectOnScroll();
// 	selectNav();
// });

// function selectNav() {
// 	$('a[href*=#]').click(function () {
//         if( $('#nav').is(":visible") ) {
//             $('#nav').animate({ 'width': 'toggle' }, 100);
//             $('.page-section').animate({ 'margin-left': '-=200px' }, 100);
//         }
// 		$("#nav-menu li.selected").removeClass("selected");
// 		var hash = $(this).attr("href");
//     	$('#nav-menu li a[href="'+ hash+ '"]').parent().addClass("selected");
//     })
// }

// function selectOnScroll() {
// 	$("#nav-menu li a").each(function() {
//         var id = $(this).attr("href");
//         /*var array = {"#1":"#home", "#2":"#our-programs", "#3":"#events", "#4":"#contacts"};*/
//         $(id).waypoint(function(direction) {
//             if (direction === "down") {
//                 $('#nav-menu li.selected').removeClass('selected');
//                 $('#nav-menu li a[href="' + id +'"]').parent()
//                                                      .addClass('selected');
//             }
//             else if (direction === "up" && id !== "#home") {
//                 $('#nav-menu li.selected').removeClass('selected');
//                 $('#nav-menu li a[href="' + id +'"]').parent().prev()
//                                                      .addClass('selected');
//             }
//         });
//     });
// }

// function scrollToAnchor(){
// 	$('a[href^="#"]').each(function() {
// 	    var id = $(this).attr('href');
// 	    $(this).click(function(e) {
// 	        e.preventDefault();
//             $('html,body').animate({scrollTop: $(id).offset().top+1},'slow');
//         });
//     });
// }