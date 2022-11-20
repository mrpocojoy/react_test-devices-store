export const randomPercentDiscount = (price) => {
  const discountPercent = Math.random()
  console.log(discountPercent)
  const discount = price * discountPercent
  console.log(discount)
  const newPrice = price * (1 - discount)
  console.log(newPrice)
  
  return { discountPercent, discount, newPrice }
}

export const randomValueDiscount = (price) => {
  const discount = 0
  return discount
}