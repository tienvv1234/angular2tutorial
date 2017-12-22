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
    starRating:number;
    imageUrl:string;
    bookPrice:number;
    bookReview?:number;
}