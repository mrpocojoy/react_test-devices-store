import { features } from 'data/techFeatures'
import Feature from '../Feature'

const FeaturesCategory = ({ label, content, item }) => (
  <li className='tech-info-category__wrapper'>
    <h5 className='tech-info-category__title'>{label}</h5>
    <ul className='tech-info-category__content'>

      {content.map((elem) => {
        const utils = features[elem]
        const data = item[elem]

        const description = Array.isArray(data)
          ? data.join(utils.splitter ?? ', ')
          : data

        const info = utils.label + ':  ' + description
        const units = utils.units ?? ''

        return (
          
          <Feature key={elem} info={info} units={units} />

        )
      })}

    </ul>
  </li>
)

export default FeaturesCategory