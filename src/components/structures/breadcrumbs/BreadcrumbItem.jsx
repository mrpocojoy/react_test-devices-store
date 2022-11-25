import Icon from 'components/ui/icon/Icon'
import { NavLink } from 'react-router-dom'


const BreadcrumbItem = ({ path, isActive, iconName, label, ...props }) => {
  const classes = `header-breadcrumbs__item ${isActive && 'active'}`
  
  if (path)
    return (
      <NavLink to={path} className={classes}>
        {iconName && <Icon classes={'header-breadcrumbs__item-icon'} iconName={iconName} />}
        {label || props.children}
      </NavLink>
    )
  
  return (
    <p className={classes}>
      {iconName && <Icon classes={'header-breadcrumbs__item-icon'} iconName={iconName} />}
      {label || props.children}
    </p>
  )
}

export default BreadcrumbItem