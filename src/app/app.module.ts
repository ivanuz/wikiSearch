import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import {HttpClientModule} from "@angular/common/http";
import {JsonpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdFormFieldModule, MdInputModule, MdButtonModule, MdToolbarModule, MdCardModule} from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    SearchFieldComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JsonpModule,
    BrowserAnimationsModule,
    MdFormFieldModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
