'use strict';

// Necessary to do the [] here
angular.module('navBar', [])

.component('navBar', {
  bindings: {
    //This binding cannot have dashes or be camelCase
    tab: '@'
  },
  templateUrl: 'components/nav-bar/nav-bar.html',
  controller: ['SessionService',
    function NavBarController(SessionService) {

      this.isActiveTab = function(tabNum) {
        if (this.tab === tabNum) {
          return "active";
        } else {
          return "";
        }
      };

      this.logout = function() {
        SessionService.logout();
      }

    }
  ]
});
