import { Router } from 'express';
import {AuthService} from "../services/AuthService";
import {AuthController} from "../controllers/AuthController";

const router = Router();
const authService = AuthService.getInstance();
const authController = new AuthController(authService);

router.get('/', (req, res) => authController.getAllMessages(req, res));
export default router;