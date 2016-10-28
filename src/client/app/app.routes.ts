import { Routes } from '@angular/router';

import { HomeRoutes } from './home/index';
import { CompititionRoutes} from './compitition/index';
import { FixtureRoutes} from './fixture/index';
import { LeaguefixtureRoutes} from './leaguefixture/index';
import { LeaguetableRoutes} from './leaguetable/index'
import { TeamRoutes} from './team/index';
import { TeamdetailRoutes} from './teamdetail/index';
import { TeamfixtureRoutes} from './teamfixture/index';
import { NewsdetailRoutes} from './newsdetail/index';
export const routes: Routes = [
  ...HomeRoutes,
  ...CompititionRoutes,
  ...FixtureRoutes,
  ...LeaguefixtureRoutes,
  ...LeaguetableRoutes,
  ...TeamRoutes,
  ...TeamdetailRoutes,
  ...TeamfixtureRoutes,
  ...NewsdetailRoutes
];
