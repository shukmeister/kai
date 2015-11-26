'use strict';

// global app

app.services.factory('kaiService', [function() {
	
	//website-wide storage before sending to backend
	var memberList = [];
	var meetingList = [];
	var movieList = [];
	var posterRunList = []; //members doing poster runs that week
	return {
		testGreeting: "kai initialized:  angular services operational",
		memberList: memberList,
		meetingList: meetingList,
		movieList: movieList
	};
}]);