import {Request, Response} from "express";
import {AuthService} from "../services/AuthService";
import {ProductsService} from "../services/ProductsService";
import {OrdersService} from "../services/OrdersService";

export class OrdersController {
    private ordersService: OrdersService;

    constructor(authService: OrdersService) {
        this.ordersService = authService;
    }

    async getAllOrders(req: Request, res: Response) {
        try {
            const allProducts = await this.ordersService.getAllOrders();
            res.json(allProducts);
        } catch (error) {
            res.status(500).send("Erreur lors de la récupération des produits");
        }
    }

    async getOrderById(req: Request, res: Response) {
        try {
            const product = await this.ordersService.getOrderById(req.params.id);
            if (product) {
                res.json(product);
            } else {
                res.status(404).send("Produit non trouvé");
            }
        } catch (error) {
            res.status(500).send("Erreur lors de la récupération du produit");
        }
    }

    async createOrder(req: Request, res: Response) {
        try {
            const orderData = req.body;
            const newOrder = await this.ordersService.createOrder(orderData);
            res.status(201).json(newOrder);
        } catch (error) {
            res.status(500).send('Erreur lors de la création de l\'ordre');
        }
    }
}