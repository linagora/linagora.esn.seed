import angular from 'angular';
import '../subheader/seed-burger-button.component.js';
import '../subheader/seed-subheader-button.component.js';
import seedSubheaderTemplate from './seed-subheader.pug';

const MODULE_NAME = 'linagora.esn.seed';

angular
  .module(MODULE_NAME)
  .component('seedSubheader', seedSubheader());

function seedSubheader() {
  const component = {
    template: seedSubheaderTemplate()
  };

  return component;
}
