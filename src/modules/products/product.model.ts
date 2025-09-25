
import { Document, model, Schema } from "mongoose";
export const DOCUMENT_NAME = "product";
export const COLLECTION_NAME = "Product";
export interface IProduct{
    photo : string[],
    name: string,
    description: string,
    inStock: boolean,
    price:number ,
    quantity : number,
    type : string,
    category: string,
}
export default interface product extends IProduct , Document {}

const productSchema = new Schema ({
    photo : {
        type: Array,
        required : true
        
    },
    name: {
        type: String,
        required : true
        
    },
    description: {
        type: String,
        required : true
        
    },
    inStock: {
        type: Boolean,
        required : true
        
    },
    price: {
        type: Number,
        required : true
        
    },
    quantity :  {
        type: Number,
        required : true
        
    },
    type : {
        type: String,
        required : true
        
    },
    category: {
        type: String,
        required : true
        
    },
})
export const ProductModel = model<product>(DOCUMENT_NAME , productSchema , COLLECTION_NAME)