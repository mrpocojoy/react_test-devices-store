import './DetailsView.scss'

import { useParams } from 'react-router-dom'
import { useProductInfo } from 'hooks/products-description/useProductInfo'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import BackLink from 'components/ui/back-link/BackLink'
import MarketingInfo from './mkt-info/MarketingInfo'
import TechInfo from './tech-info/TechInfo'



const DetailsView = () => {

  const { productId } = useParams()
  const { isLoading, productInfo } = useProductInfo(productId)


  if (isLoading)
    return <h1>Loading</h1>
  
  return (
    <div className="product-details">

      <div className="product-details__back-link">
        <BackLink label="Products" icon={faArrowLeft} />
      </div>
      
      <div className="product-details__wrapper">
        <MarketingInfo item={productInfo} />
        <TechInfo item={productInfo} />
      </div>

    </div>
  )
}

export default DetailsView