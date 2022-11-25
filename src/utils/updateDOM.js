export const toggleTextContent = (querySelector, initText, altText) => {
  const elem = document.querySelector(querySelector)
  
  if (elem.text === initText)
    elem.textContent = altText
  else
    elem.textContent = initText
}

export const toggleVisibility = (querySelector) => {
  const elem = document.querySelector(querySelector)

  if (window.getComputedStyle(elem).display !== 'none')
    elem.style.display = 'none'
  else
    elem.style.display = 'block'
  
  return { isVisible: elem.style.display === 'block' }
}

export const toggleStyleAttr = (querySelector, styleAttr, valueA, valueB) => {
  const elem = document.querySelector(querySelector)
  
  console.log(window.getComputedStyle(elem)[styleAttr])

  if (window.getComputedStyle(elem)[styleAttr] !== valueA)
    elem.style[styleAttr] = valueA
  else
    elem.style[styleAttr] = valueB
}

