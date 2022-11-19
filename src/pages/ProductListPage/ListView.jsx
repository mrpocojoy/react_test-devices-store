import './ListView.scss'

import ItemsList from './items-list/ItemsList'
import Search from './search-bar/Search'

const PageHeader = ({ cp, label, ...props }) => {
  const localCP = cp + '__header'

  return (
    <div className={localCP}>
      <h1 className={localCP + '-title'}>{label}</h1>
      {props.children}
    </div>
  )
}



const ListView = () => {

  
  return (
    <div className="products-list__wrapper">
      
      <PageHeader cp={'products-list'} label="Our Devices">
        <Search />
      </PageHeader>

      <ItemsList />
    </div>
  )
}

export default ListView