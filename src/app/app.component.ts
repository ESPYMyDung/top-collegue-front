import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1 class="row justify-content-center">Top Collegue</h1>
  <hr />

  <nav> 
    <app-menu></app-menu>
  </nav>
  <hr />

  <div class="container" m-0="0"> 
    <router-outlet></router-outlet>
  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'top-collegue-front';
}
