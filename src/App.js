import 'assets/styles/App.scss'
import { useEffect } from 'react'
import { cartService } from 'services/cart'
import { productService } from 'services/product'

function App() {

  useEffect(() => {
    productService
      .getAll()
      .then((products) => console.log(products))
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
      <h1>Hello World!</h1>
    </div>
  )
}

export default App
