$(function () {
	
	var slider;
	$(document).ready(function(){
		setMainimage();	
	});
	
	$(window).on("load", function() {
		setSlider();
		
	});
	
	$(window).on("resize", function() {
		
		location.reload();
		
	});
	
	$(document).on('click', '.sound_button', function(){
		if($(this).hasClass("sound_off")) {
			$(this).removeClass("sound_off");
			$(this).addClass("sound_on");
			$(this).html('<i class="fa fa-volume-up" aria-hidden="true">');
			$("video").prop('muted', true);
		} else {
			$(this).removeClass("sound_on");
			$(this).addClass("sound_off");
			$(this).html('<i class="fa fa-volume-off" aria-hidden="true"></i>');
			$("video").prop('muted', true);
			$parent = $(this).parent();
			console.log($parent);
			$("video",$parent).prop('muted', false);
		}
	});
	
	function setMainimage() {
		
		if($(window).width() < 960) {
			//鬮倥＆
			var main_image_H = $(window).height();
			$('#main_image ul li').css('height' , main_image_H + 'px');
		} 
	}
	
	function setSlider() {

		if($(window).width() < 960) {
			
			slider = $('.landscape > .bxslider').bxSlider({
					pause: 5000,
					auto: true,
					speed: 2000,
					startSlide: 0
				});
			
			$num = $('.portrait > .bxslider li').length;
			if ($num > 1) {
				slider = $('.portrait > .bxslider').bxSlider({
					pause: 5000,
					auto: true,
					speed: 2000,
					startSlide: 0
				});
			}
		} else {
			$num = $('.landscape > .bxslider li').length - 1;
			slider = $('.bxslider').bxSlider({
				pause: 5000,
				speed: 2000,
				slideWidth: 1000,
				minSlides: 3,
				maxSlides: 3,
				moveSlides: 1,
				slideMargin: 0,
				startSlide: $num
			});
			
			$('.sound_button').removeClass("sound_off");
			$('.sound_button').addClass("sound_on");
			$("video").prop('muted', true);
		}
	}

	
	
});
