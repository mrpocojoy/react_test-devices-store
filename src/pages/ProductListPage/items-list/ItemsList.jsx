import { Link } from 'react-router-dom'
import Item from './Item'

const ItemsList = ({ products }) => {
  
  if (!products.length)
    return <h1>Loading</h1>

  const displayedProducts = products.map(elem => {
    const link = 'product/' + elem.id                // TODO: use user friendly url
    return { ...elem, link }
  })

  return (

    <ul className="items-list">
      {displayedProducts.map(item => (

        <Link key={item.id} to={item.link}>
          <Item item={item} />
        </Link>

      ))}
    </ul>

  )
}

export default ItemsList