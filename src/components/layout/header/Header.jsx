import './Header.scss'

import { Link } from 'react-router-dom'
import Logo from 'components/ui/logo/Logo'
import Cart from '../../structures/cart/Cart'
import Breadcrumbs from '../../structures/breadcrumbs/Breadcrumbs'

const Header = () => (
  <>
    <header>
      <div className="header__wrapper">
        <Link to="/">
          <Logo />
        </Link>

        <Cart />
      </div>
    </header>

    <Breadcrumbs />
  </>
)

export default Header