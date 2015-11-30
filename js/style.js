function setEvents() {
	$.ajax({
		url: '//moli.kktix.cc/events.json', 
		type: 'get', 
		dataType: 'json', 
		success: function (data) {
			$("#molievent").append('<h2>' + data.entry[0].title+'</h2>');
			$("#molievent").append('<p>' + data.entry[0].summary+'</p>');
			$("#molievent").append('<a href="' + data.entry[0].url + '"><button class="ui positive button fluid">立刻報名！</button></a>')
		}, 
		error: function(jqXHR) {
			console.log('getEvent_ERR: ' + jqXHR.status + ' -- ' + jqXHR.statusText);
		}
	});
}