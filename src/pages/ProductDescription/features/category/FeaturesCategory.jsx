import './FeaturesCategory.scss'

import { obtainFeatureData } from 'utils/getFeaturesData.js'
import Feature from '../Feature'

const FeaturesCategory = ({ label, content, item }) => (
  <li className='tech-info-category__wrapper'>

    <h4 className='tech-info-category__title'>{label}</h4>
    <ul className='tech-info-category__content'>

      {content.map((elem) => {
        const { label, description, units } = obtainFeatureData({ feature: elem, item })
        return (

          <Feature key={elem} classes="tech-info" title={label} info={description} units={units} />

        )
      })}

    </ul>
  </li>
)

export default FeaturesCategory