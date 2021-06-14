(function ($) {
    "use strict";
    
    //Jarallax Activation
    $('.jarallax').jarallax({
      speed: 0.3
  });

   /*------------------------------
        Parallax Motion Animation 
    -------------------------------*/
    $('.scene').each(function () {
      new Parallax($(this)[0]);
  });


    // Slick Slider Activation
    var $slickActivation = $('.slick__activation');
    if($slickActivation.length > 0){
        $slickActivation.slick({
          prevArrow:'<button class="prev_arrow"><span class="ti-angle-left"></span> </button>',
          nextArrow:'<button class="next_arrow"><span class="ti-angle-right"></span></button>',
        });
    };

    $('.mobile_menu_open').initMM({
      enable_breakpoint: true,
      mobile_button: true,
      breakpoint: 767,
      menu_class: 'navbar_mobile_menu'
  });
   

    
})(jQuery);	