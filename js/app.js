angular.module('moli', [])
  .controller('MOLiDayController', function($scope, $http) {
    // 取得活動資訊
    $http.get('http://moli.kktix.cc/events.json')
      .success(function(data) {
        // 取得現在時間
        var currentDate = new Date().getTime();

        // 只留未發生的活動
        events = [];
        for (var i = 0; i < data.entry.length; i++) {
          if ( new Date(data.entry[i].published).getTime() < currentDate) {
            break;
          } else {
            events.push(data.entry[i]);
          }
        }

        // 綁定活動
        $scope.events = events;
      })
      .error(function(err) {
        $scope.isError = true;
      });
  });
