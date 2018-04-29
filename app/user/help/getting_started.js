app.controller('GettingStartedCtrl', function ($scope, $mdDialog, dataService) {
  $scope.portsList = {};
  $scope.selected = [];

  $scope.promise = dataService.getData('/pool/ports', function (data) {
    $scope.portsList = data;
  });

  $scope.viewPorts = function (ev) {
    $mdDialog.show({
      controller: 'PortsModalCtrl',
      templateUrl: 'user/help/portsmodal.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $scope.menuOpen,
    })
      .then(function (answer) {
        $scope.status = `You said the information was "${answer}".`;
      }, function () {
        $scope.status = 'You cancelled the dialog.';
      });
  };

  $scope.samples = [
    {
      type: 'Username',
      sample: 'address',
      desc: 'Standard wallet address (Official Wallet)',
      valid: true,
    },
    {
      type: 'Username',
      sample: 'address+3500',
      desc: 'Standard wallet address with fixed difficulty of 3500 for the worker',
      valid: true,
    },
    {
      type: 'Username',
      sample: 'address.paymentID',
      desc: 'Standard address with paymentID, required for withdrawing to an exchange, or if you want to use a specific paymentID',
      valid: true,
    },
    {
      type: 'Password',
      sample: 'Steve',
      desc: 'Miner identifier of Steve',
      valid: true,
    },
    {
      type: 'Password',
      sample: 'Steve:test@e-mail.com',
      desc: 'Miner identifier of Steve, and register an account with the e-mail address as password',
      valid: true,
    },
  ]
});
