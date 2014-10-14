angular.module('tracker.services', [])

.factory('regions', function ($http) {
  // Your code here
  /* START SOLUTION */
  var getAll = function () {
    return $http({
      method: 'GET',
      url: 'http://status.leagueoflegends.com/shards'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var getRegion = function(slug) {
    return $http({
      method: 'GET',
      url: 'http://status.leagueoflegends.com/shards/' + slug
    })
    .then(function (resp) {
      return resp.data;
    });
  }
  return {
    getAll: getAll,
    getRegion: getRegion
  };
  /* END SOLUTION */
})
