import { Request, Response } from "express";
import { ProductService } from "./product.service";
import { productDto } from "./dto/product.dto";

export class ProductController {
    private ProductService: ProductService;

    constructor() {
      this.ProductService = new ProductService();
    }
createProduct = async (req: Request, res: Response): Promise<void> => {
        try{
            const {error} = productDto.validate(req.body)
            if(error) {
                throw new Error(error.message)
            }
            const Product = await this.ProductService.createProduct(req.body)
            res.status(201).json(Product)
        }   
        catch(err: any){
            res.status( err.status || 500).json({
                error : true ,
                message : err.message || 'Internal Server Error'
            })
        }
    }

    findOrderByName = async (req: Request, res: Response): Promise<void> => {
        try{
         
            const order = await this.ProductService.finByName(req.params.name)
            res.status(201).json(order)
        }   
        catch(err: any){
            res.status( err.status || 500).json({
                error : true ,
                message : err.message || 'Internal Server Error'
            })
        }
    }
    updateProduct = async (req: Request, res: Response): Promise<void> => {
        try{
            const {error} = productDto.validate(req.body)
            if(error) {
                throw new Error(error.message)
            }
            const Product = await this.ProductService.updateProduct( req.params.id,req.body)
            res.status(201).json(Product)
        }   
        catch(err: any){
            res.status( err.status || 500).json({
                error : true ,
                message : err.message || 'Internal Server Error'
            })
        }
    }

     deleteProduct = async (req: Request, res: Response): Promise<void> => {
        try{
         
            const Product = await this.ProductService.deleteProduct( req.params.id)
            res.status(201).json(Product)
        }   
        catch(err: any){
            res.status( err.status || 500).json({
                error : true ,
                message : err.message || 'Internal Server Error'
            })
        }
    }

     findProductById = async (req: Request, res: Response): Promise<void> => {
        try{
         
            const Product = await this.ProductService.finById(req.params.id)
            res.status(201).json(Product)
        }   
        catch(err: any){
            res.status( err.status || 500).json({
                error : true ,
                message : err.message || 'Internal Server Error'
            })
        }
    }
    findAll = async (req: Request, res: Response): Promise<void> => {
        try{
         
            const Products = await this.ProductService.findAll()
            res.status(201).json(Products)
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
         
            const Product = await this.ProductService.paginate(+req.params.page , +req.params.limit, req.body)
            res.status(201).json(Product)
        }   
        catch(err: any){
            res.status( err.status || 500).json({
                error : true ,
                message : err.message || 'Internal Server Error'
            })
        }
    }
}