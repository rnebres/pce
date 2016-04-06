var app = angular.module('paychessApp');

app.controller('SurveySubmitController',['$scope','$rootScope','$localStorage','$state','SurveyService',function($scope, $rootScope, $localStorage,$state,SurveyService){
	// Hide existing alerts
	$rootScope.isAlert = false;
	$rootScope.alertType="";
	// Check if  local storage for counter is set
	if(!$localStorage.counter){
		// If no local storage is set, set the initial value to 0
		$localStorage.counter = 0;
	}
	$scope.submit_form = function(form){
		//Check if form is valid
		if(form.$valid){
			//Increment storage counter for id and set the new id
			++$localStorage.counter;
			$scope.form.id=$localStorage.counter;

			//Get date today for Submission Date field
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1;
			var yyyy = today.getFullYear();

			if(dd<10) {
			    dd='0'+dd
			} 

			if(mm<10) {
			    mm='0'+mm
			} 

			today = mm+'/'+dd+'/'+yyyy;

			$scope.form.date_submitted = today;
			//Save the form to the local storage
			SurveyService.setSurvey($scope.form);
			//Redirect to Home page and show the alert message
			$state.go('/');
			$rootScope.isAlert = true;
			$rootScope.alertType='1';
		}else{
			$scope.submitted =true;
		}
	};
}]);