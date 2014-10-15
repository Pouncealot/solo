var api_key = '6a4e5fbd-b36b-4816-bd3f-f2b3b2086fc5'

angular.module('tracker.services', [])

  .factory('regions', function ($http) {
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
  })

  .factory('players', function ($http) {

    var getID = function(name,region){
      return $http({
        method: 'GET',
        url: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + name + '?api_key=' + api_key
      })
      .then(function(resp){
        console.log(resp.data)
        return resp.data
      })
    }
    return {
      getID: getID
    };
  });
