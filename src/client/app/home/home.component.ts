import {Component, OnInit} from '@angular/core';
import { NameListService } from '../shared/index';
import { Http , Headers} from '@angular/http';
import { ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {CommonService} from '../shared/common/common.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit {
 news: any;
 myPost: any;
  
   private headers = new Headers({Accept: "text/plain"});
  
  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService
    ) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
     this.getData();
  }

  getData(){
    //console.log("hi");
    this.commonService.getNews()
    .subscribe(resp => {this.news = resp
     console.log(this.news)})
  }
  
  onClick(post: any){
      let secLink = [`news/${post.uuid}`];
      this.router.navigate(secLink);
  }





}