import 'assets/styles/App.scss'

import { useEffect } from 'react'
import { cartService } from 'services/cart'
import { productService } from 'services/product'

import DetailsView from 'pages/ProductDescriptionPage/DetailsView'
import ListView from 'pages/ProductListPage/ListView'
import Header from 'components/header/Header'

import testItem from 'data/testItem'          // Just for testing purposes, TODO: REMOVE


function App() {

  useEffect(() => {
    productService
      .getAll()
      .then(products => console.log(products))
      .catch(error => console.error(error))
    
    productService
      .getById({ id: 'ZmGrkLRPXOTpxsU4jjAcv' })
      .then(product => console.log(product))
      .catch(error => console.error(error))
    
    cartService
      .add({
        id: 'ZmGrkLRPXOTpxsU4jjAcv',
        colorCode: 1,
        storageCode: 3
      })
      .then(cartSize => console.log(cartSize))
      .catch(error => console.error(error))
  }, [])
  
  console.log(new Date().getTime())

  return (
    <div className="app">
      <Header />
      <ListView />
      <DetailsView item={testItem} />
      Footer
    </div>
  )
}

export default App
