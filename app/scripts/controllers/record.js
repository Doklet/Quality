'use strict';

angular.module('qualityApp')
  .controller('RecordCtrl', function($scope) {
  	
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

  });
