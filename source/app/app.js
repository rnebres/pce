var app = angular.module('paychessApp',
	[	
		'ui.router',
		'ui.bootstrap',
		'ngStorage'
	]
);

app.run(function ($rootScope,$stateParams){
	$rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams,$stateParams){
		$rootScope.state = toState;
	});
})


app.config(function($stateProvider,$urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('/',{
			url: '/',
			controller: 'HomePCEController',
			templateUrl: 'app/components/home/homeView.html'
		})
		.state('survey',{
			url: '/survey',
			controller:'SurveySubmitController',
			templateUrl: 'app/components/survey_form/survey_formView.html'
		})

});