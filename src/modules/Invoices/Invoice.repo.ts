import { IInvoice, InvoiceModel } from "./Invoice.model";

export class InvoiceRepository {
    async createInvoice(invoiceData: Partial<IInvoice>): Promise<IInvoice> {
        const Invoice = new InvoiceModel(invoiceData);
        return await Invoice.save();
    }
    async updateInvoice(id: string, invoiceData: Partial<IInvoice>): Promise<IInvoice | null> {
        return await InvoiceModel.findByIdAndUpdate(id, invoiceData);
    }
    async deleteInvoice(id: string): Promise<IInvoice | null> {
        return await InvoiceModel.findByIdAndDelete(id)
    }
    async findInvoiceById(id: string): Promise<IInvoice | null> {
        return await InvoiceModel.findById(id);
      }
    async paginate(page: number | string, limit: number | string, select = "-password", query: any = {}) {
        const total = await InvoiceModel.countDocuments(query);
        const limitNumber = limit === Infinity || limit === 'Infinity' ? total : Number(limit);
        const pageNumber = Math.max(Number(page), 1);


        const docs = await InvoiceModel
            .find(query)
            .select(select)
            .limit(limitNumber)
            .skip((pageNumber - 1) * limitNumber)
            .lean();


        console.log("this is ", docs)
        return {
            'docs': docs,
            'page': pageNumber,
            'limit': limitNumber,
            'total': total,
            'pages': Math.ceil(total / limitNumber),
        };
    }
}