import { Component, Input } from '@angular/core';
import { FixtureService} from './fixture.service'
@Component({
	moduleId: module.id,
	selector: 'sd-upcoming-matches',
	templateUrl: 'fixture.component.html'
})

export class FixtureComponent {
	matches: any;
	
	constructor(
	private fixtureService: FixtureService){}
	
	clicked(){
		this.fixtureService.getFixtures()
		.subscribe(resp => {this.matches = resp
			console.log(this.matches);
		})
	}

	isMatches(){
		if(this.matches === null){
			return false
		}
		else{
			return true
		}
	}
}