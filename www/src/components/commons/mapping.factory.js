app.factory('MappingFactory',function($http){
	var factory = {};
	factory.registerBin = function($scope){
		return $http({
			method: 'POST',
			data: {
				'userid': $scope.ownerid,
				'latitude': $scope.latitude,
				'longitude': $scope.longitude
			},
			url: 'https://code2017.000webhostapp.com/api/garbages/register.php',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});
	};

	factory.viewAllBins = function(){
        return $http({
            method: 'GET',
            url: 'https://code2017.000webhostapp.com/api/garbages/read.php'
        });		
	}

	return factory;
});

