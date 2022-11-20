import './Cart.scss'

import Icon from 'components/ui/icon/Icon'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Cart = ({ content }) => {

  return (
    <div className="cart__wrapper">
      <Icon classes="cart__icon" icon={faCartShopping} />
      {content &&
        <div className='cart__badge'>
          <span>{content.length}</span>
        </div>}
    </div>
  )
}

export default Cart