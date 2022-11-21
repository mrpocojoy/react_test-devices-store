import './BackLink.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import FakeAnchor from '../anchor/FakeAnchor'

const BackLink = ({ label, icon, labelFirst=false }) => {

  const navigate = useNavigate()
  const linkStyle = (labelFirst)
    ? { flexDirection: 'row-reverse', justifyContent: 'flex-end' }
    : {} 
  
  return (
    <FakeAnchor
      classes="back-link"
      styles={linkStyle}
      action={() => navigate(-1)}    
    >
      {icon && <FontAwesomeIcon className="back-link__icon" icon={icon} />}
      
      <span className="back-link__label">
        {label}
      </span>
    </FakeAnchor>

  )
}

export default BackLink