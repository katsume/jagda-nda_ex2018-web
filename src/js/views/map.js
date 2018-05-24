
module.exports= class {

	constructor(els, val){

		const style = [
			{
			    "elementType": "geometry",
			    "stylers": [{
			        "color": "#f5f5f5"
			    }]
			},
			{
			    "elementType": "labels",
			    "stylers": [{
			        "visibility": "off"
			    }]
			},
			{
			    "elementType": "labels.icon",
			    "stylers": [{
			        "visibility": "off"
			    }]
			},
			{
			    "elementType": "labels.text.fill",
			    "stylers": [{
			        "color": "#616161"
			    }]
			},
			{
			    "elementType": "labels.text.stroke",
			    "stylers": [{
			        "color": "#f5f5f5"
			    }]
			},
			{
			    "featureType": "administrative.land_parcel",
			    "stylers": [{
			        "visibility": "off"
			    }]
			},
			{
			    "featureType": "administrative.land_parcel",
			    "elementType": "labels.text.fill",
			    "stylers": [{
			        "color": "#bdbdbd"
			    }]
			},
			{
			    "featureType": "administrative.neighborhood",
			    "stylers": [{
			        "visibility": "off"
			    }]
			},
			{
			    "featureType": "poi",
			    "elementType": "geometry",
			    "stylers": [{
			        "color": "#eeeeee"
			    }]
			},
			{
			    "featureType": "poi",
			    "elementType": "labels.text.fill",
			    "stylers": [{
			        "color": "#757575"
			    }]
			},
			{
			    "featureType": "poi.park",
			    "elementType": "geometry",
			    "stylers": [{
			        "color": "#e5e5e5"
			    }]
			},
			{
			    "featureType": "poi.park",
			    "elementType": "labels.text.fill",
			    "stylers": [{
			        "color": "#9e9e9e"
			    }]
			},
			{
			    "featureType": "road",
			    "elementType": "geometry",
			    "stylers": [{
			        "color": "#ffffff"
			    }]
			},
			{
			    "featureType": "road.arterial",
			    "elementType": "labels.text.fill",
			    "stylers": [{
			        "color": "#757575"
			    }]
			},
			{
			    "featureType": "road.highway",
			    "elementType": "geometry",
			    "stylers": [{
			        "color": "#dadada"
			    }]
			},
			{
			    "featureType": "road.highway",
			    "elementType": "labels.text.fill",
			    "stylers": [{
			        "color": "#616161"
			    }]
			},
			{
			    "featureType": "road.local",
			    "elementType": "labels.text.fill",
			    "stylers": [{
			        "color": "#9e9e9e"
			    }]
			},
			{
			    "featureType": "transit.line",
			    "elementType": "geometry",
			    "stylers": [{
			        "color": "#e5e5e5"
			    }]
			},
			{
			    "featureType": "transit.station",
			    "elementType": "geometry",
			    "stylers": [{
			        "color": "#eeeeee"
			    }]
			},
			{
			    "featureType": "water",
			    "elementType": "geometry",
			    "stylers": [{
			        "color": "#c9c9c9"
			    }]
			},
			{
			    "featureType": "water",
			    "elementType": "labels.text.fill",
			    "stylers": [{
			        "color": "#9e9e9e"
			    }]
			}
		];

		var latlng = new google.maps.LatLng( val.lat, val.lng );
		var icon = "//" + window.location.host + "/images/map-icon.svg";

		for( var i=0; i<els.length; i++ ) {
			var el = els[i];

			var map = new google.maps.Map(
				el,
				{
					center: latlng,
					zoom: val.zoom,
					mapTypeControl: false,
					streetViewControl: false,
					styles: style
				}
			);

			var marker = new google.maps.Marker({
				map: map,
				position: latlng,
				icon: icon
			});
		}

	}
};