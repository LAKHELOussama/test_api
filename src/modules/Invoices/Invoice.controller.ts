import { Request, Response } from "express";
import { InvoiceService } from "./Invoice.service";
import { invoiceDto } from "./dto/Invoice.dto";

export class InvoiceController {
    private invoiceService: InvoiceService;

    constructor() {
        this.invoiceService = new InvoiceService();
    }
    createInvoice = async (req: Request, res: Response): Promise<void> => {
        try {
            const { error } = invoiceDto.validate(req.body)
            if (error) {
                throw new Error(error.message)
            }
            const Invoice = await this.invoiceService.createInvoice(req.body)
            res.status(201).json(Invoice)
        }
        catch (err: any) {
            res.status(err.status || 500).json({
                error: true,
                message: err.message || 'Internal Server Error'
            })
        }
    }


    updateInvoice = async (req: Request, res: Response): Promise<void> => {
        try {
            const { error } = invoiceDto.validate(req.body)
            if (error) {
                throw new Error(error.message)
            }
            const invoice = await this.invoiceService.updateInvoice(req.params.id, req.body)
            res.status(201).json(invoice)
        }
        catch (err: any) {
            res.status(err.status || 500).json({
                error: true,
                message: err.message || 'Internal Server Error'
            })
        }
    }

    deleteInvoice = async (req: Request, res: Response): Promise<void> => {
        try {

            const invoice = await this.invoiceService.deleteInvoice(req.params.id)
            res.status(201).json(invoice)
        }
        catch (err: any) {
            res.status(err.status || 500).json({
                error: true,
                message: err.message || 'Internal Server Error'
            })
        }
    }

    findInvoiceById = async (req: Request, res: Response): Promise<void> => {
        try {

            const invoice = await this.invoiceService.finById(req.params.id)
            res.status(201).json(invoice)
        }
        catch (err: any) {
            res.status(err.status || 500).json({
                error: true,
                message: err.message || 'Internal Server Error'
            })
        }
    }

    paginate = async (req: Request, res: Response): Promise<void> => {
        try {

            const invoice = await this.invoiceService.paginate(+req.params.page, +req.params.limit)
            res.status(201).json(invoice)
        }
        catch (err: any) {
            res.status(err.status || 500).json({
                error: true,
                message: err.message || 'Internal Server Error'
            })
        }
    }
}