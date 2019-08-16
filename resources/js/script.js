$(document).ready(function() {
    
    /* Sticky navigation */
    $('.js--feature-section').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky')
        }
    }, {
      offset: '70px;'
    });
    
    
    /* Scroll on button */
    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plan').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--feature-section').offset().top}, 1000);
    });
    
    
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    
    /* Animation on scroll */
    
    $('.js--wap-1').waypoint(function(direction) {
       $('.js--wap-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
     $('.js--wap-2').waypoint(function(direction) {
       $('.js--wap-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
     $('.js--wap-3').waypoint(function(direction) {
       $('.js--wap-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
     $('.js--wap-4').waypoint(function(direction) {
       $('.js--wap-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    /* Mobile nav*/
    $('.js--nav-icon').click(function() {
       var nav = $('.js--main-nav');
       var icon = $('.js--main-nav i');
        
       nav.slideToggle(200);
        
       if (icon.hasClass('ion-md-menu')) {
           icon.addClass('ion-close-round');
           icon.removeClass('ion-md-menu');
       } else {
           icon.addClass('ion-md-menu');
           icon.removeClass('ion-close-round');
       }
    });
    
     var map = new GMaps({
      div: '.map',
      lat: 23.7113424, 
      lng: 90.4629804,
      zoom:15
    });
    
    map.addMarker({
      lat: 23.7083424,
      lng: 90.4496804,
      title: 'Soniakra',
      infoWindow: {
          content: '<p>Our Soniakra</p>'
        }
    });
        
});