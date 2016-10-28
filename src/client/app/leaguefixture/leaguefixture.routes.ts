import { Route } from '@angular/router';
import { LeaguefixtureComponent } from './leaguefixture.component';
export const LeaguefixtureRoutes: Route[]=[
	{
		path: `compititions/:id/fixtures`,
		component: LeaguefixtureComponent
	}
]