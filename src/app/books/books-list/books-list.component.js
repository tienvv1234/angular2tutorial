"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var books_service_1 = require("../books.service");
var BooksListComponent = (function () {
<<<<<<< HEAD
<<<<<<< HEAD
    function BooksListComponent() {
        this.favoriteMessage = "";
=======
    function BooksListComponent(_bookService) {
        this._bookService = _bookService;
>>>>>>> eae7ec30bfb2b81a89715a9eea33b93d167ba3b2
=======
    function BooksListComponent(_bookService) {
        this._bookService = _bookService;
>>>>>>> eae7ec30bfb2b81a89715a9eea33b93d167ba3b2
        this.animals = ['zebra', 'moose'];
        this.imageWidth = 100;
        this.showImage = true;
        this.booksInStock = 2;
        this.showMessage = "test";
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> eae7ec30bfb2b81a89715a9eea33b93d167ba3b2
=======
>>>>>>> eae7ec30bfb2b81a89715a9eea33b93d167ba3b2
    }
    BooksListComponent.prototype.ngOnInit = function () {
        console.log('init', this.booksInStock);
        this.getBooks();
    };
    BooksListComponent.prototype.getBooks = function () {
        var _this = this;
        this._bookService.getBook().subscribe(function (response) { return _this.books = response; }, function (error) { return _this.errorMessage = error; });
    };
    BooksListComponent.prototype.ngOnChanges = function () {
        console.log('new change detected');
    };
    BooksListComponent.prototype.changeMethod = function () {
        this.animals = ['cat', 'dog'];
        console.log('change method happened', this.animals);
    };
    // books:any[]=[{
    //     id: "1",
    //     productCode:"ABC",
    //     genre:"adsf",
    //     specification:"specification",
    //     author: "Tom Jones",
    //     name: "War and Peace 2",
    //     bookPrice: 29.95,
    //     description: "books of history",
    //     releaseDate: new Date('02/11/1921'),
    //     inStock: true,
    //     bookReview: 15,
    //     starRating: 5,
    //     imageUrl:"app/assets/images/656.jpg",
    // }];
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
        // selector: 'bs-books-list',
        templateUrl: 'books-list.component.html'
    }),
    __metadata("design:paramtypes", [books_service_1.BookService])
], BooksListComponent);
exports.BooksListComponent = BooksListComponent;
//# sourceMappingURL=books-list.component.js.map