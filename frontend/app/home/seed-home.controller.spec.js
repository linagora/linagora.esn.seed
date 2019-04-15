import chai from 'chai';
import angular from 'angular';

const expect = chai.expect;

describe('the seedHomeController', function() {

  const $rootScope, $scope, $controller;

  beforeEach(function() {

    angular.mock.module('linagora.esn.seed');

    angular.mock.inject(function(_$rootScope_, _$controller_) {
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();
      $controller = _$controller_;
    });
  });

  function initController() {
    const bindings = {},
      controller = $controller('seedHomeController',
        {
          $scope: $scope
        },
        bindings);

    $scope.$digest();

    return controller;
  }

  describe('the initialization', function() {
    it('should set $scope.message on init', function() {
      const ctrl = initController();

      expect(ctrl.message).to.equal('Seed home!');
    });
  });
});
