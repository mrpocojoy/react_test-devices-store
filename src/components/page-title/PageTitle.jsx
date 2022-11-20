const PageTitle = ({ cp, label, ...props }) => {
  const localCP = cp + '__header'

  return (
    <div className={localCP}>
      <h1 className={localCP + '-title'}>{label}</h1>
      {props.children}
    </div>
  )
}

export default PageTitle