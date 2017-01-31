'use strict';

/*
** 取得如「2017/01/05（週四） 18:10」格式的時間字串
*/
function getLocaleDateString(date) {
  var options = {
    hour12: false,
    weekday: 'short',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  };
  return date.toLocaleString('zh-TW', options);
}

/*
** 取得活動資訊
*/
function getEvents() {
  return $.ajax('https://moli.rocks/kktix/events.json', {
    method: 'GET'
  }).then(function(data){
    return data.entry;
  });
}

/*
** 取得未發生的活動資訊
*/
function getNewEvents() {
  return getEvents().then(function(events = null) {
    if (events == null) {
      return events;
    }

    var newEvents = [];

    // 過濾出未發生之活動
    events.forEach(function(event){
      var date = new Date(event.published);
      // 先故意顯示
      // if ( date.getTime() >= new Date() ) {
      if ( date.getTime() < new Date() ) {
        // 格式化活動時間
        event.dateString = getLocaleDateString( new Date(event.published) );
        newEvents.push(event);
      }
    });

    return newEvents;
  });
}

