import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { BooksListComponent }  from './books/books-list/books-list.component';
import { HighLightDirective } from './shared/highlight.directive';
import { TruncatePipe} from './shared/pipes/truncate.pipe';
import { FavoriteComponent} from './favorites/favorite.component';
import { BookService} from './books/books.service';
import { HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot([
    {path:'welcome', component:WelcomeComponent},
    {path:'books', component:BooksListComponent},
    {path:'', redirectTo:'welcome', pathMatch:'full'},
    {path:'**', redirectTo:'welcome', pathMatch:'full'},
  ]) ],
  declarations: [ AppComponent, BooksListComponent, HighLightDirective, TruncatePipe, FavoriteComponent, WelcomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ BookService ]
})
export class AppModule { }
