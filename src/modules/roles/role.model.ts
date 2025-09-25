
import { stat } from "fs";
import { Document, model, Schema } from "mongoose";
export const DOCUMENT_NAME = "roles";
export const COLLECTION_NAME = "Roles";
export interface IRole{
    name: string,}
export default interface role extends IRole, Document {}

const RolesSchema = new Schema ({
 
    name: {
        type: String,
        required : true
        
    },

})
export const RoleModel = model<role>(DOCUMENT_NAME , RolesSchema , COLLECTION_NAME)