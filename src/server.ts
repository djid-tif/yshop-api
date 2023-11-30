import http from 'http';
import app from './app';

const server = http.createServer(app);

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port ${PORT}`);
});