import {Request, Response} from "express";
import {AuthService} from "../services/AuthService";
import {ProductsService} from "../services/ProductsService";

export class ProductsController {
    private productsService: ProductsService;

    constructor(authService: ProductsService) {
        this.productsService = authService;
    }

    getAllProducts(req: Request, res: Response) {
        const allProducts = this.productsService.getAllProducts();
        res.send(allProducts);
    }

    getProductById(req: Request, res: Response) {
        const product = this.productsService.getProductById(req.params.id);
        res.send(product);
    }

    createProduct(req: Request, res: Response) {
        const product = this.productsService.createProduct(req.body);
        res.send(product);
    }
}