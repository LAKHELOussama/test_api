import { NextFunction, Request, Response } from "express";
import { AuthService } from "./auth.service";
import authDto from './dto/auth.dto'
import { AuthRole } from '../auth/auth.role'
import { LocalStorage } from 'node-localstorage'

import { any } from "joi";
import { error } from "console";
export class AuthController {
  private static authService: AuthService = new AuthService()
  private static authRole: AuthRole = new AuthRole()
  private static localStorage = new LocalStorage('./scratch')

  constructor() {

  }
  static getAuth() {
    return LocalStorage
  }
  static login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { value, error } = authDto.authDto.validate(req.body)
      if (error) {
        throw new Error(error.message);
      }
       const h= await this.authService.login(req.body.userName, req.body.password)
       this.localStorage.setItem('token', h.token);
       this.localStorage.setItem('role', h.role);
       // localStorage is not available in Node.js; implement server-side storage if neede
       
       if ( true) {
        res.json({ done: true, token: h.token, role: h.role } )
      }
      else {
        res.json({ done: false })

      }
    } catch (err: any) {
      res.status(err.status || 500).json({
        error: true,
        message: err.message || 'Internal Server Error',
      });

    }

  };
  static logout=  async (req: Request, res: Response): Promise<void> =>{
    this.localStorage.removeItem("token")
     res.json({ done: true } )

  }
  static autorotation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (this.localStorage.getItem("token")) {
      console.log(typeof(this.localStorage.getItem("token")))

      next()
    }
    else {
      res.status(405).json({
        error: true,
        message: "u do't has a hade for that"
      })
    }

  }

}