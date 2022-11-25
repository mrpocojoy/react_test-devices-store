import './BackLink.scss'

import { useNavigate } from 'react-router-dom'

import CustomAnchor from '../custom-anchor/CustomAnchor'
import Icon from '../icon/Icon'

const BackLink = ({ label, icon, classes='', labelFirst=false }) => {

  const navigate = useNavigate()
  const linkStyle = (labelFirst)
    ? { flexDirection: 'row-reverse', justifyContent: 'flex-end' }
    : {} 
  
  return (
    <CustomAnchor
      classes="back-link"
      styles={linkStyle}
      action={() => navigate(-1)}    
    >
      {
        icon &&
        <Icon className={`${classes} back-link__icon`} iconName={icon} />
      }
      
      <span className={`${classes} back-link__label`}>
        {label}
      </span>
    </CustomAnchor>

  )
}

export default BackLink