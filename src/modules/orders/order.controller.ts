import { Request, Response } from "express";
import { OrderService } from "./order.service";
import { orderDto } from "./dto/order.dto";

export class OrderController {
    private orderService: OrderService;

    constructor() {
      this.orderService = new OrderService();
    }
createOder = async (req: Request, res: Response): Promise<void> => {
        try{
            const {error} = orderDto.validate(req.body)
            if(error) {
                throw new Error(error.message)
            }
            const order = await this.orderService.createOrder(req.body)
            res.status(201).json(order)
        }   
        catch(err: any){
            res.status( err.status || 500).json({
                error : true ,
                message : err.message || 'Internal Server Error'
            })
        }
    }


    updateOrder = async (req: Request, res: Response): Promise<void> => {
        try{
           
            if(false) {
                // throw new Error(error.message)
            }
            const order = await this.orderService.updateOrder( req.params.id,req.body)
            res.status(201).json(order)
        }   
        catch(err: any){
            res.status( err.status || 500).json({
                error : true ,
                message : err.message || 'Internal Server Error'
            })
        }
    }

     deleteOrder = async (req: Request, res: Response): Promise<void> => {
        try{
         
            const order = await this.orderService.deleteOrder( req.params.id)
            res.status(201).json(order)
        }   
        catch(err: any){
            res.status( err.status || 500).json({
                error : true ,
                message : err.message || 'Internal Server Error'
            })
        }
    }

     findOrderById = async (req: Request, res: Response): Promise<void> => {
        try{
         
            const order = await this.orderService.finById(req.params.id)
            res.status(201).json(order)
        }   
        catch(err: any){
            res.status( err.status || 500).json({
                error : true ,
                message : err.message || 'Internal Server Error'
            })
        }
    }
    
     paginate = async (req: Request, res: Response): Promise<void> => {
        try{
         
            const order = await this.orderService.paginate(+req.params.page , +req.params.limit , req.body);
            res.status(201).json(order)
        }   
        catch(err: any){
            res.status( err.status || 500).json({
                error : true ,
                message : err.message || 'Internal Server Error'
            })
        }
    }
}