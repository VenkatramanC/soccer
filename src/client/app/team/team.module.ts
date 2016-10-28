import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {TeamComponent } from './team.component';

@NgModule({
	imports: [CommonModule, SharedModule],
	declarations: [TeamComponent],
	exports: [TeamComponent]
})
export class TeamModule {
	
}