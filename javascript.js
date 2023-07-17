$(document).ready(function() {
	// var test = $('#map-container').hasClass('mapit');
	var test = window.google != undefined;

	$('.ismap').click(function() {
		console.log("Map is clicked");
		$gmap = true;
		$mapit = false;
		
		yepnope({  
		    test : test,
		    yep: {
		    	"alreadyLoaded":"timeout=1!"
		    },
		    nope: {
		    	"googleMap": "https://maps.google.com/maps/api/js?v=3&sensor=true&callback=initMap"
		    },
		    callback: {
		    	"alreadyLoaded": function() {
		    		console.log("Already Loaded");
		    		initMap();
		    	}
		    },			
			complete : function(url, result, key){
				console.log("Complete");
		    }
		});
		console.log("I should run before YepNope");
	});

});

function initMap() {
	$("#map-canvas").show();
    console.log("Type Of Google: " + typeof google);
    var geocodeString = $("#map-canvas").data("geocode");
	var geocode = geocodeString.split(',');
	var myLatlng = new google.maps.LatLng(parseFloat(geocode[0]), parseFloat(geocode[1]));

	var myOptions = {
	    zoom: 18,
	    center: myLatlng,
	    mapTypeControl: true,
	    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
	    navigationControl: true,
	    mapTypeId: google.maps.MapTypeId.ROADMAP,
	}

	var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
	var marker = new google.maps.Marker({
	    position: myLatlng,
	    title:"Hello World!"
	});

	// To add the marker to the map, call setMap();
	marker.setMap(map);
}