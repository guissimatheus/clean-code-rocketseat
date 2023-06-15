import { Order } from "../../domain/purchases/order";
import { OrdersRepository } from "../orders-repository";

export class PostgresOrdersRepository implements OrdersRepository {
    async create(order: Order): Promise<void> {
        // salva no banco de dados
    }
}