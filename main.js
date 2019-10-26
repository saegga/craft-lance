$(document).ready(function(){

	var headerOffset = $('.mid_line').offset().top;

	$(window).scroll(function(){
		if($(this).scrollTop() >= headerOffset){
			if(!$('.mid_line').hasClass("fixed")){
				$('.mid_line').addClass("fixed");
			}
		}else{
				$('.mid_line').removeClass("fixed");
			}
	});
});
