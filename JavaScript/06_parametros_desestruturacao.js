/**
 * Exemplo:
 * - Rota para criação de um usuário - Parâmetros: name, email, password
 * - Controller - Parâmetros: name, email, password
 * - Repositório - Parâmetros: name, email, password
 */

// Tópico - Desestruturação
function createUserRoute(requestBody) {

    createUserController(requestBody)
}

function createUserController(userData) {
    usersRepository.create(userData)
}

const usersRepository = {
    create(data) {
        // Cria o usuário com os parâmetros: name, email, password
        const user = createUserOnDatabase()

        return user
    }
}

/**
 * Esses tipos de processos geralmente ficam em arquivos diferentes dentro do sistema
 * Então acaba não ficando claro que tipo de dados estão armazenados nesses parâmetros
 * Poderia ser utilizado a tipagem estática para definir os campos dos parâmetros
 * É recomendado sempre que possível enviar e receber parâmetros nomeados
 * Para isso, pode-se utilizar a desestruturação
 */
function createUserController(userData) {
    const { name, email, password } = userData

    usersRepository.create({
        name,
        email,
        password
    })
}


// Tópico - Um objeto vs. múltiplos parâmetros

function createUserRoute(requestBody, params) {

}

// Chamada usual em outro arquivo
createUserRoute({ name: "João", email: "joao@email.com", password: "123" }, { id: 1 })

// Caso queria chamar a função somente com o id
createUserRoute(null, { id: 1 })
/**
 * A próxima pessoa que olhar esse código, pode ficar confusa por não saber o que é esse null nem id
 * O recomendo é que a função tenha apenas um parâmetro e receba um objeto
 */

function createUserRoute({ requestBody, params }) {

}

createUserRoute({
    requestBody: { name: "João", email: "joao@email.com", password: "123" },
    params: { id: 1 }
})

createUserRoute({
    params: { id: 1 }
})
// Agora o null fica omitido, evitando confusões e id fica explícito que é referente ao params

const usersRepository = {
    create(data) {
        // Cria o usuário com os parâmetros: name, email, password
        const user = createUserOnDatabase()

        return {
            user,
        }
    }
}
// Prepara o return da função para retornar mais variáveis como um único objeto caso seja necessário no futuro