$(document).ready(function() {
	$(window).scroll(function(){
		var headerpos = 50;
		var pos = $(window).scrollTop();
		if(pos > headerpos) {
		    $('.header-landing').css({
		      'background-color': 'rgba(0,0,0,0.7)',
		      'transition': 'background-color 0.3s',
		      '-webkit-transition': 'background-color 0.3s'
		    });
		} else {
		    $('.header-landing').css({
		    	'background-color': 'inherit',
		    	'transition': 'background-color 0.3s',
		    	'-webkit-transition': 'background-color 0.3s'
	      });
		}

		var signuppos = 400;

		if(pos > signuppos) {
			$('#nav-button').css({
				'display': 'block',
				'transtion': 'display 1s'
			})
		} else {
			$('#nav-button').css({
				'display': 'none'
			})
		}
	});

	$('.slick-carousel').slick({
		centerMode: true,
		arrows: true,
		slidesToShow: 3,
		centerPadding: '40px',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: true,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 2
				}
			}
		]
	});

	$('a.login-window').click(function() {

  	//Getting the variable's value from a link
    var loginBox = $(this).attr('href');

    //Fade in the Popup
    $(loginBox).fadeIn(300);

    //Set the center alignment padding + border see css style
    var popMargTop = ($(loginBox).height() + 24) / 2;
    var popMargLeft = ($(loginBox).width() + 24) / 2;

    $(loginBox).css({
        'margin-top' : -popMargTop,
        'margin-left' : -popMargLeft
    });

    // Add the mask to body
    $('body').append('<div id="mask"></div>');
    $('#mask').fadeIn(300);

    return false;
	});

	// When clicking on the button close or the mask layer the popup closed
	// $('a.close, #mask').live('click', function() {
	//   $('#mask , .login-popup').fadeOut(300 , function() {
	//     $('#mask').remove();
	// 	});
	// 	return false;
	// });

	// Slick Carousel
	// $('.slick-carousel').slick({
	//   centerMode: true,
	//   centerPadding: '60px',
	//   slidesToShow: 3,
	//   responsive: [
	//     {
	//       breakpoint: 768,
	//       settings: {
	//         arrows: true,
	//         centerMode: true,
	//         centerPadding: '40px',
	//         slidesToShow: 3
	//       }
	//     },
	//     {
	//       breakpoint: 480,
	//       settings: {
	//         arrows: true,
	//         centerMode: true,
	//         centerPadding: '40px',
	//         slidesToShow: 1
	//       }
	//     }
	//   ]
	// });

});
