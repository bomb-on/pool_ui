app.controller('NetworkCtrl', function ($scope, $route, dataService) {
  const loadData = function () {
    console.log('Getting Network Data');

    dataService.getData('/network/chart/usdHash/60', function (data) {
      $scope.config = data;
      console.log(data);
    });
  };

  loadData();
});
