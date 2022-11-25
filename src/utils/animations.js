export const cartIconAnimation = (elem) => {
  const cartIcon = document.querySelector(elem)

  cartIcon.style.transform = 'rotate(15deg)'
  cartIcon.style.fontSize = '2rem'
  cartIcon.style.color = '#00e4c0'

  setTimeout(() => {
    cartIcon.style.transform = 'rotate(0deg)'
    cartIcon.style.fontSize = '1.5rem'
    cartIcon.style.color = 'white'
  }, 200)
}

export const triggerLoadinAnimation = (elemButton, duration=500) => {

  const loaderClass = '.loader'
  const loader = document.querySelector(loaderClass)
  const button = document.querySelector(elemButton)
  
  loader.style.display = 'inline-block'
  button.style.display = 'none'
  
  
  setTimeout(() => {
    button.style.display = 'inline-block'
    loader.style.display = 'none'
  }, duration)
}