import Button from 'components/ui/Button'
import Selector from './Selector'

const Actions = ({ id, colors, memory }) => {

  const handleClick = (event, type) => {
    event.preventDefault()
    console.log(type)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit -> here we will update the cart')
  }

  return (
    <div className="product-actions__wrapper">
      
      <h4 className="product-actions__title">Customize your device</h4>

      <Selector
        type='memory'
        // label='Internal Memory'
        options={memory}
        action={handleClick} 
      />
      
      <Selector
        type='color'
        // label='Color'
        options={colors}
        action={handleClick} 
      />
      
      <Button label="Add to Cart" action={handleSubmit} classNames='button button__cart' />

    </div>
  )
}

export default Actions