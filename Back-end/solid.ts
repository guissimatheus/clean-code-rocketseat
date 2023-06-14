/**
 * Exemplo prático de SOLID
 * 
 * Contextualização: obter desconto de um pedido 
 * de acordo com o modo de pagamento
 */

/**
 * Respeita o princípio SRP, pois a classe
 * só tem a finalidade de retornar o desconto.
 * 
 * Respeita o princípio OCP, já que não é necessário
 * modificar as classes existentes caso surga um método
 * novo de pagamento, basta apenas criar uma nova classe.
 * 
 * Respeita o princípio LSP, porque é possível utilizar no
 * método execute qualquer classe com a implementação da
 * interface PaymentMethod que ele vai continuar funcionando
 * corretamente.
 * 
 * Respeita o princípio DIP, porque a classe CalculateOrderDiscount
 * está recebendo a dependência como parâmetro, ele recebe uma classe
 * com a função a ser executada, nenhum import ou criação de classe foi
 * realizado dentro da classe CalculateOrderDiscount.
 * 
 * Em relação ao princípio ISP, caso a aplicação expanda para receber
 * os dados de um cartão de crédito/débito, poderia ser criada uma 
 * interface Card com esses atributos e as classes Credit e Debit
 * implementaria mais essa interface Card, dessa forma respeitando
 * o princípio ISP.
 */

interface PaymentMethod {
    getDiscountAmout: (amount: number) => number;
}

class Billet implements PaymentMethod {
    getDiscountAmout(amount: number): number {
        return amount * 0.1;
    }
}

class Credit implements PaymentMethod {
    private installments: number;

    constructor(installments: number) {
        this.installments = installments
    }

    getDiscountAmout(amount: number): number {
        if (this.installments == 1) {
            return amount * 0.1;
        }

        if (this.installments <= 6) {
            return amount * 0.02;
        }

        return 0;
    }
}

class Debit implements PaymentMethod {
    getDiscountAmout(amount: number): number {
        return amount * 0.05;
    }
}

class CalculateOrderDiscount {
    private paymentMethod: PaymentMethod;
    
    // DIP - Recebe a dependência
    constructor(paymentMethod: PaymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public execute(amount: number) {
        return this.paymentMethod.getDiscountAmout(amount);
    }
}

const calculateOrderDiscount = new CalculateOrderDiscount(new Credit(6));

calculateOrderDiscount.execute(2000);

// Nova classe respeitando OCP
class Pix implements PaymentMethod {
    getDiscountAmout(amount: number): number {
        return amount * 0.15;
    }
}

// LSP - troca da dependência Credit para Pix
const calculateOrderDiscount_2 = new CalculateOrderDiscount(new Pix);
// Método ainda funciona corretamente
calculateOrderDiscount_2.execute(2000);