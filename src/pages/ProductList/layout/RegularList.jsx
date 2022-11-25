import Item from '../item/Item'

const RegularList = ({ products }) => {
  return (
    <ul className="products-list__content">
      {products.map(item => (

        <Item key={item.id} item={item} />
        
      ))}
    </ul>
  )
}

export default RegularList