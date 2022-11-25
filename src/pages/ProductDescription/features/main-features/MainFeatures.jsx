import './MainFeatures.scss'

import { keyFeatures } from 'data/techFeatures'
import { obtainFeatureData } from 'utils/getFeaturesData.js'

import Feature from '../Feature'
import Icon from 'components/ui/icon/Icon'
import ScrollLink from 'components/ui/scroll-link/ScrollLink'

const MainFeatures = ({ item }) => {

  if (!item)
    return <></>

  return (
    <div className="main-features__wrapper">

      <ul className="main-features__list">
        {keyFeatures.map((elem) => {
          const { label, icon, units, description } = obtainFeatureData({ feature: elem, item })

          return (

            <Feature
              key={elem}
              icon={icon}
              title={label}
              info={description}
              units={units} 
            />

          )
        })}
      </ul>

      <ScrollLink to='tech-details' offset={120} classes=''>
        <Icon iconName="faArrowAltCircleDown" classes=' main-features__see-more-icon' />
        More Technical Details
      </ScrollLink>
    </div>
  )
}




export default MainFeatures