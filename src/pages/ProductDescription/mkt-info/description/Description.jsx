import MainFeatures from './MainFeatures'


const currency = '€'
const Description = ({ item }) => {

  return (
    <div className="product-description__wrapper">
      
      <h1 className="product-description__title">{item.brand} {item.model}</h1>
      
      {
        item.price &&
        <h2 className="product-description__price">{item.price}{currency}</h2>
      }

      <MainFeatures item={item} />
    </div>
  )
}

export default Description