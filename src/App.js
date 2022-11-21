import 'assets/styles/App.scss'

import { Route, Routes } from 'react-router-dom'
import { useCartList } from 'hooks/cart/useCartList'
import { CartContext } from 'context/CartContext'

import Header from 'components/structures/header/Header'
import DetailsView from 'pages/ProductDescription/DetailsView'
import ListView from 'pages/ProductList/ListView'
import NotFound from 'pages/NotFound/NotFound'


function App() {

  const { cartContent, addCartItem } = useCartList()

  return (
    <CartContext.Provider value={{ cartContent, addCartItem }}>
      <div className="App">
        <Header />

        <Routes>
          <Route path='/' element={<ListView />} />
          <Route path='/product/:productId' element={<DetailsView />} />
          <Route path='*' element={<NotFound />}>
          </Route>
        </Routes>
      </div>
    </CartContext.Provider>
  )
}

export default App
