import { Schema, model, Document } from 'mongoose';
export const DOCUMENT_NAME = "user";
export const COLLECTION_NAME = "User";
export interface IUser {
fullname : string,
phone : string,
email : string,
password : string,
role : string;
addresse : string;
}
export default interface user extends IUser, Document {}

const userSchema = new Schema({

  fullname: {
    type: String,
    required : true
  },
  phone  :  {
    type: String,
    required : true
  },
  email : {
    type: String,
    required : true
  },
  password :  {
    type: String,
  },
  role :  {
    type: String,
    required : true
  },
  addresse : {
    type: String,
    required : true
  },
},);

export const UserModel = model<user>(DOCUMENT_NAME, userSchema, COLLECTION_NAME);
