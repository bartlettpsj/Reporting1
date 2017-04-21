'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope', '$window', function($scope, $window) {

    $scope.init = function () {
        console.log('Loading Viewer view');

        console.log('Creating the report viewer with default options');
        var viewer = new $window.Stimulsoft.Viewer.StiViewer(null, 'StiViewer', false);

        console.log('Creating a new report instance');
        var report = new $window.Stimulsoft.Report.StiReport();

        console.log('Load report from url');
        report.loadFile('reports/SimpleList.mrt');

        console.log('Generating JSON data');
        var dataSet = new Stimulsoft.System.Data.DataSet("Demo");
        var jsonString = "{\"Customers\":[{\"CustomerID\":\"ALFKI\",\"CompanyName\":\"IQ Software Services\",\"ContactName\":\"Paul Bartlett\",\"ContactTitle\":\"Sales Representative\",\"Address\":\"5 Lodge Gate\",\"City\":\"Milton Keynes\",\"Region\":null,\"PostalCode\":\"MK14 5EW\",\"Country\":\"Great Britain\",\"Phone\":\"030-0074321\",\"Fax\":\"030-0076545\"},{\"CustomerID\":\"ANATR\",\"CompanyName\":\"Everyone Counts.com\",\"ContactName\":\"Izzak Brassea\",\"ContactTitle\":\"Owner\",\"Address\":\"Wheatsheaf\",\"City\":\"Leys Rd\",\"Region\":null,\"PostalCode\":\"MK5 8AZ\",\"Country\":\"England\",\"Phone\":\"(5) 555-4729\",\"Fax\":\"(5) 555-3745\"}]}";

        // Just alter the loop counter to generate more data
        for (var i = 0; i < 100; i++) {
            dataSet.readJson(jsonString);
        }

        report.dictionary.databases.clear();
        report.regData("Demo", "Demo", dataSet);


        console.log('Assigning report to the viewer, the report will be built automatically after rendering the viewer');
        viewer.report = report;

        console.log('Rendering the viewer to selected element');
        viewer.renderHtml('viewer');

        console.log('Loading completed successfully!');
    };


}]);