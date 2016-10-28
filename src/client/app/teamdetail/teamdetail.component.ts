import { Component ,Input , OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { TeamdetailService } from './teamdetail.service'
@Component({
	moduleId: module.id,
	selector: 'team-detail',
	templateUrl: 'teamdetail.component.html',
	styleUrls: ['teamdetail.component.css']
})
export class TeamdetailComponent implements OnInit{
	teamId: any;
	players: any;
	constructor(private router: Router,
		private route: ActivatedRoute,
		private teamDetailService: TeamdetailService){}
	
	ngOnInit(){
		this.route.params
		.map(params => (this.teamId = params['id']))
		this.teamId = this.route.snapshot.params;
	
		this.teamDetailService.getPlayers(this.teamId.id)
		.subscribe(resp => {
			this.players = resp
			console.log(this.players)
		})
	}
}	