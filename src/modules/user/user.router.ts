import { Router } from 'express';
import { UserController } from './user.controlle';
import  express  from 'express';
// import { AuthController } from '../auth/auth.controller';

const router = Router();
const userController = new UserController();
var app = express();


router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.get('/userName/:userName', userController.getUserByUserName);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.post('/paginate/:page/:limit', userController.paginate);

export default router;
