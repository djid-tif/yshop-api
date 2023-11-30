import { Request, Response } from "express";
import { ProductsService } from "../services/ProductsService";

export class ProductsController {
    private productsService: ProductsService;

    constructor(productsService: ProductsService) {
        this.productsService = productsService;
    }

    async getAllProducts(req: Request, res: Response) {
        try {
            const allProducts = await this.productsService.getAllProducts();
            res.json(allProducts);
        } catch (error) {
            res.status(500).send("Erreur lors de la récupération des produits");
        }
    }

    async getProductById(req: Request, res: Response) {
        try {
            const product = await this.productsService.getProductById(req.params.id);
            if (product) {
                res.json(product);
            } else {
                res.status(404).send("Produit non trouvé");
            }
        } catch (error) {
            res.status(500).send("Erreur lors de la récupération du produit");
        }
    }

    async createProduct(req: Request, res: Response) {
        try {
            const newProduct = await this.productsService.createProduct(req.body);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).send("Erreur lors de la création du produit");
        }
    }
}
