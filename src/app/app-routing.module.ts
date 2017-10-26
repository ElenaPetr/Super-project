import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CardComponent }      from './card/card.component';
//import { ModalUpdateComponent } from './modal-update/modal-update.component';


const routes: Routes = [
 { path: '', redirectTo: '/card', pathMatch: 'full' },
 { path: 'card',     component: CardComponent },
  //{ path: 'update/:id', component: ModalUpdateComponent },

 
 

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}