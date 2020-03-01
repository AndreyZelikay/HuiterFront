import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { TwitComponent } from './twit/twit.component';
import { TapeComponent } from './tape/tape.component';

@NgModule({
  declarations: [
    AppComponent,
    TwitComponent,
    TapeComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
