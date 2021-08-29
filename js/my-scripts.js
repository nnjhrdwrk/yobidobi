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