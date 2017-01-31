'use strict';

$(document).ready(function() {
  setDoorStatus();
  setLatestEvent();
  setMap();
});

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

/*
** 偵測開門狀態
*/
function setDoorStatus() {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyBgTlUBcXa3B2VXpsY_Iyh1HVRNyiJpKMo',
    authDomain: 'moli-door.firebaseapp.com',
    databaseURL: 'https://moli-door.firebaseio.com',
    storageBucket: 'moli-door.appspot.com',
    messagingSenderId: '10676976194'
  };
  firebase.initializeApp(config);

  // 同步開門狀態
  var doorStatusRef = firebase.database().ref('status');
  doorStatusRef.on('value', function(snapshot) {
    var doorStatus = snapshot.val();
    if (doorStatus === 0) {
      $('.door').html('開放中').removeClass('door-loading door-close door-error').addClass('door-open');
    } else if (doorStatus === 1) {
      $('.door').html('休息中').removeClass('door-loading door-open door-error').addClass('door-close');
    } else {
      $('.door').html('狀態不明<br>猴子們正在努力找出問題').removeClass( 'door-loading door-open door-close' ).addClass( 'door-error' );
    }
  });
}

/*
** 設定地圖
*/
function setMap() {
  // Initialize map object
  var map = L.map('map', {
      center: [23.9519631, 120.9274402],
      zoom: 17,

      touchZoom: true,
      doubleClickZoom: true,
      dragging: false,
      scrollWheelZoom: false,
      boxZoom: false,
      keyboard: false,
      tap: false
  });

  // 設定 map 圖資
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '地圖資訊 © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap 貢獻者</a> ♥'
    // detectRetina: true
  }).addTo(map);

  // 設定標注點
  var marker = L.marker([23.9519631, 120.9274402]).addTo(map);
  // marker.bindPopup('MOLi 在這！').openPopup();
}
