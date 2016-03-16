(function () {
  'use strict';

  angular
    .module('moli')
    .controller('doorStatusController', doorStatusController);

  doorStatusController.$inject = ['$firebaseObject'];

  /* @ngInject */
  function doorStatusController($firebaseObject) {
    var vm = this;

    getStatus();

    ////////////////

    function getStatus() {
      var ref = new Firebase("https://moli-door.firebaseio.com");
      var syncObject = $firebaseObject(ref);
      vm.obj = syncObject;
    }
  }

})();

