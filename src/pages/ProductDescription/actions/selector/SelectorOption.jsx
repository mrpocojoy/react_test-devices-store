import { toggleUniqueClassName } from 'utils/editClassName'

import Button from 'components/ui/button/Button'
import ColorTag  from './ColorTag'



const SelectorOption = ({ option, typeClass, props }) => {

  const { type, options, action } = props
  const activeDefaultClass = (options.length === 1) ? ' active' : ''

  const handleSelection = (event, option) => {
    event.preventDefault()
    
    if (options.length > 1)
      toggleUniqueClassName(event.target, typeClass, 'active')
    
    action({ type, option })
  }
  

  return (
    <li className={`selector__list-item ${typeClass}`}>
            
      <Button
        label={option.name}
        classes={`selector__button ${typeClass} ${activeDefaultClass}`}
        action={(event) => handleSelection(event, option)}     
      >        
        {
          (type === 'color') &&
          <ColorTag key={option.code} color={option.name} />
        }
      </Button>

    </li>
  )
}

export default SelectorOption