import { Request, Response } from "express";
import { RoleService } from "./category.service";
import { roleDto } from "./dto/role.dto";

export class RoleController {
    private roleService: RoleService;

    constructor() {
      this.roleService = new RoleService();
    }
createRole = async (req: Request, res: Response): Promise<void> => {
        try{
            const {error} = roleDto.validate(req.body)
            if(error) {
                throw new Error(error.message)
            }
            const Role = await this.roleService.createRole(req.body)
            res.status(201).json(Role)
        }   
        catch(err: any){
            res.status( err.status || 500).json({
                error : true ,
                message : err.message || 'Internal Server Error'
            })
        }
    }


    updateRole = async (req: Request, res: Response): Promise<void> => {
        try{
            const {error} = roleDto.validate(req.body)
            if(error) {
                throw new Error(error.message)
            }
            const Role = await this.roleService.updateRole( req.params.id,req.body)
            res.status(201).json(Role)
        }   
        catch(err: any){
            res.status( err.status || 500).json({
                error : true ,
                message : err.message || 'Internal Server Error'
            })
        }
    }

     deleteRole = async (req: Request, res: Response): Promise<void> => {
        try{
         
            const Role = await this.roleService.deleteRole( req.params.id)
            res.status(201).json(Role)
        }   
        catch(err: any){
            res.status( err.status || 500).json({
                error : true ,
                message : err.message || 'Internal Server Error'
            })
        }
    }

     findRoleById = async (req: Request, res: Response): Promise<void> => {
        try{
         
            const Role = await this.roleService.finById(req.params.id)
            res.status(201).json(Role)
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
         
            const Role = await this.roleService.paginate(+req.params.page , +req.params.limit)
            res.status(201).json(Role)
        }   
        catch(err: any){
            res.status( err.status || 500).json({
                error : true ,
                message : err.message || 'Internal Server Error'
            })
        }
    }
}