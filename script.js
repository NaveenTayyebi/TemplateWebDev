(function (global) { //IIFE 

	document.addEventListener("DOMContentLoaded", function (event) { // same as DOMContentLoaded event listener
		$(window).scroll(function (event) { 
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
		$('a.about').on('click', function (event) { 
			window.scroll({top: 743, left: 0, behavior: 'smooth'});
		});
		$('a.cv').on('click', function (event) { 
			window.scroll({top: 1458, left: 0, behavior: 'smooth'});
		}); 
		// TODO: Edit the scroll position
		$('a.connect').on('click', function (event) { 
			window.scroll({top: 1858, left: 0, behavior: 'smooth'});
		});
	}); 
})(window);