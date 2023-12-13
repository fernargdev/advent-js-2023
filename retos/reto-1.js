// 1 - iterar cada numero
// 2 - chequeo si el numero esta en el mapa
// 3 - retorno el que de true

function findFirstRepeated(gifts) {
  const set = new Set()

  for (const gift of gifts) {
    if (set.has(gift)) {
      return gift
    }

    set.add(gift)
  }

  return -1
}

const gifts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 4]

// console.log(findFirstRepeated(gifts))
