import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WelcomeComponent } from '../welcome/welcome.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, WelcomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
