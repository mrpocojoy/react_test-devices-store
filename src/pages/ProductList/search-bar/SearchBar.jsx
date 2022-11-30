import './SearchBar.scss'

import { toggleVisibility, toggleTextContent } from 'utils/updateDOM'
import { useRef } from 'react'

import Icon from 'components/ui/icon/Icon'
import FakeAnchor from 'components/ui/custom-anchor/CustomAnchor'
import Button from 'components/ui/button/Button'


const SearchBar = ({ placeholder, value, action }) => {

  /*  Tracks input value   */
  const inputRef = useRef('')

  /*  Calls fn to update displayed results based on provided input value   */
  const handleSearch = () => action({
    type: 'KEYWORDS', value: inputRef.current.value
  })
  

  /*  Clears input content and calls fn to reset displayed results   */
  const clearSearch = () => {
    inputRef.current.value = ''
    handleSearch()
    inputRef.current.focus()
  }

  /*  Toggles SearchBar wrapper div upon label click   */
  const toggleSearchBar = () => {
    toggleTextContent('.search-bar__mobile-toggle > a', 'Filter Devices', 'Hide Filter')
    clearSearch()
    const { isVisible } = toggleVisibility('.search-bar__wrapper')
    
    if (isVisible) 
      inputRef.current.focus()
  }


  return (
    <>
      <div className='search-bar__mobile-toggle'>
        <FakeAnchor action={toggleSearchBar} classes="mobile-only">
          Filter Devices
        </FakeAnchor>
      </div>

      <div className='search-bar__wrapper'>
        <label className="search-bar__label">

          <Icon classes="search-bar__icon" iconName="faMagnifyingGlass" />

          <input
            type="text"
            placeholder={placeholder}
            onChange={handleSearch}
            className="search-bar__input" 
            ref={inputRef}
            value={value.KEYWORDS}
          />

          <Button
            classes="search-bar__clear-link"
            action={clearSearch}    
          >
            <Icon className="search-bar__clear-icon" iconName="faXmark" />
          </Button>

        </label>
      </div>
    </>
  )
}

export default SearchBar