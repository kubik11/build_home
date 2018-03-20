$(function() {
	//  Event to hide search field
	$('.cross').click(function(){
		$(this).parent().fadeOut(function(){
			$('.manu-search li').each(function(	i, elem){
				if(i!== 1){
					$(elem).fadeIn();
				}	
				console.log(elem);
			});
		});
	});
	$('.to-search').click(function(){
		$('.manu-search li').each(function(){
			$(this).css('display', 'none');
		});
		$('.search-input').fadeIn();
	});
	$(document).ready(function(){
	  $(".top-carousel").owlCarousel({
	  	items: 1,
	  	nav: true,
	  	navText: ['<svg class="icon icon-arrow-left2"><use xlink:href="#icon-arrow-left2"></use><symbol id="icon-arrow-left2" viewBox="0 0 32 32"><title>arrow-left2</title><path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path></symbol></svg>', '<svg class="icon icon-arrow-right2"><use xlink:href="#icon-arrow-right2"></use><symbol id="icon-arrow-right2" viewBox="0 0 32 32"><title>arrow-right2</title><path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path></symbol></svg>'],
	  	dots: true
	  });
	});
});

