import angular from 'angular';
import uiRouter from 'angular-ui-router';
import restangular from 'restangular';
import opDynamicDirective from 'op.dynamicDirective';

const MODULE_NAME = 'linagora.esn.seed';

angular.module(MODULE_NAME, [
  uiRouter,
  opDynamicDirective,
  restangular
]);
