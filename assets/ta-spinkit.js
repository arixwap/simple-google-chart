/*
	Spinkit was original made by Tobi Asahlin
	This plugin is modified by Arix Wap
*/

// load css spinkit at head document
if($("#taSpinkitJS").attr('src')!=null) {
	var link = $("#taSpinkitJS").attr('src');
} else {
	var link = $("#ta-spinkit-js").attr('src');
}
css_link = link.replace('ta-spinkit.js', 'ta-spinkit.css')
$('head').append('<link rel="stylesheet" id="ta-spinkit-css" href="'+css_link+'" type="text/css" />');
// --------------------------- //

// spinner-1 set element //
$('.sk.sk-1').attr('color', function() {
	$(this).css('background-color', $(this).attr('color'));
});
$('.sk.sk-1').attr('speed', function() {
	var speed = $(this).attr('speed');
	$(this).css({
		'-webkit-animation' : 'sk-rotateplane '+speed+'s infinite ease-in-out',
		'animation' : 'sk-rotateplane '+speed+'s infinite ease-in-out',
	});
});
// --------------------------- //

// spinner-2 set element //
$('.sk.sk-2').append('<div class="double-bounce1"></div>');
$('.sk.sk-2').append('<div class="double-bounce2"></div>');
$('.sk.sk-2').attr('color', function(){
	$(this).find('.double-bounce1').css('background-color', $(this).attr('color'));
	$(this).find('.double-bounce2').css('background-color', $(this).attr('color'));
})
$('.sk.sk-2').attr('speed', function() {
	var speed = $(this).attr('speed');
	var delay = (speed/2) * -1;
	$(this).find('.double-bounce1').css({
		'-webkit-animation' : 'sk-bounce '+speed+'s infinite ease-in-out',
		'animation' : 'sk-bounce '+speed+'s infinite ease-in-out',
	});
	$(this).find('.double-bounce2').css({
		'-webkit-animation' : 'sk-bounce '+speed+'s infinite ease-in-out',
		'animation' : 'sk-bounce '+speed+'s infinite ease-in-out',
	});
	$(this).find('.double-bounce2').css({
		'-webkit-animation-delay' : delay+'s',
		'animation-delay' : delay+'s',
	});
});
// --------------------------- //

// spinner-3 set element //
$('.sk.sk-3').append('<div class="rect1" style="margin:0 0.5px"></div>');
$('.sk.sk-3').append('<div class="rect2" style="margin:0 0.5px"></div>');
$('.sk.sk-3').append('<div class="rect3" style="margin:0 0.5px"></div>');
$('.sk.sk-3').append('<div class="rect4" style="margin:0 0.5px"></div>');
$('.sk.sk-3').append('<div class="rect5" style="margin:0 0.5px"></div>');
$('.sk.sk-3').attr('color', function(){
	$(this).find('div').css('background-color', $(this).attr('color'));
})
$('.sk.sk-3').attr('speed', function() {
	var speed = $(this).attr('speed');
	var delay1 = (speed - 0.1) * -1;
	var delay2 = (speed - 0.2) * -1;
	var delay3 = (speed - 0.3) * -1;
	var delay4 = (speed - 0.4) * -1;
	$(this).find('div').css({
		'-webkit-animation' : 'sk-stretchdelay '+speed+'s infinite ease-in-out',
		'animation' : 'sk-stretchdelay '+speed+'s infinite ease-in-out',
	});
	$(this).find('.rect2').css({
		'-webkit-animation-delay' : delay1+'s',
		'animation-delay' : delay1+'s',
	});
	$(this).find('.rect3').css({
		'-webkit-animation-delay' : delay2+'s',
		'animation-delay' : delay2+'s',
	});
	$(this).find('.rect4').css({
		'-webkit-animation-delay' : delay3+'s',
		'animation-delay' : delay3+'s',
	});
	$(this).find('.rect5').css({
		'-webkit-animation-delay' : delay4+'s',
		'animation-delay' : delay4+'s',
	});
});
// --------------------------- //

// spinner-4 set element
$('.sk.sk-4').append('<div class="cube1"></div>');
$('.sk.sk-4').append('<div class="cube2"></div>');
$('.sk.sk-4').attr('color', function(){
	$(this).find('.cube1').css('background-color', $(this).attr('color'));
	$(this).find('.cube2').css('background-color', $(this).attr('color'));
})
$('.sk.sk-4').attr('speed', function() {
	var speed = $(this).attr('speed');
	var delay = speed / 2 * -1;
	$(this).find('.cube1').css({
		'-webkit-animation' : 'sk-cubemove '+speed+'s infinite ease-in-out',
		'animation' : 'sk-cubemove '+speed+'s infinite ease-in-out',
	});
	$(this).find('.cube2').css({
		'-webkit-animation' : 'sk-cubemove '+speed+'s infinite ease-in-out',
		'animation' : 'sk-cubemove '+speed+'s infinite ease-in-out',
		'-webkit-animation-delay' : delay+'s',
		'animation-delay' : delay+'s',
	});
});
// --------------------------- //

// spinner-5 set element
$('.sk.sk-5').attr('color', function(){
	$(this).css('background-color', $(this).attr('color'));
})
$('.sk.sk-5').attr('speed', function() {
	var speed = $(this).attr('speed');
	$(this).css({
		'-webkit-animation' : 'sk-scaleout '+speed+' infinite ease-in-out',
		'animation' : 'sk-scaleout '+speed+' infinite ease-in-out',
	});
});
// --------------------------- //

// spinner-6 set element
$('.sk.sk-6').append('<div class="dot1"></div>');
$('.sk.sk-6').append('<div class="dot2"></div>');
$('.sk.sk-6').attr('color', function(){
	$(this).find('.dot1').css('background-color', $(this).attr('color'));
	$(this).find('.dot2').css('background-color', $(this).attr('color'));
})
$('.sk.sk-6').attr('speed', function() {
	var speed = $(this).attr('speed');
	var delay = speed / 2 * -1;
	$(this).css({
		'-webkit-animation' : 'sk-rotate '+speed+'s infinite linear',
		'animation' : 'sk-rotate '+speed+'s infinite linear',
	});
	$(this).find('.dot1').css({
		'-webkit-animation' : 'sk-bounce '+speed+'s infinite ease-in-out',
		'animation' : 'sk-bounce '+speed+'s infinite ease-in-out',
	});
	$(this).find('.dot2').css({
		'-webkit-animation' : 'sk-bounce '+speed+'s infinite ease-in-out',
		'animation' : 'sk-bounce '+speed+'s infinite ease-in-out',
		'-webkit-animation-delay' : delay+'s',
		'animation-delay' : delay+'s',
	});
});
// --------------------------- //

// spinner-7 set element
$('.sk.sk-7').append('<div class="bounce1"></div>');
$('.sk.sk-7').append('<div class="bounce2"></div>');
$('.sk.sk-7').append('<div class="bounce3"></div>');
var length = (25.7/100) * $('.sk.sk-7').width();
$('.sk.sk-7 div').css({
	'width' : length,
	'height' : length,
});
$('.sk.sk-7').attr('color', function(){
	$(this).find('div').css('background-color', $(this).attr('color'));
})
$('.sk.sk-7').attr('speed', function() {
	var speed = $(this).attr('speed');
	var delay1 = speed / 4.375 * -1;
	var delay2 = speed / 8.75 * -1;
	$(this).find('div').css({
		'-webkit-animation' : 'sk-bouncedelay '+speed+'s infinite ease-in-out both',
		'animation' : 'sk-bouncedelay '+speed+'s infinite ease-in-out both',
	});
	$(this).find('.bounce1').css({
		'-webkit-animation-delay' : delay1+'s',
		'animation-delay' : delay1+'s',
	});
	$(this).find('.bounce2').css({
		'-webkit-animation-delay' : delay2+'s',
		'animation-delay' : delay2+'s',
	});
});
// --------------------------- //

// spinner-8 set element
$('.sk.sk-8').append('<div class="sk-circle1 sk-child"></div>');
$('.sk.sk-8').append('<div class="sk-circle2 sk-child"></div>');
$('.sk.sk-8').append('<div class="sk-circle3 sk-child"></div>');
$('.sk.sk-8').append('<div class="sk-circle4 sk-child"></div>');
$('.sk.sk-8').append('<div class="sk-circle5 sk-child"></div>');
$('.sk.sk-8').append('<div class="sk-circle6 sk-child"></div>');
$('.sk.sk-8').append('<div class="sk-circle7 sk-child"></div>');
$('.sk.sk-8').append('<div class="sk-circle8 sk-child"></div>');
$('.sk.sk-8').append('<div class="sk-circle9 sk-child"></div>');
$('.sk.sk-8').append('<div class="sk-circle10 sk-child"></div>');
$('.sk.sk-8').append('<div class="sk-circle11 sk-child"></div>');
$('.sk.sk-8').append('<div class="sk-circle12 sk-child"></div>');
$('.sk.sk-8').attr('color', function(){
	$('head').append('<style>.sk.sk-8 .sk-child:before{background-color:'+$(this).attr('color')+' !important;}</style>');
})
$('.sk.sk-8').attr('speed', function() {
	$(this).css({
		
	});
});
// --------------------------- //

// spinner-9 set element
$('.sk.sk-9').append('<div class="sk-cube sk-cube1"></div>');
$('.sk.sk-9').append('<div class="sk-cube sk-cube2"></div>');
$('.sk.sk-9').append('<div class="sk-cube sk-cube3"></div>');
$('.sk.sk-9').append('<div class="sk-cube sk-cube4"></div>');
$('.sk.sk-9').append('<div class="sk-cube sk-cube5"></div>');
$('.sk.sk-9').append('<div class="sk-cube sk-cube6"></div>');
$('.sk.sk-9').append('<div class="sk-cube sk-cube7"></div>');
$('.sk.sk-9').append('<div class="sk-cube sk-cube8"></div>');
$('.sk.sk-9').append('<div class="sk-cube sk-cube9"></div>');
$('.sk.sk-9').attr('color', function(){
	$(this).find('.sk-cube').css('background-color', $(this).attr('color'));
})
$('.sk.sk-9').attr('speed', function() {
	$(this).css({
		
	});
});
// --------------------------- //

// spinner-10 set element
$('.sk.sk-10').append('<div class="sk-circle1 sk-circle"></div>');
$('.sk.sk-10').append('<div class="sk-circle2 sk-circle"></div>');
$('.sk.sk-10').append('<div class="sk-circle3 sk-circle"></div>');
$('.sk.sk-10').append('<div class="sk-circle4 sk-circle"></div>');
$('.sk.sk-10').append('<div class="sk-circle5 sk-circle"></div>');
$('.sk.sk-10').append('<div class="sk-circle6 sk-circle"></div>');
$('.sk.sk-10').append('<div class="sk-circle7 sk-circle"></div>');
$('.sk.sk-10').append('<div class="sk-circle8 sk-circle"></div>');
$('.sk.sk-10').append('<div class="sk-circle9 sk-circle"></div>');
$('.sk.sk-10').append('<div class="sk-circle10 sk-circle"></div>');
$('.sk.sk-10').append('<div class="sk-circle11 sk-circle"></div>');
$('.sk.sk-10').append('<div class="sk-circle12 sk-circle"></div>');
$('.sk.sk-10').attr('color', function(){
	$('head').append('<style>.sk.sk-10 .sk-circle:before{background-color:'+$(this).attr('color')+' !important;}</style>');
})
$('.sk.sk-10').attr('speed', function() {
	$(this).css({
		
	});
});
// --------------------------- //

// spinner-11 set element
$('.sk.sk-11').append('<div class="sk-cube1 sk-cube"></div>');
$('.sk.sk-11').append('<div class="sk-cube2 sk-cube"></div>');
$('.sk.sk-11').append('<div class="sk-cube4 sk-cube"></div>');
$('.sk.sk-11').append('<div class="sk-cube3 sk-cube"></div>');
$('.sk.sk-11').attr('color', function(){
	$('head').append('<style>.sk.sk-11 .sk-cube:before{background-color:'+$(this).attr('color')+' !important;}</style>');
})
$('.sk.sk-11').attr('speed', function() {
	$(this).css({
		
	});
});
// --------------------------- //