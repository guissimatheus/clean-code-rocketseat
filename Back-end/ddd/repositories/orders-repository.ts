import { Order } from "../domain/purchases/order";

export interface OrdersRepository {
    create(order: Order): Promise<void>;
}