import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {IBook} from './book';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class BookService{

    constructor(private _http:Http){

    }

    private handleError(error:Response){
        console.error(error);
        let message = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(message);
    }

    getBook(){
        return this._http
            .get('/api/book/books.json')
            .map((response:Response) => <IBook[]> response.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }
}