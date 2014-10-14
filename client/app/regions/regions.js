angular.module('tracker.regions', [])

.controller('RegionsController', function ($scope, regions, $log) {
  $scope.data =   { statuses : []
  }

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
