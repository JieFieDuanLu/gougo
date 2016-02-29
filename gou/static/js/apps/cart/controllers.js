'use strict';

angular.module('app.cart.controllers', [])
  .controller('CartCtrl', ['$scope', '$http', '$location', '$uibModal', '$log',
  function($scope, $http, $location, $uibModal, $log){
    $scope.url = '/api/cart/';
    $scope.quantity = 5;
    $http.get($scope.url).success(function(data, status, header, config){
      $scope.data = data;
      $scope.total = $scope.data.length * 5;
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
  }]);
