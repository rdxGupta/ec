 $('.home-slider').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
         0:{
             items:1
         },
         600:{
             items:1
         },
         1000:{
             items:1
         }
      }
      })

 // ===slide js===

  AOS.init({
             easing: 'ease-out-back',
             duration: 2000
         });

   // ===alimation js===