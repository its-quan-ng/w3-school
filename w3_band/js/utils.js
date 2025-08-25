export function isValidQuantity(quantity) {
  return /^\d+$/.test(quantity) && Number(quantity) > 0
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function calcTotal(quantity, price = 15) {
  return Number(quantity) * price
}