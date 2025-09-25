
import { IUser, UserModel } from './user.model';
import jwt, { Secret } from 'jsonwebtoken';
import bcrypt from 'bcrypt';


export class UserRepository {
  async create(data: Partial<IUser>): Promise<IUser> {
    const user = new UserModel(data);
    return await user.save();

  }
  async findUser(userName: string) {
    const query = { userName: userName }
    return await UserModel.findOne(query)
  }
  async findById(id: string): Promise<IUser | null> {
    return await UserModel.findById(id);
  }

  async findByEmail(email: string): Promise<IUser | null> {
    return await UserModel.findOne({ email });
  }

  async findAll(): Promise<IUser[]> {
    return await UserModel.find();
  }

  async update(id: string, data: Partial<IUser>): Promise<IUser | null> {
    return await UserModel.findByIdAndUpdate(id, data);
  }

  async delete(id: string): Promise<boolean> {
    const result = await UserModel.findByIdAndDelete(id);
    return result !== null;
  }
  async fendByUserName(userName :   string){
    return await UserModel.findOne({userName:userName})
  }
  async paginate(page: number | string, limit: number | string, query: any = {}, select = "-password") {

    const { name, role , userName , price , phone} = query;
    const regexName = new RegExp(name, 'i');
    const regexUserName = new RegExp(userName, 'i');
    const regexPrice = new RegExp(price, 'i');
    const regexPhone = new RegExp(phone, 'i');
    console.log(regexName)
   
    let _query = {}
    console.log(regexName)
    if (name) {
      _query = {
        $or: [
          { name: regexName },
        ],
      }
    }
    if (role) {
      _query = {
        $or: [
          { role: role },
        ],
      }
    }

    const total = await UserModel.countDocuments(_query);


    const limitNumber = limit === Infinity || limit === 'Infinity' ? total : Number(limit);
    const pageNumber = Math.max(Number(page), 1);


    const docs = await UserModel
      .find(_query)
      .select(select)
      .limit(limitNumber)
      .skip((pageNumber - 1) * limitNumber)
      .lean();

    return {
      'docs': docs,
      'page': pageNumber,
      'limit': limitNumber,
      'total': total,
      'pages': Math.ceil(total / limitNumber),
    };
  }
}

