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
  	$scope.eventsPicked = 'tournaments';

	$scope.events = {
			tournaments: [
				{
					id: 0,
					title: "Pavna All India Fide Rated Chess Tournament",
					image: "../source/assets/images/chess_1.png",
					organizer: "District Chess Sports Association",
					date: "May 17-22, 2016",
					time: "09:00AM - 05:00PM",
					entry: "40.00"
				},
				{
					id: 1,
					title: "4th State Level Children & Open Chess Tournment",
					image: "../source/assets/images/chess_2.png",
					organizer: "Genius Chess Club",
					date: "May 21-22, 2016",
					time: "09:00AM - 05:00PM",
					entry: null
				},
				{
					id: 2,
					title: "1st Karmveer V.T. Randhir FIDE Rating Maharashtra...",
					image: "../source/assets/images/chess_3.png",
					organizer: "K.V.P Sanstha’s Shirpur",
					date: "June 15-20, 2016",
					time: "09:00AM - 05:00PM",
					entry: null
				},
				{
					id: 3,
					title: "Robert Fischer Memorial 2016, All India Open Chess",
					image: "../source/assets/images/chess_4.png",
					organizer: "Tranvancore Chess Club",
					date: "July 02-06, 2016",
					time: "09:00AM - 05:00PM",
					entry: null
				},
				{
					id: 4,
					title: "Tournament Title",
					image: "../source/assets/images/chess_1.png",
					organizer: "Organizer’s Name",
					date: "May 24, 2016",
					time: "09:00AM - 05:00PM",
					entry: null
				},
				{
					id: 5,
					title: "Tournament Title",
					image: "../source/assets/images/chess_2.png",
					organizer: "Organizer’s Name",
					date: "May 24, 2016",
					time: "09:00AM - 05:00PM",
					entry: null
				}
			
			],
			camps: [
				{
					id: 0,
					title: "Coaching Camp Title",
					image: "../source/assets/images/chess_1.png",
					organizer: "District Chess Sports Association",
					date: "May 17-22, 2016",
					time: "09:00AM - 05:00PM",
					entry: "40.00"
				},
				{
					id: 1,
					title: "Coaching Camp Title",
					image: "../source/assets/images/chess_2.png",
					organizer: "Genius Chess Club",
					date: "May 21-22, 2016",
					time: "09:00AM - 05:00PM",
					entry: null
				},
				{
					id: 2,
					title: "Coaching Camp Title",
					image: "../source/assets/images/chess_3.png",
					organizer: "K.V.P Sanstha’s Shirpur",
					date: "June 15-20, 2016",
					time: "09:00AM - 05:00PM",
					entry: null
				},
				{
					id: 3,
					title: "Coaching Camp Title",
					image: "../source/assets/images/chess_4.png",
					organizer: "Tranvancore Chess Club",
					date: "July 02-06, 2016",
					time: "09:00AM - 05:00PM",
					entry: null
				},
				{
					id: 4,
					title: "Coaching Camp Title",
					image: "../source/assets/images/chess_1.png",
					organizer: "Organizer’s Name",
					date: "May 24, 2016",
					time: "09:00AM - 05:00PM",
					entry: null
				},
				{
					id: 5,
					title: "Coaching Camp Title",
					image: "../source/assets/images/chess_2.png",
					organizer: "Organizer’s Name",
					date: "May 24, 2016",
					time: "09:00AM - 05:00PM",
					entry: null
				}
			
			],
			memberships: [
				{
					id: 0,
					title: "Association Membership Title",
					image: "../source/assets/images/chess_1.png",
					organizer: "District Chess Sports Association",
					date: "May 17-22, 2016",
					time: "09:00AM - 05:00PM",
					entry: "40.00"
				},
				{
					id: 1,
					title: "Association Membership Title",
					image: "../source/assets/images/chess_2.png",
					organizer: "Genius Chess Club",
					date: "May 21-22, 2016",
					time: "09:00AM - 05:00PM",
					entry: null
				},
				{
					id: 2,
					title: "Association Membership Title",
					image: "../source/assets/images/chess_3.png",
					organizer: "K.V.P Sanstha’s Shirpur",
					date: "June 15-20, 2016",
					time: "09:00AM - 05:00PM",
					entry: null
				},
				{
					id: 3,
					title: "Association Membership Title",
					image: "../source/assets/images/chess_4.png",
					organizer: "Tranvancore Chess Club",
					date: "July 02-06, 2016",
					time: "09:00AM - 05:00PM",
					entry: null
				},
				{
					id: 4,
					title: "Association Membership Title",
					image: "../source/assets/images/chess_1.png",
					organizer: "Organizer’s Name",
					date: "May 24, 2016",
					time: "09:00AM - 05:00PM",
					entry: null
				},
				{
					id: 5,
					title: "Association Membership Title",
					image: "../source/assets/images/chess_2.png",
					organizer: "Organizer’s Name",
					date: "May 24, 2016",
					time: "09:00AM - 05:00PM",
					entry: null
				}
			
			]
	}
	
	

}]);