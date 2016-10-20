'use strict';

angular.module('weather', [])

.component('weather', {
  templateUrl: 'components/weather/weather.html',
  controller: ['WeatherService',
    function WeatherController(WeatherService) {
      var self = this;

      WeatherService.getLocation()
      .then(function(locationData){

        WeatherService.getWeather(locationData)
        .then(function(weatherData) {
          self.current = weatherData;

        }, function(weatherError){
          console.log(weatherError);
        });


      }, function(locationError) {
        console.log(locationError);
      });

    }
  ]
});
