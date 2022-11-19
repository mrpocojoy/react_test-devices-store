import './DetailsView.scss'

import MarketingInfo from './mkt-info/MarketingInfo'
import TechInfo from './tech-info/TechInfo'


const DetailsView = ({ item }) => (
  <div className="product-details">
    
    <button>Navigate Back!!</button>

    <div className="product-details__wrapper">
      <MarketingInfo item={item} />
      <TechInfo item={item} />
    </div>
    
  </div>
)

export default DetailsView