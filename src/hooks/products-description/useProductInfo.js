import { useState, useEffect } from 'react'
import { productService } from 'services/product'
import { browserStorage } from 'utils/localStorage'

export const useProductInfo = (id) => {
  const [isLoading, setIsLoading] = useState(false)
  const [productInfo, setProductInfo] = useState({})
  
  useEffect(() => {
    
    const lsKey = `test-devices-stores__product-info-${id}`
    const localStorageData = browserStorage.getData(lsKey)
    
    if (localStorageData)               // Case: info found in localStorage
      setProductInfo(localStorageData)
    
    else {                              // Case: request info from API
      setIsLoading(true)
      
      productService      
        .getById({ id })
        .then(result => {
          setProductInfo(result)
          setIsLoading(false)
          return browserStorage.saveData(lsKey, result)
        })
        .catch(error => console.error(error))
    }
  }, [id])

  return { isLoading, productInfo }
}