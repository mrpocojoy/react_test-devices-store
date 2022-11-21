import { apiCall, productsBaseUrl } from 'services/api-config'

const getAll  = () => apiCall.getAllItems(productsBaseUrl)
const getById = ({ id }) => {
  return apiCall.getSingleItem(productsBaseUrl, id)
}


export const productService = { getAll, getById }