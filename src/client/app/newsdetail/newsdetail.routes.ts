import { Route } from '@angular/router';
import { NewsdetailComponent} from './newsdetail.component';

export const NewsdetailRoutes: Route[] =[
	{
		path: 'news/:id',
		component: NewsdetailComponent
	}
]