app.controller('PaymentsCtrl', function ($scope, dataService) {
  $scope.payments = {};
  $scope.selected = [];

  $scope.options = {
    page: 1,
    limit: 15,
  };

  $scope.loadPayments = function () {
    let params = angular.copy($scope.options);
    params.page -= 1;
    const urlParams = $.param(params);

    dataService.getData(`/pool/payments?${urlParams}`, function (data) {
      $scope.payments.global = data;
    });
  };

  $scope.loadPayments();
});
