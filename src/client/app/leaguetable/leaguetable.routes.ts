import { Route} from '@angular/router';
import {LeaguetableComponent} from './leaguetable.component'
export const LeaguetableRoutes: Route[] = [
  {
	path: `compititions/:id/leagueTable`,
	component: LeaguetableComponent
  }
];