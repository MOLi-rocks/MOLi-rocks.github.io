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

/*
** 偵測開門狀態
*/
function setDoorStatus() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBgTlUBcXa3B2VXpsY_Iyh1HVRNyiJpKMo",
    authDomain: "moli-door.firebaseapp.com",
    databaseURL: "https://moli-door.firebaseio.com",
    storageBucket: "moli-door.appspot.com",
    messagingSenderId: "10676976194"
  };
  firebase.initializeApp(config);

  // 同步開門狀態
  var doorStatusRef = firebase.database().ref('status');
  doorStatusRef.on('value', function(snapshot) {
    var doorStatus = snapshot.val();
    if (doorStatus === 0) {
      $('.door').html('開放中').removeClass( "door-loading door-close door-error" ).addClass( "door-open" );
    } else if (doorStatus === 1) {
      $('.door').html('休息中').removeClass( "door-loading door-open door-error" ).addClass( "door-close" );
    } else {
      $('.door').html('狀態不明<br>猴子們正在努力找出問題').removeClass( "door-loading door-open door-close" ).addClass( "door-error" );
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
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '地圖資訊 © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap 貢獻者</a> ♥'
    // detectRetina: true
  }).addTo(map);

  // 設定標注點
  var marker = L.marker([23.9519631, 120.9274402]).addTo(map);
  // marker.bindPopup('MOLi 在這！').openPopup();
}
