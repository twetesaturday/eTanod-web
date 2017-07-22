import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../shared/services';
declare var $;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
  	private service:FirebaseService
  	) { }

  ngOnInit() {
  	
  	this.service.Get('reports').on('value',(snapshot:any) => {
  		console.log(snapshot.val());
  	});
  }

}
