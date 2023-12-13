/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */

// Algorirmo:
// 1- Cojer coda letra de cada gift y ver si esta entre las letra de los materiales
// 2- Si esta entonces meter ese gift en un array
// 3- Devolver el array con los gifts que se pueden fabricar
function manufacture(gifts, materials) {
  return gifts.filter((gift) => {
    return gift.split('').every((letter) => materials.includes(letter))
  })
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

console.log(manufacture(gifts, materials))
