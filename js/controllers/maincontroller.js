angular.module('weatherApp')
.controller('mainController', ['$scope','$log','$cityService', 
		function mainController($scope, $log, $cityService){
		$scope.city = $cityService.city;
		$scope.$watch('city', function(){
			$cityService.city = $scope.city;
		});
}]);



