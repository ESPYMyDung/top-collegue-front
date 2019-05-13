import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = 
[
  { path: 'vote', component: VoteComponent },
  { path: 'classement', component: ClassementComponent },
  { path: 'auth', component: AuthentificationComponent },
  { path: 'logout', component: AuthentificationComponent },
  //{ path: '**', redirectTo: '/apropos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
