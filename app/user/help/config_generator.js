app.controller('ConfigGeneratorCtrl', function ($scope) {
  $scope.example_config = {
    pool_address: '',
    username: '',
    password: '',
  };

  $scope.example_attr = {
    with_mail: false,
    with_worker_id: false,
    with_pool_address: 'pool.supportxmr.com',
    with_custom_wallet: '43QGgipcHvNLBX3nunZLwVQpF6VbobmGcQKzXzQ5xMfJgzfRBzfXcJHX1tUHcKPm9bcjubrzKqTm69JbQSL4B3f6E3mNCbU',
    with_custom_worker: 'MyWorker',
    with_custom_email: 'me@email.com',
    with_custom_port: '5555',
  };

  $scope.updateExample = function () {
    const attr = $scope.example_attr;
    const conf = $scope.example_config;

    conf['pool_address'] = `${attr['with_pool_address']}:${attr['with_custom_port']}`;
    conf['username'] = attr['with_custom_wallet'];
    conf['password'] = 'x:';

    if (attr['with_worker_id']) conf['password'] = attr['with_custom_worker'];
    if (attr['with_mail'] && attr['with_worker_id']) conf['password'] += ':';
    if (attr['with_mail']) conf['password'] += attr['with_custom_email'];
    if (!attr['with_mail'] && !attr['with_worker_id']) conf['password'] = 'x';
  };

  $scope.updateExample();
});
