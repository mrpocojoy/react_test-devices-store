import Image from 'components/ui/image/Image'
import Description from './description/Description'
import Actions from './actions/Actions'

const MarketingInfo = ({ item }) => (
  <div className="product-details__marketing-info-wrapper">
    <div className="product-details__image-column">
      
      <Image
        source={item.imgUrl}
        altText={`${item.brand} ${item.model}`} 
      />
      
    </div>

    <div className="product-details__info-column">
      
      <Description item={item} />
      
      <Actions
        id={item.id}
        colors={item.colors}
        memory={item.internalMemory} 
        status={item.status}
      />

    </div>
  </div>
)

export default MarketingInfo