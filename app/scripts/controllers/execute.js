'use strict';

angular.module('qualityApp')
  .controller('ExecuteCtrl', function($scope, Client, DocletService) {

    $scope.isRunning = false;

    DocletService.isRunning('quality')
      .then(
        function(response) {
          $scope.isRunning = response.data.isRunning;
        },
        function() {
          $scope.info = undefined;
          $scope.error = 'Failed to start application';
        }
      );

    $scope.start = function() {

      var doclet = Client.getDoclet();

      DocletService.startApplication('quality')
        .then(
          function() {
            // Success do nothing
          },
          function() {
            $scope.info = undefined;
            $scope.error = 'Failed to start application';
          }
        );
    }

    $scope.stop = function() {

      var doclet = Client.getDoclet();

      DocletService.stopApplication('quality')
        .then(
          function() {
            // Success do nothing
          },
          function() {
            $scope.info = undefined;
            $scope.error = 'Failed to start application';
          }
        );
    }

  });
