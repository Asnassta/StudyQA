$(document).ready(function() {
	/*======Menu-toggle=============*/
	
	$(".burger").on("click", function() {
		$(this).toggleClass("active");
		$(".header__mobile").slideToggle(333);
		if($(window).width() < 547) { 
			$("body").toggleClass('hidden');
		}
	});
	/*==========/menu-toggle=========*/
	/*===============FAQ=================*/
	$(".faq__question").on("click", function() {
		$(this).next().slideToggle(333);
		$(this).toggleClass('active');
	});

/*===============card-mentors___more=================*/
	$(".card-mentors__button-more").on("click", function(event) {
		event.preventDefault();
		$(".card-mentors__more").slideToggle(333);
		$(this).toggleClass('active');
	});

  /*===============card-mentors__info-more=================*/
  $(".card-mentors__btn-more").on("click", function(event) {
    event.preventDefault();
    $(this).next().fadeToggle(333);
    $(this).toggleClass('active');
  });

  /*=========Smooth scroll=============*/
  $("[data-scroll]").on("click", function(event) {
  event.preventDefault();
 
      blockID = $(this).data('scroll');
     
      blockOffset = $('#'+blockID).offset().top;
 
    $("html, body").animate ({
      scrollTop: blockOffset - 30
    }, 500);
  });
/*=========/smooth scroll=============*/


 /*=============Navbar-langcurrency================*/
 $('*').click(function(e){
     if(!$(e.target).is('.parent')){
        $('.navbar-langcurrency__dropdown').fadeOut(222);
     }
 });
 $(".navbar-lang__icon-drop").on("click", function(event) {
   event.preventDefault();
   $(this).next().fadeIn(222);
 });

 $(".navbar-langcurrency__dropdown a").on("click", function(event) {
     event.preventDefault();
     src = $(this).find('img').attr('src');
     $(this).parent().parent().find('.parent').attr('src', src);
     $(this).parent().fadeOut(222);
  });

 /*===============Card-consultation_more=============*/
 $(".card-consultation__btn-more").on("click", function(event) {
   event.preventDefault();
   $(".card-consultation__item_more").slideToggle(333);
   $(this).toggleClass('active');
 });
 /*===============/card-consultation_more=============*/

 /*===============Adviser-description__more=============*/
 $(".adviser-description__more").on("click", function(event) {
   event.preventDefault();
   $(".adviser-description__text_more").slideToggle(333);
   $(this).fadeOut(111);
 });
 /*===============/adviser-description__more=============*/

 /*===============Service-popup=================*/
  $(".service-adviser__more").on("click", function(event) {
    event.preventDefault();
   
    n = $(this).attr('attr-popup');
    

    $("#service-popup_"+n).fadeIn(333);

    $("#service-popup_"+n).css('top', $(window).scrollTop()+'px');
    $("#service-popup_"+n+" .service-popup__inner").fadeIn(333);
    $('body').addClass("hidden");
  });
  $(".service-popup__close,  .closex, btn-close").on("click", function(event) {
    event.preventDefault();
    $(".service-popup").fadeOut('222');
    $(".service-popup__inner").fadeOut(222);
    $('body').removeClass("hidden");
  });
/*==============/service-popup=================*/


	/*======Select-styler=============*/

	$(".my-select").chosen({
        width:"100%",
	});
	/*======/select=============*/


	/*======Slider=============*/
	$('.intro-card__slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		autoplay: true,
  		prevArrow: $('.intro-card__arrow-prev'),
		  nextArrow: $('.intro-card__arrow-next'),
  		dots: true
	});
	/*=============/slider==============*/

  /*======Slider-adviser=============*/
  $('.reviews-adviser__slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.reviews-adviser__arrow_prev'),
      nextArrow: $('.reviews-adviser__arrow_next'),
      responsive: [
      {
       breakpoint: 766,
      settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.reviews-adviser__arrow_prev'),
        nextArrow: $('.reviews-adviser__arrow_next'),
    }
      },
      {
       breakpoint: 415,
      settings: {
        infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.reviews-adviser__arrow_prev'),
      nextArrow: $('.reviews-adviser__arrow_next'),
    }
      }
  ]

  });
  /*=============/slider==============*/



	
});


/*========Owl-slider==========*/
function owlcarouselIn()
{
	
	
	
	if( $(' .owl-carousel').length > 0 ) {
        $(' .owl-carousel').each(function($i, $owl){
          let $loop = false;
		  
		  
		  
		 $(' .country-item__name').each(function($i, $cd){
	         if($($cd).text().length >= 11)
	         {
		      
		         $($cd).css('min-width', '79px');
	         }
	     });
      
 

          if(($($owl).find('.country-item').length) > 2 )
          {
          	$loop = true;
          }

          if($(this).hasClass('popular__country') == true)
          {
     			$m = 60;

     			$max = 6;

          $center = false;
          }
          else
          {

          	   $m = 15;
          	   $max = 4;
               if($loop == true)
               {
                 $center = true;
               }
               else
               {
                $center = false;
               }
          }
       
          if( $center == true)
          {
            $($owl).addClass('center');
          }
 


          $($owl).owlCarousel({
            dots: false,
            nav: true,
            center: $center,
            loop: $loop,
            autoWidth:true,
            responsive:{
               0:{
                   items:2,
                   margin: 15
               },
               600:{
                   items:2,
                    margin: $m
               },
               // 1000:{
               //     items:$max,
               //     margin: $m,

               // }
            }
          });



        });
      }
}


	
$(window).on({
    load: function() {
	    
      owlcarouselIn();
      
    }
  });
/*========/Owl-slider==========*/
