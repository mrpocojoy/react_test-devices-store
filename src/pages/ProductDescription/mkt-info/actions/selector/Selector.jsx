import SelectorOption from './SelectorOption'


const Selector = ({ type, options, action }) => {
  
  const typeClass = `${type}-selector`
  const parentProps = { type, options, action }


  return (
    <div className={`selector__wrapper ${typeClass}`}>
            
      <ul className={`selector__list ${typeClass}`}>
        {options.map((option) => (

          <SelectorOption
            key={option.code}
            option={option}
            props={parentProps}
            typeClass={typeClass} 
          />

        ))
        }
      </ul>
    </div>
  )
}

export default Selector