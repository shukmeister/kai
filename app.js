// js code for kinotek artificial intelligence
// written by ben shukman

// to do
// -----
// next big projcet: movie lineup management state
//    need to add movieList array in kaiService and movie object constructor
// poster run utility
// change the home template name -> member management template
// did i implement group list in member form correctly?
// check that email content injection working?  if not, talk to cs friends about recursive solution
// add email validation and required inputs to new member form
// implement groupCheck function in kaiService.  look for references by searching 'posters'
// setup filter for searching through members (based off kinotek position) in members.html template

'use strict';

var app = {
  name: "kai",
  controllers: angular.module('kaiControllers', []),
  services: angular.module('kaiService', [])
};

var kai = angular.module(app.name, ['kaiControllers','ngRoute','ngResource', 'kaiService'])
  .config(['$routeProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        controller: 'homeController',
        templateUrl: 'templates/home.html',
      })
      .when('/advertising', {
        controller: 'advertisingController',
        templateUrl: 'templates/advertising.html',
      })
      .when('/members', {
        controller: 'homeController',
        templateUrl: 'templates/members.html',
      })
      .when('/lineup', {
        controller: 'lineupController',
        templateURL: 'templates/lineup.html',
      })
      .otherwise({
        redirectTo: '/'
      });
}]);

