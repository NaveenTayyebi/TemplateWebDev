(function (global) { //IIFE 

	document.addEventListener("DOMContentLoaded", function (event) { // same as DOMContentLoaded event listener

		$(window).scroll( function (event) { 
			if (window.scrollY > 50) { 
				$('#header').css({backgroundColor: '#ffffff'});
				$('.name').css({color: 'black'});
				$('a.about').css({color: 'black'});
				$('a.cv').css({color: 'black'});
				$('a.connect').css({color: 'black'});
			} else { 
				$('#header').css({backgroundColor: 'transparent'});
				$('.name').css({color: 'grey'});
				$('a.about').css({color: 'grey'});
				$('a.cv').css({color: 'grey'});
				$('a.connect').css({color: 'grey'});
			}
		}); 

	}); 
})(window);