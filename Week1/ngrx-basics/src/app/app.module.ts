import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counter: counterReducer }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
