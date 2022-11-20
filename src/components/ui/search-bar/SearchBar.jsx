import './SearchBar.scss'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Icon from 'components/ui/icon/Icon'

const SearchBar = ({ placeholder, actions }) => (
  <div className='search-bar__wrapper'>
    <label className="search-bar__label">
      
      <Icon classes="search-bar__icon" icon={faMagnifyingGlass} />

      <input
        type="text"
        placeholder={placeholder}
        onChange={actions} 
        className="search-bar__input"
      />

    </label>
  </div>
)

export default SearchBar