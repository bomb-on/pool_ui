'use strict';

angular.module('pool.globals', [])

.factory('GLOBALS', function() {
	return {
		pool_name: "supportXLC.com",
		api_url : 'http://xlc2.jbarbieri.net/api',
		api_refresh_interval: 30000,
		app_update_interval: 10*60000
	};
});
