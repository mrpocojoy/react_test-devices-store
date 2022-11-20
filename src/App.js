import 'assets/styles/App.scss'

import { useCartList } from 'hooks/useCartList'
import { CartContext } from 'context/CartContext'

import DetailsView from 'pages/ProductDescriptionPage/DetailsView'
import ListView from 'pages/ProductListPage/ListView'
import Header from 'components/structures/header/Header'

import { Route, Routes } from 'react-router-dom'


function App() {

  const { cartContent, addCartItem } = useCartList()

  return (
    <CartContext.Provider value={{ cartContent, addCartItem }}>
      <div className="App">
        <Header />

        <Routes>
          <Route path='/' element={<ListView />} />
          <Route path='/product/:productId' element={<DetailsView />} />
        </Routes>
      </div>
    </CartContext.Provider>
  )
}

export default App
