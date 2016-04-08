var app = angular.module('paychessApp');

app.controller('HomePCEController',['$scope','$rootScope','$state','SurveyService',function($scope, $rootScope,$state,SurveyService){

	$scope.myInterval = 5000;
	$scope.noWrapSlides = false;
	$scope.active = 0;

	$scope.slides = [
		{
			id: 0,
			text: "This is slide 1",
			image: "../source/assets/images/chess-carousel_1.jpg"
		},
		{
			id: 1,
			text: "This is slide 2",
			image: "../source/assets/images/chess-carousel_2.jpg"
		},
		{
			id: 2,
			text: "This is slide 1",
			image: "../source/assets/images/chess-carousel_3.jpg"
		},
		{
			id: 3,
			text: "This is slide 2",
			image: "../source/assets/images/chess-carousel_4.jpg"
		},
		{
			id: 4,
			text: "This is slide 1",
			image: "../source/assets/images/chess-carousel_5.jpg"
		},
		{
			id: 5,
			text: "This is slide 2",
			image: "../source/assets/images/chess-carousel_6.jpg"
		},
		{
			id: 6,
			text: "This is slide 1",
			image: "../source/assets/images/chess-carousel_7.png"
		},
		{
			id: 7,
			text: "This is slide 2",
			image: "../source/assets/images/chess-carousel_8.jpg"
		},
		{
			id: 8,
			text: "This is slide 1",
			image: "../source/assets/images/chess-carousel_9.jpg"
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
	
	$scope.promotions = {
		earlybird:[
			{
				date: "April 05, 2016",
				link: "#",
				title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
			},
			{
				date: "April 06, 2016",
				link: "#",
				title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
			},
			{
				date: "April 07, 2016",
				link: "#",
				title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
			},
			{
				date: "April 08, 2016",
				link: "#",
				title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
			},
			{
				date: "April 09, 2016",
				link: "#",
				title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
			},
		],
		trending:[
			{
				date: "May 05, 2016",
				link: "#",
				title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
			},
			{
				date: "May 06, 2016",
				link: "#",
				title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
			},
			{
				date: "May 07, 2016",
				link: "#",
				title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
			},
			{
				date: "May 08, 2016",
				link: "#",
				title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
			},
			{
				date: "May 09, 2016",
				link: "#",
				title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
			},
		]
	}

	$scope.thumbnails = [
        {
            image: "../source/assets/images/chess-promotions_1.png"
        },
        {
            image: "../source/assets/images/chess-promotions_2.png"
        },
        {
            image: "../source/assets/images/chess-promotions_3.png"
        },
        {
            image: "../source/assets/images/chess-promotions_3.png"
        },
        {
            image: "../source/assets/images/chess-promotions_2.png"
        },
        {
            image: "../source/assets/images/chess-promotions_1.png"
        }

    ];
    $scope.thumbnails_show = [];
    $scope.page = 1;
    $scope.toShow = 3;
    $scope.limit = $scope.page * $scope.toShow;
    var count  = 0;
    for(var x = 0;x<$scope.toShow;x++){
         $scope.thumbnails_show.push($scope.thumbnails[count]);
         count++;
    };

    $scope.hideNext = false;
    $scope.hidePrev = true;

    $scope.prevthumbnail = function(){
		$scope.thumbnails_show = [];
		$scope.hideNext = false;
		$scope.page--;
		$scope.limit = $scope.page * $scope.toShow;
		$scope.start = $scope.limit - $scope.toShow;

        for(var x = $scope.start; x < $scope.limit;x++){
            $scope.thumbnails_show.push($scope.thumbnails[x]);
            count--;
        }

        if(count == $scope.toShow){
            $scope.hidePrev = true;
        }
    };

    $scope.nextthumbnail = function(){
         $scope.thumbnails_show = [];
         $scope.hidePrev = false;
         $scope.page++;

        $scope.limit = $scope.page * $scope.toShow;

        for(var x = count;x<$scope.limit;x++){
            $scope.thumbnails_show.push($scope.thumbnails[x]);
            count++;
        }

        if(count==$scope.thumbnails.length){
            $scope.hideNext = true;
        }
    };



}]);