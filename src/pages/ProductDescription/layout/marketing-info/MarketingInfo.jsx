import './MarketingInfo.scss'
import Image from 'components/ui/image/Image'
import Description from '../../description/Description'
import Actions from '../../actions/Actions'

const MarketingInfo = ({ item }) => {

  const isAvailable = item.price ? true : false

  return (
    <div className="product-details__marketing-info-wrapper">
      <div className="product-details__marketing-info-content">

        <div className="product-details__image-column">

          <Image
            source={item.imgUrl}
            altText={`${item.brand} ${item.model}`} 
          />

        </div>

        <div className="product-details__info-column">

          <Description item={item} />

          {
            isAvailable
            
              ? <Actions
                id={item.id}
                options={item.options}
                status={item.status}
              />

              : <p className='product-details__not-available'>
                Product not available for sale
              </p>
          }

        </div>
      </div>
    </div>
  )
}

export default MarketingInfo