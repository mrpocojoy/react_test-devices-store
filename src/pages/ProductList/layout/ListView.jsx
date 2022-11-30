import './ListView.scss'

import { useProductList } from 'hooks/useProductList'
import { useFilter } from 'hooks/useFilter'

import Loader from 'components/ui/loader/Loader'
import PageTitle from 'components/structures/page-title/PageTitle'
import SearchBar from '../search-bar/SearchBar'
import EmptyList from './EmptyList'
import RegularList from './RegularList'


const ListView = () => {

  /*  Obtains whole list of products from LS or API  */
  const { isLoading, productsList } = useProductList()
  
  /*  Updates displayed devices based on applied filters  */
  const { results, filters, updateFilter } = useFilter(productsList)
  

  /*  Case: Waiting for API products response  */
  if (isLoading || !results)
    return <Loader />
  
  /*  Else, display filtered products in a list or "no results" message  */
  return (
    <div className="products-list__wrapper">
      <PageTitle classes="products-list__title" label="Our Devices">
        <SearchBar placeholder="Search in PhoneHouse" value={filters} action={updateFilter}/>
      </PageTitle>

      {
        (results.length)
          ? <RegularList products={results} />
          : <EmptyList />
      }
    </div>
  )
}

export default ListView