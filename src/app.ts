import express from 'express';
import productsRouter from './routes/productsRouter';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/products', productsRouter);

// Middleware pour l'authentification si nécessaire
// app.use(authMiddleware);

// app.use('/api', MessageRoutes);

// Vous pouvez ajouter d'autres routes ici

export default app;
