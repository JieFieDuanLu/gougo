'use strict';

angular.module('app.home.controllers', [])
  .controller('HomeCtrl', ['$scope', '$http', '$location', '$uibModal', '$log',
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
  }])
  .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'item',
  function($scope, $uibModalInstance, item){
    $scope.price = 5;
    $scope.item = item;
    $scope.ok = function () {
      $uibModalInstance.close($scope.item);
    };
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }]);
