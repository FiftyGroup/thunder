import { Prisma, PrismaClient } from "@prisma/client"
import { EmailVerification, IEmailVerificationProps } from "../domain/entities/EmailVerification"
import { IEmailVerificationRepository } from "./interfaces/IEmailverificationRepository"

export class EmailVerificationRepository implements IEmailVerificationRepository{
    private readonly prisma!: PrismaClient
    constructor(){
        this.prisma = new PrismaClient()
    }
   async getOne(props:IGetVerificationProps){
   return await this.prisma.user.findFirst({
        where:{
            ...props.search,
        },
        select:{
            ...props.select
        }
       
    }) as unknown as EmailVerification | null
   }
   async save(verification: EmailVerification){
    const {createdAt,email,expiresAt,id,userId,username,used,secretCode} = verification
    await this.prisma.emailVerification.create({
        data:{
            createdAt,email,expiresAt,id,userId,username,used,secretCode,
        }
    })
   }
}



interface IGetVerificationProps {
    search?:{
        id?:string
        email?:string
        secretCode?:string
        username?:string
        userId?:string
    },
    select: Prisma.EmailVerificationSelect
}

export const emailVerificationRepository = new EmailVerificationRepository()