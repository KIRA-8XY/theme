/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

// Preloader js    
$(window).on('load', function () {
  $('.preloader').fadeOut(100);
});

(function ($) {
  'use strict';

	// navbarDropdown
	if ($(window).width() < 992) {
		$('.navigation .dropdown-toggle').on('click', function () {
			$(this).siblings('.dropdown-menu').animate({
				height: 'toggle'
			}, 300);
		});
	}
  
  // product Slider
  $('.product-image-slider').slick({
    autoplay: false,
    infinite: true,
    arrows: false,
    dots: true,
    customPaging: function (slider, i) {
      var image = $(slider.$slides[i]).data('image');
      return '<img class="img-fluid" src="' + image + '" alt="product-image">';
    }
  });

  // Product slider
  $('.product-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  //carousel

  document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let currentIndex = 0;
  
    function updateCarousel() {
      const slideWidth = slides[0].offsetWidth;
      const offset = (container.offsetWidth - slideWidth) / 2;
      container.style.transform = `translateX(${-currentIndex * slideWidth + offset}px)`;
      
      slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentIndex) {
          slide.classList.add('active');
        }
      });
    }
  
    function moveToSlide(index) {
      currentIndex = (index + slides.length) % slides.length;
      updateCarousel();
    }
  
    prevBtn.addEventListener('click', () => {
      moveToSlide(currentIndex - 1);
    });
  
    nextBtn.addEventListener('click', () => {
      moveToSlide(currentIndex + 1);
    });
  
    // Initialize the carousel
    updateCarousel();
  
    // Update carousel on window resize
    window.addEventListener('resize', updateCarousel);
  
    // Optional: Add automatic sliding
    setInterval(() => {
      moveToSlide(currentIndex + 1);
    }, 5000);
  });


    function validateForm(event) {
      event.preventDefault(); // Prevent form submission for validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      let valid = true;
      let errorMessage = '';

      // Name validation
      if (name.length < 2) {
        valid = false;
        errorMessage += 'Name must be at least 2 characters long.\n';
      }

      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        valid = false;
        errorMessage += 'Please enter a valid email address.\n';
      }

      // Message validation
      if (message.length < 10) {
        valid = false;
        errorMessage += 'Message must be at least 10 characters long.\n';
      }

      if (valid) {
        // If everything is valid, you can submit the form (or handle the form submission)
        alert('Form submitted successfully!'); // Replace this with actual form submission
        document.querySelector('form').submit(); // Submit the form
      } else {
        alert(errorMessage);
      }
    }
})(jQuery);