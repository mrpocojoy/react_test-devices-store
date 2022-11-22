import './ListView.scss'

import { useState } from 'react'
import { useProductList } from 'hooks/products-list/useProductList'

import PageTitle from 'components/structures/page-title/PageTitle'
import SearchBar from '../../components/ui/search-bar/SearchBar'
import ItemsList from './ItemsList'


const ListView = () => {

  const { isLoading, products } = useProductList()
  
  const initFilter = {
    keywords: '',
  }
  const [filter, setFilter] = useState(initFilter)
  
  const handleKeywordsSearch = (event) => {
    setFilter({ ...filter, keywords: event.target.value })
  }
  
  const filteredProducts = products.filter(({ model, brand }) => {
    const str = model + ' ' + brand + ' ' + model
    return str.match(new RegExp(filter.keywords, 'i'))})

  
  return (
    <div className="products-list__wrapper">
      
      <PageTitle classes={'products-list'} label="Our Devices">
        <SearchBar placeholder="Search in PhoneHouse" actions={handleKeywordsSearch}/>
      </PageTitle>

      <ItemsList products={filteredProducts} loading={isLoading} />
    </div>
  )
}

export default ListView