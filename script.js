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
    $('#third-wall button.edu-button').on('click', function (event) { 
         window.open("https://www.linkedin.com/in/naveen-tayyebi-49a40945/", "_blank");
    });
		$('#wall button.quote').on('click', function (event) {  
			$('#wall h1').fadeOut(); 
			$('#wall h3').fadeOut();
			$('#wall table').fadeOut();
			$('#wall button.quote').fadeOut();
			$('#wall .form').delay(475).fadeIn();
		});
		$('#wall .form button.submit').on('click', function (event) {
			$('#wall .form').fadeOut(); 
			$('#wall .form-two').delay(475).fadeIn(); 
			setTimeout(myFunc, 1500); 
		});
		function myFunc () {
			$('.circle-loader').toggleClass('load-complete');
			$('.checkmark').toggle(); 
			$('.form-two div.output-message').fadeIn();
			$('.form-two div.output-message-two').fadeIn();
			$('.form-two button.submit-reset').fadeIn();
		}
		$('#wall .form-two button.submit-reset').on('click', function (event) {
			$('#wall .form-two').fadeOut(); 
			$('#wall h1').delay(475).fadeIn(); 
			$('#wall h3').delay(475).fadeIn();
			$('#wall table').delay(475).fadeIn();
			$('#wall button.quote').delay(475).fadeIn();
		});

	}); 
})(window);