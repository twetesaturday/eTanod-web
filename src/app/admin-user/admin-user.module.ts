import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ADMIN_ROUTES } from './admin-routes';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
	declarations:[
	DashboardComponent],
	imports: [
		CommonModule,
		RouterModule.forRoot(ADMIN_ROUTES)
	],
	providers: [
	]
})

export class AdminUserModule {}