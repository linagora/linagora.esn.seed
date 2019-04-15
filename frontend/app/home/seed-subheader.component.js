import angular from 'angular';
import '../subheader/seed-burger-button.component.js';
import '../subheader/seed-subheader-button.component.js';
import seedSubheaderTemplate from './seed-subheader.component.pug';

const MODULE_NAME = 'linagora.esn.seed';
const MODULE_DIR_NAME = '/linagora.esn.seed';

angular
  .module(MODULE_NAME)
  .component('seedSubheader', seedSubheader());

function seedSubheader() {
  const component = {
    template: seedSubheaderTemplate()
  };

  return component;
}
