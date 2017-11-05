'use strict';

angular.module('qualityApp')
  .controller('SettingsCtrl', function($scope, DatasetService, ModelService, SettingsService) {

    $scope.settings = {};

    SettingsService.getAll()
      .then(
        function(response) {
          $scope.settings = response.data;
        },
        function() {
          $scope.info = undefined;
          $scope.error = 'Failed to fetch settings';
        }
      );

    DatasetService.list()
      .then(
        function(response) {
          $scope.datasets = response.data;
        },
        function() {
          $scope.info = undefined;
          $scope.error = 'Failed to fetch datasets';
        }
      );

    ModelService.list()
      .then(
        function(response) {
          $scope.models = response.data;
        },
        function() {
          $scope.info = undefined;
          $scope.error = 'Failed to fetch models';
        }
      );

    $scope.datasetChanged = function() {
      var value = {
        id: $scope.settings.dataset.id,
        name: $scope.settings.dataset.name
      };
      SettingsService.setValue('dataset', value);
    }

    $scope.validationModelChanged = function() {
      var value = {
        id: $scope.settings.validationModel.id,
        name: $scope.settings.validationModel.name
      };
      SettingsService.setValue('validationModel', value);
    }

    $scope.productModelChanged = function() {
      var value = {
        id: $scope.settings.productModel.id,
        name: $scope.settings.productModel.name
      };
      SettingsService.setValue('productModel', value);
    }

    $scope.filterChanged = function() {
      var value = $scope.settings.filter;
      SettingsService.setValue('filter', value);
    }

  });
