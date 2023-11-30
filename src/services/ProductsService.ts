import {getById, readJsonFileSync} from "../scripts/getMovies";
import {Product} from "../models/ProductModel";

export class ProductsService {
    private static instance: ProductsService;

    static getInstance(): ProductsService {
        if (!ProductsService.instance) {
            ProductsService.instance = new ProductsService();
        }
        return ProductsService.instance
    }

    async getAllProducts(): Promise<Product[]> {
        return Product.findAll();
    }

    async getProductById(id: string): Promise<Product | null> {
        return Product.findByPk(id);
    }

    createProduct(product: any): any {
        return "createProduct";
    }

}