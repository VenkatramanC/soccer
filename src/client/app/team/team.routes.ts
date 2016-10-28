import { Route } from '@angular/router';
import { TeamComponent} from './team.component';

export const TeamRoutes: Route[]=[
	{
		path: 'compititions/:id/teams',
		component: TeamComponent
	}
]
