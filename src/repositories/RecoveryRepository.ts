import { Prisma, PrismaClient } from "@prisma/client"
import { Recovery } from "../domain/entities/Recovery"
import { IGetRecoveryProps, IRecoveryRepository } from "./interfaces/IRecoveryRepository"

export class RecoveryRepository implements IRecoveryRepository{
    private readonly prisma!: PrismaClient
    constructor(){
        this.prisma = new PrismaClient()
    }
   async getOne(props:IGetRecoveryProps){
   return await this.prisma.user.findFirst({
        where:{
            ...props.search,
        },
        select:{
            ...props.select
        }
       
    }) as unknown as Recovery | null
   }
   async save(verification: Recovery){
    const {createdAt,id,userId,used,secretCode,expiresAt} = verification
    await this.prisma.recovery.create({
        data:{
            createdAt,id,userId,used,secretCode,expiresAt,
        }
    })
   }
}


export const recoveryRepository = new RecoveryRepository()

