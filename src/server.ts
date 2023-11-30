import http from 'http';
import app from './app';
import sequelize from "./database/db";
import dotenv from 'dotenv';
dotenv.config();

const server = http.createServer(app);

async function initializeDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connexion à la base de données réussie.');
        await sequelize.sync(); // Vous pouvez utiliser { force: true } pour le développement
    } catch (error) {
        console.error('Impossible de se connecter à la base de données:', error);
    }
}

// Appeler la fonction d'initialisation
initializeDatabase();

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port ${PORT}`);
});