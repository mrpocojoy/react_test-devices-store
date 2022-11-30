export const actionTypes = {
  UPDATE_INPUT: 'UPDATE_INPUT',
  UPDATE_OUTPUT: 'UPDATE_OUTPUT',
  UPDATE_FILTER: 'UPDATE_FILTER',
  UPDATE_ALL_FILTERS: 'UPDATE_ALL_FILTERS'
}

export const filterTypes = {
  KEYWORDS: 'KEYWORDS',
}

const blankFilters = {
  KEYWORDS: '',
}

/*  Initial state for reducer  */
export const initialState = {
  input: [],
  output: [],
  filters: {
    ...blankFilters
  }
}



/*  Reducer aux functions  */
const unknownAction = (state, action) => {
  console.log('Unknown Action Type: ', action.type)
  return { ...state }
}

const updateAllFilters = (state, action) => {
  return { ...state, filters: action.data }
}

const updateOutput = (state, action) => { 
  const filteredByAll = Array.from(Object.keys(state.filters)).reduce((acc, filterType) =>
    applyFilter(acc, { type: filterType, value: state.filters[filterType] }), state.input)
  
  return { ...state, output: filteredByAll }
}

const updateInput = (state, action) => {
  return { ...state, input: action.data, output: action.data }
}



/*  Reducer switch tree  */
export const filterReducer = (state, action) => {
  switch (action.type) {

  case actionTypes.UPDATE_ALL_FILTERS:
    return updateAllFilters(state, action)
    
  case actionTypes.UPDATE_OUTPUT:
    return updateOutput(state, action)
    
  case actionTypes.UPDATE_INPUT:
    return updateInput(state, action)
    
  default:
    return unknownAction(state, action)
    
  }
}


/*********************************************************/


/*  Filtering aux functions  */
const unknownFilter = (data, filter) => {
  console.log('Unknown filter type', filter)
  return { ...data }
}

const filterByKeywords = (data, filter) => {
  return data.filter(({ model, brand }) => {
    // filters by "model AND/OR brand"
    const str = [model, brand, model].join(' ')
    return str.match(new RegExp(filter.value, 'i'))
  })
}

const applyFilter = (data, filter) => {  
  if(filter.value === blankFilters[filter.type])
    return data
  
  switch (filter.type) {
  
  case filterTypes.KEYWORDS:
    return filterByKeywords(data, filter)
      
  default: 
    return unknownFilter(data, filter)
  }    
}






