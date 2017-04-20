'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$window', function($scope, $window) {

    $scope.init = function () {
        console.log('Loading Designer view');

        console.log('Set full screen mode for the designer');
        var options = new $window.Stimulsoft.Designer.StiDesignerOptions();
        options.appearance.fullScreenMode = false;

        console.log('Create the report designer with specified options');
        var designer = new $window.Stimulsoft.Designer.StiDesigner(options, 'StiDesigner', false);

        console.log('Create a new report instance');
        var report = new $window.Stimulsoft.Report.StiReport();

        console.log('Load report from url');
        report.loadFile('reports/SimpleList.mrt');

        console.log('Edit report template in the designer');
        designer.report = report;

        console.log('Rendering the viewer to selected element');
        designer.renderHtml('designer');

        console.log('Loading completed successfully!');
    };


}]);