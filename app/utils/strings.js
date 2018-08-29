angular.module('utils.strings', [])
  .filter('toCoinAmt', function () {
    return function (amount) {
      return amount / CRYPTONOTE_DISPLAY_DECIMAL_POINT;
    };
  })

  .filter('convertedTime', function () {
    return function(seconds) {
      let days = Math.floor(seconds/86400);
      let hours = Math.floor((seconds % 86400) / 3600);
      let mins = Math.floor(((seconds % 86400) % 3600) / 60);
      let secs = ((seconds % 86400) % 3600) % 60;
      return (days > 0 ? `${days} days ` : '') + (hours > 0 ? `${(`00${hours}`).slice(-2)} hours ` : '') + (mins > 0 ? `${(`00${mins}`).slice(-2)} minutes ` : '');
    };
  })

  .filter('toHashRate', function () {
    return function (hashes) {
      if (hashes > 1000000) return `${parseFloat((hashes / 1000000).toFixed(2))} MH/s`;
      if (hashes > 1000) return `${parseFloat((hashes / 1000).toFixed(2))} KH/s`;
      return `${(hashes || 0)} H/s`;
    };
  })

  .filter('hashToLink', function ($sce) {
    return function (hash, type) {
      const str = (hash === undefined) ? 'none' : `<a class="md-body-2" target="_blank" href="https://blockexplorer/${type}/${hash}">${hash}</a>`;
      return $sce.trustAsHtml(str);
    };
  })

  .filter('difficultyToHashRate', function () {
    return function (hashrate) {
      return Math.floor(hashrate / DIFFICULTY_TARGET)
    };


  });

