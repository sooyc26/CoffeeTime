import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http'
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TwoDigitDecimalComponent } from './utility/two-digit-decimal/two-digit-decimal.component';
import {MatInputModule} from '@angular/material/input';
import { MakeYourDrinkComponent } from './make-your-drink/make-your-drink.component';



@NgModule({
  declarations: [
    AppComponent,
    TwoDigitDecimalComponent,
    routingComponents,
    MakeYourDrinkComponent,
    
  ],
  // exports: [KeysPipe],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatRadioModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
