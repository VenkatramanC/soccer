import {Component, Input , OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LeaguetableService} from './leaguetable.service';
@Component({
	moduleId: module.id,
	selector: 'leagueTable',
	templateUrl: `leaguetable.component.html`
})

export class LeaguetableComponent implements OnInit {
rank: any;
tableObj: any;
group: any = [];
id: any;
constructor(private route: ActivatedRoute,
	private leagueTableService: LeaguetableService,
	private router: Router
	){}
	
	ngOnInit(){
		this.route.params
		.map(params => {this.tableObj = params['id']})
      	this.tableObj = this.route.snapshot.params;
	
        return this.leagueTableService.getStandings(this.tableObj.id)
		.subscribe(resp => {this.rank = resp
			let a = this.rank.standings
			for (let key in a) {
				this.group.push(a[key]);
			}
		})
	}

	isLeague(){
		if(this.rank.standings){
			return true
		}
		else { 
			return false 
		}
	}

	teamDetail(state: any){
		let a = state._links.team.href
	    a = a.split("/").reverse()
	    this.id = a[0]
	    let link = [`teams/${this.id}/players`];
			this.router.navigate(link);
	}


}