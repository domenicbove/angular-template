'use strict';

describe('LoginController', function() {

  // Invoke the module
  beforeEach(module('login'));

  beforeEach(function() {
    module(function($provide) {
      //Provide a mock SessionService
      $provide.service('SessionService', function() {
        this.authenticateUser = function(user, pass) {
          if (user === 'admin') {
            return true;
          } else {
            return false;
          }
        };
      });
      //Provide a mock $location service
      $provide.service('$location', function() {
        this.path= jasmine.createSpy('path');
      });

    });

  });

  var ctrl, mockSessionService, mockLocation;
  beforeEach(inject(function($componentController, SessionService, $location){
    ctrl = $componentController('login');
    mockSessionService = SessionService;
    mockLocation = $location;
  }));

  describe('submit', function() {

    it('should call location path', function() {
      ctrl.username = 'admin';
      ctrl.password = 'admin';
      ctrl.submit();
      expect(mockLocation.path).toHaveBeenCalledWith('/home');
    });

    it('should not call location path', function() {
      ctrl.username = 'not-admin';
      ctrl.password = 'admin';
      ctrl.submit();
      expect(mockLocation.path).not.toHaveBeenCalled();
    });

  });

});
