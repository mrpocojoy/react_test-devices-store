import './Header.scss'

import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from 'components/ui/logo/Logo'
import Cart from '../cart/Cart'
import Icon from 'components/ui/icon/Icon'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { useProductInfo } from 'hooks/products-description/useProductInfo'


const Breadcrumb = ({ path, isActive, icon, label, ...props }) => {
  const classes = `header-breadcrumbs__item ${isActive && 'active'}`
  
  if (path)
    return (
      <NavLink to={path} className={classes}>
        {icon && <Icon classes={'header-breadcrumbs__item-icon'} icon={faHome} />}
        {label || props.children}
      </NavLink>
    )
  
  return (
    <p className={classes}>
      {icon && <Icon classes={'header-breadcrumbs__item-icon'} icon={faHome} />}
      {label || props.children}
    </p>
  )
}


const BreadcrumbsList = () => {

  const { pathname } = useLocation()

  const rootRoute = '/'
  const path = (pathname !== rootRoute) ? rootRoute : null
  
  const productId = pathname.split(rootRoute)[2]
  const { productInfo } = useProductInfo(productId)
  
  
  return (
    <div className="header-breadcrumbs__wrapper">
      <nav className='header-breadcrumbs__list' aria-label="breadcrumbs">
        
        <Breadcrumb path={path} icon={faHome} isActive={!productId} label="Home" />

        {
          productId &&            
          <Breadcrumb isActive={productId}>
            {productInfo.brand} {productInfo.model}
          </Breadcrumb>
        }

      </nav>
    </div>
  )
}



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

    <BreadcrumbsList />
  </>
)

export default Header