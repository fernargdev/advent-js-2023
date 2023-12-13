// Recursividad
function decode(message: string) {
  const match = message.match(/\(([^()]+)\)/)

  if (!match) return message

  const clean = match[0].slice(1, -1)
  const revert = clean.split('').reverse().join('')
  const result = message.replace(match[0], revert)

  const recursividad = decode(result)

  return recursividad
}

console.log(decode('sa(u(cla)atn)s'))
