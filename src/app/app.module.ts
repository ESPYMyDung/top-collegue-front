import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { VoteComponent } from './vote/vote.component';
import { VoteclassementComponent } from './voteclassement/voteclassement.component';
import { ClassementComponent } from './classement/classement.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    VoteComponent,
    VoteclassementComponent,
    ClassementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
