import './ListView.scss'

import { useProductList } from 'hooks/useProductList'

import PageTitle from 'components/page-title/PageTitle'
import SearchBar from './search-bar/SearchBar'
import ItemsList from './items-list/ItemsList'


const ListView = () => {

  const { products } = useProductList()
  const filteredProducts = products

  return (
    <div className="products-list__wrapper">
      
      <PageTitle cp={'products-list'} label="Our Devices">
        <SearchBar placeholder="Search in PhoneHouse"/>
      </PageTitle>

      <ItemsList products={filteredProducts}/>
    </div>
  )
}

export default ListView