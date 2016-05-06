$(document).ready(function(event){
$("img").addClass('lazy');
wow = new WOW(
{
animateClass: 'animated',
offset: 100
}
);
wow.init();
$(".lazy").lazy({
effect: 'fadeIn'
});
$('.carousel').carousel({
  interval: 1000 * 3
});  
$(".navbar-nav li a").click(function(event) {
$(".navbar-collapse").collapse('hide');
});
})

$(document).on('click.card', '.card', function (e) {
if ($(this).find('> .card-reveal').length) {
if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
$(this).find('.card-reveal').velocity(
{translateY: 0}, {
duration: 225,
queue: false,
easing: 'easeInOutQuad',
complete: function() { $(this).css({ display: 'none'}); }
}
);
}
else if ($(e.target).is($('.card .activator')) ||
$(e.target).is($('.card .activator i')) ) {
$(e.target).closest('.card').css('overflow', 'hidden');
$(this).find('.card-reveal').css({ display: 'block'}).velocity("stop", false).velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
}
}

$('.card-reveal').closest('.card').css('overflow', 'hidden');
});

$(".scroll").click(function (event) {
event.preventDefault();
var dest = 0;
if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
dest = $(document).height() - $(window).height() + 100;
} else {
dest = $(this.hash).offset().top + 10;
}
$('html,body').animate({
scrollTop: dest
}, 600, 'swing');
dest = dest - 70;
$('html,body').animate({
scrollTop: dest
}, 300, 'swing');
});
 
jQuery(window).load(function() {
jQuery("#status").fadeOut();
jQuery("#preloader").delay(1000).fadeOut("slow");
jQuery("#main-carousel").delay(3000).fadeIn("slow");
})