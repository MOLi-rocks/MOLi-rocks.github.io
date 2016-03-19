(function () {
  'use strict';

  angular
    .module('moli')
    .controller('KeyholderController', KeyholderController);

  KeyholderController.$inject = ['$http'];

  /* @ngInject */
  function KeyholderController($http) {
    var vm = this;
    vm.keyholders = [];
    var keyholdersID = [
      'sharkssyu',
      'BlueT',
      'Trustmyself79',
      'Bilthe',
      'bf98099',
      'mirase',
      'sunnyworm',
      'kenornotes',
      'focaaby',
      'zxp86021',
      'lemon5920',
      'passerbyid',
      'x3388638',
      'AishaLien',
      'SEMI02',
      'YiLiangChen'
    ];

    for (var i = 0; i < keyholdersID.length; i++) {
      $http.get('https://api.github.com/users/' + keyholdersID[i])
        .success(function (res) {
          if (res.name == null) {
            res.name = '@' + res.login;
          }
          vm.keyholders.push(res);
      });
    }

    
  }

})();

