import { useEffect, useReducer } from 'react'
import { productService } from 'services/product'
import { browserStorage } from 'utils/localStorage'

import { apiCallReducer, initialState, actionTypes } from 'reducers/apiCallReducer'


export const useProductList = () => {
  
  /*  Stores API request status */
  const [state, dispatch] = useReducer(apiCallReducer, initialState)

  /*  Local Storage Key for data persistence  */
  const LS_KEY = 'test-devices-stores__product-list'


  useEffect(() => {

    //  SEARCHING FOR PRODUCTS LIST @ LOCAL STORAGE
    /*  Gets products list from LS, if stored and non-expired */
    const localStorageData = browserStorage.getData(LS_KEY)
    if (localStorageData)
      return dispatch({ type: actionTypes.API_CALL_SUCCESS, data: localStorageData })

    
    //  NOT FOUND LOCALLY, REQUESTING TO API
    /*  Activate loading mode  */
    dispatch({ type: actionTypes.API_CALL_STARTED })
          
    /*  Else, requests products list to API  */
    productService
      .getAll()
      .then(result => {
        browserStorage.saveData(LS_KEY, result)
        dispatch({ type: actionTypes.API_CALL_SUCCESS, data: result })
        return //console.log(result)
      })
      .catch(error => {
        dispatch({ type:actionTypes.API_CALL_FAILED, error })
        return console.error(error)
      })
    
  },[])
  

  /*  Return current state values to calling component  */
  return { productsList: state.data, isLoading: state.isLoading, error: state.error }
}