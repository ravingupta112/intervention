/* Testimonial Slider */

$('.slick-slider-for').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    slidesPerRow: 2,
    rows: 1,
    prevArrow:"<button type='button' class='pull-left'><i class='fa fa-chevron-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='pull-right'><i class='fa fa-chevron-right' aria-hidden='true'></i></button>"
  });


/* Tooltip Button */

  $('.tooltip-text').hide();

  $('.tool1').mouseenter(function(){
    $('.tool-text1').show();
  });

  $('.tool1').mouseleave(function(){
    $('.tool-text1').hide();
  });

  $('.tool2').mouseenter(function(){
    $('.tool-text2').show();
  });

  $('.tool2').mouseleave(function(){
    $('.tool-text2').hide();
  });
  $('.tool3').mouseenter(function(){
    $('.tool-text3').show();
  });

  $('.tool3').mouseleave(function(){
    $('.tool-text3').hide();
  });
  $('.tool4').mouseenter(function(){
    $('.tool-text4').show();
  });

  $('.tool4').mouseleave(function(){
    $('.tool-text4').hide();
  });
  $('.tool5').mouseenter(function(){
    $('.tool-text5').show();
  });

  $('.tool5').mouseleave(function(){
    $('.tool-text5').hide();
  });
  $('.tool6').mouseenter(function(){
    $('.tool-text6').show();
  });

  $('.tool6').mouseleave(function(){
    $('.tool-text6').hide();
  });


  /* Form input styling */

  $('input').on('focus', function(){
    $(this).addClass('active');
    
    });
    
    $('input').on('blur', function(){
    $(this).removeClass('active');
    $(this).css('background-color', 'inherit');

    });

    $('.submit-btn').on('submit', function(e){
e.preventDefault();
      window.location.url="thank-you.html";
    });



/* Video Popup */

$('.video-sec-1 img').on('click', function(){
  $('.video-popup').show(1000);
});

$('.video-popup p').on('click', function(){
  $('.video-popup').hide();
});

/* Mobile Navigation */

$('.bar').on('click', function(){

  $('.nav-cta').show();
  $(this).hide();
})

$('.nav-close').on('click', function(){

  $('.nav-cta').hide();
  $('.bar').show();
  
})



