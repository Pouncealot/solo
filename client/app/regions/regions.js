angular.module('tracker.regions', [])

.controller('RegionsController', function ($scope, regions, $log) {
  $scope.data =   { statuses : []
  }

  var refresh = function(){
      $scope.data.statuses = [];
      regions.getAll()
      .then(function(resp){
        $scope.data.regions = resp;
      })
     .then(function(){
      $scope.data.regions.forEach(function(reg){
      regions.getRegion(reg.slug)
        .then(function(resp){
            $scope.data.statuses.push(resp);
          })
      })
    })
    console.log('refreshing')
    window.setTimeout(refresh,25000)
  }

  refresh();


})

.directive('regionInfo', function() {
  return {
    restrict: 'E',
    scope: {
      region : '='
    },
    transclusion: true,
    replace: true,
    templateUrl: 'client/app/regions/regionWidget.html',
    link: function(scope, ele, attrs) {

    }
  }
})
