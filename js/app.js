var weatherApp = angular.module('weatherApp', ['ngRoute','ngResource']);


weatherApp.config( function($routeProvider){
	$routeProvider
	 .when('/', {
		templateUrl:'pages/home.html',
		controller:'mainController'	 	
	 })
	 .when('/forecast', {
	 	templateUrl:'pages/forecast.html',
	 	controller:'forecastController'
	 })
	 .when('/forecast/:days', {
	 	templateUrl:'pages/forecast.html',
	 	controller:'forecastController'
	 })
});



//url to openweather
//http://api.openweathermap.org/data/2.5/forecast
//api key
//