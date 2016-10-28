import { Route} from '@angular/router';
import { TeamfixtureComponent } from './teamfixture.component';

export const TeamfixtureRoutes: Route[]=[
	{
		path: 'teams/:id/fixtures',
		component: TeamfixtureComponent
	}
]