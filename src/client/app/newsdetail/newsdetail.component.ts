import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { CommonService } from '../shared/common/common.service';

@Component({
	moduleId: module.id,
	selector: 'news-detail',
	templateUrl: 'newsdetail.component.html'
})

export class NewsdetailComponent {
	@Input()
	paramId: any;
	news: any;
	newsArray: any;
	detailedNews: any;

	constructor(
		private commonService: CommonService,
		private route: ActivatedRoute){
	}
	ngOnInit() {
		this.route.params
		.map(params => {this.paramId = params['id']})
		this.paramId = this.route.snapshot.params;
		this.paramId = this.paramId.id
		return this.commonService.getNews()	
		.	subscribe(resp => {this.news= resp
		 	console.log(this.news);
			let newsShowArray = this.news.posts;
			 this.detailedNews = newsShowArray.filter((ele:any) => ele.uuid === this.paramId)
		})
	}
}