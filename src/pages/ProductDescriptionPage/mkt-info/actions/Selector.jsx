import Button from 'components/ui/Button'
import { removeClassNameFromGroup, toggleClassName } from 'utils/editClassName'


const Selector = ({ type, label, options, action }) => {
  
  if (!type || !options || !action)
    return console.error('Missing props')

  
  const typeSelectorClass = `${type}-selector`
  const isActive = options.length === 1

  const handleSelection = (event) => {
    event.preventDefault()    
    
    if (options.length > 1) {
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
              isActive={isActive}
              action={(event) => handleSelection(event)}     
            />

          </li>
        ))
        }
      </ul>
    </div>
  )
}

export default Selector