import {Request, Response} from "express";
import {AuthService} from "../services/AuthService";

export class AuthController {
    private authService: AuthService;

    constructor(authService: AuthService) {
        this.authService = authService;
    }

    Login(req: Request, res: Response): Response {
        const users = this.authService.getAllMessages();
        return res.json(users);
    }

    getAllMessages(req: Request, res: Response): Response {
        const users = this.authService.getAllMessages();
        return res.json(users);
    }


}