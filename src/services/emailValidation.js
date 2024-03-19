export const validateEmail = (email) => {
  if (!email.length) {
    return false
  }

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const dominiosPermitidos = [
    'gmail.com',
    'hotmail.com',
    'yahoo.com',
    'yahoo.es',
    'outlook.com',
    'outlook.es',
  ]
  const dominiosPermitidosRegex = new RegExp(
    `^[a-zA-Z0-9._%+-]+@(${dominiosPermitidos.join('|')})$`,
    'i',
  )

  if (!regexEmail.test(email)) {
    return false
  }

  if (!dominiosPermitidosRegex.test(email)) {
    return false
  }

  return true;
}