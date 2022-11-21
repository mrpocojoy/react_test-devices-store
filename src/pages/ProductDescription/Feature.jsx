const Feature = ({ Icon, title, info, units }) => (

  <li className="feature__wrapper">
    
    {Icon && <Icon />}

    <div className="feature__info-wrapper">
      {title && <h3 className="feature__title">{title}</h3>}
      <p className="feature__description">{info} {units}</p>
    </div>

  </li>
  
)

export default Feature