import {Component , Input , OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LeaguefixtureService} from './leaguefixture.service';

@Component({
	moduleId: module.id,
	selector:  'leaguefixture',
	// template: '<h1>Hi</h1>'
	templateUrl: 'leaguefixture.component.html',
	styleUrls: ['leaguefixture.component.css']
})
export class LeaguefixtureComponent implements OnInit {
	leagueFixtures: any;
	fixObject: any;

	constructor(private route: ActivatedRoute,
		private leagueFixtureService: LeaguefixtureService){}
	ngOnInit(){
		this.route.params
        .map(params => {this.fixObject = params['id']})
      	this.fixObject = this.route.snapshot.params;
      	return this.leagueFixtureService.getTeamFixtures(this.fixObject.id)
      	.subscribe(resp => {this.leagueFixtures = resp})
	}


}