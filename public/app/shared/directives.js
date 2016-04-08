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

app.directive("carouselCustom",function(){
	return{
		restrict: 'EA',
		templateUrl: "app/shared/carousel_custom.html",
		scope: {
          slides: '=slides',
        },
		link: function(scope,element,attr){

			$('#myCarousel').carousel({
			    interval: 4000
			});

			element.on('click', function (e) {
				  var el = angular.element(e.target);

			 	  var id_selector = el.attr("id");
				  console.log(id_selector);
				  var id = id_selector.substr(id_selector.length -1);
				  id = parseInt(id);
				  $('#myCarousel').carousel(id);
				  $('[id^=carousel-selector-]').removeClass('selected');
				  el.addClass('selected');
			});

			// when the carousel slides, auto update
			$('#myCarousel').on('slid', function (e) {
			  var id = $('.item.active').data('slide-number');
			  id = parseInt(id);
			  $('[id^=carousel-selector-]').removeClass('selected');
			  $('[id^=carousel-selector-'+id+']').addClass('selected');
			});
		}
	};
});


