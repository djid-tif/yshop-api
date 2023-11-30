import { Router } from 'express';
import {ProductsService} from "../services/ProductsService";
import {ProductsController} from "../controllers/ProductsController";
import {OrdersService} from "../services/OrdersService";
import {OrdersController} from "../controllers/OrdersController";

const router = Router();
const ordersService =  OrdersService.getInstance();
const ordersController = new OrdersController(ordersService);

router.get('/', (req, res) => ordersController.getAllOrders(req, res));
router.get('/:id', (req, res) => ordersController.getOrderById(req, res));
router.post('/', (req, res) => ordersController.createOrder(req, res));
export default router;