'use strict';

/**
 * @ngdoc function
 * @name angMaterialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angMaterialApp
 */
angular.module('angMaterialApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
