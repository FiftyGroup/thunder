import { Prisma, PrismaClient } from "@prisma/client"
import { User } from "../domain/entities/User"
import { IGetUserProps, IUserRepository } from "./interfaces/IUserRepository"

class UserRepository implements IUserRepository{
    private readonly prisma!: PrismaClient
    constructor(){
        this.prisma = new PrismaClient()
    }
   async getOne(props:IGetUserProps){
   return await this.prisma.user.findFirst({
       where: {
           ...props.search,
       },
       select: {
           ...props.select
       }
   }) as unknown as User | null
   }
   async save(user: User){
    const {email,createdAt,fullName,id,password,isVerified,roles,username}= user
    await this.prisma.user.create({
        data:{
            email,
            createdAt,
            fullName,
            id,
            password,
            username,
            isVerified,
            roles
        }
    })
   }
}



export const userRepository = new UserRepository()