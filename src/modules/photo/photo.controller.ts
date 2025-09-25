import { Request, Response } from "express";
import { PhotoService } from "./photo.service";

export class PhotoController {
    private PhotoService: PhotoService;
    constructor() {
      this.PhotoService = new PhotoService();
    }
createPhoto = async (req: Request, res: Response): Promise<void> => {
        try{
            const Photo = await this.PhotoService.createPhoto(req.body)
            res.status(201).json(Photo)
        }   
        catch(err: any){
            res.status( err.status || 500).json({
                error : true ,
                message : err.message || 'Internal Server Error'
            })
        }
    }


    updatePhoto = async (req: Request, res: Response): Promise<void> => {
        try{
          
            const Photo = await this.PhotoService.updatePhoto( req.params.id,req.body)
            res.status(201).json(Photo)
        }   
        catch(err: any){
            res.status( err.status || 500).json({
                error : true ,
                message : err.message || 'Internal Server Error'
            })
        }
    }

     deletePhoto = async (req: Request, res: Response): Promise<void> => {
        try{
         
            const Photo = await this.PhotoService.deletePhoto( req.params.id)
            res.status(201).json(Photo)
        }   
        catch(err: any){
            res.status( err.status || 500).json({
                error : true ,
                message : err.message || 'Internal Server Error'
            })
        }
    }

     findPhotoById = async (req: Request, res: Response): Promise<void> => {
        try{
         
            const Photo = await this.PhotoService.finById(req.params.id)
            res.status(201).json(Photo)
        }   
        catch(err: any){
            res.status(201).json("")

        }
    }
    
    
}