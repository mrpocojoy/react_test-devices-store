export const actionTypes = {
  API_CALL_STARTED: 'API_CALL_STARTED',
  API_CALL_SUCCESS: 'API_CALL_SUCCESS',
  API_CALL_FAILED: 'API_CALL_FAILED',
}

/*  Initial state for reducer  */
export const initialState = {
  data: [],
  isLoading: false,
  error: null
}


/*  Reducer aux functions  */
const unknownAction = (state, action) => {
  console.log('Unknown Action Type: ', action.type)
  return { ...state }
}
const apiCallStarted = (state, action) => {
  return { ...state, isLoading: true }
}
const apiCallSuccess = (state, action) => {
  return { ...state, isLoading: false, data: action.data }
}

const apiCallFailed = (state, action) => {
  return { ...state, isLoading: false, data: action.error }
}


/*  Reducer switch tree  */
export const apiCallReducer = (state, action) => {
  switch (action.type) {
  case actionTypes.API_CALL_STARTED: 
    return apiCallStarted(state, action)
  case actionTypes.API_CALL_SUCCESS: 
    return apiCallSuccess(state, action)
  case actionTypes.API_CALL_FAILED: 
    return apiCallFailed(state, action)
  default:
    return unknownAction(state, action)    
  }
}
