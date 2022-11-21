import { useState, useEffect } from 'react'
import { browserStorage } from 'utils/localStorage'
import { cartService } from 'services/cart'

export const useCartList = () => {
  const [cartContent, setCartContent] = useState([])
  
  const lsKey = 'test-devices-stores__cart-content'
  useEffect(() => {
    const localCart = browserStorage.getData(lsKey)
    setCartContent(localCart ?? [])
  }, [])
  

  const addCartItem = (item) => {
    const updatedContent = [...cartContent, item]
    
    browserStorage.saveData(lsKey, updatedContent)
    setCartContent(updatedContent)
    
    cartService
      .add(item)
      .then(result => {
        if (result === 1) {
          console.log('item added to cart', cartContent)
          return cartContent
        }
      })
      .catch(error => console.error(error))
  }

  const removeCartItem = (item) => {
    const updatedContent = cartContent.filter(({ id }) => id !== item.id)

    browserStorage.saveData(lsKey, updatedContent)
    setCartContent(updatedContent)
  }
  
  return { cartContent, addCartItem, removeCartItem }
}