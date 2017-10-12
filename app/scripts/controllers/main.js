'use strict';

angular.module('qualityApp')
  .controller('MainCtrl', function($scope, $location, Client, DocletService) {

    // Fetch and store the doclet
    if (Client.getDoclet() !== undefined) {

      var docletId = $location.search().docletId;

      DocletService.fetchById(docletId)
        .then(
          function(response) {
            Client.setDoclet(response.data);
          },
          function() {
            $scope.info = undefined;
            $scope.error = 'Failed to fetch doclets';
          }
        );
    }

  });
