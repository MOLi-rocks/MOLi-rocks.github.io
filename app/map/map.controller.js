(function () {
  'use strict';

  angular
    .module('moli')
    .controller('MapController', MapController);

  // MapController.$inject = ['$scope'];

  /* @ngInject */
  function MapController() {
    var vm = this;

    activate();

    ////////////////

    function activate() {
      var MOLi = {
        lat: 23.9519631,
        lng: 120.9274402,
        focus: false,
        message: "MOLi 在這裡!",
        draggable: false
      };

      angular.extend(vm, {
        // Center
        NCNU: {
          lat: 23.9519631,
          lng: 120.9274402,
          zoom: 17
        },

        // List of markers
        markers: {
          mainMarker: angular.copy(MOLi)
        },

        // Default settings
        defaults: {
          tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          tileLayerOptions: {
            attribution: '地圖資訊 © <a href="https://openstreetmap.org">OpenStreetMap 貢獻者</a> ♥',
            // for font size readability
            detectRetina: false,
            reuseTiles: true
          },

          // for UX
          touchZoom: true,
          doubleClickZoom: true,
          dragging: false,
          scrollWheelZoom: false,
          boxZoom: false,
          keyboard: false,
          tap: false
        }
      });

    }
  }

})();

