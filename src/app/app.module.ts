import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormGroup,FormControl,FormBuilder}   from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './list/in-memory-data.service';
import { HttpModule }    from '@angular/http';
import { UUID } from 'angular2-uuid';
import { AppRoutingModule }     from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MediaService }	from './service/media.service';
import { ModalUpdateComponent } from './modal-update/modal-update.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ModalUpdateComponent,
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
   entryComponents: [ModalUpdateComponent],
  providers: [MediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
