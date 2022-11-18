import { productsBaseUrl } from 'services/api-config'
import { apiCall } from 'lib/axios'

// import axios from 'axios'

// const getAll = () => {
//   return axios
//     .get(productsBaseUrl)
//     .then(response => response.data)
// }

// const getById = ({ id }) => {
//   return axios
//     .get(`${productsBaseUrl}/${id}`)
//     .then(response => response.data)
// }

const getAll  = () => apiCall.getAllItems(productsBaseUrl)
const getById  = ({ id }) => apiCall.getSingleItem(productsBaseUrl, id)


export const productService = { getAll, getById }