'use strict'

let app = angular.module('app', ['ngMessages', 'ui.router']);


app.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
   //$locationProvider.html5Mode(true);
   $locationProvider.hashPrefix('!');
  
  
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3>'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  
  $urlRouterProvider.otherwise("/");
});