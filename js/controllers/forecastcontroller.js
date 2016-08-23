
angular.module('weatherApp')
.controller('forecastController',['$scope','$resource','$routeParams','$cityService',
 function forecastController($scope,$resource,$routeParams, $cityService){
 	var APPID = '6d1f22b5780cd58f12c71c598e0c52b1'

 	$scope.degOrF = true;
	$scope.city = $cityService.city;
    $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',
    	{callback: "JSON_CALLBACK"},
    	{get: {method:"JSONP" }});


  	$scope.days = $routeParams.days || 2;
    $scope.weatherResult = $scope.weatherAPI.get({q:$scope.city, cnt:$scope.days,APPID:APPID});

    $scope.convertToCelsius = function(degK) {
    	return  Math.round(degK - 273.15) 
      };

    $scope.convertToFahrenheit = function(degK){
    	return Math.round((1.8 * (degK - 273) +32));
    };

    $scope.convertToDate = function(dt){
    	return new Date(dt * 1000);
    };

    $scope.printTheWeather = function (weather){

    	var dayTempC = $scope.convertToCelsius(weather.temp.day);
    	var dayTempF = $scope.convertToFahrenheit(weather.temp.day);

    	
    		return "Day time temperature: " + dayTempC + "°C";
    	
    	


    }
}]);





