import { NextFunction, Request, Response } from "express";

export interface IAuth{
    handle(req:Request,res:Response,next:NextFunction):Promise<void>
}