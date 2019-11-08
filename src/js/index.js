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

  /** Lists popup **/
  const viewFullList = (function() {
    const openBtn = $('.b-cats__all'),
        closeBtn = $('.js-close-full'),
        searchBlock = $('.b-search__wrap');


    openBtn.on('click', function(e) {
      let parent = $(this).parents('.b-cats__group');

      e.preventDefault();
      parent.siblings('.b-cats__full').addClass('b-cats__full--active');
      parent.addClass('b-cats--active');
      searchBlock .addClass('b-search__wrap--visible');
      closeBtn.addClass('js-close-full--visible');
    });

    closeBtn.on('click', function(e) {
      let sibling = $(this).siblings('.b-cats__full');

      e.preventDefault();
      searchBlock .removeClass('b-search__wrap--visible');
      sibling.removeClass('b-cats__full--active');
      sibling.siblings('.b-cats__group').removeClass('b-cats--active');
      closeBtn.removeClass('js-close-full--visible');
    });
  });

  const viewList = (function() {
    const openBtn = $('.b-aside__drop-btn'),
          closeBtn = $('.js-close-full-list');

    openBtn.on('click', function(e) {
      e.preventDefault();
      let thisBlock = $(this).parents('.b-aside__drop').siblings('.js-full-list');
      thisBlock.addClass('full-list__active');
    });

    closeBtn.on('click', function(e) {
      e.preventDefault();
      let thisBlock = $(this).parents('.js-full-list');
      thisBlock.removeClass('full-list__active');
    });
  })();


  /** Search input **/
  const search = (function() {
    const clearSearch = $('.js-field-erase'),
          searchInput = $('.b-search');
    searchInput.on('keydown', function() {
      clearSearch.addClass('js-field-erase--visible');
    });

    clearSearch.on('click', function(e) {
      e.preventDefault();
      searchInput.val("");
      clearSearch.removeClass('js-field-erase--visible');
    });
  })();

  /** Filters accordeon **/
  const filtersAccorderon = (function () {
      const btn = $('.js-open-list'),
            drop = $('.b-aside__drop');

      btn.on('click', function() {
          let thisDropList = $(this).siblings('.b-aside__drop');

          if(thisDropList.hasClass('b-aside__drop--open')) {
              $(this).removeClass('button-weight');
              thisDropList.slideUp(300);
              thisDropList.removeClass('b-aside__drop--open');
          } else {
              $(this).addClass('button-weight');
              thisDropList.addClass('b-aside__drop--open');
              thisDropList.slideDown(300);
          }
      });
  })();

  /** Open filters on mobile **/
  const filterOpen = (function() {
    const openBtn = $('.js-filters'),
          filters = $('.b-aside'),
          content = $('.b-goods');

    openBtn.on('click', function(e) {
      e.preventDefault();
      content.toggleClass('b-goods--shift-right');
      filters.toggleClass('b-aside--shift-right');
    });

  })();

  /**  **/
  const dropdown = (function() {
    const openBtn = $('.js-open-drop'),
          dropdown = $('.b-main__dropdown'),
          item = $('.b-main__dropdown-title'),
          input = $('.b-main__input');

    openBtn.on('click', function() {
      let sibling = $(this).siblings('.b-main__dropdown');

      openBtn.not($(this)).siblings('.b-main__dropdown').removeClass('b-main__dropdown--open');
      openBtn.not($(this)).parents('.input-pseudo').removeClass('input-pseudo--active');

      openBtn.not($(this)).removeClass('current');

      sibling.toggleClass('b-main__dropdown--open');
      $(this).toggleClass('current');
    });

    item.on('click', function() {
      $(this).parents('.b-main__dropdown').siblings('.js-open-drop').html($(this).text());
      dropdown.removeClass('b-main__dropdown--open');
      $(this).parents('.b-main__dropdown').siblings('.b-main__field').toggleClass('current');
    });

    $('.b-main__input').on('click', function() {
      $(this).parents('.input-pseudo').toggleClass('input-pseudo--active')
    });

    $('.b-main__input-group .b-main__dropdown-title').on('click', function() {
      input.val($(this).text());
      $('.input-pseudo').toggleClass('input-pseudo--active');
    })

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

  /** Custom scroll **/
  $(".b-cats__full").mCustomScrollbar({
    axis:"y",
  });

  $(".full-list__wrap").mCustomScrollbar({
    axis:"y",
  });


});
