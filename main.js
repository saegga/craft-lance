$(document).ready(function(){

	var headerOffset = $('.mid_line').offset().top;

	$('.mobile_overlay').on('click',function(){
		closeMenu();
	});

	$(window).on('scroll resize', function(){
		headerOffset = headerOffset > 0 ? headerOffset : $('.mid_line').offset().top;
		if($(this).scrollTop() > headerOffset){
			if(!$('.mid_line').hasClass("fixed")){
				$('.mid_line').addClass("fixed");
			}
		}else{
				$('.mid_line').removeClass("fixed");
		}
	});

	$('.mob-menu i').on('click', function(){

		if($(this).hasClass('close')){
			openMenu();
		}else{
			closeMenu();
		}
	});
	$( ".mob-sidebar" ).on( "swiperight", function(e){
		e.preventDefault();
		closeMenu();
	});
	function openMenu(){
		$('body').css({'overflow': "hidden"});

		$('.mob-menu i').removeClass('close');
		$('.mob-menu i').addClass('open');

		$('.mob-sidebar').css({"transform" : "translateX(0%)"});
		$('.mobile_overlay').show().animate({"opacity": "1"}, 500);
	}
	function closeMenu(){
		$('body').css({'overflow': "visible"});

		$('.mob-menu i').removeClass('open');
		$('.mob-menu i').addClass('close');

		$('.mob-sidebar').css({"transform" : "translateX(105%)"});
		$('.mobile_overlay').hide().animate({"opacity" : "0"}, 300);
	}
});
