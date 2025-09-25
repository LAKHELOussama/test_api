import { Router } from "express";
import { ProductController } from "./product.controller";
import { AuthController } from "../auth/auth.controller"; // Chemin corrigé

const router = Router();
const productController = new ProductController();

// Routes publiques (accessibles sans authentification)
router.get('/', productController.findAll);
router.get('/:id', productController.findProductById);
router.post('/paginate/:page/:limit', productController.paginate);
// router.get('/name/:name', productController.findProductByName);

router.use(AuthController.autorotation); // Correction: authorization au lieu de autorotation

// Routes protégées (nécessitent une authentification)
router.post('/', productController.createProduct);
router.patch('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

export default router;