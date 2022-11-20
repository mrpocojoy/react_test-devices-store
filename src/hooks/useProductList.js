import { useState, useEffect } from 'react'
import { productService } from 'services/product'
import { browserStorage } from 'utils/localStorage'

export const useProductList = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {

    const lsKey = 'test-devices-stores__product-list'
    const localStorageData = browserStorage.getData(lsKey)
    
    if (localStorageData)               // Case: info found in localStorage
      setProducts(localStorageData)
    
    else {                              // Case: request info from API
      setIsLoading(true)
      console.log('Obtaining data from API')

      productService
        .getAll()
        .then(result => {
          setIsLoading(false)
          browserStorage.saveData(lsKey, result)
          return setProducts(result)
        })
        .catch(error => console.error(error))
    }
  }, [])

  return { isLoading, products }
}