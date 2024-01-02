import { ConfirmChannel } from "amqplib";
import { Amqp } from "../amqp";

export default class Producer {
  private channel!: ConfirmChannel;
  private exchange: string;
  private amqp: Amqp;
  constructor(exchange: string, amqp: Amqp) {
    this.exchange = exchange;
    this.amqp = amqp;
  }

  async start() {
    if (!this.amqp.connection) {
      await this.amqp.start();
    }
    this.channel = await this.amqp.connection.createConfirmChannel();
    await this.channel.assertExchange(this.exchange, "fanout", {
      durable: true,
    });
    return this;
  }

  async publish<T>(data: T) {
    if (!this.channel) {
      await this.start();
    }
    const message = Buffer.from(JSON.stringify(data));
    this.channel.publish(this.exchange, "", message, { persistent: true });
    await this.channel.waitForConfirms();
  }
}
