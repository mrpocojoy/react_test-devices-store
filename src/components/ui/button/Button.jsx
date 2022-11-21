import './Button.scss'

const Button = ({ label, classes, action, ...props }) => (

  <button className={`button ${classes}`} onClick={action}>
    {props.children} {label}
  </button>

)

export default Button