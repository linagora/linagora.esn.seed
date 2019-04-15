import angular from 'angular';
import restangular from 'restangular';

const MODULE_NAME = 'linagora.esn.seed';
const MODULE_DIR_NAME = '/linagora.esn.seed';

angular
  .module(MODULE_NAME)
  .factory('seedRestangular', seedRestangular);

function seedRestangular(Restangular) {
  'ngInject';

  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setBaseUrl(MODULE_DIR_NAME + '/api');
    RestangularConfigurer.setFullResponse(true);
  });
}
