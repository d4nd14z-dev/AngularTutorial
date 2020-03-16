import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { Comp01Component } from './components/comp01/comp01.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    Comp01Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
