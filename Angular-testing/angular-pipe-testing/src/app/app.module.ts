import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrengthPipe } from './strength.pipe';
import { MeanPipe } from './mean.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HoverfocusDirective } from './hoverfocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    StrengthPipe,
    MeanPipe,
    HoverfocusDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
