import './Feature.scss'
import Icon from 'components/ui/icon/Icon'

const Feature = ({ icon, title, info, units, classes }) => (
  <li className={`feature__wrapper ${classes}`}>
    
    <Icon prefix={icon?.prefix} iconName={icon?.iconName} classes={`feature__icon ${classes}`}/>

    <div className={`feature__info-wrapper ${classes}`}>
      {title && <h3 className={`feature__title ${classes}`}>{title}</h3>}
      <p className={`feature__description ${classes}`}>{info} {units}</p>
    </div>

  </li>
)

export default Feature