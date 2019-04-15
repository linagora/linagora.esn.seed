import angular from 'angular';

const MODULE_NAME = 'linagora.esn.seed';

angular
  .module(MODULE_NAME)
  .directive('seedApplicationMenu', seedApplicationMenu);

function seedApplicationMenu(applicationMenuTemplateBuilder) {
  'ngInject';

  const directive = {
    restrict: 'E',
    template: applicationMenuTemplateBuilder('/#/example', 'mdi-emoticon-happy', 'Seed'),
    replace: true
  };

  return directive;
}
