import {connect,Connection} from "amqplib"
export class Amqp {
     connection:Connection
 
    
     async start() {
        this.connection = await connect("amqp://localhost:5672")
     }
 }

export const amqp = new Amqp()