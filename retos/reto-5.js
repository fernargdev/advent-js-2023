/* eslint-disable no-useless-escape */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */
function cyberReindeer(road, time) {
  const snapshots = [road]
  let lastChar = '.'

  for (let i = 1; i < time; i++) {
    if (i === 5) road = road.replaceAll('|', '*')

    const matches = road.match(/S[\*\.]/g)

    if (matches) {
      road = road.replace(matches[0], lastChar + 'S')
      lastChar = matches[0][1]
    }

    snapshots.push(road)
  }

  return snapshots
}

const road = 'S..|...|..'
const time = 10

console.log(cyberReindeer(road, time))
