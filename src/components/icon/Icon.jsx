import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ icon, classes }) => {
  return <FontAwesomeIcon className={classes} icon={icon} />
}

export default Icon