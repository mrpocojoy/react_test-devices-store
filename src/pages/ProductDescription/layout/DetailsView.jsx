import './DetailsView.scss'

import { useParams } from 'react-router-dom'
import { useProductInfo } from 'hooks/useProductInfo'

import BackLink from 'components/ui/back-link/BackLink'
import MarketingInfo from './marketing-info/MarketingInfo'
import TechInfo from './tech-info/TechInfo'
import Loader from 'components/ui/loader/Loader'


const DetailsView = () => {

  /*  Obtains product id from route  */
  const { productId } = useParams()
  
  /*  Obtains product information from LS or API  */
  const { isLoading, productInfo } = useProductInfo(productId)


  /*  Case: Waiting for API products response  */
  if (isLoading || !productInfo)
    return <Loader />  

  /*  Else, display product information  */
  return (
    <div className="product-details__wrapper">

      <div className="product-details__back-link-wrapper">
        <BackLink label="Back to List" classes='' icon="faArrowLeft" destination='/' />
      </div>
      
      <div className="product-details__content">
        <MarketingInfo item={productInfo} />
        <TechInfo item={productInfo} />
      </div>

    </div>
  )
}

export default DetailsView