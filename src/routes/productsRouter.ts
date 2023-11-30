import { Router } from 'express';
import {ProductsService} from "../services/ProductsService";
import {ProductsController} from "../controllers/ProductsController";

const router = Router();
const productsService = ProductsService.getInstance();
const productsController = new ProductsController(productsService);

router.get('/', (req, res) => productsController.getAllProducts(req, res));
router.get('/:id', (req, res) => productsController.getProductById(req, res));
export default router;