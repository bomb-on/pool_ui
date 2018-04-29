app.controller('PortsCtrl', function ($scope, $route, dataService) {
  $scope.portsList = {};
  $scope.selected = [];

  $scope.promise = dataService.getData('/pool/ports', function (data) {
    $scope.portsList = data;
  });
});
