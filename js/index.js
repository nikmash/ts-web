$(document).ready(function() {
	$(window).scroll(function(){
		var headerpos = 50;
		var pos = $(window).scrollTop();
		if(pos > headerpos) {
		    $('.header').css({
		      'background-color': 'rgba(0,0,0,0.7)',
		      'transition': 'background-color 0.3s',
		      '-webkit-transition': 'background-color 0.3s'
		    });
		} else {
		    $('.header').css({
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
