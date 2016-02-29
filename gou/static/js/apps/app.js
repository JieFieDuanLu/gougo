'use strict';

var app = angular.module('app', [
  'ngRoute',
  'ngCookies',
  'ui.bootstrap',
  'angular-loading-bar',
  'app.common.controllers',
  'app.item.controllers',
  'app.cart.controllers',
  'app.home.controllers'
]);

app.config(['$routeProvider', '$locationProvider', '$httpProvider',
  function($routeProvider, $locationProvider, $httpProvider) {
  $routeProvider.when('/', {
    templateUrl: '/static/js/partials/item/list.html',
    controller: 'HomeCtrl as home'
  }).when('/items', {
    templateUrl: '/static/js/partials/item/list.html',
    controller: 'ItemListCtrl as itemlist'
  }).when('/items/:id', {
    templateUrl: '/static/js/partials/item/detail.html',
    controller: 'ItemDetailCtrl as itemdetail'
  }).when('/cart', {
    templateUrl: '/static/js/partials/cart/list.html',
    controller: 'CartCtrl as cart'
  }).otherwise({redirectTo: '/'});

  $locationProvider.html5Mode({enabled: true, requireBase: false});
  $httpProvider.defaults.xsrfCookieName = 'csrftoken';
  $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
}]);
