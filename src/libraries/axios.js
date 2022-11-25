import axios from 'axios'

const getAllItems = (url) => {
  return axios
    .get(url)
    .then(response => response.data)
}

const getSingleItem = (url, id) => {
  return axios
    .get(`${url}/${id}`)
    .then(response => response.data)
}

const addNewItem = (url, item) => {
  return axios
    .post(url, item)
    .then(response => response.data)
}

export const apiCall = { getAllItems, getSingleItem, addNewItem }