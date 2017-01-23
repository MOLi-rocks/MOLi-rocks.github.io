'use strict';

setDoorStatus();
setLatestEvent();
setMap();

/*
** 設定最新活動資訊
*/
function setLatestEvent() {
  getNewEvents()
    .done(function(events = []) {
      if (events.length > 0) {
        var latestEvent = events[0];

        $('.latest-event-title').html(latestEvent.title);
        $('.latest-event-date').html(latestEvent.dateString);
        $('.latest-event-summary').html(latestEvent.summary);
        $('.latest-event-link').attr('href', latestEvent.url);
        $('.latest-event-display').show();
      }
    })
    .fail(function(err) {
      console.log(err);
    });
}
