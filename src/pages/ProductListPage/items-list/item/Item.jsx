import './Item.scss'
import Image from 'components/ui/image/Image'

const currency = '€'

const Item = ({ item }) => {
  
  return (
    <li className="item__wrapper">
      
      <Image
        classes="item__photo"
        source={item.imgUrl}
        altText={`${item.brand} - ${item.model}`} 
      />
      
      <div className="item__info">
        <h4 className='item__info-title'>{item.brand} {item.model}</h4>
        <span className='item__info-price'> {item.price}{currency}</span>
      </div>
      
    </li>
  )
}

export default Item