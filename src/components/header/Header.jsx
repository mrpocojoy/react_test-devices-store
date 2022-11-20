import './Header.scss'

import { Link } from 'react-router-dom'
import Logo from 'components/logo/Logo'
import Cart from './cart/Cart'


const cartContent = [
  {
    id: 'exampleidhere',
    colorCode: '1234',
    memoryStorageCode: '5678',
  }
]

const Header = () => {
  return (
    <header>
      <div className="header__content-wrapper">
        <Link to="/">
          <Logo />
        </Link>

        <Cart content={cartContent} />
      </div>
    </header>
  )
}

export default Header