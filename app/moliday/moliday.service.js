(function () {
  'use strict';

  angular
    .module('moli')
    .service('molidayEvent', molidayEvent);

  molidayEvent.$inject = ['$http'];

  /* @ngInject */
  function molidayEvent($http) {
    this.getEvents = getEvents;

    ////////////////

    function getEvents() {
      return $http.get('https://moli.rocks:8888')
        .then(getEventsComplete)
        .catch(getEventsFailed);

      function getEventsComplete(response) {
        return response.data;
      }

      function getEventsFailed(error) {
        console.log('XHR Failed for getEvents.' + error.data);
      }
    }
  }

})();


