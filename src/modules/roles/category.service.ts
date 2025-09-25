import { IRole } from "./role.model";
import { RoleRepository } from "./role.repo";

export class RoleService {
    private roleRepository: RoleRepository
    constructor() {
        this.roleRepository = new RoleRepository()
    }
    async createRole(RoleData: Partial<IRole>): Promise<IRole> {
        return await this.roleRepository.createRole(RoleData)
    }

    async updateRole(id: string, RoleData: Partial<IRole>): Promise<IRole | null> {
        return await this.roleRepository.updateRole(id, RoleData)
    }

    async deleteRole(id: string): Promise<IRole | null> {
        return this.roleRepository.deleteRole(id)
    }

    async finById(id: string): Promise<IRole | null> {
        return this.roleRepository.findRoleById(id)
    }
    async paginate(page: number, limit: number) {
        return await this.roleRepository.paginate(page, limit)
    }

}