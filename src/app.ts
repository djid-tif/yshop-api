import express from 'express';
import productsRouter from './routes/productsRouter';
import cors from 'cors';
import ordersRouter from "./routes/ordersRouter";

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

// Middleware pour l'authentification si nécessaire
// app.use(authMiddleware);

// app.use('/api', MessageRoutes);

// Vous pouvez ajouter d'autres routes ici

export default app;
