import { Router } from 'express';
import { AuthController } from './auth.controller';
const  router = Router()
const  authController = new AuthController()
router.post('/login' , AuthController.login)
router.post ('/logout' , AuthController.logout)

router.post('/test' , AuthController.autorotation)

export default router;

