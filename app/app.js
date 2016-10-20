'use strict';

var routes = {
  '/login': {
    templateUrl: 'login-view/login-view.html',
    controller: 'LoginViewCtrl',
    requireLogin: false
  }, '/home' : {
    templateUrl: 'home-view/home-view.html',
    controller: 'View2Ctrl',
    requireLogin: true
  }, '/view3' : {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl',
    requireLogin: true
  }
};

// Define the `phonecatApp` module
angular.module('myApp', [
  'ngRoute',
  'ngCookies',
  'navBar',
  'login',
  'weather',
  'weatherService',
  'loginView',
  'myApp.view2',
  'sessionService',
  'myApp.view3',
  'myApp.version'
])

.config(['$locationProvider', '$routeProvider',
  function($locationProvider, $routeProvider, SessionService) {
    $locationProvider.hashPrefix('!');

    for(var path in routes) {
      $routeProvider.when(path, routes[path]);
    }
    $routeProvider.otherwise({redirectTo: '/home'});


  }
])

.run(function($rootScope, $location, SessionService){

  $rootScope.$on("$locationChangeStart", function(event, next, current) {
    for(var i in routes) {
        if(next.indexOf(i) != -1) {
            if(routes[i].requireLogin && !SessionService.getUserAuthenticated()) {
              // Automatically reroute to /login if not logged in
                //alert("You need to be authenticated to see this page!");
                event.preventDefault();
                $location.path('/login');
            }
        }
    }
  });

});
