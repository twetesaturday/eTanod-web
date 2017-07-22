import { Component, OnInit } from '@angular/core';
import { MapService, FirebaseService } from '../../shared/services';
declare var $;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  crimes:Array<any> = [
  {"name":"Carnapping",
   "src":"assets/img/crimes/carnapping.png"},
   {"name":"Extortion",
   "src":"assets/img/crimes/extortion.png"},
     {"name":"Homicide",
   "src":"assets/img/crimes/homicide.png"},  {"name":"Motornapping",
   "src":"assets/img/crimes/motornapping.png"},  {"name":"Murder",
   "src":"assets/img/crimes/murder.png"},  {"name":"Physical",
   "src":"assets/img/crimes/physical.png"},  {"name":"Rape",
   "src":"assets/img/crimes/rape.png"},  {"name":"Robbery",
   "src":"assets/img/crimes/robbery.png"},  {"name":"Theft",
   "src":"assets/img/crimes/theft.png"},
  ];
  reportsArray:Array<any>;

  constructor(
  	private mapService:MapService,
  	private firebase:FirebaseService
  	) { }

  ngOnInit() {
  	this.mapService.initMap(document.getElementById('map'));
  	this.firebase.Get('reports').on('value',(reports) => {
  		console.log(reports.val());
  		this.reportsArray= Object.keys(reports.val()).map(function(k) { return reports.val()[k] });
  		console.log(this.reportsArray);
  		this.reportsArray.forEach((report) => {
  			
  			this.mapService.addMarker(report.latitude,report.longitude,this.getCrimeTypeByName(report.type));	
  		});
  	});
  }

  getCrimeTypeByName(name:string):any {
  	let crime = null;
  	this.crimes.forEach((val) => {
  		if(val.name == name)
  			crime = val.src; 
  	});
  	return crime;
  }

}
