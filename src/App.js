import 'assets/styles/App.scss'

import DetailsView from 'pages/ProductDescriptionPage/DetailsView'
import ListView from 'pages/ProductListPage/ListView'
import Header from 'components/structures/header/Header'

import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<ListView />} />
        <Route path='/product/:productId' element={<DetailsView />} />
      </Routes>
    </div>
  )
}

export default App
