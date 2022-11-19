import Image from 'components/Image'

const ColorTag = ({ color }) => {
  return (
    <div className="item-color-tag" style={{ backgroundColor: color }}></div>
  )
}

const Item = () => {
  const item = {
    brand: 'Acer',
    model: 'Iconia Tab 10 alkfsñlf ksdñlkflkl aposfsfkm A3asldsk -A40',
    imgUrl: 'https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg',
    price: '119',
    colors: ['red', 'blue', 'green']
  }
  const currency = '€'
  
  return (
    <li className="item">
      <Image source={item.imgUrl} altText={`${item.brand} - ${item.model}`}/>
      <div className="item-info">
        <h4 className='item-info-title'>{item.brand} {item.model}</h4>
        <span className='item-info-price'> {item.price}{currency}</span>
      </div>
      { 
        item.colors && (
          <div className='item-color-options'>
            {item.colors.map((color) => (
              <ColorTag key={color} color={color} />
            ))}
          </div>
        )
      }
      
    </li>
  )
}

export default Item