import { UserService } from "../user/user.service";
import jwt from "jsonwebtoken"
export class AuthService {
    private userService : UserService
    constructor(){
        this.userService = new UserService()
    }

    async login(userName: string, password: string) {
        const user = await this.userService.findUser(userName, password)
        if (user) {
            const token = jwt.sign({ _id: user._id, role: user.role }, "adminAdmin", {
                expiresIn: '8h',
            });
            
            
            return { role: user.role, token: token };
        } else {
            throw new Error("password or user Name  is not corrected")
        }
        
    }
    async validationToken(token : string){
        jwt.verify(token,"adminAdmin") 
        
    }
     autorotation(roles : string[] ,role : string ){
        let isExist = role.includes(role);
        return isExist;
    } 
    authRole(roles: string[ ]){
    }
    

}