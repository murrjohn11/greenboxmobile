app.factory('LoginFactory',function($http){
	var factory = {};
		factory.validateUser = function($scope){
			return $http({
				method: 'POST',
				data: {
					'username': $scope.username,
					'password': $scope.password
				},
				url: 'https://code2017.000webhostapp.com/api/user/validate.php',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			});
		}
		return factory;
});