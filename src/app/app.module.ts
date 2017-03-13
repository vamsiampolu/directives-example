import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    UnlessDirective,
    HighlightDirective,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
