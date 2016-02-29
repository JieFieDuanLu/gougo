// 'use strict';

// angular.module('app.common.directives', [])
//   .directive('customModal', ['$http',
//   function($http) {
//     return {
//       restrict: 'A',
//       templateUrl: '/static/js/partials/common/modal.html',
//       transclude: true,
//       scope:{
//           ngModel: '='
//       },
//       template: '',
//       link: function(scope, el, attrs){
//         scope.modalId = attrs.modalId;
//         scope.title = attrs.modalTitle;
//         getContents = function(data){
//           $compile(data.contents)(scope, function(compliledElement, scope){
//             el.append(compliledElement);
//           });
//         };
//       }
//     }
// }]);