(function () {
  'use strict';

  angular
    .module('moli')
    .controller('MOLiDayController', MOLiDayController);

  MOLiDayController.$inject = ['molidayEvent'];

  /* @ngInject */
  function MOLiDayController(molidayEvent) {
    var vm = this;
    vm.events = [];
    // 取得現在時間
    var currentDate = new Date().getTime();
    activate();

    ////////////////

    function activate() {
      return getEvents().then(function() {
        console.log('Activated Events View');
      });
    }

    function getEvents() {
      return molidayEvent.getEvents()
        .then(function(data) {
          if (data == null) {
            return vm.isError = true;
          }
          // 只留未發生的活動
          for (var i = 0; i < data.entry.length; i++) {
            if ( new Date(data.entry[i].published).getTime() < currentDate) {
              break;
            } else {
              vm.events.push(data.entry[i]);
            }
          }

          return vm.events;
        });
    }
  }

})();
