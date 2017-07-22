import { Injectable } from '@angular/core';
declare var $;
declare const google:any;
@Injectable()
export class MapService {
	private map:any;
	private markerArray:Array<any>;
	initMap(map,center):void {
		this.map = new google.maps.Map(map, {
			zoom:4,
			center: center
		});
	}

	addMarker(lat,lng,icon):void {
		let marker = new google.maps.Marker({
			position:{lat:lat,lng:lng},
			icon:icon
		});
		this.markerArray.push(marker);
	}
}