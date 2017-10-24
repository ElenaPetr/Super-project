import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HttpModule }    from '@angular/http';
import { UUID } from 'angular2-uuid';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { MediaService }	from './media.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
	HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [ MediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
