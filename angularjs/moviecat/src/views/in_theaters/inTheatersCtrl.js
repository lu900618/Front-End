angular.module('inTheatersModule', [])
  .controller('inTheatersCtrl', ['$scope', '$http', 'myService', '$stateParams', '$location', function ($scope, $http, myService, $stateParams, $location) {
    var page = $stateParams['page']
    var count = 10
    var start = (page - 1) * count
    var totalPage = 0

    myService.myJsonp('https://api.douban.com/v2/movie/in_theaters', {
      count: count,
      start: start
    }, function (res) {
      console.log(res)
      $scope.result = res
      totalPage = Math.ceil(res.total / count)
      $scope.$apply()
    })

    $scope.changePage = function (type) {
      if (type === 'next') {
        page++
        if (page > totalPage) {
          page = totalPage
        }
      } else if (type === 'prev') {
        page--
        if (page < 1) {
          page = 1
        }
      }
      
      $location.path('/in_theaters/' + page)
    }
  }])
