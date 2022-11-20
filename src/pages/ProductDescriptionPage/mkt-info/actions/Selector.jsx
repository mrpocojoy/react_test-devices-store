import { removeClassNameFromGroup, toggleClassName } from 'utils/editClassName'

import Button from 'components/button/Button'
import ColorTag  from './ColorTag'


const Selector = ({ type, label, options, action }) => {
  
  if (!type || !options || !action)     // Case: Loading... or missing props
    return ''

  
  const typeSelectorClass = `${type}-selector`
  const isSingleOption = options.length === 1

  const handleSelection = (event) => {
    event.preventDefault()    
    
    if (!isSingleOption) {
      const activeClass = 'active'
      removeClassNameFromGroup(typeSelectorClass, activeClass)
      toggleClassName(event.target, activeClass)
    }
    
    action(event, type)
  }


  return (
    <div className={`selector__wrapper ${typeSelectorClass}`}>
      
      {
        label &&
        <span className={`selector__label ${typeSelectorClass}`}>{label}</span>
      }
      
      <ul className={`selector__list ${typeSelectorClass}`}>
        {options.map((option) => (

          <li key={option} className={`selector__list-item ${typeSelectorClass}`}>
            
            <Button
              label={option}
              classes={`selector__button ${typeSelectorClass}`}
              isActive={isSingleOption}
              action={(event) => handleSelection(event)}     
            >
              {
                (type === 'color') &&
                <ColorTag key={option} color={option} />}
              
            </Button>

          </li>
        ))
        }
      </ul>
    </div>
  )
}

export default Selector