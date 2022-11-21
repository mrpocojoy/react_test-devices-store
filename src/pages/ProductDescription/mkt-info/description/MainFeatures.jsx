import FakeAnchor from 'components/ui/anchor/FakeAnchor'
import { features, keyFeatures } from 'data/techFeatures'
import Feature from '../../Feature'


const MainFeatures = ({ item }) =>  (
  <div className="main-features__wrapper">
    
    <ul className="main-features__list">
      {
        keyFeatures.map((elem) => {

          const utils = features[elem]
          const data = item[elem]
          const units = utils.units ?? ''

          const description = Array.isArray(data)
            ? data.join(utils.splitter ?? ', ')
            : data
        
          return (

            <Feature
              key={elem}
              icon={utils.iconSrc}
              title={utils.label}
              info={description}
              units={units} />
            
          )
        })
      }
    </ul>

    <FakeAnchor classes='main-features__see-more-button' href='#tech-details'>
      More Technical Details
    </FakeAnchor>
    
  </div>
)

export default MainFeatures