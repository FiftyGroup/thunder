import { Request, Response } from "express";
import { ILogout } from "../../../domain/useCases/ILogout";
import { logout } from "./Logout";

class LogoutController {
    constructor(private readonly logout:ILogout){
        this.logout = logout
    }
    async handle(req:Request,res:Response){
        await this.logout.execute(req.body.refreshToken)
        res.send()        
    }
}
export const logoutController = new LogoutController(logout)