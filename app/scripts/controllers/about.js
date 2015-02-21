'use strict';

/**
 * @ngdoc function
 * @name angMaterialApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angMaterialApp
 */
angular.module('angMaterialApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
