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
	.append(
		TweenMax.fromTo($('#running'), 2,
			{ css: { bottom: 0}},
			{ css: { bottom: window.innerHeight }}
		)
	);

// // pin element, use onPin and onUnpin to adjust the height of the element
controller.pin($('#landing'), 1000, {
	anim:pinAnimations, 
	onPin: function() {
		$('.markets-links a').removeClass();
		$('#hiddenMsg').css({ position: 'fixed' });
	}, 
	onUnpin: function() {
		$('.markets-links a').addClass('dark');
		$('#hiddenMsg').css({ position: 'absolute' });
		// revert #landing to position:relative, remove height specificaiton
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

controller.addTween('#row-1', TweenMax.from( $('#row-1'), .25, {css:{right:'2000px'}, ease:Quad.easeInOut}));
controller.addTween('#row-2', TweenMax.from( $('#row-2'), .25, {css:{left:'2000px'}, ease:Quad.easeInOut}));
controller.addTween('#row-3', TweenMax.from( $('#row-3'), .25, {css:{right:'2000px'}, ease:Quad.easeInOut}));
controller.addTween('#row-4', TweenMax.from( $('#row-4'), .25, {css:{left:'2000px'}, ease:Quad.easeInOut}));
controller.addTween('#YOU', TweenMax.to( $('#YOU'), .25, {css:{color:'#183F67'}, ease:Quad.easeInOut}));
