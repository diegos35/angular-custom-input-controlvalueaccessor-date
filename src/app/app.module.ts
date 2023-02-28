import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { CustomInputComponent } from './custom-input/custom-input.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, FlexLayoutModule ],
  declarations: [ AppComponent, CustomInputComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
