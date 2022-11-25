import { useState } from 'react'

export const useFilter = () => {
  const initFilter = {
    keywords: '',
  }
  const [filter, setFilter] = useState(initFilter)

  const resetFilter = () => {
    setFilter(initFilter)
  }

  const updateFilter = (action) => {
    const { type, payload } = action
    
    switch (type) {
    case 'keywords':
      setFilter({ ...filter, keywords: payload })
      filterByKeywords()
      break
    
    default:
      throw new Error ('unknown action')
    }
  }

  const filterByKeywords = (data) => {
    if (data)
      return data.filter(({ model, brand }) => {
        const str = [model, brand, model].join(' ')
        return str.match(new RegExp(filter.keywords, 'i'))
      })
  }
  
  return { filterByKeywords, updateFilter, resetFilter }
}
