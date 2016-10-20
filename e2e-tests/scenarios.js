'use strict';

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/login");
  });


  describe('login-view', function() {

    beforeEach(function() {
      browser.get('index.html#!/login');
    });

    it('should route to home page when you log in', function() {
      // Find the element with ng-model="$ctrl.username" and type "admin" into it
      element(by.model('$ctrl.username')).sendKeys('admin');
      element(by.model('$ctrl.password')).sendKeys('admin');

      // Find the first (and only) button on the page and click it
      element(by.id('submit')).click();

      // Should route to home page
      expect(browser.getLocationAbsUrl()).toMatch("/home");
    });

  });

  // describe('view2', function() {
  //
  //   beforeEach(function() {
  //     browser.get('index.html#!/home');
  //   });
  //
  //   it('should render view2 when user navigates to /view2', function() {
  //     expect(element.all(by.css('[ng-view] p')).first().getText()).
  //       toMatch(/partial for view 2/);
  //   });
  //
  // });


});
