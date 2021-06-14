(function ($) {
    "use strict";

    // Slick Slider Activation
    var $slickActivation = $('.slick_activation');
    if($slickActivation.length > 0){
        $slickActivation.slick({
          prevArrow:'<button class="prev_arrow"><span class="ti-angle-left"></span> </button>',
          nextArrow:'<button class="next_arrow"><span class="ti-angle-right"></span></button>',
        });
    };
    
    // Slick Slider Activation
    $('.zoom_tab_img').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 4,
        arrows:true,
        vertical: true,
        focusOnSelect: true,
        asNavFor: '.product_zoom_main_img',
        prevArrow:'<button class="prev_arrow"><span class="ti-angle-up"></span> </button>',
        nextArrow:'<button class="next_arrow"><span class="ti-angle-down"></span></button>',
        responsive:[
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 4,
                vertical: false,  
                dots: true,
                  arrows: false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                  slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              }
            },
        ]

    });
    
    // Slick Slider Activation
    $('.product_zoom_main_img').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
        arrows:false,
        vertical: true,
        asNavFor: '.zoom_tab_img',
    });
    



     // Slick Slider2 Activation
     $('.zoom_tab_img2').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 4,
        arrows:true,
        focusOnSelect: true,
        asNavFor: '.product_zoom_main_img2',
        prevArrow:'<button class="prev_arrow"><span class="ti-angle-left"></span> </button>',
        nextArrow:'<button class="next_arrow"><span class="ti-angle-right"></span></button>',
        responsive:[
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 4,
                vertical: false,  
                dots: true,
                  arrows: false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                  slidesToShow: 4,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              }
            },
        ]

    });
    // Slick Slider2 Activation
    $('.product_zoom_main_img2').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
        arrows:false,
        asNavFor: '.zoom_tab_img2',
    });
    
    //Language Toggle Activation
    $(".switcher_language > a").on("click", function() {
        $(this).toggleClass('active');
        $('.lng_dropdown').slideToggle('medium');
    }); 
    
    //Currency Toggle Activation
    $(".switcher_currency > a").on("click", function() {
        $(this).toggleClass('active');
        $('.dropdown_currency').slideToggle('medium');
    }); 
    
    //Page Links Toggle Activation
    $(".page_top_links > a").on("click", function() {
        $(this).parent().toggleClass('active');
        
    }); 

    //Search Box addClass removeClass
    $('.search__box > a').on('click', function(){
        $('.page_search_box').addClass('active')
    });
    $('.search_close > span').on('click', function(){
        $('.page_search_box').removeClass('active')
    });
    
    //Shopping Cart addClass removeClass
    $('.shopping__cart > a').on('click', function(){
        $('.dropdown__minicart,.body__overlay').addClass('active')
    });
    $('.minicart__close > span,.body__overlay').on('click', function(){
        $('.dropdown__minicart,.body__overlay').removeClass('active')
    });
    
    //mobile other option addClass removeClass
    $('.open_mobile_other_option > a').on('click', function(){
        $('.mobile_other_option,.body__overlay').addClass('active')
    });
    $('.close_mobile_other_option > a,.body__overlay').on('click', function(){
        $('.mobile_other_option,.body__overlay').removeClass('active')
    });

    //Offcanvas Filter Activation
    $('.widget_filter_btn span').on('click', function(){
        $('.offcanvas_widget_filter,.body__overlay').addClass('active')
    });
    $('.filter__close span,.body__overlay').on('click', function(){
        $('.offcanvas_widget_filter,.body__overlay').removeClass('active')
    });
    
    
    
    /*---Off Canvas Menu---*/
     var $mobailcanvasNav = $('.home_main_menu'),
     $mobailcanvasNavSubMenu = $mobailcanvasNav.find('.sub-menu');
    $mobailcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="ion-ios-arrow-down"></i></span>');
    
    $mobailcanvasNavSubMenu.slideUp();
    
    $mobailcanvasNav.on('click', 'li a i, li .menu-expand', function(e) {
        var $this = $(this);
        if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.siblings('ul').slideUp('slow');
            }else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
            }
        }
        if( $this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/) ){
          $this.parent().toggleClass('menu-open');
        }else if( $this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/) ){
          $this.toggleClass('menu-open');
        }
    });
  


    
    //Quantity Counter
    $(".pro-qty").append('<a href="#" class="inc qty-btn">+</a>');
      $(".pro-qty").prepend('<a href="#" class= "dec qty-btn">-</a>');
    
      $(".qty-btn").on("click", function (e) {
        e.preventDefault();
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.hasClass("inc")) {
          var newVal = parseFloat(oldValue) + 1;
        } else {
          // Don't allow decrementing below zero
          if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
          } else {
            newVal = 0;
          }
        }
        $button.parent().find("input").val(newVal);
    });
    
    
    //Countdown Activation
    $('[data-countdown]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<div class="countdown__date"><div class="countdown__list"><div class="countdown__number">%D</div><div class="countdown__title">day</div></div><div class="countdown__list"><div class="countdown__number">%H</div><div class="countdown__title">hour</div></div><div class="countdown__list"><div class="countdown__number">%M</div><div class="countdown__title">min</div></div><div class="countdown__list"><div class="countdown__number">%S</div><div class="countdown__title">sec</div></div></div>'));     
               
       });
	});	
    
    //Jarallax Activation
    $('.jarallax').jarallax({
        speed: 0.3
    });
    
    //NiceSelect Activation
     $('.select_option').niceSelect();
    
    //Tooltip
    tippy("[data-tippy-content]")
    
    

    function imgzoom(){
        $('.product_zoom_thumb').each(function () {
          var $this = $(this),
              $image = $this.data('image');
          $this.zoom({
            url: $image
          });
        });
    };

    if( $(window).width() > 767 ){
        imgzoom();
    };
    

    // Mobail Menu Activation
    $('.mobile_menu_open').initMM({
      enable_breakpoint: true,
      mobile_button: true,
      breakpoint: 991,
      menu_class: 'navbar_mobile_menu'
  });
   

    // video Popup Activation
    $('.popup__vidio').magnificPopup({
        type: 'iframe',
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    


    $(".lookbook_open_icon").click(function(e) {
      e.stopPropagation();
      $(".lookbook__items__content").removeClass("active"),
      $(this).next().addClass("active");
    });
    $(".lookbook__close").click(function(e) {
      e.stopPropagation();
      $(this).parent('.lookbook__items__content').removeClass("active")
    });
    $('body').on('click', function(e) {
      if (!$(e.target).is('.lookbook__items__content.active'))
        $('.lookbook__items__content.active').removeClass('active');
    });




})(jQuery);	