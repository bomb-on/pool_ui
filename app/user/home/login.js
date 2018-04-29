app.controller('LoginCtrl', function ($scope, $route, $mdDialog, dataService) {
  $scope.user = {
    username: '',
    password: '',
  };

  $scope.remember = false;
  $scope.status = '';

  $scope.login = function () {
    dataService.postData('/authenticate', $scope.user, function (data) {
      if (data.success) {
        data.remember = $scope.remember;
        dataService.setAuthToken(data);
        $mdDialog.hide(data);
      } else {
        $mdDialog.hide(false);
      }
    }, function () {
      $scope.status = 'Please check your login details';
    });
  };

  $scope.cancel = function () {
    $mdDialog.cancel();
  }
});
