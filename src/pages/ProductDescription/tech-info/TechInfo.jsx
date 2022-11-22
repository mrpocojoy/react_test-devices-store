import './TechInfo.scss'

import { featureCategories } from 'data/techFeatures'
import FeaturesCategory from './FeaturesCategory'

const TechInfo = ({ item }) => (
  <div className="product-details__tech-info-wrapper">
    <h3 id="tech-details">{item.brand} {item.model} Features</h3>
    <ul>
      {featureCategories.map(({ label, content }) => (

        <FeaturesCategory
          key={label}
          label={label}
          content={content}
          item={item} />

      ))}

    </ul>
  </div>
)

export default TechInfo