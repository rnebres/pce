var app = angular.module('paychessApp');

app.controller('HomePCEController',['$scope','$rootScope','$state','SurveyService',function($scope, $rootScope,$state,SurveyService){

  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;

  $scope.slides = [
	{
		id: 0,
		text: "This is slide 1",
		image: "../source/assets/images/slide_1.png"
	},
	{
		id: 1,
		text: "This is slide 2",
		image: "../source/assets/images/slide_2.png"
	}
  ];

  $scope.countries = [
  	{
  		id:0,
  		name:"All"
  	},
  	{
  		id:1,
  		name:"Philippines"
  	}
  ];

   $scope.filters = [
  	{
  		id:0,
  		name:"All"
  	},
  	{
  		id:1,
  		name:"Live"
  	}
  ];

  $scope.selected = {
  	country: "0",
  	filter: "0",
  }

  $scope.events = [
	{
		id: 0,
		title: "Lorem Ipsum Dolor",
		image: "../source/assets/images/slide_1.png",
		organizer: "Organizer 1",
		description: null,
		share: false,
		bookmark: false
	},
	{
		id: 2,
		title: "Lorem Ipsum Dolor Keme Keme",
		image: "../source/assets/images/slide_2.png",
		organizer: "Organizer 2",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis autem consequuntur placeat fugiat nihil unde debitis sed modi, excepturi maxime, quod rem. Minima officia mollitia, magni at veritatis animi tempora",
		share: true,
		bookmark: true
	},
	{
		id: 3,
		title: "Lorem Ipsum Dolor Keme Keme",
		image: "../source/assets/images/slide_3.png",
		organizer: "Organizer 3",
		description: null,
		share: false,
		bookmark: false
	},
	{
		id: 4,
		title: "Lorem Ipsum Dolor Keme Keme",
		image: "../source/assets/images/slide_4.png",
		organizer: "Organizer 4",
		description: null,
		share: false,
		bookmark: false
	},
	{
		id: 5,
		title: "Lorem Ipsum Dolor Keme Keme",
		image: "../source/assets/images/slide_1.png",
		organizer: "Organizer 5",
		description: null,
		share: false,
		bookmark: false
	},
	{
		id: 6,
		title: "Lorem Ipsum Dolor Keme Keme",
		image: "../source/assets/images/slide_2.png",
		organizer: "Organizer 6",
		description: null,
		share: false,
		bookmark: false
	}
  ];

}]);