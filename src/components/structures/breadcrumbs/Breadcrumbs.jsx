import './Breadcrumbs.scss'
import { useLocation } from 'react-router-dom'
import { useProductInfo } from 'hooks/useProductInfo'
import BreadcrumbItem from './BreadcrumbItem'


const Breadcrumbs = () => {

  const { pathname } = useLocation()

  const rootRoute = '/'
  const path = (pathname !== rootRoute) ? rootRoute : null
  
  const productId = pathname.split(rootRoute)[2]
  const { productInfo } = useProductInfo(productId)
  
  
  return (
    <div className="header-breadcrumbs__wrapper">
      <nav className='header-breadcrumbs__list' aria-label="breadcrumbs">
        
        <BreadcrumbItem path={path} iconName="faHome" isActive={!productId} label="Home" />

        {
          productId &&            
          <BreadcrumbItem isActive={productId}>
            {productInfo.brand} {productInfo.model}
          </BreadcrumbItem>
        }

      </nav>
    </div>
  )
}

export default Breadcrumbs
