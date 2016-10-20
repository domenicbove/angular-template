'use strict';

describe('sessionService', function() {

  // Invoke the module
  beforeEach(module('sessionService'));

  beforeEach(function() {
    module(function($provide) {

      $provide.service('$cookieStore', function() {
        this.get = jasmine.createSpy('get');
        this.remove = jasmine.createSpy('remove');
        this.put = jasmine.createSpy('put');

      });

    });
  });

  var sessionSvc, mockCookieStore;
  beforeEach(inject(function(SessionService, $cookieStore){
    sessionSvc = SessionService;
    mockCookieStore = $cookieStore;
  }));

  describe('getUserAuthenticated', function() {

    it('should call cookieStore.get', function() {
      sessionSvc.getUserAuthenticated();
      expect(mockCookieStore.get).toHaveBeenCalledWith('userIsAuthenticated');
    });

  });

  describe('authenticateUser', function() {

    it('should pass on admin admin', function() {
      expect(sessionSvc.authenticateUser('admin', 'admin')).toEqual(true);
      expect(mockCookieStore.put).toHaveBeenCalledWith('userIsAuthenticated', true);
    });

    it('should fail on non admin', function() {
      expect(sessionSvc.authenticateUser('notadmin', 'admin')).toEqual(false);
    });

  });

  describe('logout', function() {

    it('should call cookieStore.remove', function() {
      sessionSvc.logout();
      expect(mockCookieStore.remove).toHaveBeenCalledWith('userIsAuthenticated');
    });

  });

});
