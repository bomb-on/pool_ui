'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "Bathmat's BitCoal Pool",
		api_url : 'http://coal.bathmatminingpools.com/api',
		api_refresh_interval: 30000,
		app_update_interval: 10*60000
	};
});
