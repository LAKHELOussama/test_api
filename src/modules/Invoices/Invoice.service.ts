import { IInvoice } from "./Invoice.model";
import { InvoiceRepository } from "./Invoice.repo";

export class InvoiceService {
    private invoiceRepository: InvoiceRepository
    constructor() {
        this.invoiceRepository = new InvoiceRepository()
    }
    async createInvoice(invoiceData: Partial<IInvoice>): Promise<IInvoice> {
        return await this.invoiceRepository.createInvoice(invoiceData)
    }

    async updateInvoice(id: string, invoiceData: Partial<IInvoice>): Promise<IInvoice | null> {
        return await this.invoiceRepository.updateInvoice(id, invoiceData)
    }

    async deleteInvoice(id: string): Promise<IInvoice | null> {
        return this.invoiceRepository.deleteInvoice(id)
    }

    async finById(id: string): Promise<IInvoice | null> {
        return this.invoiceRepository.findInvoiceById(id)
    }
    async paginate(page: number, limit: number) {
        return await this.invoiceRepository.paginate(page, limit)
    }

}