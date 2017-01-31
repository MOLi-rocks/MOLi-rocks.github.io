'use strict';

/*
** 取得格式化時間字串
*/
function getDateString(date = null) {
  var m;
  if (date === null) {
    m = moment();
  } else {
    m = moment(date);
  }

  return m.format('YYYY/MM/DD（dddd） HH:mm');;
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
      if ( date.getTime() >= new Date('2016/12/27')) {
        // 格式化活動時間
        event.dateString = getDateString( new Date(event.published) );
        newEvents.push(event);
      }
    });

    return newEvents;
  });
}

