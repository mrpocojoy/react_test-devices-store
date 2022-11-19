import './Header.scss'

import Logo from 'components/ui/Logo'
import Cart from './Cart'

const Header = () => {
  return (
    <header>
      <div className="header__content-wrapper">
        <Logo />
        <Cart />
      </div>
    </header>
  )
}

export default Header