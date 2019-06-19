(function () {
  'use strict';

  angular
    .module('moli')
    .controller('KeyholderController', KeyholderController);

  KeyholderController.$inject = ['$http'];

  /* @ngInject */
  function KeyholderController($http) {
    var vm = this;
    vm.keyholders = [
      {
        "id": 17763380,
        "name": "ssyu",
        "username": "sharkssyu"
      },
      {
        "id": 51141,
        "name": "BlueT",
        "username": "BlueT"
      },
      {
        "id": 12278455,
        "name": "乃嘉",
        "username": "Trustmyself79"
      },
      {
        "id": 17447427,
        "name": "奕良",
        "username": "YiLiangChen"
      }
    ];
  }

})();
