$(document).ready(function () {
  /** Masked Input **/
  $('input[name=phone]').mask('+38(099) 999 99 99');

  /** Anchor link **/
  $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });

  /** Index page banner select group (Plugin: Select 2) **/
  const initSelects = (function() {

    $('.js-select-name').select2({
      width: '256px',
      placeholder: "Название",
    });

    $('.js-select-color').select2({
      width: '159px',
      placeholder: "Цвет",
    });

    $('.js-select-sweetness').select2({
      width: '159px',
      placeholder: "Сладость",
    });

  })();

  /** Looking section slider **/
  let lookingSlider = new Swiper ('.js-looking-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
    },

  });



});
