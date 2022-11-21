import { Link } from 'react-router-dom'
import Image from 'components/ui/image/Image'

const currency = '€'

const Item = ({ item }) => {
  
  return (
    <li className="item__wrapper">
      <Link  className="item__link" to={`product/${item.id}`}>
          
        <Image
          classes="item__photo"
          source={item.imgUrl}
          altText={`${item.brand} - ${item.model}`} 
        />
      
        <div className="item__info">
          <h4 className='item__info-title'>{item.brand} {item.model}</h4>
          {
            item.price
              ? <p className='item__info-price'> {item.price}{currency}</p>
              : <p className='item__info-price no-price'>Not available</p>
          }
        </div>
      
      </Link>
    </li>
  )
}

export default Item