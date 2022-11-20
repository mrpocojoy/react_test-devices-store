import MainFeatures from './MainFeatures'


const Description = ({ item }) => {

  return (
    <div className="product-description__wrapper">
      <h1 className="product-description__title">{item.brand} {item.model}</h1>
      <h2 className="product-description__price">{item.price}€</h2>

      <MainFeatures item={item} />
    </div>
  )
}

export default Description