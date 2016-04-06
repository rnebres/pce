var app = angular.module('paychessApp');

app.factory('SurveyService',['$localStorage',function($localStorage){
	var factory = {};

	factory.setSurvey = function(data){
		if(!$localStorage.db){
			var dbArray = [];
			dbArray.push(data);
			$localStorage.db = dbArray;
		}else{
			var dbArray = $localStorage.db;
			dbArray.push(data);
			$localStorage.db = dbArray;
		}
	}
	factory.getSurvey = function(){
		return $localStorage.db;
	}

	return factory;
}]);