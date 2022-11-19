import SearchIcon from './SearchIcon'
// import { useRef } from 'react'

const Search = () => {

  // const filter = useRef()

  return (
    <div className='search-bar-wrapper'>
      <label className="search-bar">
        <SearchIcon />
        <input type="text" placeholder='Search in PhoneHouse'/>
      </label>
    </div>
  )
}

export default Search