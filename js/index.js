var controller = $.superscrollorama()
controller.addTween(
	10, 
	TweenMax.fromTo($('#NEVER'), 2, 
		{css:{backgroundPosition: '100% 33%'}, immediateRender:true, ease:Quad.easeInOut}, 
		{css:{backgroundPosition: '100% 2%'}}),
	750
);

controller.addTween(
	50, 
	TweenMax.fromTo($('#STOP'), 2, 
		{css:{backgroundPosition: '100% 50%'}, immediateRender:true, ease:Quad.easeInOut}, 
		{css:{backgroundPosition: '100% 10%'}}),
	750,
	100
);

controller.addTween('#CLIMBING',
	TweenMax.fromTo($('#CLIMBING'), 2, 
		{css:{backgroundPosition: '100% 25%'}, immediateRender:true, ease:Quad.easeInOut}, 
		{css:{backgroundPosition: '100% 50%'}}),
	750,
	100
);

// controller.addTween('#row-1', TweenMax.from( $('#row-1'), .25, {css:{right:'2000px'}, ease:Quad.easeInOut}));
controller.addTween('#row-2', TweenMax.from( $('#row-2'), .25, {css:{left:'2000px'}, ease:Quad.easeInOut}));
controller.addTween('#row-3', TweenMax.from( $('#row-3'), .25, {css:{right:'2000px'}, ease:Quad.easeInOut}));
controller.addTween('#row-4', TweenMax.from( $('#row-4'), .25, {css:{left:'2000px'}, ease:Quad.easeInOut}));

controller.addTween('#CAREER', TweenMax.to( $('#CAREER'), .25, {css:{color:'#54A5D9'}, ease:Quad.easeInOut}));
controller.addTween('#DO', TweenMax.to( $('#DO'), .25, {css:{color:'#54A5D9'}, ease:Quad.easeInOut}));
controller.addTween('#YOU', TweenMax.to( $('#YOU'), .25, {css:{color:'#54A5D9'}, ease:Quad.easeInOut}));
controller.addTween('#INTERACT', TweenMax.to( $('#INTERACT'), .25, {css:{color:'#54A5D9'}, ease:Quad.easeInOut}));
controller.addTween('#CONTACT', TweenMax.to( $('#CONTACT'), .25, {css:{color:'#000C34'}, ease:Quad.easeInOut}));


// controller.addTween('#team-row-1', TweenMax.from( $('#team-row-1'), .25, {css:{right:'2000px'}, ease:Quad.easeInOut}));
// controller.addTween('#team-row-2', TweenMax.from( $('#team-row-2'), .25, {css:{left:'2000px'}, ease:Quad.easeInOut}));
// controller.addTween('#team-row-3', TweenMax.from( $('#team-row-3'), .25, {css:{right:'2000px'}, ease:Quad.easeInOut}));
// controller.addTween('#team-row-4', TweenMax.from( $('#team-row-4'), .25, {css:{left:'2000px'}, ease:Quad.easeInOut}));
// controller.addTween('#team-row-5', TweenMax.from( $('#team-row-5'), .25, {css:{right:'2000px'}, ease:Quad.easeInOut}));
// controller.addTween('#team-row-6', TweenMax.from( $('#team-row-6'), .25, {css:{left:'2000px'}, ease:Quad.easeInOut}));