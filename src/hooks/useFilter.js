import { useEffect, useReducer } from 'react'
import { browserStorage } from 'utils/localStorage'
import { actionTypes, initialState, filterReducer } from 'reducers/filterReducer'
import { useNavigate } from 'react-router-dom'


export const useFilter = (input) => {

  /*  Stores filters and filtering results */
  const [state, dispatch] = useReducer(filterReducer, initialState)

  /*  Local Storage Key for data persistence  */
  const LS_KEY = 'test-devices-stores__filteringData'


  /*  On loading results from API, update filters input */
  useEffect(() => {

    /*  Gets products list from LS, if stored and non-expired */
    const localStorageData = browserStorage.getData(LS_KEY)
    if (localStorageData)
      dispatch({ type: actionTypes.UPDATE_ALL_FILTERS, data: localStorageData, flag: 'NO_NAVIGATE' })

    dispatch({ type: actionTypes.UPDATE_INPUT, data: input })
    dispatch({ type: actionTypes.UPDATE_OUTPUT })
  }, [input])



  /*  Manages redirection to item PDP when filtering throws single result */
  const navigate = useNavigate()

  /*  Checks number of results in current filtering and navigates if single */
  useEffect(() => {
    if (state.output.length === 1)
      navigate(`/product/${state.output[0].id}`)
  }, [state.output, navigate])


  
  /*  Allows components to modify filters value */
  const updateFilter = ({ type, value }) => {
    const newFilters = { ...state.filters }
    newFilters[type] = value

    browserStorage.saveData(LS_KEY, newFilters)
    dispatch({ type: actionTypes.UPDATE_ALL_FILTERS, data: newFilters })
    
    /*  Debounces dynamic searching  */
    const delayHandler = setTimeout(() => dispatch({ type: actionTypes.UPDATE_OUTPUT }), 1000)
    return () => clearTimeout(delayHandler)
  }

  return { results: state.output, filters: state.filters, updateFilter }
}
