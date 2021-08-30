$('.slider__item').slick({
	 dots: true,
	 arrows : false,
	 autoplay: true,
	 autoplaySpeed : 2000
});

let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
});


$(document).ready(function() {
	$('.hamburger').click(function(event) {
		$('.hamburger,.s-filter').toggleClass('active');				
	});
});



$(document).ready(function() {

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

});