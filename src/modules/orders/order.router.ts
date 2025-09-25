import { Router } from "express";
import { OrderController } from "./order.controller";
import { AuthController } from "../auth/auth.controller"; // Chemin corrigé

const router = Router()
const orderController = new OrderController()
router.post('/' , orderController.createOder)
router.use(AuthController.autorotation);


router.get('/:id' , orderController.findOrderById)
router.get('/' , orderController.findOrderById)
router.patch('/:id' , orderController.updateOrder)
router.delete('/:id' , orderController.deleteOrder)
router.post('/paginate/:page/:limit' , orderController.paginate)


export default router;