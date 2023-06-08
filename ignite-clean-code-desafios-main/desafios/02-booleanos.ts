/**
 * Desafio: Código limpo em booleanos
 * Os comentários são as linhas de código originais
 */

const user = {
  // name: 'Diego Fernandes',
  name: 'Matheus Guisi',
  // height: 190,
  height: 176,
  hasTicket: true,
}

const necessaryHeight = 130

const currentHour = new Date().getHours()

// const parkOpen = currentHour > 9 && currentHour < 18
const isParkOpen = currentHour > 9 && currentHour < 18

// if (!parkOpen) {
if (!isParkOpen) {
  throw new Error('O parque está fechado!')
}

// const ticket = user.hasTicket
const hasTicket = user.hasTicket

// if (!ticket) {
if (!hasTicket) {
  // throw new Error('O Diego não possui um bilhete para entrar no parque!')
  throw new Error('O '+ user.name + ' não possui um bilhete para entrar no parque!')
}

// const enterToy = user.height > necessaryHeight
const canEnterToy = user.height > necessaryHeight

// if (!enterToy) {
if (!canEnterToy) {
  // throw new Error('O Diego não pode entrar no brinquedo!')
  throw new Error('O ' + user.name + ' é muito baixo para entrar no brinquedo!')
} 

// console.log('O Diego se divertiu muito! :)')
console.log('O ' + user.name + ' se divertiu muito! =D')