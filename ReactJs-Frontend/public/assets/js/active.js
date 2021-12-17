/* =====================================
Template Name: Eshop
Author Name: Naimur Rahman
Author URI: http://www.wpthemesgrid.com/
Description: Eshop - eCommerce HTML5 Template.
Version:1.0
========================================*/
/*=======================================
[Start Activation Code]
=========================================
	01. Mobile Menu JS
	02. Sticky Header JS
	03. Search JS
	04. Slider Range JS
	05. Home Slider JS
	06. Popular Slider JS
	07. Quick View Slider JS
	08. Home Slider 4 JS
	09. CountDown
	10. Flex Slider JS
	11. Cart Plus Minus Button
	12. Checkbox JS
	13. Extra Scroll JS
	14. Product page Quantity Counter
	15. Video Popup JS
	16. Scroll UP JS
	17. Nice Select JS
	18. Others JS
	19. Preloader JS
=========================================
[End Activation Code]
=========================================*/ 
(function($) {
    "use strict";
     $(document).on('ready', function() {	
		//  isi data by leo
        $("#upfile1").click(function () {
            $("#file1").trigger('click');
        });

		/*====================================
			Mobile Menu
		======================================*/ 	
		$('.menu').slicknav({
			prependTo:".mobile-nav",
			duration:300,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			closeOnClick:true,
		});
		
		/*====================================
		03. Sticky Header JS
		======================================*/ 
		jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 50) {
				$('.middle-inner').addClass("sticky");
			} else {
				$('.middle-inner').removeClass("sticky");
			}
		});
		
		/*=======================
		  Search JS JS
		=========================*/ 
		$('.top-search a').on( "click", function(){
			$('.search-top').toggleClass('active');
		});

		$('.btnLoginSmall').on( "click", function(){
			$('.search-top').toggleClass('active');
		});
		
		/*=======================
		  Slider Range JS
		=========================*/ 
		$( function() {
			$( "#slider-range" ).slider({
			  range: true,
			  min: 0,
			  max: 500,
			  values: [ 120, 250 ],
			  slide: function( event, ui ) {
				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			  }
			});
			$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
			  " - $" + $( "#slider-range" ).slider( "values", 1 ) );
		} );
		
		/*=======================
		  Home Slider JS
		=========================*/ 
		$('.home-slider').owlCarousel({
			items:1,
			autoplay:true,
			autoplayTimeout:5000,
			smartSpeed: 400,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			autoplayHoverPause:true,
			loop:true,
			nav:true,
			merge:true,
			dots:false,
			navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
			responsive:{
				0: {
					items:1,
				},
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:3,
				},
				1170: {
					items:4,
				},
			}
		});
		
		/*=======================
		  Popular Slider JS
		=========================*/ 
		$('.popular-slider').owlCarousel({
			items:1,
			autoplay:true,
			autoplayTimeout:5000,
			smartSpeed: 400,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			autoplayHoverPause:true,
			loop:true,
			nav:true,
			merge:true,
			dots:false,
			navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
			responsive:{
				0: {
					items:1,
				},
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:3,
				},
				1170: {
					items:4,
				},
			}
		});
		
		/*===========================
		  Quick View Slider JS
		=============================*/ 
		$('.quickview-slider-active').owlCarousel({
			items:1,
			autoplay:true,
			autoplayTimeout:5000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			nav:true,
			loop:true,
			merge:true,
			dots:false,
			navText: ['<i class=" ti-arrow-left"></i>', '<i class=" ti-arrow-right"></i>'],
		});
		
		/*===========================
		  Home Slider 4 JS
		=============================*/ 
		$('.home-slider-4').owlCarousel({
			items:1,
			autoplay:true,
			autoplayTimeout:5000,
			smartSpeed: 400,
			autoplayHoverPause:true,
			nav:true,
			loop:true,
			merge:true,
			dots:false,
			navText: ['<i class=" ti-arrow-left"></i>', '<i class=" ti-arrow-right"></i>'],
		});
		
		/*====================================
		14. CountDown
		======================================*/ 
		$('[data-countdown]').each(function() {
			var $this = $(this),
				finalDate = $(this).data('countdown');
			$this.countdown(finalDate, function(event) {
				$this.html(event.strftime(
					'<div class="cdown"><span class="days"><strong>%-D</strong><p>Days.</p></span></div><div class="cdown"><span class="hour"><strong> %-H</strong><p>Hours.</p></span></div> <div class="cdown"><span class="minutes"><strong>%M</strong> <p>MINUTES.</p></span></div><div class="cdown"><span class="second"><strong> %S</strong><p>SECONDS.</p></span></div>'
				));
			});
		});
		
		/*====================================
		16. Flex Slider JS
		======================================*/
		(function($) {
			'use strict';	
				$('.flexslider-thumbnails').flexslider({
					animation: "slide",
					controlNav: "thumbnails",
				});
		})(jQuery);
		
		/*====================================
		  Cart Plus Minus Button
		======================================*/
		var CartPlusMinus = $('.cart-plus-minus');
		CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
		CartPlusMinus.append('<div class="inc qtybutton">+</div>');
		$(".qtybutton").on("click", function() {
			var $button = $(this);
			var oldValue = $button.parent().find("input").val();
			if ($button.text() === "+") {
				var newVal = parseFloat(oldValue) + 1;
			} else {
				// Don't allow decrementing below zero
				if (oldValue > 0) {
					var newVal = parseFloat(oldValue) - 1;
				} else {
					newVal = 1;
				}
			}
			$button.parent().find("input").val(newVal);
		});
		
		/*=======================
		  Extra Scroll JS
		=========================*/
		$('.scroll').on("click", function (e) {
			var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 0
				}, 900);
			e.preventDefault();
		});
		
		/*===============================
		10. Checkbox JS
		=================================*/  
		$('input[type="checkbox"]').change(function(){
			if($(this).is(':checked')){
				$(this).parent("label").addClass("checked");
			} else {
				$(this).parent("label").removeClass("checked");
			}
		});
		
		/*==================================
		 12. Product page Quantity Counter
		 ===================================*/
		$('.qty-box .quantity-right-plus').on('click', function () {
			var $qty = $('.qty-box .input-number');
			var currentVal = parseInt($qty.val(), 10);
			if (!isNaN(currentVal)) {
				$qty.val(currentVal + 1);
			}
		});
		$('.qty-box .quantity-left-minus').on('click', function () {
			var $qty = $('.qty-box .input-number');
			var currentVal = parseInt($qty.val(), 10);
			if (!isNaN(currentVal) && currentVal > 1) {
				$qty.val(currentVal - 1);
			}
		});
		
		/*=====================================
		15.  Video Popup JS
		======================================*/ 
		$('.video-popup').magnificPopup({
			type: 'iframe',
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
		/*====================================
			Scroll Up JS
		======================================*/
		$.scrollUp({
			scrollText: '<span><i class="fa fa-angle-up"></i></span>',
			easingType: 'easeInOutExpo',
			scrollSpeed: 900,
			animation: 'fade'
		});  
		
	/*====================================
		 Sidebar owner
	======================================*/
	$(".sidebar-dropdown > a").on('click',function() {
		$(".sidebar-submenu").slideUp(200);
		if (
		  $(this)
			.parent()
			.hasClass("activez")
		) {
		  $(".sidebar-dropdown").removeClass("activez");
		  $(this)
			.parent()
			.removeClass("activez");
		} else {
		  $(".sidebar-dropdown").removeClass("activez");
		  $(this)
			.next(".sidebar-submenu")
			.slideDown(200);
		  $(this)
			.parent()
			.addClass("activez");
		}
	  });
	  
	  $("#close-sidebar").on('click',function() {
		$(".page-wrapper").removeClass("toggled");
	  });
	  $("#show-sidebar").on('click',function() {
		$(".page-wrapper").addClass("toggled");
	  });



	  
		
	});
	
	/*====================================
	18. Nice Select JS
	======================================*/	
	$('select').niceSelect();
		
	/*=====================================
	 Others JS
	======================================*/ 	
	$( function() {
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 0, 500 ],
			slide: function( event, ui ) {
				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
		  " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	} );


	/*=====================================
	 Countdown JS
	======================================*/ 


	$( function(){
		var data = { 'data' :  [ 
		  { /*'days' : 0, */ 'hh' : 1, 'mm' : 30,'ss' : 10 },
		  { /*'days' : 2, */ 'hh' : 6, 'mm' : 40,'ss' : 60 },
		  { /*'days' : 1, */ 'hh' : 8, 'mm' : 40,'ss' : 60 },
		  { /*'days' : 1, */  'hh' : 6, 'mm' : 40,'ss' : 60 },
		  { /*'days' : 1, */ 'hh' : 8, 'mm' : 40,'ss' : 60 },
		  { /*'days' : 1, */  'hh' : 6, 'mm' : 40,'ss' : 60 }
		]}
		function getTimeRemaining(endtime) {
		  var t = Date.parse(endtime) - Date.parse(new Date());
		  var seconds = Math.floor((t / 1000) % 60);
		  var minutes = Math.floor((t / 1000 / 60) % 60);
		  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		  //var days = Math.floor(t / (1000 * 60 * 60 * 24));
		  return {
		  'total': t,
		  //'days': days,
		  'hours': hours,
		  'minutes': minutes,
		  'seconds': seconds
		  };
		}
		function initializeClock(classname, endtime, index) {
		  var hoursSpan = $('.'+classname+'.hours')[index];
		  var minutesSpan = $('.'+classname+'.minutes')[index];
		  var secondsSpan = $('.'+classname+'.seconds')[index];
		  function updateClock() {
			var t = getTimeRemaining(endtime);

			//$(daysSpan).html(  t.days );
			$(hoursSpan).html(  ('0' + t.hours).slice(-2) );
			$(minutesSpan).html(  ('0' + t.minutes).slice(-2) );
			$(secondsSpan).html(  ('0' + t.seconds).slice(-2) );

			if (t.total <= 0) {
			  clearInterval(timeinterval);
			}

		  }
		  updateClock();
		  var timeinterval = setInterval(updateClock, 1000);
		}
		for( var i=0;i<data.data.length;i++){
		  var deadline = new Date(Date.parse(new Date()) +  
				  data.data[i].hh * 60 * 60 * 1000 + 
				  data.data[i].mm * 60 * 1000 +
				  data.data[i].ss * 1000
		  );
		  initializeClock('clockdiv', deadline, i);
		}
	  });


	/*=====================================
	  Preloader JS
	======================================*/ 	
	//After 2s preloader is fadeOut
	$('.preloader').delay(2000).fadeOut('slow');
	setTimeout(function() {
	//After 2s, the no-scroll class of the body will be removed
	$('body').removeClass('no-scroll');
	}, 2000); //Here you can change preloader time


	  
})(jQuery);
