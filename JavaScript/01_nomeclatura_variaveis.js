// Nomenclatura de variáveis

const users = ['Fulano', 'Ciclano', 'Beltrano']

const filtered = users.filter(u => {
    return u.startsWith('F')
})
/**
 * Pontos a serem melhorados:
 * - Evitar variáveis no diminutivo: u
 * - Evitar nomes simples: filtered, não deixa claro o que foi filtrado, pode
 *   ocasionar confusões caso o arquivo seja longo a constante seja importada em
 *   outro arquivo
 */

const usersStartingWithLetterF = users.filter(user => {
    return user.startsWith('F')
})

function getUsers() {
    const data = ["User 1", "User 2", "User 3"]

    return data
}
/**
 * Evite nomes genéricos (data, response, list, args, params)
 * Pode ocasionar confusões no futuro caso a função cresça
 */

function getUsers() {
    const users = ["User 1", "User 2", "User 3"]

    // Alguma validação dos dados

    // Manipulação dos dados (mapping)

    return users
}