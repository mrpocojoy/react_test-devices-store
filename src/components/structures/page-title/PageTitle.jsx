import './PageTitle.scss'

const PageTitle = ({ label, ...props }) => {

  return (
    <div className='page-title__wrapper'>
      <h1 className='page-title__title'>{label}</h1>
      {props.children}
    </div>
  )
}

export default PageTitle