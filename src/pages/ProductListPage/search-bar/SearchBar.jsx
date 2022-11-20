import SearchIcon from './SearchIcon'
// import { useRef } from 'react'

const SearchBar = ({ placeholder }) => {

  // const filter = useRef()

  return (
    <div className='search-bar-wrapper'>
      <label className="search-bar">
        <SearchIcon />
        <input type="text" placeholder={placeholder}/>
      </label>
    </div>
  )
}

export default SearchBar