import angular from 'angular';
import seedSubheaderButtonTemplate from './seed-subheader-button.pug';
// import './seed-subheader.less';

const MODULE_NAME = 'linagora.esn.seed';

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
