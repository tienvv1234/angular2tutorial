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
    favoriteMessage:string ="";
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
    
    toggleImage():void{
        this.showImage = !this.showImage;
    }

    onNotifyClicked(message:string):void{
        this.showMessage = message;
    }

    onFavoriteClicked(message:string):void{
        this.favoriteMessage = message;
    }
}