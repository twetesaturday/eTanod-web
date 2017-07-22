import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ADMIN_ROUTES } from './admin-routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
	declarations:[
	DashboardComponent,
	NavbarComponent],
	imports: [
		CommonModule,
		RouterModule.forRoot(ADMIN_ROUTES)
	],
	providers: [
	],
	exports: [
		NavbarComponent
	]
})

export class AdminUserModule {}