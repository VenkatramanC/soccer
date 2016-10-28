import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { FixtureComponent } from './fixture.component';
import { FixtureService } from './fixture.service';

@NgModule({
	imports: [CommonModule, SharedModule],
	declarations: [FixtureComponent],
	exports: [FixtureComponent],
	providers: [FixtureService]
}) 

export class FixtureModule {

}
