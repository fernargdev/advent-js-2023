/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
function findNaughtyStep(original: [], modified: []) {
  if (original.length === modified.length) return ''

  const max = modified.length > original.length ? modified : original

  for (let i = 0; i < max.length; i++) {
    if (original[i] !== modified[i]) return max[i]
  }
}

const original = 'abcd'
const modified = 'abcde'

// console.log(findNaughtyStrp(original, modified))
