import './ItemsList.scss'

import Item from './item/Item'
import { Link } from 'react-router-dom'
import Gif from 'components/ui/gif/Gif'

const ItemsList = ({ products, loading }) => {
  
  if (loading)
    return <LoadingList />
  if (!products.length)
    return <EmptyList />
  
  
  return (
    <ul className="items-list">
      {products.map(item => (

        <Link  className="item__link" key={item.id} to={`product/${item.id}`}>
          <Item item={item} />
        </Link>

      ))}
    </ul>
  )
}


const LoadingList = () => (
  <div className='products-list__skeleton'>
    {/* // TODO: Skeleton for list */}
    <h2>Loading...</h2>
  </div>
)


const EmptyList = () => (
  <div className='products-list__empty'>
    <h2 className='products-list__empty-title'>No devices match your search.</h2>
    <Gif scrUrl='https://giphy.com/embed/2rtQMJvhzOnRe' classes='products-list__empty-gif' />
  </div>
)

export default ItemsList