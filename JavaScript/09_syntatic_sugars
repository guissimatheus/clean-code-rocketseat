// Evite Syntatic Sugars

// Contexto: converter uma string de valor numérico para uma variável de tipo numérica
const numberInString = "123456"

const number1 = +numberInString
/**
 * Dependendo da linguagem que o programador conhece,
 * ele não vai entender o que está acontecendo
 * às vezes pode até se confundir com os operadores (+=)
 */

const number2 = parseInt(numberInString)
// Ficou mais claro, mas o valor fica limitado somente a inteiro

const number3 = Number(numberInString)
// A solução mais ideal seria usar o próprio construtor Number()

// Outros exemplos
const isNumberNotNull1 = !!number1
const isNumberNotNull2 = Boolean(number1)

const numberAsString1 = `${number1}`
const numberAsString2 = String(number1)