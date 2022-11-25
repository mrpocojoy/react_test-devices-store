import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getIconFromName, getIconFromObject } from 'libraries/fontAwesome'


const Icon = ({ prefix, iconName, classes }) => {

  if (!iconName)
    return ''
  
  const icon = (prefix)
    ? getIconFromObject({ prefix, iconName })
    : getIconFromName(iconName)
  
  return (
    <>
      {
        icon &&
        <FontAwesomeIcon className={`custom-icon ${classes}`} icon={icon} />
      }
    </>
  )
}

export default Icon