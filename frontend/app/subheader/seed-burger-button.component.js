import angular from 'angular';
import seedBurgerButtonTemplate from './seed-burger-button.pug';

const MODULE_NAME = 'linagora.esn.seed';
const MODULE_DIR_NAME = '/linagora.esn.seed';

angular
  .module(MODULE_NAME)
  .component('seedBurgerButton', seedBurgerButton);

const seedBurgerButton = {
  template: seedBurgerButtonTemplate()
};
