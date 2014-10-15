angular.module('tracker', [  'ui.router',
  'tracker.services',
  'tracker.regions',
  'tracker.players'
])

.config(function($stateProvider, $urlRouterProvider) {



  $stateProvider
    .state('home', {
      url: '/',
      controller: 'RegionsController',
      templateUrl: 'client/app/regions/regions.html',
    })

  $stateProvider
    .state('players', {
      url: '/players',
      controller: 'PlayersController',
      templateUrl: 'client/app/players/players.html'
    })

  $urlRouterProvider.otherwise('/');
});
