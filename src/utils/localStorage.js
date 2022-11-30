const defaultTTL = 3600000

const saveData = (key, value, ttl) => {
  if (typeof (Storage) === 'undefined') {
    console.error('Impossible to save. Storage not compatible')
    return null  
  }

  const expiry = new Date().getTime() + (ttl ?? defaultTTL)
  
  window.localStorage.setItem(
    key, JSON.stringify({ value, expiry })
  )
}

const getData = (key) => {
  if (typeof (Storage) === 'undefined') {
    console.error('Impossible to load. Storage not compatible')
    return null  
  }

  const storedStr = window.localStorage.getItem(key)

  if (!storedStr)
    return null   // Case: item not found in localStorage
  
  const storedItem = JSON.parse(storedStr)

  if (new Date().getTime() > storedItem.expiry) {
    window.localStorage.removeItem(key)
    return null   // Case: item expiration timeout
  }
  
  return storedItem.value
}

export const browserStorage = { saveData, getData }