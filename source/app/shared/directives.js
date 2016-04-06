var app = angular.module("paychessApp");

app.directive("paychessHeader",function(){
	return{
		restrict: 'EA',
		templateUrl:'app/shared/header.html'
	};
});

app.directive("paychessFooter",function(){
	return{
		restrict: 'EA',
		templateUrl:'app/shared/footer.html'
	};
});

app.directive("navbarToggleCustom",function(){
	return{
		restrict: 'A',
		link: function(scope,element,attr){
			element.on('click',function(){
				$("#navbar-custom").toggleClass("open");
			});
		}
	};
});


