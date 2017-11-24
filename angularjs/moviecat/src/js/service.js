angular.module('serviceModule', [])
  .service('myService', [function () {
    this.myJsonp = function (url, data, callback) {
      var fnName = 'myJsonp_' + Math.random().toString().replace('.', '')
      window[fnName] = callback
      var queryString = ''
      for (var attr in data) {
        queryString += attr + '=' + data[attr] + '&'
      }

      var script = document.createElement('script')
      script.src = url + '?' + queryString + 'callback=' + fnName
      script.onload = function () {
        document.body.removeChild(script)
      }
      document.body.appendChild(script)
    }
  }])
