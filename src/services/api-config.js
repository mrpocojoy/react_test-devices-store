import { apiCall } from 'lib/axios'

const serverUrl = 'https://front-test-api.herokuapp.com'
const apiSlug = '/api'

const productsBaseUrl = serverUrl + apiSlug + '/product'
const cartBaseUrl = serverUrl + apiSlug + '/cart'

export { apiCall, productsBaseUrl, cartBaseUrl }