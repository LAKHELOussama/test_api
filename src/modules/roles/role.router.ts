import { Router } from "express";

import  { RoleController } from "./role.controller";
 './role.controller'
const router = Router()
const roleController = new RoleController()


router.get('/:id' ,roleController.findRoleById)
router.post('/' ,roleController.createRole)
router.patch('/:id' ,roleController.updateRole)
router.delete('/:id' ,roleController.deleteRole)
router.post('/paginate/:page/:limit' ,roleController.paginate)


export default router;