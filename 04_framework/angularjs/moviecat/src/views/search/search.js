angular.module('searchModule', [])
  .controller('searchCtrl', ['$scope', '$http', 'myService', '$stateParams', '$location', function ($scope, $http, myService, $stateParams, $location) {
    var keyword = $stateParams['keyword']
    var page = $stateParams['page']
    var count = 10
    var start = (page - 1) * count
    var totalPage = 0

    myService.myJsonp('https://api.douban.com/v2/movie/search', {
      q: keyword,
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

      $location.path('/search/' + page + '/' + keyword)
    }
  }])
