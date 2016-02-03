// @Twitter https://www.twitter.com/leocreer
// @Linkedin https://www.linkedin.com/in/leocreer

angular.module('CenterMeDirective',[]);

angular.module('CenterMeDirective').directive('centerMe', function() {

	return{
		restrict: 'A',
		scope:true,
		link:function(scope, element){
			var elementHeight = element[0].offsetHeight / 2;
			var elementWidth = element[0].offsetWidth / 2;
			var windowHeight = window.innerHeight / 2;
			var windowWidth = window.innerWidth / 2;
			var y = windowHeight - elementHeight;
			var x = windowWidth - elementWidth;
			console.log(elementHeight);
			function centerElement(){
				element.css({
					'position':'absolute',
					'-webkit-transform' : 'translate3d('+ x +'px, ' + y + 'px, 0px)',
					'-moz-transform'    : 'translate3d('+ x +'px, ' + y + 'px, 0px)',
					'-ms-transform'     : 'translate3d('+ x +'px, ' + y + 'px, 0px)',
					'-o-transform'      : 'translate3d('+ x +'px, ' + y + 'px, 0px)',
					'transform'         : 'translate3d('+ x +'px, ' + y + 'px, 0px)'
				});			
			}

			setInterval(function(){
				elementHeight =  element[0].offsetHeight / 2;
				elementWidth = element[0].offsetWidth / 2;
				windowHeight = window.innerHeight / 2;
				windowWidth = window.innerWidth / 2;
				y = windowHeight - elementHeight;
				x = windowWidth - elementWidth;
				centerElement();
			});
		}
	}


});