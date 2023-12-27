import { Prisma, PrismaClient } from "@prisma/client"
import { Session } from "../domain/entities/Session"
import { IGetSessionProps, ISessionRepository } from "./interfaces/ISessionRepository"

class SessionRepository implements ISessionRepository{
    private readonly prisma!: PrismaClient
    constructor(){
        this.prisma = new PrismaClient()
    }
   async getOne(props:IGetSessionProps){
   return await this.prisma.session.findFirst({
       where: {
           ...props.search,
       },
       select: {
           ...props.select
       }
   }) as unknown as Session | null
   }
   async deleteOneByToken(token:string){
    await this.prisma.session.deleteMany({
        where:{
            refreshToken:token
        }
    })
   }

   async save(verification: Session){
    const {createdAt,id,userId,blocked,refreshToken,ip,userAgent,username,expiresAt} = verification
    await this.prisma.session.create({
        data:{
            createdAt,id,blocked,expiresAt,ip,refreshToken,userAgent,username,userId
        }
    })
   }
}



export const sessionRepository = new SessionRepository()