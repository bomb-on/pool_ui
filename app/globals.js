'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "Bathmat's Test Pool",
		api_url : 'http://test.bathmatminingpools.com/api',
		pool_server: "test.bathmatminingpools.com",
		coin_abbr: "TEST",
		api_refresh_interval: 30000,
		app_update_interval: 10*60000
	};
});
