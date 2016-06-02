$(document).ready( function() {
	$('#landing').height(window.innerHeight);
	window.setTimeout(function() {
		$('#landing').removeClass('loading');
		$('#logo').removeClass('loading');
	}, 1500);
});

var controller = $.superscrollorama()

// create animation timeline for pinned element
var pinAnimations = new TimelineLite();
pinAnimations
	.append(
		TweenMax.fromTo($('#dunk'), 2,
			{ css: { bottom: 0}},
			{ css: { bottom: window.innerHeight }}
		)
	)
	.append(
		TweenMax.fromTo($('#dunk2'), 2,
			{ css: { bottom: 0}},
			{ css: { bottom: window.innerHeight }}
		)
	)
	// .append(
	// 	TweenMax.fromTo($('#running'), 2,
	// 		{ css: { bottom: 0}},
	// 		{ css: { bottom: window.innerHeight }}
	// 	)
	// );

// // pin element, use onPin and onUnpin to adjust the height of the element
controller.pin($('#landing'), 1000, {
	anim:pinAnimations, 
	onPin: function() {
		console.log('pinning')
		$('.markets-links a').removeClass();
	}, 
	onUnpin: function() {
		$('.markets-links a').addClass('dark');
	}
});

window.addEventListener('scroll', function() {
	if ($('#blue').offset().top - $(window).scrollTop() < 24) {
		$('.markets-links a').removeClass('dark');
	} else if ($('#blue').offset().top - $(window).scrollTop() > 24 && $('#blue').offset().top - $(window).scrollTop() < 780) {
		console.log('adding dark class')
		$('.markets-links a').addClass('dark');
	}
})