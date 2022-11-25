import './Actions.scss'

import { useContext } from 'react'
import { CartContext } from 'context/CartContext'
import { useCustomization } from 'hooks/useCustomization'
import { cartIconAnimation, triggerLoadinAnimation } from 'utils/animations'

import { MISSING_CUSTOMIZATION } from 'data/alerts'
import { displaySpinner, warningAlert } from 'utils/customAlerts'

import Button from 'components/ui/button/Button'
import Selector from './selector/Selector'



const Actions = ({ id, options, status }) => {
  
  const { updateCustomization, getCustomization } = useCustomization({ id, options })
  const { addCartItem } = useContext(CartContext)


  const addToCartHandler = (event) => {
    event.preventDefault()
    const customization = getCustomization(id)

    if (customization === null)
      return warningAlert(MISSING_CUSTOMIZATION)
    
    const checkoutButtonSelector = '.product-actions__checkout-button'
    triggerLoadinAnimation(checkoutButtonSelector)
      
    addCartItem(customization)
      
    const cartIconSelector = '.cart__icon' 
    cartIconAnimation(cartIconSelector)
  }



  if (!options)
    return displaySpinner()

  
  
  return (
    <div className="product-actions__wrapper">
      
      <h4 className="product-actions__title">
        Customize your device:
      </h4>

      <Selector
        type='storage'
        options={options.storages}
        action={updateCustomization} 
      />
      
      <Selector
        type='color'
        options={options.colors}
        action={updateCustomization} 
      />
      

      <div className="product-actions__checkout-wrapper">
        {
          status &&
          <p className='product-actions__status'>{status}</p>
        }
        <Button classes='product-actions__checkout-button' label="Add to Cart" action={addToCartHandler} />
        <div className="loader"></div>
      </div>

    </div>
  )
}

export default Actions