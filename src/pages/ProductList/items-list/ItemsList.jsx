import './ItemsList.scss'

import { displaySpinner } from 'utils/customAlerts'
import Item from './item/Item'
import Gif from 'components/ui/gif/Gif'

const ItemsList = ({ products, loading }) => {
  
  if (loading)
    return displaySpinner()

  if (!products.length)
    return <EmptyList />
  
  
  return (
    <ul className="items-list">
      {products.map(item => (

        <Item key={item.id} item={item} />
        

      ))}
    </ul>
  )
}

const EmptyList = () => (
  <div className='products-list__empty'>
    <h2 className='products-list__empty-title'>No devices match your search.</h2>
    <Gif scrUrl='https://giphy.com/embed/2rtQMJvhzOnRe' classes='products-list__empty-gif' />
  </div>
)

export default ItemsList