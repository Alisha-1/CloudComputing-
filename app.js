
// const wfewhf = require('./test')
var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
	
    $routeProvider
    .when("/", {
      templateUrl: 'Index.html',
      controller: "mainController.js",
      css: 'Create.css'

      })
    $locationProvider.html5Mode(true);

});


// var app = angular.module("myApp", ["ngRoute"]);

// app.config(function($routeProvider, $locationProvider) {
	
//     $routeProvider
//     .when("/", {
//       templateUrl: 'app/Create_1.html',
//       controller: "CreateController",
//       css: 'Create.css'

//       })
//     $locationProvider.html5Mode(true);

// });
