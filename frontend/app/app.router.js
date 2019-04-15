import angular from 'angular';
import './home/seed-home.controller.js';
import seedHomeTemplate from './home/seed-home.pug';
import seedSidebarTemplate from './home/seed-sidebar.pug';
import seedMainTemplate from './home/seed-main.pug';

const MODULE_NAME = 'linagora.esn.seed';
const MODULE_DIR_NAME = '/linagora.esn.seed';

angular
  .module(MODULE_NAME)
  .config(routes);

function routes($stateProvider) {
  'ngInject';

  $stateProvider
    .state('example', {
      url: '/example',
      views: {
        '': {
          template: seedHomeTemplate()
        },
        'sidebar@example': {
          template: seedSidebarTemplate()
        }
      },
      deepStateRedirect: {
        default: 'example.home',
        fn: function() {
          return { state: 'example.home' };
        }
      }
    })
    .state('example.home', {
      url: '/home',
      controller: 'seedHomeController',
      controllerAs: 'ctrl',
      views: {
        'main@example': {
          template: seedMainTemplate()
        }
      }
    });
}
