'use strict';


angular.module('qualityApp')
  .service('DatasetService', function ($http) {

    this.list = function() {
      return $http.get('/api/dataset');
    };

  });
