
import { strict } from "assert";
import { Document, model, Schema } from "mongoose";
export const DOCUMENT_NAME = "order";
export const COLLECTION_NAME = "Order";
export interface IOrder{
    deliveryAddress: string,
    deliveryDate : Date,
    total: number,
    deliveryPrice : number,
    products : {_id : string , price : number ,quantity : number }[],
    fullName : string,
    telephone : string
    status : string,

}
export default interface order extends IOrder , Document {}

const orderSchema = new Schema ({


    status: {
        type: String,
        required : true
    },

    total: {
        type: Number,
        required : true

    },

    deliveryAddress: {
        type: String,
        required : true

    },
    deliveryDate :{
        type: String,
        required : true

    },   

    deliveryPrice :{
        type: Number,
        required : true

    },
    products :{
        type: Array,
        required : true

    },
    fullName :{
        type: String,
        required : true         
    },
    telephone : {
        type: String,
        required : true   
    }
})
export const OrderModel = model<order>(DOCUMENT_NAME , orderSchema , COLLECTION_NAME)