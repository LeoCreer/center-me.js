$.fn.center = function () {
	var element = this;
	centerContent();
	$(window).resize(function(){
		centerContent();
	});
	function centerContent(){
	    element.css("position","absolute");

	   	element.css("left", ($(window).width()-element.width())/2);
		element.css("top", ($(window).height()-element.height())/2);
	}

    return this;
}
