import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import Icon from 'components/icon/Icon'

const Cart = ({ content }) => {

  return (
    <div className="cart-toggle">
      <Icon classes="cart-icon" icon={faCartShopping} />
      {content && <span className='cart-badge'>{content.length}</span>}
    </div>
  )
}

export default Cart