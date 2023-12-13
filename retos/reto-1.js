/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */

// 1 - iterar cada numero
// 2 - chequeo si el numero esta en el mapa
// 3 - retorno el que de true
function findFirstRepeated(gifts) {
  const list = []

  for (const gift of gifts) {
    if (list.includes(gift)) {
      return gift
    }

    list.push(gift)
  }

  return -1
}

const gifts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6]

// console.log(findFirstRepeated(gifts))
