// Cant get this to work....
'use strict';

describe('NavBarController', function() {

  // Invoke the module
  beforeEach(module('navBar'));

  beforeEach(function() {
    //Provide a mock SessionService
    module(function($provide) {
      $provide.service('SessionService', function() {
        this.logout= jasmine.createSpy('logout');
      });
    });

  });

  var ctrl, mockSessionService;
  beforeEach(inject(function($componentController, SessionService){
    ctrl = $componentController('navBar');
    mockSessionService = SessionService;
  }));

  describe('isActiveTab', function() {



    it('should equate num with tabnum', function() {
      expect(ctrl.isActiveTab('1')).toBe('');

      ctrl.tab = '1';
      expect(ctrl.isActiveTab('1')).toBe('active');

    });

  });

  describe('logout', function() {

    it('should call sessionservice.logout', function() {
      ctrl.logout();
      expect(mockSessionService.logout).toHaveBeenCalled();
    });

  });

});
