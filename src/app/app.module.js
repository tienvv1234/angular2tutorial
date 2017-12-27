"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var books_list_component_1 = require("./books/books-list/books-list.component");
var highlight_directive_1 = require("./shared/highlight.directive");
var truncate_pipe_1 = require("./shared/pipes/truncate.pipe");
var favorite_component_1 = require("./favorites/favorite.component");
var books_service_1 = require("./books/books.service");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var welcome_component_1 = require("../welcome/welcome.component");
var book_details_component_1 = require("./books/book-details/book-details.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot([
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: 'books', component: books_list_component_1.BooksListComponent },
                { path: 'book/:id', component: book_details_component_1.BookDetailsComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
            ])],
        declarations: [app_component_1.AppComponent, books_list_component_1.BooksListComponent, highlight_directive_1.HighLightDirective, truncate_pipe_1.TruncatePipe, favorite_component_1.FavoriteComponent, welcome_component_1.WelcomeComponent, book_details_component_1.BookDetailsComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [books_service_1.BookService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map