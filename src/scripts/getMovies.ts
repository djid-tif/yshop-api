import * as fs from 'fs';
import {Product} from "../models/ProductModel";


export function readJsonFileSync(): Product[] {
    try {
        const data = fs.readFileSync("./db/product_db.json", 'utf8');
        return JSON.parse(data) as Product[];
    } catch (error) {
        console.error(`Erreur lors de la lecture ou de l'analyse du fichier : ${error}`);
        return [];
    }
}


export function getById(productId: string): Product | null {
    const products: Product[] = readJsonFileSync();
    return products.find(product => product.id.toString() === productId) || null;
}