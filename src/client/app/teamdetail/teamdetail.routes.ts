import { Route } from '@angular/router';
import { TeamdetailComponent } from './teamdetail.component';

export const TeamdetailRoutes: Route[]=[
	{
		path: 'teams/:id/players',
		component: TeamdetailComponent
	}
]