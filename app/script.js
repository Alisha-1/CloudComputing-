// JavaScript Document
		

 // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'MyCapsule.html'
            })

            // route for the create page
            .when('/Create_1', {
                templateUrl : 'Create_1.html'
                
            })

            // route for the sign out page
            .when('/Main_Home', {
                templateUrl : 'Main_Home.html'
               
            });
    });

  