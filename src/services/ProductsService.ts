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

     getAllProducts(): Product[] {
        return readJsonFileSync();
    }

    getProductById(id: string): any {
        return getById(id);
    }

    createProduct(product: any): any {
        return "createProduct";
    }

}