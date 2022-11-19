export const addClassNameToElement = (element, newClass) => {
  if (!element.className.includes(newClass))
    element.className = element.className.trim() + ' ' + newClass
  
  return element.className
}

export const removeClassNameFromElement = (element, removeClass) => {
  element.className = element.className.trim().replace(removeClass, '')
  return element.className
}

export const removeClassNameFromGroup = (classSelector, removeClass) => {
  const elements = document.getElementsByClassName(classSelector)
  Array.from(elements).forEach(elem => 
    removeClassNameFromElement(elem, removeClass)
  )  
}

export const toggleClassName = (element, toggleClass) => {
  return (element.className.includes(toggleClass))
    ? removeClassNameFromElement(element, toggleClass)
    : addClassNameToElement(element, toggleClass)
}
