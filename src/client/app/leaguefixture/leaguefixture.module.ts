import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LeaguefixtureComponent } from './leaguefixture.component';
import { LeaguefixtureService } from './leaguefixture.service';

@NgModule({
	imports: [CommonModule, SharedModule],
	declarations: [LeaguefixtureComponent],
	exports: [LeaguefixtureComponent],
	providers: [LeaguefixtureService]
})
export class LeaguefixtureModule{ }
