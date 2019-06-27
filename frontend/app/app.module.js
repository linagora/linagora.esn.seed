import angular from 'angular';
import restangular from 'restangular';

const MODULE_NAME = 'linagora.esn.seed';

angular.module(MODULE_NAME, [
  'angular-ui-router',
  'op.dynamicDirective',
  restangular
]);
