$('.navbar-toggler').click(function(){
    $('.navbar').toggleClass("menue-on");
  });

  new Splide( '#image-carousel', {
    perPage: 3,
   
    type     : 'loop',
    focus    : 0,

		breakpoints: {
			768: {
				perPage: 1,
			},
		},
  } ).mount();