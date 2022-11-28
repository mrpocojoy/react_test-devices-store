import { useReducer, useEffect } from 'react'
import { browserStorage } from 'utils/localStorage'
import { cartService } from 'services/cart'

import { apiCallReducer, initialState, actionTypes } from 'reducers/apiCallReducer'


export const useCartList = () => {

  /*  Stores API request status */
  const [state, dispatch] = useReducer(apiCallReducer, initialState)

  /*  Local Storage Key for data persistence  */
  const LS_KEY = 'test-devices-stores__cart-content'


  /*  On Cart component render... */
  useEffect(() => {

    /*  Obtains cart content from LS, if stored and non-expired */
    const localStorageData = browserStorage.getData(LS_KEY)
  
    /*  Returns stored cart content when found, else empty */
    return dispatch({
      type: actionTypes.API_CALL_SUCCESS,
      data: (localStorageData) ? localStorageData : initialState.data
    })

  },[])
  

  const addCartItem = (item) => {

    const updatedContent = [...state.data, item]

    /*  Activate loading mode  */
    dispatch({ type: actionTypes.API_CALL_STARTED })

    /*  Update cart through API + Update LS  */
    cartService
      .add(item)
      .then(result => {
        browserStorage.saveData(LS_KEY, updatedContent)
        dispatch({ type: actionTypes.API_CALL_SUCCESS, data: updatedContent })
      })
      .catch(error => {
        dispatch({ type:actionTypes.API_CALL_FAILED, error })
        return console.error(error)
      })
  }


  /*  Return current state values to calling component  */
  return { cartContent: state.data, isLoading: state.isLoading, error: state.error, addCartItem }
}
