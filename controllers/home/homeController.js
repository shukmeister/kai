'use strict';


app.controllers.controller('homeController', ['$scope', function($scope) {
	$scope.templates = [
		{name: 'home', url: 'templates/home.html'},
		{name: 'members', url: 'templates/members.html'},
		{name: 'lineup', url: 'templates/lineup.html'}
	];
	$scope.template = $scope.templates[0];
	$scope.changeTemplate = function(template) {
		for (var i=0; i < $scope.templates.length; i++) {
			if ($scope.templates[i].name == template) {
				$scope.template = $scope.templates[i];
			}
		}
	}
}]);

app.controllers.controller('dialogueController', ['$scope', '$location', 'kaiService', function($scope, $location, kaiService) {	
	
	//dialogue and alert system
	//to do: display tasks that need human input
	$scope.alertsBoolean = 'true';
	var dialogueSelect = 'greeting';
  	if (dialogueSelect == 'greeting') {
		var thisDialogue = kaiService.testGreeting;
	}
	$scope.dialogue = thisDialogue;

	//function that routes website state
	$scope.changeView = function(view){
    	$location.path(view); // path not hash
    };
}]);

app.controllers.controller('memberController', ['$scope', 'kaiService', function($scope, kaiService) {

	//member management system
	$scope.master = {};
	$scope.memberList = kaiService.memberList;
	$scope.update = function(member) {
		if (typeof member.group == 'array') {
			for (i = 0; i < member.group.length; i++) {
				if (member.group[i] = "posters") {
					kaiService.posterRunList.push(angular.copy(member));			
				}
			}
		}
		// if (member.group = "posters") {
		// 	kaiService.posterRunList.push(angular.copy(member));			
		// }
		kaiService.memberList.push(angular.copy(member));
		$scope.master = angular.copy(member);
		$scope.memberList = kaiService.memberList;
		//console.log(JSON.stringify(kaiService.memberList)); //for debugging
	};
	$scope.reset = function() {
		$scope.member = angular.copy($scope.master);
	};
	$scope.reset();
}]);

//create function that makes a meeting object + sends an email.  which controller to put in?

app.controllers.controller('emailController', ['$scope', function($scope) {

	//meeting creator function:
	//group can be 'all', 'none', or the name of the subgroup in quotations
	//make sure to incude type = 'meeting';
	function makeMeeting(who, when, where) {
		var meeting = {
			name: who + ' meeting',
			group: who,
			time: when,
			location: where,
			type: 'meeting',
			members: []
		};
		if (who == 'all') {
			for (i = 0; i < memberList.length; i++) {
				this.meeting.members.push(memberList[i]);
			}
		} else if (who == 'none') {
			//don't push members to meeting
		} else {
			for (i = 0; i < memberList.length; i++) {
				if (memberList[i].group == who) {
					this.meeting.members.push(memberList[i]);
				}
			}
		}
		meetingList.push(this.meeting);
	}

	
	function sendMessage(member, method, subject) {
		//optionalArg = (typeof optionalArg === "undefined") ? "defaultValue" : optionalArg;
		//subjects = pick up posters, meeting,

		if (method == 'email' || typeof method == 'undefined') {
			if (typeof subject == 'object' && typeof subject.time !== 'undefined' &&typeof subject.location !== 'undefined') {
				var content = {
					header: 'Notification of Kinotek Meeting',
					message: 'Hello, there will be a meeting for ' + subject.group + ' on ' + subject.time + ' at ' + subject.location
				};
			} else if (subject == 'posterPickUp') {
				var content = {
					header: "placeholder", 
					message: "placeholder"
				};
			}
			//make a send email function, but what is the content?
			$.ajax({
				type: "POST",
				url: "https://mandrillapp.com/api/1.0/messages/send.json",
				data: {
					"key": "3JX_aEzsNOUbilXB3prbhA",
					"message": {
					    "html": "<p>Example HTML content</p>",
					    "text": content.message,
					    "subject": content.header, //goes in "subject" or "header"?
					    "from_email": "kai@kinotekseries.com",
					    "from_name": "Kai - Kinotek AI",
					    "to": [
					        {
					            "email": member.email,
					            "name": member.name,
					            "type": "to"
					        }
					    ],
					    "headers": {
					        "Reply-To": "message.reply@example.com"
						}
					}
				}
				}).done(function(response) {
					console.log(response); //tell me wut happened
			});
		} else if (method == 'text') {
			//send text
		} else if (method == 'facebook') {
			//send fb message
		}
	}
}]);