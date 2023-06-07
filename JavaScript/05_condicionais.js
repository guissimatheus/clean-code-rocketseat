// Tópico - Negação dentro de IFs

const isUserOlderThan18Years = true
const doesUserLiveOnBrazil = true

// Fazer uma verificação se o usuário é menor de idade e mora fora do Brasil
if (!isUserOlderThan18Years && !doesUserLiveOnBrazil) {
    // O usuário não tem mais que 18 anos e o usuário não mora no Brasil
}

// O recomendado é não usar condicionais negativas, assim facilita o raciocínio
const isUserYoungerThan18Years = true
const doesUserLiveOutsideBrazil = true

if (isUserYoungerThan18Years && doesUserLiveOutsideBrazil) {
    // O usuário é menor de idade e o usuário mora fora do Brasil
}


// Tópico - Early return vs. else

// Declaração usual
function isUserOlderThan18Years(user) {
    if (!user) {
        return { error: true }
    } else {
        return user.age >= 18
    }
}

/**
 * Com early return
 * A condição do early return é facilmente vista e interpretada
 * Fica claro ao desenvolvedor quando será feito o return
 */
function isUserOlderThan18Years(user) {
    if (!user) {
        return { error: true }
    }
    
    return user.age >= 18
}

// Caso em que o early return não é recomendado
function isUserOlderThan18Years(user) {
    if (!user) {
        /**
         * Muitas
         * linhas
         * de
         * código
         * por
         * aqui
         * 
         * Dificulta
         * interpretação
         * do
         * fluxo
         * da
         * função
         */
        return { error: true }
    } else {
        return user.age >= 18
    }
}


// Tópico - Condionais aninhadas

if (user.age >= 18) {
    if (user.location == "Brazil") {

    }
}
// Evite ifs aninhados, dê preferência a colocar as condições em um único if se possível

if (user.age >= 18 && user.location == "Brazil") {

}