import {Component, OnInit, OnChanges} from '@angular/core';
import {Router } from '@angular/router';
import { BookService } from '../books.service';
import { IBook } from '../book';
import { error } from 'util';
@Component({
    moduleId: module.id,
    // selector: 'bs-books-list',
    templateUrl: 'books-list.component.html'
})
export class BooksListComponent implements OnInit, OnChanges{
    animals:string[] = ['zebra', 'moose'];
    imageWidth:number = 100;
    showImage:boolean = true;
    booksInStock:number = 2;
    books:IBook[];
    errorMessage:string;
    constructor(private _bookService:BookService){
        
    }
    ngOnInit(){
        console.log('init', this.booksInStock);
        this.getBooks();
    }

    getBooks(){
        this._bookService.getBook().subscribe(
            response => this.books = response,
            error => this.errorMessage = <any>error
        );
    }

    ngOnChanges(){
        console.log('new change detected');
    }

    changeMethod():void{
        this.animals = ['cat', 'dog'];
        console.log('change method happened', this.animals);
    }

    showMessage:string="test";

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
    
    toggleImage():void{
        this.showImage = !this.showImage;
    }

    onNotifyClicked(message:string):void{
        debugger;
        this.showMessage = message;
    }
}