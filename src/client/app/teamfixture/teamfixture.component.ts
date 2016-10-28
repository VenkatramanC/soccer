import { Component,OnInit,Input } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { TeamfixtureService } from './teamfixture.service' 


@Component({
	moduleId: module.id,
	selector: 'team-fixtures',
	templateUrl: 'teamfixture.component.html'
})
export class TeamfixtureComponent implements OnInit {
	fixId: any;
	fixtures: any;
	constructor(
		private route: ActivatedRoute,
		private router: Router		,
		private teamfixtureService: TeamfixtureService
		){}

	ngOnInit(){
		this.route.params
		.map(params => {this.fixId = params['id']})
		this.fixId = this.route.snapshot.params

		return this.teamfixtureService.getFixtures(this.fixId.id)
		.subscribe(resp => {this.fixtures = resp})
	}
}