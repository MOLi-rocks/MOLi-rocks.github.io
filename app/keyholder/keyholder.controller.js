(function () {
  'use strict';

  angular
    .module('moli')
    .controller('KeyholderController', KeyholderController);

  KeyholderController.$inject = ['$http'];

  /* @ngInject */
  function KeyholderController($http) {
    var vm = this;
    vm.keyholders = {
      sharkssyu: {},
      BlueT: {},
      Trustmyself79: {},
      Bilthe: {},
      bf98099: {},
      mirase: {},
      sunnyworm: {},
      kenornotes: {},
      focaaby: {},
      zxp86021: {},
      lemon5920: {},
      passerbyid: {},
      SerenaLyu: {},
      x3388638: {},
      AishaLien: {},
      SEMI02: {},
      YiLiangChen: {}
    };

    angular.forEach(vm.keyholders, function(obj, username) {
      $http.get('https://api.github.com/users/' + username)
        .success(function (res) {
          if (res.name == null) {
            res.name = '@' + res.login;
          }
          vm.keyholders[username] = res;
        });
    });

  }

})();

