'use strict';

angular.module('app.common.controllers', [])
  .controller('CommonModalCtrl', ['$scope', '$uibModal', '$log',
  function($scope, $uibModal, $log){
    $scope.defaultPrice = 5;
    $scope.animationsEnabled = true;
    $scope.open = function (size) {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          defaultPrice: function () {
            return $scope.defaultPrice;
          }
        }
      });

      modalInstance.result.then(function (price) {
        $scope.price = price;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.toggleAnimation = function () {
      $scope.animationsEnabled = !$scope.animationsEnabled;
    };
  }])
  .controller('NavCtrl', ['$scope', '$rootScope', '$location',
  function($scope, $rootScope, $location){
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  }])
  .controller('CommonModalInstanceCtrl', ['$scope', '$uibModalInstance', 'price',
  function($scope, $uibModalInstance, price){
    $scope.price = price;
    $scope.ok = function () {
      $uibModalInstance.close($scope.price);
    };
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }]);