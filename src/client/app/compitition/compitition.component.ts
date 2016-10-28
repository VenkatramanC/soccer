import {Component , Input , OnInit} from '@angular/core';
import {CompititionService } from './compitition.service';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'sd-compititions',
	templateUrl: 'compitition.component.html'
})

export class CompititionComponent implements OnInit {

	compititions: any;
		constructor(private compititionsService: CompititionService,
			private router: Router){}
		ngOnInit(){
			this.compititionsService.getCompititions()
			.subscribe(resp => {this.compititions = resp})
		}

		goCompDetail(id: any): void{
			let link =  [`compititions/${id}/teams`];
			this.router.navigate(link);
		}

		goToFixtures(id: any){
			let secLink = [`compititions/${id}/fixtures`];
			this.router.navigate(secLink);
		}

		goToStandings(id: any){
			let statsLink = [`compititions/${id}/leagueTable`];
			this.router.navigate(statsLink);
		}
}