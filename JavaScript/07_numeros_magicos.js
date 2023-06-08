// Números mágicos

/**
 * Exemplo Simples
 * setTimeout, setInterval
 */

setTimeout(() => {

}, 2592000000)
// Dica extra: no JS, o número poderia ser escrito com "_" como separador de milhar
// 2592000000 -> 2_592_000_000

/**
 * O valor acima é considerado um número mágico
 * Pois a primeira vista não deixa claro seu significado real
 * Quem for interpretar esse código precisaria converter esse
 * valor a mão pra entender que foi definido intervalo de 30 dias
 * 
 * Possíveis soluções:
 * - Explicitar o cálculo realizado com um comentário do significado pro mundo real
 * - Criar uma variável para armazenar o valor
 */

setTimeout(() => {

}, 1000 * 60 * 60 * 24 * 30) // 30 days

const INTERVAL_30_DAYS = 1000 * 60 * 60 * 24 * 30
setTimeout(() => {

}, INTERVAL_30_DAYS)

/**
 * Exemplo Avançado
 * Quando os dados são referentes a hora, dinheiro, geralmente o formato
 * que é salvo no banco é diferente do valor de entrada, muitas vezes um
 * valor financeiro é multiplicado por 100 pra se tonar um valor inteiro
 * enquanto um valor em dias é transformado em minutos para facilitar
 * eventuais cálculos
 */

function calculateDiscount(price, discountAmount) {
    // retorna desconto
}
/**
 * Não fica claro se o preço é um float (R$) ou um valor inteiro (centavos)
 * Nem se o valor de desconto é em Reais, centavos ou até mesmo uma porcetagem
 * Isso pode gerar confusão quando se importa essa função de outro arquivo
 * sem saber as conversões feitas internamente, o recomendado é deixar
 * sempre claro o tipo esperado de valor
 */

function calculateDiscount(priceInCents, discountAmountInPercentage) {
    // retorna desconto
}