'use strict';

app.controllers.controller('advertisingController', ['$scope', 'kaiService', function($scope, kaiService) {
	
	function posterRun() {
		for (i = 0; i < memberList.length(); i++) {
			//if (groupCheck(memberList[i], 'posters')) {
			for (j = 0; j < memberList[i].group.length; j++) {
				if (memberList[i].group[j] == 'posters') { //is this a poster run person?
					if (typeof memberList[i].route !== 'undefined') { //does this person have a route assigned?
						if (memberList[i].pickedUp == false) {
							// if (it is time to pick up posters) {
								// alert(memberList[i], )
							// }
						}
					} else {
						assignRoute();
					}
				}
			}
		}
	}

	//checks if a certain member has a certain position
	function groupCheck(member, position) {
		for (i = 0; i < member.group.length; i++) {
			if (member.group[i] == position) {
				return true;
			} else {
				return false;
			}
		}
	}

	//daily nexus advertising management
	//send an email weekly
	//send a follow up email?  need to talk to nexus administration about recurring partnership
	//inputs: film description, film poster, date, title, double check location
	function dailyNexus() {
		//grabs film info from db.  double checks with user?
		//sends it to daily nexus
	}



	//make function if person picked up posters or not 
	//build timing system


	//printing
	//distribution
	//do i have the poster artwork?
	//poster run assignments + double check
		//first come, first serve.  this gives incentive to the school
	//bridge banner
	//include a map of the school
	//dining common advertising



	//daily nexus module

	//mailing list module
	//submodules: film, uannouncement, IV arts

}]);