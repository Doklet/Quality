'use strict';

angular.module('qualityApp')
  .controller('RecordCtrl', function($scope, DatasetService) {

    var datasetId = '3ee8b093-f859-4e75-a1e6-7594bc4918cb';

    $scope.labels = [{
      id: 0,
      name: 'background'
    }, {
      id: 1,
      name: 'ok'
    }, {
      id: 2,
      name: 'not ok'
    }];

    DatasetService.recordingIsRunning(datasetId)
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

      DatasetService.startRecording(datasetId)
        .then(
          function() {
            // Success do nothing
          },
          function() {
            $scope.info = undefined;
            $scope.error = 'Failed to start recording';
          }
        );
    }

    $scope.stop = function() {

      DatasetService.stopRecording(datasetId)
        .then(
          function() {
            // Success do nothing
          },
          function() {
            $scope.info = undefined;
            $scope.error = 'Failed to stop recording';
          }
        );
    }

  });
