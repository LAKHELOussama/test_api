import { Request, Response } from 'express';
import { UserService } from './user.service';
import { userDto } from './dto/user.dto';
import { match } from 'assert';
// import { validators } from '../core/dto';




export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

   createUser = async (req: Request, res: Response): Promise<void> => {
    try{
      const {value, error} = userDto.validate(req.body)
      if(error){                                                                                                  
        throw new Error(error.message);
      }
      const user = await this.userService.createUser(req.body);
      res.status(201).json(user);
    } catch(err : any){
      res.status(err.status || 500).json({
        error: true,
        message: err.message || 'Internal Server Error',
      });

    }
  
  };

 getUser = async (req: Request, res: Response): Promise<any> => {
    try {
      const user = await this.userService.getUserById(req.params.id);
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
      res.json(user);
    } catch (err : any) {
      res.status(err.status || 500).json({
        error: true,
        message: err.message || 'Internal Server Error',
      });

    }
  };
  getUserByUserName = async (req: Request, res: Response): Promise<any> => {
    try {
      const user = await this.userService.getUserByUserName(req.params.userName);
      if (!user) {
         res.status(404).json(null);
        return null;
      }
      res.json(user);
    } catch (err : any) {
      res.status(err.status || 500).json({
        error: true,
        message: err.message || 'Internal Server Error',
      });

    }
  };
 getAllUsers = async (_req: Request, res: Response): Promise<any> => {
    try {
      const users = await this.userService.getAllUsers();
      res.json(users);
    } catch (err : any) {
      res.status(err.status || 500).json({
        error: true,
        message: err.message || 'Internal Server Error',
      });
 
    }
  };
findUser = async (_req: Request, res: Response) =>{
  
 
  // const user =  await this.userService.findUser(_req.body.user)
//   if (!mach) {
//     res.status(404).json({ message: 'User not found' });
//     return;
//   }
//   res.json(mach);
// } catch (err : any) {
//   res.status(err.status || 500).json({
//     error: true,
//     message: err.message || 'Internal Server Error',
//   });


} 
updateUser = async (req: Request, res: Response): Promise<any> => {
    try {
      const user = await this.userService.updateUser(req.params.id, req.body);
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
      res.json(user);
    } catch (err : any) {
      res.status(err.status || 500).json({
        error: true,
        message: err.message || 'Internal Server Error',
      });
  
    }
  };

 deleteUser = async (req: Request, res: Response): Promise<any> => {
    try {
      const success = await this.userService.deleteUser(req.params.id);
      if (!success) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
      res.status(204).send();
    } catch (err : any) {
      res.status(err.status || 500).json({
        error: true,
        message: err.message || 'Internal Server Error',
      });
 
    }
  };
  paginate = async (req: Request, res: Response): Promise<any> => {
    try{
         
      const user = await this.userService.paginate(+req.params.page , +req.params.limit, req.body);
      res.status(201).json(user)
  }   
  catch(err: any){
      res.status( err.status || 500).json({
          error : true ,
          message : err.message || 'Internal Server Error'
      })
  }
  }
}