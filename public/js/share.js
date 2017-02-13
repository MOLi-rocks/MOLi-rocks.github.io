'use strict';

$(document).ready(function() {
  setCalendar();
  setNewEvents();
});

/*
** 設定行事曆
*/
function setCalendar() {
 $('#calendar').fullCalendar({
    googleCalendarApiKey: _env.googleCalendarApiKey,
    events: {
      googleCalendarId: _env.googleCalendarId
    },
    locale: 'zh-tw',
    timeFormat: 'H:mm',
    header: {
      left:   'prev,today,next',
      center: 'title',
      right:  'month,listMonth'
    },
    height: 'auto',
    weekNumberCalculation: 'ISO',
    eventLimit: true,
    eventClick: function(event) {
      setEventModal(event);
      $('.event-modal').modal('show');
      return false;
    }
  });
}

/*
** 設定活動 Modal
*/
function setEventModal(event = null) {
  var dateString;

  if (event.allDay) {
    dateString = event.start.format('YYYY/MM/DD') + ' 全天';
  } else if ( event.start.isSame(event.end, 'day') ) {
    dateString = event.start.format('YYYY/MM/DD（dddd） HH:mm') + '~' + event.end.format('HH:mm');
  } else {
    dateString = event.start.format('YYYY/MM/DD（dddd） HH:mm') + '~' + event.end.format('MM/DD（dddd） HH:mm');
  }

  $('.event-modal-title').html(event.title);
  $('.event-modal-date').html(dateString);
  $('.event-modal-description').html(event.description || '本活動無說明');
  $('.event-modal-url').attr('href', event.url);
}

/*
** 設定新活動資訊
*/
function setNewEvents() {
  getNewEvents()
    .done(function(events = []) {
      if (events.length > 0) {
        events.forEach(function(event){
          $('.event-list').append('\
            <div class="col-md-6 col-lg-4">\
              <div class="card">\
                <div class="card-block">\
                  <h4 class="event-title card-title">' + event.title + '</h4>\
                  <p class="event-date card-text">' + event.dateString + '</p>\
                  <p class="event-summary card-text">' + event.summary + '</p>\
                  <a href="' + event.url + '" target="_blank" class="event-link external-link card-link">立即報名</a>\
                </div>\
              </div>\
            </div>\
          ');
        });
      }
    })
    .fail(function(err) {
      console.log(err);
    });
}
