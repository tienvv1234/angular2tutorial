"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var BooksListComponent = (function () {
    function BooksListComponent() {
        this.favoriteMessage = "";
        this.animals = ['zebra', 'moose'];
        this.imageWidth = 100;
        this.showImage = true;
        this.booksInStock = 2;
        this.showMessage = "test";
        this.books = [{
                id: "1",
                productCode: "ABC",
                genre: "adsf",
                specification: "specification",
                author: "Tom Jones",
                name: "War and Peace 2",
                bookPrice: 29.95,
                description: "books of history",
                releaseDate: new Date('02/11/1921'),
                inStock: true,
                bookReview: 15,
                starRating: 5,
                imageUrl: "app/assets/images/656.jpg",
            },
            {
                id: "1",
                productCode: "ABC",
                genre: "adsf",
                specification: "specification",
                author: "Mike Jones",
                name: "War and Peace 3",
                bookPrice: 19.95,
                description: "books of history",
                releaseDate: new Date('02/11/1921'),
                inStock: true,
                bookReview: 18,
                starRating: 5,
                imageUrl: "app/assets/images/656.jpg",
            }];
    }
    BooksListComponent.prototype.ngOnInit = function () {
        console.log('init', this.booksInStock);
    };
    BooksListComponent.prototype.ngOnChanges = function () {
        console.log('new change detected');
    };
    BooksListComponent.prototype.changeMethod = function () {
        this.animals = ['cat', 'dog'];
        console.log('change method happened', this.animals);
    };
    BooksListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    BooksListComponent.prototype.onNotifyClicked = function (message) {
        this.showMessage = message;
    };
    BooksListComponent.prototype.onFavoriteClicked = function (message) {
        this.favoriteMessage = message;
    };
    return BooksListComponent;
}());
BooksListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'bs-books-list',
        templateUrl: 'books-list.component.html'
    })
], BooksListComponent);
exports.BooksListComponent = BooksListComponent;
//# sourceMappingURL=books-list.component.js.map