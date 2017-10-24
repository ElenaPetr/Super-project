import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`
    <nav>
      <a routerLink="/card" routerLinkActive="active">Media</a>
    </nav>
    <router-outlet></router-outlet>
  ` 
  
})
export class AppComponent {}
