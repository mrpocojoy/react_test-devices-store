import './Cart.scss'

import Icon from 'components/ui/icon/Icon'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from 'context/CartContext'
import { infoAlert } from 'utils/customAlerts'
import FakeAnchor from 'components/ui/anchor/FakeAnchor'


const Cart = () => {

  const { cartContent } = useContext(CartContext)
  const badgeLabel = cartContent.length || false

  const cartAction = () => {
    infoAlert({
      title: 'Cart Content',
      text: JSON.stringify(cartContent),
    })
  }
  return (
    <div className="cart__wrapper">
      <FakeAnchor action={cartAction}>
        
        <Icon classes="cart__icon" icon={faCartShopping} />

        {
          badgeLabel &&
          <CartBadge classes="cart__badge" content={badgeLabel} />
        } 
        
      </FakeAnchor>
    </div>
  )
}

const CartBadge = ({ classes, content }) => (
  <div className={`${classes} badge`}>
    <span>{content}</span>
  </div>
)


export default Cart