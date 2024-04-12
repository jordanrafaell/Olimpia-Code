"use strict";

$(document).ready(function () {
	/* Video Lightbox */
	if (!!$.prototype.simpleLightboxVideo) {
		$('.video').simpleLightboxVideo();
	}

	/*ScrollUp*/
	if (!!$.prototype.scrollUp) {
		$.scrollUp();
	}

	/*Responsive Navigation*/
	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").on("click", function () {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$(this).removeClass("open");
		} else {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			$(this).addClass("open");
		}
	});

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-mobile ul a").on("click", function () {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$("#nav-trigger span").removeClass("open");
		}
	});

	/* Sticky Navigation */
	if (!!$.prototype.stickyNavbar) {
		$('#header').stickyNavbar();
	}

	$('#content').waypoint(function (direction) {
		if (direction === 'down') {
			$('#header').addClass('nav-solid fadeInDown');
		} else {
			$('#header').removeClass('nav-solid fadeInDown');
		}
	});

});


/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({
		'overflow-y': 'visible'
	});

	/* WOW Elements */
	if (typeof WOW == 'function') {
		new WOW().init();
	}

	/* Parallax Effects */
	if (!!$.prototype.enllax) {
		$(window).enllax();
	}

});


// Carrossel
document.addEventListener("DOMContentLoaded", function () {
	var slides = document.getElementsByClassName("carousel__slide");
	var dots = document.getElementsByName("slides");
	var timer;

	function showSlide(slideIndex) {
		// Oculta todos os slides
		for (var i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}

		// Define o slide atual como visível
		slides[slideIndex].style.display = "block";

		// Marca o ponto (miniatura) correspondente como selecionado
		for (var i = 0; i < dots.length; i++) {
			dots[i].checked = (i === slideIndex);
		}
	}

	function startCarousel() {
		var currentSlide = 0;
		timer = setInterval(function () {
			// Move para o próximo slide
			currentSlide++;
			if (currentSlide >= slides.length) {
				currentSlide = 0; // Volta para o primeiro slide
			}
			showSlide(currentSlide);
		}, 2000); // Troca de slide a cada 5 segundos (5000 milissegundos)
	}

	function stopCarousel() {
		clearInterval(timer);
	}

	startCarousel();

	var thumbnails = document.querySelectorAll('.carousel__thumbnails label');
	thumbnails.forEach(function (thumbnail, index) {
		thumbnail.addEventListener('click', function () {
			stopCarousel(); // Pára a troca automática de slides
			showSlide(index); // Mostra o slide correspondente à miniatura clicada
		});
	});

	// Adicionando manipulador de eventos para os botões dentro dos slides
	var buttons = document.querySelectorAll('.carousel__slide button');
	buttons.forEach(function (button) {
		button.addEventListener('click', function (event) {
			event.stopPropagation(); // Impede a propagação do evento de clique para o carrossel
		});
	});
});
