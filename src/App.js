import { Route, Routes } from 'react-router-dom'
import { useCartList } from 'hooks/useCartList'
import { CartContext } from 'context/CartContext'

import Header from 'components/layout/header/Header'
import DetailsView from 'pages/ProductDescription/layout/DetailsView'
import ListView from 'pages/ProductList/layout/ListView'
import NotFound from 'pages/NotFound/layout/NotFound'
import Footer from 'components/layout/footer/Footer'


function App() {

  /*  Cart content status and updating method accessible from context  */
  const { cartContent, addCartItem } = useCartList()

  return (
    <CartContext.Provider value={{ cartContent, addCartItem }}>
      <div className="App">
        <Header />

        <article className="App__content">
          
          <Routes>
            <Route exact path='/' element={<ListView />} />
            <Route path='/product/:productId' element={<DetailsView />} />
            <Route path='*' element={<NotFound />}>
            </Route>
          </Routes>

        </article>

        <Footer />
      </div>
    </CartContext.Provider>
  )
}

export default App
