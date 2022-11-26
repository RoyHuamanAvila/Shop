import { createProductHandler, deleteProductHandler, findProductsHandler, updateProductHandler } from "./product.controller";
import { Router } from "express";
import { validateId } from "../../middlewares";

const router = Router();

router.post('/', createProductHandler);
router.get('/', findProductsHandler);
router.put('/:id',validateId, updateProductHandler);
router.delete('/:id', validateId, deleteProductHandler);

export default router;
