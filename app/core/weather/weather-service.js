'use strict';

angular.module('weatherService', [])

.service('WeatherService', ['$q', '$window', '$http',
  function($q, $window, $http){
    //api key = 18b696d00b78dd4d9479c97cf970e699

    this.getWeather = function(locationData) {
      var url = 'http://api.openweathermap.org/data/2.5/weather'
        + '?lat=' + locationData.coords.latitude
        + '&lon=' + locationData.coords.longitude
        + '&units=imperial'
        + '&APPID=18b696d00b78dd4d9479c97cf970e699';

      var deferred = $q.defer();
      $http.get(url)
      .then(function(response) {
          //First function handles success
          //console.log(response.data);
          deferred.resolve(response.data);
      }, function(err) {
          //Second function handles error
        console.log("Open Weather Error");
        deferred.reject(err);
      });

      return deferred.promise;

    };

    this.getLocation = function() {

      var deferred = $q.defer();

      if (!$window.navigator.geolocation) {
        deferred.reject('Geolocation not supported.');
      } else {
        $window.navigator.geolocation.getCurrentPosition(function(position) {
          deferred.resolve(position);
        }, function(err) {
          deferred.reject(err);
        });
      }

      return deferred.promise;
    };

  }
]);
