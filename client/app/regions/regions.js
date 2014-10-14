angular.module('tracker.regions', [])

.controller('RegionsController', function ($scope, regions, $log) {
  // Your code here
  /* START SOLUTION */

  $scope.data = {regions: regions};
  // $scope.getLinks = function () {
  //   Links.getAll()
  //     .then(function (links) {
  //       $scope.data.links = links;
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };
  // $scope.getLinks();
  /* END SOLUTION */
})
.directive('regionInfo', function() {
  return {
    restrict: 'E',
    scope: {
      link: '='
    },
    transclusion: true,
    replace: true,
    templateUrl: 'app/regions/regionWidget.html',
    link: function(scope, ele, attrs) {

    }
  };
});
