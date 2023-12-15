/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
function maxDistance(movements: string) {
  let distance = 0
  let right = movements.match(/>/g)?.length ?? 0
  let left = movements.match(/</g)?.length ?? 0
  let extra = movements.length - (right + left)

  distance += right
  distance -= left

  return Math.abs(distance) + extra
}
