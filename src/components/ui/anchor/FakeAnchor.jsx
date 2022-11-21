const FakeAnchor = ({ classes, action, styles, href,...props }) => {
  
  const clickHandle = (event) => {
    if (!href)
      event.preventDefault()
    
    action && action()
  }

  return (
    <a
      href={href || '/no-ref'}
      style={styles}
      className={classes}
      onClick={clickHandle}
    >
      {props.children}
    </a>
  )
}

export default FakeAnchor