import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { VoteComponent } from './vote/vote.component';
import { ClassementComponent } from './classement/classement.component';
import { MenuComponent } from './menu/menu.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    VoteComponent,
    ClassementComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //pour faire les requetes http backend
    FormsModule, //pour genere les formulaires
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
