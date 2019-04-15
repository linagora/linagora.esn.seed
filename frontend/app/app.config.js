import angular from 'angular';
import './common/seed-restangular.service.js';
import './common/seed-application-menu.directive.js';

const MODULE_NAME = 'linagora.esn.seed';

angular
  .module(MODULE_NAME)
  .config(seedApplicationMenu);

function seedApplicationMenu(dynamicDirectiveServiceProvider) {
  'ngInject';

  const home = new dynamicDirectiveServiceProvider.DynamicDirective(true, 'seed-application-menu');

  dynamicDirectiveServiceProvider.addInjection('esn-application-menu', home);
}
