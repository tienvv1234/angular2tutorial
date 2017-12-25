export interface IBook {
    id:string;
    name:string;
    productCode:string;
    releaseDate:Date;
    description:string;
    author:string;
    genre:string;
    specification:string;
    inStock:boolean;
    price:number;
    starRating:number;
    imageUrl:string;
    bookReview?:number;
}