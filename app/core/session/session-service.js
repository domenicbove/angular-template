'use strict';

angular.module('sessionService', [])

.service('SessionService', ['$cookieStore',
  function($cookieStore){
    var userIsAuthenticated = false;

    this.authenticateUser = function(username, password) {
      // will be making back end call here
      if (username == 'admin' && password == 'admin') {
        userIsAuthenticated = true;
        $cookieStore.put('userIsAuthenticated',true);
      }
      return userIsAuthenticated;
    }

    this.getUserAuthenticated = function(){
      return $cookieStore.get('userIsAuthenticated');
    };

    this.logout = function(){
      $cookieStore.remove('userIsAuthenticated');
    }

  }
]);
