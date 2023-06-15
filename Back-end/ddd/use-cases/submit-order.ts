import { Order } from '../domain/purchases/order'
import { OrdersRepository } from '../repositories/orders-repository';

interface SubmitOrderRequest {
    customerDocument: string;
    total: number;
}

export class SubmitOrder {
    /**
     * Princípio DIP do SOLID
     * Inversão de dependência
     */
    constructor(
        private ordersRepository: OrdersRepository
    ) {}

    async execute({ customerDocument, total }: SubmitOrderRequest) {
        // Aqui vão as regras de negócio
        
        const order = new Order(total, customerDocument)

        // Persistir no banco de dados

        await this.ordersRepository.create(order);
    }
}