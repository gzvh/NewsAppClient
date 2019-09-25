'use strict';

/**
 * @ngdoc overview
 * @name newsClientApp
 * @description
 * # newsClientApp
 *
 * Main module of the application.
 */
angular
  .module('newsClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'NewsController',
        controllerAs: 'newsdashboard'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
