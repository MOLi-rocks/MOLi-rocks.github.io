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
        "id": 51141,
        "name": "BlueT",
        "username": "BlueT"
      },
      {
        "id": 14941597,
        "name": "vincentinttsh",
        "username": "vincentinttsh"
      },
      {
        "id": 34565589,
        "name": "UncleHanWei",
        "username": "UncleHanWei"
      },
      {
        "id": 17763380,
        "name": "ssyu",
        "username": "sharkssyu"
      },
      {
        "id": 34763146,
        "name": "yarin",
        "username": "TristaRin"
      },
      {
        "id": 57097306,
        "name": "PengLaiRenOu",
        "username": "PengLaiRenOu"
      },
      {
        "id": 57285194,
        "name": "yuting0412",
        "username": "yuting0412"
      },
    ];
  }

})();
