import { useCustomization } from 'hooks/products-description/useCustomization'
import { useContext } from 'react'
import { CartContext } from 'context/CartContext'

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
      return warningAlert({
        title: 'Customize your device',
        text: 'Please select all your device customization preferences prior to adding the item into the shopping cart ☺️'
      })
    
    addCartItem(customization)
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
      
      { status && <p className='product-actions__status'>{status}</p> }
      <Button classes='product-actions__checkout-button' label="Add to Cart" action={addToCartHandler}/>

    </div>
  )
}

export default Actions