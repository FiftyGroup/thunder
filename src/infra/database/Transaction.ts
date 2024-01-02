import { randomUUID } from "crypto";
import { sequelize } from "./database";

export class Transaction {
  private readonly transactions = {};
  async run(cb: (tid: string) => Promise<any>) {
    const t = await sequelize.transaction();
    const tid = randomUUID();
    this.transactions[tid] = t;

    try {
      await cb(tid);
      await t.commit();
      delete this.transactions[tid];
    } catch (e) {
      delete this.transactions[tid];
      await t.rollback();
      throw e;
    }
  }
  getOne(tid: string) {
    return this.transactions[tid];
  }
}
