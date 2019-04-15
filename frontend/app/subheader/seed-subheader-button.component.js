import angular from 'angular';
import './home/seed-subheader.less';
import seedSubheaderButtonTemplate from './seed-subheader-button.pug';

const MODULE_NAME = 'linagora.esn.seed';
const MODULE_DIR_NAME = '/linagora.esn.seed';

angular
  .module(MODULE_NAME)
  .component('seedSubheaderButton', seedSubheaderButton);

const seedSubheaderButton ={
  template: seedSubheaderButtonTemplate(),
  bindings: {
    seedDisabled: '<?',
    seedClick: '&?',
    seedIconClass: '@?',
    seedIconText: '@?',
    seedIconPosition: '@?'
  },
  controllerAs: 'ctrl'
};
