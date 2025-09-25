
import { Document, model, Schema } from "mongoose";
export const DOCUMENT_NAME = "invoice";
export const COLLECTION_NAME = "Invoice";
export interface IInvoice{
    date : Date,
    products: string[],
    tva: number,
    total: number,
 
}
export default interface Invoice extends IInvoice , Document {}

const InvoiceSchema = new Schema ({
    date: {
        type: Date,
        required : true
    },
    product : {
        type: String,
        required : true,
        Array : true

    },

    total: {
        type: Number,
        required : true

    },
    tva: {
        type: Number,
        required : true

    },
})
export const InvoiceModel = model<Invoice>(DOCUMENT_NAME , InvoiceSchema , COLLECTION_NAME)