'use strict';

angular.module('qualityApp')
  .controller('MainCtrl', function($scope, $location, Client, DocletService) {

    // Fetch and store the doclet
    if (Client.getDoclet() !== undefined) {

      var docletId = $location.search().docletId;

      DocletService.fetchById(docletId)
        .then(
          function(doclet) {
            Client.setDoclet(doclet);
          },
          function() {
            $scope.info = undefined;
            $scope.error = 'Failed to fetch doclets';
          }
        );
    }

  });
