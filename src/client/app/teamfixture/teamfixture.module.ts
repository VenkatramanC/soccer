import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {TeamfixtureComponent} from  './teamfixture.component';
import {TeamfixtureService} from './teamfixture.service';

@NgModule({
	imports: [CommonModule, SharedModule],
	declarations: [TeamfixtureComponent],
	exports: [ TeamfixtureComponent],
	providers: [TeamfixtureService]
})

export class TeamfixtureModule{}
