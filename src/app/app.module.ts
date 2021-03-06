import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule,FormGroup,FormControl,FormBuilder,Validator}   from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HttpModule }    from '@angular/http';
import { UUID } from 'angular2-uuid';
import { AppRoutingModule }     from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MediaService }	from './service/media.service';
import { ModalUpdateComponent } from './modal-update/modal-update.component';
import { ModalAddComponent } from './modal-add/modal-add.component';
import { AddContentComponent } from './modal-add/add-content/add-content.component';
import { ListComponent } from './list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    ModalUpdateComponent,
    ModalAddComponent,
    AddContentComponent,
  ],
  imports: [
    BrowserModule,
	HttpModule,
	FormsModule,
  ReactiveFormsModule,
  InMemoryWebApiModule.forRoot(InMemoryDataService),
  AppRoutingModule,
  NgbModule.forRoot() 
  ],
   entryComponents: [AddContentComponent,ModalUpdateComponent],
  providers: [MediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
