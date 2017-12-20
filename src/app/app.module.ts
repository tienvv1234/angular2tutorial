import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { BooksListComponent }  from './books/books-list/books-list.component';
import { HighLightDirective } from './shared/highlight.directive';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BooksListComponent, HighLightDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
