'use strict';

angular.module('app.item.controllers', [])
  .controller('ItemListCtrl', ['$scope', '$http', '$location', '$uibModal', '$log',
  function($scope, $http, $location, $uibModal, $log){
    $scope.url = '/api/items/';
    $http.get($scope.url).success(function(data, status, header, config){
      $scope.data = data;
    }).error(function(data, status, header, config) {});

    $scope.animationsEnabled = true;
    $scope.open = function (size, item) {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: '/static/js/partials/common/modal.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          item: function(){
            return item
          }
        }
      });

      modalInstance.result.then(function (item) {
        $log.info(item.name);
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
    $scope.addtocart = function(item) {
      $http.post('/api/cart/', {'item': item.id})
      .success(function(data, status, header, config){
        console.log('成功')
      }).error(function(data, status, header, config) {
        console.log('失败')
      });
    };
  }])
  .controller('ItemDetailCtrl', ['$scope', '$routeParams', '$http', '$uibModal', '$log',
  function($scope, $routeParams, $http, $uibModal, $log){
    $scope.url = '/api/items/' + $routeParams.id + '/';
    $http.get($scope.url).success(function(data, status, header, config){
      $scope.data = data;
    }).error(function(data, status, header, config) {});
    $scope.animationsEnabled = true;
    $scope.open = function (size, item) {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: '/static/js/partials/common/modal.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          item: function(){
            return $scope.data
          }
        }
      });

      modalInstance.result.then(function (item) {
        $log.info(item.name);
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  }]);
