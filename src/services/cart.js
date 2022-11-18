import { cartBaseUrl } from 'services/api-config'
import { apiCall } from 'lib/axios'

const add = (item) => apiCall.addNewItem(cartBaseUrl, item) 

export const cartService = { add }