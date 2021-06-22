(function (global) { //IIFE 
	document.addEventListener("DOMContentLoaded", function (event) { 
    
		$(window).scroll(function (event) { 
			if (window.scrollY > 680) { 
				$('#header').css({backgroundColor: '#ffffff'});
				$('.name').css({color: 'black'});
				$('a.about').css({color: 'black'});
				$('a.education').css({color: 'black'});
        $('a.work').css({color: 'black'});
        $('a.certificates').css({color: 'black'});
        $('a.volunteer').css({color: 'black'});
        $('a.tutoring').css({color: 'black'});
				$('a.connect').css({color: 'black'});
			} else { 
				$('#header').css({backgroundColor: 'transparent'});
				$('.name').css({color: 'grey'});
        $('a.about').css({color: 'grey'});
        $('a.education').css({color: 'grey'});
        $('a.work').css({color: 'grey'});
        $('a.certificates').css({color: 'grey'});
        $('a.volunteer').css({color: 'grey'});
        $('a.tutoring').css({color: 'grey'});
        $('a.connect').css({color: 'grey'});
			}  
		}); 
		$('.name').on('click', function (event) { 
			window.scroll({top: 0, left: 0, behavior: 'smooth'}); 
		}); 
		$('a.about').on('click', function (event) { 
			window.scroll({top: 790, left: 0, behavior: 'smooth'});
		});
		$('a.education').on('click', function (event) { 
			window.scroll({top: 1460, left: 0, behavior: 'smooth'});
		}); 
		$('a.work').on('click', function (event) { 
			window.scroll({top: 2098, left: 0, behavior: 'smooth'});
		});
    $('a.certificates').on('click', function (event) { 
      window.scroll({top: 2740, left: 0, behavior: 'smooth'});
    });
    $('a.volunteer').on('click', function (event) { 
      window.scroll({top: 3378, left: 0, behavior: 'smooth'});
    });
    $('a.tutoring').on('click', function (event) { 
      window.scroll({top: 4018, left: 0, behavior: 'smooth'});
    });
    $('a.connect').on('click', function (event) { 
      window.scroll({top: 4656, left: 0, behavior: 'smooth'});
    });
    $('button.edu-button').on('click', function (event) { 
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
    var velocity = 0.5;
    function update(){ 
    var pos = $(window).scrollTop()+3450; 
    $('.rocket-engine').each(function() { 
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height()-18;
        $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) +  'px'); 
       }); 
       }; 
    $(window).bind('scroll', update);

  //   var mandrill = require('node-mandrill')('5JvGfteVplsTn0CK-6QS-K_F');
  //   function sendEmail ( _name, _email, _subject, _message) {
  //   mandrill('/messages/send', {
  //       message: {
  //           to: [{email: _email , name: _name}],
  //           from_email: 'noreply@yourdomain.com',
  //           subject: _subject,
  //           text: _message
  //       }
  //   }, function(error, response){
  //       if (error) console.log( error );
  //       else console.log(response);
  //   });
  // }
	}); 
})(window);