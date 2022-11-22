import './PageTitle.scss'

const PageTitle = ({ label, classes, ...props }) => {

  return (
    <div className={`${classes} page-title__wrapper`}>
      <h1 className={`${classes} page-title__title`}>{label}</h1>
      {props.children}
    </div>
  )
}

export default PageTitle