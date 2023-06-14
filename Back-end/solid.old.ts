/**
 * Exemplo prático inicial de SOLID
 * 
 * Contextualização: obter desconto de um pedido 
 * de acordo com o modo de pagamento
 */

/**
 * Respeita o princípio SRP, pois a classe
 * só tem a finalidade de retornar o desconto.
 * 
 * Não respeita o princípio OCP, porque vai ser necessário
 * alterar o método a cada adição de forma de pagamento,
 * a variável 'installments' é específica do método 'credit',
 * sendo obsoleta nos outros casos.
 */
class CalculateOrderDiscount_OLD {
    public execute(amount: number, installments: number, paymentMethod: string) {
        if (paymentMethod == 'billet') {
            return amount * 0.1;
        }

        if (paymentMethod == 'credit') {
            if (installments == 1) {
                return amount * 0.1;
            }

            if (installments <= 6) {
                return amount * 0.02;
            }

            return 0;
        }

        if (paymentMethod == 'debit') {
            return amount * 0.05;
        }

        return 0;
    }
}