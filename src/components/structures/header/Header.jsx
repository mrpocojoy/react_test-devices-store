import './Header.scss'

import { Link } from 'react-router-dom'
import Logo from 'components/ui/logo/Logo'
import Cart from '../cart/Cart'


const Header = () => (
  <header>
    <div className="header__content-wrapper">
      <Link to="/">
        <Logo />
      </Link>

      <Cart />
    </div>
  </header>
)

export default Header