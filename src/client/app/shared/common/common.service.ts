import {Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class CommonService {
	
  	private headers = new Headers({"X-Mashape-Key": "HRJmnFm4sGmshlO9Dg2zPC0fzMtCp166dXTjsnSRitG2vG2BeT"});
	private myheaders = new Headers({Accept: "text/plain"});
	constructor( private http: Http ){}

	getStandings(id: any, y: any): Observable<any>{
		let url = `https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${id}/seasons`
		return this.http.get(`${url}/${y}/standings`,{headers: this.headers})
		.map(resp => (resp.json()))
	}
	
	
	getTeams(id: any ,y: any){
		let url = `https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/${id}/seasons`
		return this.http.get(`${url}/${y}/teams`,{headers: this.headers})
		.map(resp => (resp.json()))
	}

	getNews(): Observable<any>{
		return this.http.get("https://webhose.io/search?token=865d6c53-6720-4d9d-b2ce-0fc542dc7169&format=json&q=language%3A(english)%20site_category%3Asports%20site%3Agoal.com", {headers: this.myheaders})
		.map(resp => ( resp.json()))
	}
}


