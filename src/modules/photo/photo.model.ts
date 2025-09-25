
import { stat } from "fs";

import { Document, model, Schema } from "mongoose";
export const DOCUMENT_NAME = "Photos";
export const COLLECTION_NAME = "Photos";
export interface IPhoto{
    url : any,
}
export default interface Photo extends IPhoto, Document {}

const PhotosSchema = new Schema ({
 
    url : {
        type : String,
        required : true
        },
    
    
   
})
export const PhotoModel = model<Photo>(DOCUMENT_NAME , PhotosSchema , COLLECTION_NAME)