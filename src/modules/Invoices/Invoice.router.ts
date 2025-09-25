import { Router } from "express";
import { InvoiceController } from "./Invoice.controller";

const router = Router()
const invoiceController = new InvoiceController()


router.get('/:id' , invoiceController.findInvoiceById)
router.post('/' , invoiceController.createInvoice)
router.patch('/:id' , invoiceController.updateInvoice)
router.delete('/:id' , invoiceController.deleteInvoice)
router.post('/paginate/:page/:limit' , invoiceController.paginate)


export default router;