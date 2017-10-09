'use strict';


angular.module('qualityApp')
  .service('ModelService', function ($http) {

    this.list = function() {
      return $http.get('/api/model');
    };

  });
