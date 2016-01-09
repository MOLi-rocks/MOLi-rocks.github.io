(function () {
  'use strict';

  /* mobile menu */
  $('.modal.mobile-menu')
    .modal({
      blurring: true,
      closable: true
    })
    .modal('attach events', '.mobile-menu-button', 'show')
    .modal('attach events', '.close', 'hide');

  /* popup prompt in "about" section */
  $('.icon').popup({
    inline: true,
    position: 'top center'
  });

})();
