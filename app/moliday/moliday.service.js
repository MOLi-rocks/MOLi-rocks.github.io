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
      return $http.get('http://moli.kktix.cc/events.json')
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


