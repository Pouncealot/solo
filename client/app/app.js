angular.module('tracker', [  'ui.router',
  'tracker.services',
  'tracker.regions'
])
.config(function($stateProvider, $urlRouterProvider) {



  $stateProvider
    .state('home', {
      url: '/',
      controller: 'RegionsController',
      templateUrl: 'client/app/regions/regions.html',
      // resolve: {
      //   regions: function() {
      //     console.log(Regions.getAll());
      //     return Regions.getAll();
      //   }
      // }
    })
    // .state('signup', {
    //   url: '/signup',
    //   controller: 'AuthController',
    //   templateUrl: 'app/auth/signup'
    // })
    // .state('signin', {
    //   url: '/signin',
    //   controller: 'AuthController',
    //   templateUrl: 'app/auth/signin'
    // })

    // .state('regions.child', {
    //   url: '/child',
    //   template: '<h1>CHILD</h1>'
    // });

  $urlRouterProvider.otherwise('/');

    /* END SOLUTION */

    // We add our $httpInterceptor into the array
    // of interceptors. Think of it like middleware for your ajax calls
   // $httpProvider.interceptors.push('AttachTokens');
})
// .factory('AttachTokens', function ($window) {
//   // this is an $httpInterceptor
//   // its job is to stop all out going request
//   // then look in local storage and find the user's token
//   // then add it to the header so the server can validate the request
//   var attach = {
//     request: function (object) {
//       var jwt = $window.localStorage.getItem('com.shortly');
//       if (jwt) {
//         object.headers['x-access-token'] = jwt;
//       }
//       object.headers['Allow-Control-Allow-Origin'] = '*';
//       return object;
//     }
//   };
//   return attach;
// });
