var eventlist = {
	target: $("#molievent"),
	init: function() {
		this.getEvents();
	},
	getEvents: function() {
		$.ajax({
			url: '//moli.kktix.cc/events.json', 
			type: 'get', 
			dataType: 'json', 
			success: function (data) {
				eventlist.compareDate(data.entry);
			}, 
			error: function(jqXHR) {
				console.log('getEvent_ERR: ' + jqXHR.status + ' -- ' + jqXHR.statusText);
			}
		});
	},
	compareDate: function(list) {
		for(var i = 0; i < list.length; i++) {
			var eventDate = Date.parse((list[i].content).substring(3, 13));
			var currDate = Date.parse((new Date()).toDateString());
			if(eventDate > currDate)
				eventlist.setEvents(list[i].title, list[i].summary, list[i].url);
			else
				continue; 
		}
	},
	setEvents: function(title, summary, url) {
		console.log(title + summary + url);
		this.target.append('<h2>' + title + '</h2>');
		this.target.append('<p>' + summary + '</p>');
		this.target.append('<a href="' + url + '"><button class="ui positive button fluid">立刻報名！</button></a>')
	}
};