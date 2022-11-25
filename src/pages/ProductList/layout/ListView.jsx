import './ListView.scss'

import { useNavigate } from 'react-router-dom'
import { useFilter } from 'hooks/useFilter'
import { useProductList } from 'hooks/useProductList'

import PageTitle from 'components/structures/page-title/PageTitle'
import SearchBar from '../search-bar/SearchBar'
import EmptyList from './EmptyList'
import RegularList from './RegularList'
import Loader from 'components/ui/loader/Loader'


const ListView = () => {
  
  const navigate = useNavigate()


  /*  Obtains whole list of products from LS or API  */
  const { isLoading, productsList } = useProductList()
  
  /*  Obtains keywords realtime from search bar input  */
  const { filterByKeywords, updateFilter } = useFilter()
  
  /*  Gets matches of keywords from original products list  */
  const filteredProducts = filterByKeywords(productsList)
  
  /*  Updates displayed devices based on SearchBar input data  */
  const updateKeywordsFilter = (keywords) => {
    updateFilter({ type: 'keywords', payload: keywords })
  }
  
  
  /*  Case: Waiting for API products response  */
  if (isLoading || !filteredProducts)
    return <Loader />
  
  /*  Case: Filtering returns single result -> Navigates to details view  */
  if (filteredProducts.length === 1)
    navigate(`/product/${filteredProducts[0].id}`)
  
  /*  Else, display filtered products in a list or "no results" message  */
  return (
    <div className="products-list__wrapper">
      <PageTitle classes="products-list__title" label="Our Devices">
        <SearchBar placeholder="Search in PhoneHouse" action={updateKeywordsFilter}/>
      </PageTitle>

      {
        (filteredProducts.length)
          ? <RegularList products={filteredProducts} />
          : <EmptyList />
      }
    </div>
  )
}

export default ListView