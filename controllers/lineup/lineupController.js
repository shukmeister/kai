'use strict';

app.controllers.controller('lineupController', ['$scope', 'kaiService', function($scope, kaiService) {

	// to do
	// -----
	// add movies, remove movies, edit movies
	// title, description, date, poster, time (most automatically filled)
	// view who is managing theater that night
	//need to add directive that shows edit movie module

	// lineup management system

	$scope.pendingList = [];

































		$scope.movieList = kaiService.movieList;

	$scope.addMovie = function(movie) {
		kaiService.movieList.push(angular.copy(movie));
		$scope.movieList = kaiService.movieList;
	};

	$scope.deleteMovie = function(movie) {
		for (i = 0; i < $scope.movieList.length; i++) {
			if ($scope.movieList[i] == movie) {
				//delete movie from movieList array
			}
		}
	};

	//need to add directive that shows edit movie module
	$scope.editMovie = function(oldMovie, newMovie) {
		for (i = 0; i < $scope.movieList.length; i++) {
			if ($scope.movieList[i] == oldMovie) {
				//delete old movie from movieList array
				//add new movie to movieList array
			}
		}
	};

	function Suggestions(movie) {

		//send criterion an email showing our list of movies and requesting budget
	}

}]);