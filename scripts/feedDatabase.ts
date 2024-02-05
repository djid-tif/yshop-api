import { Product } from '../src/models/ProductModel';
import * as fs from 'fs';
import {readJsonFileSync} from "./getProducts";

async function feedDatabase() {
    try {
        const products = readJsonFileSync();

        for (const productData of products) {
            await Product.create(productData as any);
        }

        console.log('Les données ont été insérées avec succès dans la base de données.');
    } catch (error) {
        console.error('Erreur lors de l’insertion des données :', error);
    }
}

feedDatabase();
