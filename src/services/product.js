import { productsBaseUrl } from 'services/api-config'
import { apiCall } from 'lib/axios'

const getAll  = () => apiCall.getAllItems(productsBaseUrl)
const getById  = ({ id }) => apiCall.getSingleItem(productsBaseUrl, id)


export const productService = { getAll, getById }