"use strict";

var app = angular.module("TravelApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
  .when('/books/bookList', {
    templateUrl: 'partials/bookList.html',
    controller: 'BookCtrl'
  })
  .otherwise('/books/bookList');
});