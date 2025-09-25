import { IUser } from './user.model';
import { hash } from 'bcrypt';
import { UserRepository } from './user.repo';
import bcrypt from 'bcrypt';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(userData: Partial<IUser>): Promise<IUser> {
    const password : string = await bcrypt.hash(userData.password , 10)
    var userData1 : any  = {...userData,password: password } 
    console.log(userData1)
    return await this.userRepository.create(userData1);
  }

  async getUserById(id: string): Promise<IUser | null> {
    return await this.userRepository.findById(id);
  }
   async findUser(userName : string  , password : string) {
  
     const user : any = await this.userRepository.findUser(userName)
     if (user) {
       const isMatch = bcrypt.compareSync(password , user.password)
       if (isMatch){
         return user;
       }
     }
   }

   async getUserByEmail(email: string): Promise<IUser | null> {
    return await this.userRepository.findByEmail(email);
  }
  async getUserByUserName(userName: string): Promise<IUser | null> {
    return await this.userRepository.fendByUserName(userName);
  }
  async getAllUsers(): Promise<IUser[]> {
    return await this.userRepository.findAll();
  }

  async updateUser(id: string, userData: Partial<IUser>): Promise<IUser | null> {
    if(userData.password !=''){
      const password : string = await bcrypt.hash(userData.password , 10)
      var userData2 : any  = {...userData,password: password } 
    }
    else{
    
      var userData2 : any  = {...userData } 
      delete userData2.password;

    }
    console.log(userData2)
    return await this.userRepository.update(id, userData2);
  }

  async deleteUser(id: string): Promise<boolean> {
    return await this.userRepository.delete(id);
  }
  async findOneUser(){

  }
async paginate(page : number , limit : number , query? :any){
  return await this.userRepository.paginate(page , limit , query)
}
}
