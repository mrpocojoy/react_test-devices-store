import './TechInfo.scss'

import { featureCategories } from 'data/techFeatures'
import Image from 'components/ui/image/Image'
import FeaturesCategory from '../../features/category/FeaturesCategory'

const TechInfo = ({ item }) => (
  <div className="product-details__tech-info-wrapper">
    <div className="product-details__tech-info-inner">

      <h3 id="tech-details" className="product-details__tech-info-title">
        {item.brand} {item.model} Features
      </h3>
    
      <div className="product-details__tech-info-content">  
        <ul>
          {featureCategories.map(({ label, content }) => (

            <FeaturesCategory
              key={label}
              label={label}
              content={content}
              item={item} />

          ))}

        </ul>

        <div className="product-details__tech-info-image-wrapper">
          <Image
            source={item.imgUrl}
            classes="product-details__tech-info-photo"
            altText={`${item.brand} ${item.model}`} 
          />
        </div>
      </div>

    </div>
  </div>
)

export default TechInfo