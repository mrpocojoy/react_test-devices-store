import 'assets/styles/App.scss'
import { useEffect } from 'react'
import { cartService } from 'services/cart'
import { productService } from 'services/product'

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
        'id': 'ZmGrkLRPXOTpxsU4jjAcv',
        'colorCode': 1,
        'storageCode': 2
      })
      .then(cartSize => console.log(cartSize))
      .catch(error => console.error(error))
  }, [])
  

  return (
    <div className="App">
    </div>
  )
}

export default App
