// Organization Believable Creations
// Arther: Leo Creer
// Twitter: http://www.twitter.com/leocreer
// Version: 1.0
$.fn.center = function (options) {
	
	var element = this;
	
	var settings = $.extend({
		mobileView:options,
	}, options);
	
	centerContent();
	//infiniteLOOP();

	$(window).resize(function(){
		
		if ($(window).width() >= settings.mobileView){
			
			centerContent();	
		}else{
			console.log(settings.mobileView);
			removeCenterFromContent();
		}
	});

	function centerContent(){

		var widthDifference = $(window).width()-element.width();
		var heightDifference = $(window).height()-element.height();


	    element.css("position","absolute");
	   	element.css("left", widthDifference/2);
	   	console.log(element.width());
		element.css("top", heightDifference/2);
	}

	function removeCenterFromContent(){
		element.css("position","absolute");
		element.css("left","0");
		element.css("top","0");

	}

	// function infiniteLOOP(){
	// 	window.setInterval(function(){
	// 		centerContent();
	// 	}, 10);
	// }


    return this;
}
