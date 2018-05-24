
module.exports = function() {

	$(function(){

		//////////////////////
		// BTN - go to top
		//////////////////////
		const $pageWrapTag = Modernizr.testProp('webkitAppearance') ? $("body, html") : $("html");
		const $goto = $(".gotop");

		$goto.on('click', function(e) {
			$pageWrapTag.animate({scrollTop:0}, 800)
			e.preventDefault();
		});
		
		//////////////////////
		// BTN - language toggle
		//////////////////////
		const $lang = $(".lang");
		const $langBtn = $(".lang_btn");

		$langBtn.on('click', function(e) {
			$lang.toggleClass("is-open");
			e.preventDefault();
		});

		//////////////////////
		// SLIDE - each cv's works
		//////////////////////
		$('.slide').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			accessibility: false,
			autoplaySpeed: 1500,
			arrows: false,
			fade: true,
			speed: 100,
			swipe: true,
			pauseOnHover: false
		});

		//////////////////////
		// UserAgent
		//////////////////////
		const e = navigator.userAgent;

		if( e.indexOf("Android") != -1 ) {
			$("html").addClass("android");
		}
	});
};
