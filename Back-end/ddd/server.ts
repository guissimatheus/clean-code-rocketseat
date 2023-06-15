import { MySqlOrdersRepository } from "./repositories/mysql/mysql-orders-repository";
import { PostgresOrdersRepository } from "./repositories/postgres/postgres-orders-repository";
import { SubmitOrder } from "./use-cases/submit-order";

/**
 * Princípio LSP do SOLID
 * A dependência de SubmitOrder pode ser
 * substituída por outra classe que o método
 * vai continuar funcionando corretamente
 */
const submitOrder1 = new SubmitOrder(
    new PostgresOrdersRepository()
);
submitOrder1.execute({ customerDocument: "123", total: 100 })

const submitOrder2 = new SubmitOrder(
    new MySqlOrdersRepository()
);
submitOrder2.execute({ customerDocument: "123", total: 100 })
