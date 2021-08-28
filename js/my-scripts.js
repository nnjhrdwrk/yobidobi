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


