angular.module('movieCat', ['ui.router', 'route', 'serviceModule', 'inTheatersModule', 'commingSoonModule', 'topModule', 'searchModule'])
  .controller('navBarCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.search = function () {
      $location.path('/search/1/' + $scope.keyword)
      $scope.keyword = ''
    }
  }])
