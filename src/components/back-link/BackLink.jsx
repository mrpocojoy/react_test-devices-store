import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

const BackLink = ({ label, icon, labelFirst=false }) => {

  const navigate = useNavigate()
  const navigateBack = (event) => {
    event.preventDefault()
    return navigate(-1)
  }

  const linkStyle = (labelFirst)
    ? { flexDirection: 'row-reverse', justifyContent: 'flex-end' }
    : {} 

  return (
    <a
      className="back-link"
      style={linkStyle}
      href="/no-address"
      onClick={(e) => navigateBack(e)}
    >
      {icon && <FontAwesomeIcon className="back-link__icon" icon={icon} />}
      
      <span className="back-link__label">
        {label}
      </span>

    </a>

  )
}

export default BackLink