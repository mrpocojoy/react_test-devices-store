import { cartBaseUrl } from 'services/api-config'
import { apiCall } from 'lib/axios'


// import axios from 'axios'
// const add = (items) => {
//   return axios
//     .post(cartBaseUrl, items)
//     .then(response => response.data)
// }

const add = (item) => apiCall.addNewItem(cartBaseUrl, item) 

export const cartService = { add }