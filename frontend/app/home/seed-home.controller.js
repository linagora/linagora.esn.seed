import angular from 'angular';
import './seed-home.less';
import './seed-subheader.component.js';

const MODULE_NAME = 'linagora.esn.seed';

angular
  .module(MODULE_NAME)
  .controller('seedHomeController', seedHomeController);

function seedHomeController() {
  'ngInject';

  this.message = 'Seed home!';
}
