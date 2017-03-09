'use strict';

/*
** 取得活動資訊
*/
function getEvents() {
  return $.ajax('https://moli.kktix.cc/events.json', {
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
      var eventDate = moment(event.published);
      // 先故意顯示
      // if ( eventDate.isAfter( moment() ) {
      if ( eventDate.isAfter( moment('2016-12-27') ) ) {
        // 格式化活動時間
        event.dateString = eventDate.format('YYYY/MM/DD（dddd） HH:mm');
        newEvents.push(event);
      }
    });

    return newEvents;
  });
}

