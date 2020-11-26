(function($){
	"use strict";
	jQuery(document).ready(function($){
		
		$(".product-list").masonry();
		$(".manu-trigger").on("click",function(){
			$(".off-canvarce-manu,.off-canvarce-overlay").addClass("active");
			return false;
		})
		$(".manu-close,.off-canvarce-overlay").on("click",function(){
			$(".off-canvarce-manu,.off-canvarce-overlay").removeClass("active");
			
		})
	});
	jQuery(window).load(function(){
		
	});
	
}(jQuery));