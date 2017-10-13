angular.module('route', [])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state({
        url: '/in_theaters/:page',
        templateUrl: './views/in_theaters/in_theaters.html',
        name: 'in_theaters',
        controller: 'inTheatersCtrl'
      })
      .state({
        url: '/comming_soon/:page',
        templateUrl: './views/comming_soon/comming_soon.html',
        name: 'comming_soon',
        controller: 'commingSoonCtrl'
      })
      .state({
        url: '/top250/:page',
        templateUrl: './views/top250/top250.html',
        name: 'top250',
        controller: 'topCtrl'
      })
      .state({
        url: '/search/:page/:keyword',
        templateUrl: './views/search/search.html',
        name: 'search',
        controller: 'searchCtrl'
      })
    $urlRouterProvider.otherwise('/in_theaters/1')
  }])
