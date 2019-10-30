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
      placeholder: "Название",
    });

    $('.js-select-color').select2({
      placeholder: "Цвет",
    });

    $('.js-select-sweetness').select2({
      placeholder: "Сладость",
    });

  })();

  /** Looking section slider **/
  let lookingSlider = new Swiper ('.js-looking-slider', {
    loop: true,
    slidesPerView: 4,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
    },
    breakpoints: {
      670: {
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1240: {
        slidesPerView: 3,
      },
      1250: {
        slidesPerView: 4,
      },
    }

  });

  /** Lists modal **/

  const viewFullList = (function() {
    $('.b-cats__all').on('click', function(e) {
      let parent = $(this).parents('.b-cats__group');
      e.preventDefault();
      parent.siblings('.b-cats__full').addClass('b-cats__full--active');
      parent.addClass('b-cats--active');
      $('.js-close-full').addClass('js-close-full--visible');
    });

    $('.js-close-full').on('click', function(e) {
      e.preventDefault();
      let sibling = $(this).siblings('.b-cats__full');
      sibling.removeClass('b-cats__full--active');
      sibling.siblings('.b-cats__group').removeClass('b-cats--active');
      $('.js-close-full').removeClass('js-close-full--visible');
    });

  })();

  /** Custom scroll **/
  $(".b-cats__full").mCustomScrollbar({
    axis:"y",
  });

});
