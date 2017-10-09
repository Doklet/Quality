'use strict';

angular.module('qualityApp')
  .service('DocletService', function($http) {

    this.fetchById = function(docletId) {
      return $http.get('/api/doclet/' + docletId);
    };

  });
