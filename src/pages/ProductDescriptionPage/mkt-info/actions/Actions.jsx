import Button from 'components/ui/button/Button'
import Selector from './Selector'

const Actions = ({ id, colors, memory, status }) => {

  const handleClick = (event, type) => {
    event.preventDefault()
    console.log(type)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit -> here we will update the cart', id)
  }

  return (
    <div className="product-actions__wrapper">
      
      <h4 className="product-actions__title">
        Customize your device:
      </h4>

      <Selector
        type='memory'
        options={memory}
        action={handleClick} 
      />
      
      <Selector
        type='color'
        options={colors}
        action={handleClick} 
      />
      
      { status && <p className='product-actions__status'>{status}</p>}
      <Button label="Add to Cart" action={handleSubmit} classes='button button__checkout' />

    </div>
  )
}

export default Actions