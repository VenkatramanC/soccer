import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {NewsdetailComponent} from './newsdetail.component';

@NgModule({
	imports: [CommonModule,SharedModule],
	declarations: [NewsdetailComponent],
	exports: [NewsdetailComponent]
})
export class NewsdetailModule{}