app.controller('ConsoleCtrl', function ($scope, $route, $filter, $timeout, $mdDialog, min_wallet_payout, dataService) {
  $scope.paymentThresh;
  $scope.min_wallet_payout = min_wallet_payout;
  $scope.currentTab = 'Threshold'; // default tab
  $scope.status = '';
  $scope.statusClass = 'valid';
  $scope.password = {
    pwd: '',
    cnf: '',
  };

  let email_enabled;

  const getConfig = function () {
    dataService.getData('/authed', function (data) {
      $scope.paymentThresh = $filter('toCoinAmt')(data.msg.payout_threshold);
      email_enabled = data.msg.email_enabled;
      $scope.email_toggle = data.msg.email_enabled;
    });
  };

  const updateThreshold = function () {
    dataService.postData('/authed/changePayoutThreshold', {threshold: $scope.paymentThresh}, function () {
      //$mdDialog.hide('updated');
      $scope.statusClass = 'valid';
      $scope.status = 'Threshold Saved';
      messageFlash();
    });
  };

  const updatePassword = function () {
    if ($scope.password.pwd === $scope.password.cnf && $scope.password.pwd !== '') {
      dataService.postData('/authed/changePassword', {password: $scope.password.pwd}, function () {
        //$mdDialog.hide('updated');
        $scope.statusClass = 'valid';
        $scope.status = 'Password Saved';
        messageFlash();
      });
    } else {
      $scope.statusClass = 'invalid';
      $scope.status = 'Check passwords';
      messageFlash();
    }
  };

  const updateEmail = function () {
    if ($scope.email_toggle !== email_enabled) {
      dataService.postData('/authed/toggleEmail', {}, function (data) {
        $scope.status = data.msg;
        email_enabled = $scope.email_toggle;
        messageFlash();
      });
    } else {
      $scope.statusClass = 'invalid';
      $scope.status = 'No Change...';
      messageFlash();
    }
  };

  const messageFlash = function () {
    $timeout(function () {
      $scope.status = '';
      $scope.statusClass = 'valid';
    }, 2000);
  };

  $scope.save = function () {
    $scope.statusClass = 'valid';
    $scope.status = 'Saving...';// + $scope.currentTab;
    switch ($scope.currentTab) {
      case 'Threshold':
        updateThreshold();
        break;
      case 'Password':
        updatePassword();
        break;
      case 'Email':
        updateEmail();
    }
  };

  $scope.logout = function () {
    $mdDialog.hide('logout');
  };

  getConfig();

  // Dialog methods
  $scope.cancel = function () {
    $mdDialog.cancel();
  }
});
