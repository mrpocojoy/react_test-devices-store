import './Cart.scss'

import { useContext } from 'react'
import { CartContext } from 'context/CartContext'
import { genericAlert } from 'utils/customAlerts'

import Icon from 'components/ui/icon/Icon'
import FakeAnchor from 'components/ui/custom-anchor/CustomAnchor'


const Cart = () => {

  const { cartContent } = useContext(CartContext)
  const badgeLabel = cartContent.length || false

  const wrapperClassNames = `cart__wrapper ${(!cartContent.length) && 'empty'}`

  const cartAction = () => {
    genericAlert({
      title: 'Cart Content',
      text: JSON.stringify(cartContent),
    })
  }

  return (
    <div className={wrapperClassNames}>
      <FakeAnchor action={cartAction}>
        
        <Icon classes="cart__icon" iconName="faCartShopping" />

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