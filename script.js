(function (global) { //IIFE 

	document.addEventListener("DOMContentLoaded", function (event) { 

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
		$('.name').on('click', function (event) { 
			window.scroll({top: 0, left: 0, behavior: 'smooth'}); 
		}); 
		$('a.about').on('click', function (event) { 
			window.scroll({top: 743, left: 0, behavior: 'smooth'});
		});
		$('a.cv').on('click', function (event) { 
			window.scroll({top: 1458, left: 0, behavior: 'smooth'});
		}); 
		$('a.connect').on('click', function (event) { 
			window.scroll({top: 2105, left: 0, behavior: 'smooth'});
		});
		$('#wall button').on('click', function (event) { 
			console.log($('#wall button.quote').offset()); 
			$('#wall h1').fadeOut(); 
			$('#wall h3').fadeOut();
			$('#wall table').fadeOut();
			$('#wall button.quote').fadeOut();
			$('#wall .form').delay(375).fadeIn();

		});
		$('#wall .form button.submit').on('click', function (event) { 
			console.log($('#wall .form button.submit').offset()); 

		});

	}); 
})(window);