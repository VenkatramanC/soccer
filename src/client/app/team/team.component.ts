import {Component, OnInit} from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import {Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {CompititionComponent} from '../compitition/compitition.component'
@Component({
    moduleId: module.id,
	selector: 'teams',
	templateUrl: 'team.component.html'
})
export class TeamComponent implements OnInit  {
	teams: any;
	teamObj: any;
	teamId: any;

	private url = `http://api.football-data.org/v1/competitions`;
	private headers = new Headers({"X-Auth-Token": "c6fae2504ec441928fccb032fc91bb4e"})
	 
	constructor(private route: ActivatedRoute, 
      private http:Http ,
	  private router: Router
	 ){}

	ngOnInit() {
	    this.route.params
        .map(params => {this.teamObj = params['id']})
      	this.teamObj = this.route.snapshot.params;
		
		 return this.http.get(`${this.url}/${[this.teamObj.id]}/teams`,{headers: this.headers})
		  .subscribe(resp => {this.teams = resp.json()
		  })

    }
    onTeam(id: number): void{
    	let link: any = [ `teams/${id}/players`]
    	this.router.navigate(link);    
    }

    checkCode(team: any){
    	if(team.code === null) { 
    		return false
    	} else {
    		return true
    	}
    }
     
    checkValue(team: any){
    	if(team.squadMarketValue === null){
    		return false
    	}
    	else{
    		return  true
    	}
    }

    goToFixtures(team: any){
        let id = (team._links.self.href).split("/").reverse()[0]
    	let link = [`teams/${id}/fixtures`]
    	this.router.navigate(link);
    }

    goToDetail(team: any){
        this.teamId = (team._links.self.href).split("/").reverse()[0]
        let link = [`teams/${this.teamId}/players`]
        this.router.navigate(link);
    }
}