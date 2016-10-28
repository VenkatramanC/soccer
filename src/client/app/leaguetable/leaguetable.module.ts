import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LeaguetableComponent } from './leaguetable.component';
import { LeaguetableService } from './leaguetable.service';

@NgModule({
	imports: [CommonModule, SharedModule],
	declarations: [LeaguetableComponent],
	exports: [LeaguetableComponent],
	providers: [LeaguetableService]
})
export class LeaguetableModule{ }
