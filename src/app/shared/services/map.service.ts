import { Injectable } from '@angular/core';
declare var $;
declare const google:any;
@Injectable()
export class MapService {
	private map:any;
	private markerArray:Array<any>;
	private bounds:any;
	constructor() {
		this.markerArray = [];
		this.bounds =  new google.maps.LatLngBounds();
	}

	initMap(map):void {
		this.map = new google.maps.Map(map, {
			zoom:4,
			center:{lat: -34.397, lng: 150.644}
		});
	}

	addMarker(lat,lng,icon):void {
		let iconMarker = {
   		 url: icon, // url
    	 scaledSize: new google.maps.Size(30, 30), // scaled size
 	     origin: new google.maps.Point(0,0), // origin
  	     anchor: new google.maps.Point(0, 0) // anchor
		};
		let marker = new google.maps.Marker({
			position:{lat:parseInt(lat),lng:parseInt(lng)},
			icon:iconMarker,	
			map:this.map
		});
		this.markerArray.push(marker);
		this.bounds.extend(marker.position);
		this.map.fitBounds(this.bounds);
		  let infoWindow = new google.maps.InfoWindow({
                content: 'hahah'
            });

            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open('<div class="row"><div class="col-sm-12"></div></div>', marker);
            });

		let zoomChangeBoundsListener = 
    google.maps.event.addListenerOnce(this.map, 'bounds_changed', function(event) {
        if (this.getZoom()){
            this.setZoom(4);
        }
});
setTimeout(function(){google.maps.event.removeListener(zoomChangeBoundsListener)}, 2000);
	}

	clearMarkers():void {
		this.markerArray = [];
	}
}