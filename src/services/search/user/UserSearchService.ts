import { prisma } from "../../../utils/prisma";

export class UserSearchService {

  async getUsersByName(name: string, page: number, limit: number = 20) {
    const offset = (page - 1) * limit;

    return {
      users: await prisma.user.findMany({
        where: {
          username: {
            contains: name,
            mode: 'insensitive'
          }
        },
        skip: offset,
        take: limit
      }),
      totalCount: await prisma.user.count({
        where: {
          username: {
            contains: name,
            mode: 'insensitive'
          }
        }
      })
    }
  }
}