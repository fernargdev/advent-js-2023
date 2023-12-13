/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
// function decode(message: string) {
//   if (message.length === 0) {
//     return ''
//   }

//   const newMessage = new Array()
//   const array = message.split('')

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== '(') {
//       newMessage.push(array[i])
//     }

//   }
// }

// // Recursividad
// function decode(message) {
//   const match = message.match(/\(\w*\)/)

//   if (!match) return message

//   const clean = match[0].slice(1, -1)
//   const revert = clean.split('').reverse().join('')
//   const result = message.replace(match[0], revert)

//   return decode(result)
// }

// console.log(decode('sa(u(cla)atn)s'))
