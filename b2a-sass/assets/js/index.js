jQuery(function($) {
	$('.header-nav__wrapper').on('click', function() {
		// $('.nav--responsive').toggle();
		$('.nav--responsive').addClass('is-open');
		$('overlay').toggle();
		$('.header-nav-burger').addClass('is-animate');
		setTimeout(function() {
			$('.overlay').addClass('is-open');
		}, 500);
		$('.overlay').toggle();
		$('body').addClass('overflow');
	});
	$('.overlay').on('click', function() {
		// $('.nav--responsive').toggle();
		$('.nav--responsive').removeClass('is-open');
		$('.overlay').toggle();
		$('.header-nav-burger').removeClass('is-animate');
		$('body').removeClass('overflow');
	});

	var heroHeight;
	var headerHeight;
	var screenHeight;
	
	$(window).on('resize', function() {

    // recuperation de la hauteur
    windowHeight = $(window).innerheight();
    
    // recuperation de la hauteur de header
	headerHeight = $('header').height();
    
    // calcule des deux 
    heroHeight = windowHeight - headerHeight;

    // Ajout du css au hero
    $('.hero__home').css('height', heroHeight);
    console.log(heroHeight);
    });


});
