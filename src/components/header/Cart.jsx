// import shopIcon from 'assets/images/icons/shopping-bag.svg'
import CartIcon from './CartIcon'

const Cart = () => {

  const content = 12

  return (
    <div className="cart-toggle">
      <CartIcon />
      {content && <span className='cart-badge'>{content}</span>}
    </div>
  )
}

export default Cart