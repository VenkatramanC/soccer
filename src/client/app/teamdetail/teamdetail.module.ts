import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import{ SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@angular/material';
import { TeamdetailComponent } from './teamdetail.component';
import {TeamdetailService} from './teamdetail.service';
@NgModule({
	imports: [CommonModule,SharedModule, MaterialModule.forRoot()],
	declarations: [TeamdetailComponent],
	exports: [TeamdetailComponent],
	providers: [TeamdetailService]
})
export class TeamdetailModule{}