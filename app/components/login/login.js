'use strict';

angular.module('login', [])

.component('login', {
  templateUrl: 'components/login/login.html',
  controller: ['$location', 'SessionService',
    function LoginController($location, SessionService) {

      this.submit = function() {
        if (SessionService.authenticateUser(this.username, this.password)) {
          $location.path('/home');
        } else {
          alert('Wrong user/pass');
        }
      };

    }
  ]
});
