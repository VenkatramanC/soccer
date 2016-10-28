// Core Modules
import { NgModule       } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { APP_BASE_HREF  } from '@angular/common';
import { RouterModule   } from '@angular/router';
import { HttpModule     } from '@angular/http';
import { AppComponent   } from './app.component';
import { routes         } from './app.routes';
import { MaterialModule } from '@angular/material';

//Modules
import { HomeModule          } from './home/home.module';
import { SharedModule        } from './shared/shared.module';
import { CompititionModule   } from './compitition/compitition.module';
import { FixtureModule       } from './fixture/fixture.module';
import { LeaguefixtureModule } from './leaguefixture/leaguefixture.module';
import { LeaguetableModule   } from './leaguetable/leaguetable.module';
import { TeamModule          } from './team/team.module';
import { TeamdetailModule    } from './teamdetail/teamdetail.module';
import { TeamfixtureModule   } from './teamfixture/teamfixture.module';
import { NewsdetailModule    } from './newsdetail/newsdetail.module';
@NgModule({
  imports: [  BrowserModule, 
              HttpModule, 
              RouterModule.forRoot(routes), 
              HomeModule, 
              SharedModule.forRoot(),  
              CompititionModule, 
              FixtureModule, 
              LeaguefixtureModule, 
              LeaguetableModule, 
              TeamModule, 
              MaterialModule.forRoot(),
              TeamdetailModule, 
              TeamfixtureModule,
              NewsdetailModule
            ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>',
    
  }],
  bootstrap: [AppComponent]

})

export class AppModule { }
