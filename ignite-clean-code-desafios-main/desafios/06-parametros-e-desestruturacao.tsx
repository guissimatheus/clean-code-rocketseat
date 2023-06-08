/**
 * Desafio: Parâmetros e Desestruturação
 * Os comentários são as linhas de código originais
 */

// function updateUserRoute(body, params) {
//   updateUserController(body, params)
// }

// function updateUserController(data, params) {
//   userRepository.update(data, params)
// }

// const userRepository = {
//   update: (data, params) => {},
// }

function updateUserRoute({ requestBody, routeParams }) {
  updateUserController({ 
    userData: requestBody, 
    userParams: routeParams
  })
}

function updateUserController({ userData, userParams }) {
  userRepository.update({ 
    updatedUserData: userData,
    updatedUserParams: userParams
  })
}

const userRepository = {
  update: ({ updatedUserData, updatedUserParams })  => {},
}