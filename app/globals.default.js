'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "supportxlc.com",
		api_url : 'http://xlc2.jbarbieri.net/api',
		api_refresh_interval: 5000,
		app_update_interval: 30*60000
	};
});
