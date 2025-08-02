/*
	Theory by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

	// Off-Canvas Navigation.

		// Navigation Panel.
			$(
				'<div id="navPanel">' +
					$('#nav').html() +
					'<a href="#navPanel" class="close"></a>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left'
				});

		// Fix: Remove transitions on WP<10 (poor/buggy performance).
			if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
				$('#navPanel')
					.css('transition', 'none');

		// Sticky Navbar Functionality
		var $header = $('.header');
		var $promoBlock = $('.promo-block');
		var $callForPapersSection = $('#call-for-papers');
		var headerHeight = $header.height();
		
		// Hide threshold - navbar disappears after scrolling 100px
		var hideThreshold = 1399;
		
		// Calculate trigger point when Call for Papers section comes into view
		var callForPapersTrigger = $callForPapersSection.offset().top - headerHeight -200;

		$window.on('scroll', function() {
			var scrollTop = $window.scrollTop();
			
			if (scrollTop <= hideThreshold) {
			} else if (scrollTop >= callForPapersTrigger) {
				
			} else {
				
			}
		});

		// Recalculate trigger point on window resize
		$window.on('resize', function() {
			callForPapersTrigger = $callForPapersSection.offset().top - headerHeight;
		});

		// Smooth scrolling for navigation links
		$('.nav-item-child[href^="#"]').on('click', function(e) {
			e.preventDefault();
			
			var target = $(this.getAttribute('href'));
			if (target.length) {
				var scrollTop = target.offset().top - headerHeight - 20;
				
				$('html, body').stop().animate({
					scrollTop: scrollTop
				}, 600, 'swing');
			}
		});

	});

})(jQuery);
