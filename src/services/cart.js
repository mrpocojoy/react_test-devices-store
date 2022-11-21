import { apiCall, cartBaseUrl } from 'services/api-config'

const add = (item) => apiCall.addNewItem(cartBaseUrl, item) 

export const cartService = { add }