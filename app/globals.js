'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: '',
		api_url : '',
		pool_server: '',
		coin_abbr: '',
		api_refresh_interval: 30000,
		app_update_interval: 10*60000
	};
});
