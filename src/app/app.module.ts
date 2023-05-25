import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PlayingFieldComponent } from './playing-field/playing-field.component';
import { ChallengeAreaComponent } from './challenge-area/challenge-area.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayingFieldComponent,
    ChallengeAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
