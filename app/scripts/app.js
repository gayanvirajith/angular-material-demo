'use strict';

/**
 * @ngdoc overview
 * @name angMaterialApp
 * @description
 * # angMaterialApp
 *
 * Main module of the application.
 */
angular
    .module('angMaterialApp', [
      'ngAnimate',
      'ngAria',
      'ngRoute',
      'ngMaterial'
    ])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('pink')
            .accentPalette('orange');
    })
    .config(function ($routeProvider) {
      $routeProvider
          .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
          .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });
    });
