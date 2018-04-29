app.controller('MinerPaymentsCtrl', function ($scope, $mdDialog, dataService, miner, addr) {
  $scope.miner = miner;
  $scope.addr = addr;
  $scope.selected = [];

  $scope.options = {
    page: 1,
    limit: 15
  };

  $scope.loadPayments = function () {
    const params = angular.copy($scope.options);
    params.page -= 1;
    const urlParams = $.param(params);

    dataService.getData(`/miner/${addr}/payments?${urlParams}`, function (data) {
      $scope.payments = data;
    });
  };

  $scope.loadPayments();

  $scope.answer = function () {
    $mdDialog.hide('close')
  }
});
