'use strict';

angular.module('app.common.services', [])
  .service('customModal', ['$scope', '$uibModal',
  function($scope, $uibModal){
    this.open = function (size) {
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
    
    this.toggleAnimation = function () {
      $scope.animationsEnabled = !$scope.animationsEnabled;
    };
  }]);