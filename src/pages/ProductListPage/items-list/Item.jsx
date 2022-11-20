import Image from 'components/image/Image'


const Item = ({ item }) => {

  const currency = '€'
  
  return (
    <li className="item">
      <Image source={item.imgUrl} altText={`${item.brand} - ${item.model}`}/>
      <div className="item-info">
        <h4 className='item-info-title'>{item.brand} {item.model}</h4>
        <span className='item-info-price'> {item.price}{currency}</span>
      </div>
      {/* { 
        item.colors && (
          <div className='item-color-options'>
            {item.colors.map((color) => (
              <ColorTag key={color} color={color} />
            ))}
          </div>
        )
      } */}
      
    </li>
  )
}

export default Item