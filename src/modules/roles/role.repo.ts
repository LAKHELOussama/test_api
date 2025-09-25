import { IRole, RoleModel } from "./role.model";

export class RoleRepository {
    async createRole(roleData: Partial<IRole>): Promise<IRole> {
      
        const Role = new RoleModel(roleData);
        return await Role.save();
    }
    async updateRole(id: string, roleData: Partial<IRole>): Promise<IRole | null> {
        return await RoleModel.findByIdAndUpdate(id, roleData);
    }
    async deleteRole(id : string) : Promise<IRole | null>{
        return await RoleModel.findByIdAndDelete(id)
    }
    async findRoleById(id: string): Promise<IRole| null> {
      return await RoleModel.findById(id);
    }
    async paginate( page: number | string, limit: number | string, select = "-password" ,query: any = {}) {
        const total = await RoleModel.countDocuments(query);
    
        const limitNumber = limit === Infinity || limit === 'Infinity' ? total : Number(limit);
        const pageNumber = Math.max(Number(page), 1); // Ensure page is at least 1
    
      
        const docs = await RoleModel
            .find(query)
            .select(select)
            .limit(limitNumber)
            .skip((pageNumber - 1) * limitNumber)
            .lean();
    
        
        console.log("this is " , docs)
        return {
            'docs': docs,
           'page': pageNumber,
           'limit': limitNumber,
           'total' : total ,
           'pages': Math.ceil(total / limitNumber),
         };
    }
}