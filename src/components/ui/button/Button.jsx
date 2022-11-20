const Button = ({ label, classes, action, isActive, ...props }) => {
  const activeClass = (isActive) ? 'active' : ''
  const buttonClasses = 'button'.concat(' ', classes, ' ', activeClass) 
  
  return (
    
    <button className={buttonClasses} onClick={action}>
      {props.children} {label}
    </button>
  
  )
}

export default Button