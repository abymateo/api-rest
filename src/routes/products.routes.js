import { Router } from "express";
import { authJwt } from '../middlewares';
const router = Router();

//export default router;
import * as productsCtrl from '../controllers/products.controller';


// Rutas
router.get('/', productsCtrl.getProducts);
router.post('/', [authJwt.verifyToken, authJwt.isAdmin], productsCtrl.createProduct);
router.get('/:productId', productsCtrl.getProductById);
router.put('/:productId', [authJwt.verifyToken, authJwt.isAdminOrModerator], productsCtrl.updateProductById);
router.delete('/:productId', [authJwt.verifyToken, authJwt.isAdminOrModerator], productsCtrl.deleteProductById);

export default router;