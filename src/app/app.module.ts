import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';

import { MovieComponent } from './components/movies/movies.component';
import { BannerComponent } from './components/banner/banner.component';
import { TrailerComponent } from './components/trailers/trailer.component';
import { routing } from './app.routing';
import { SafePipe } from './pipes/safe.pipe'
 
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import {Ng2PageScrollModule} from 'ng2-page-scroll/ng2-page-scroll';
import { YoutubePlayerModule } from 'ng2-youtube-player'; 

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    MovieComponent,
    TrailerComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    ModalModule.forRoot(),
    Ng2PageScrollModule.forRoot(),
    BootstrapModalModule,
    YoutubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
