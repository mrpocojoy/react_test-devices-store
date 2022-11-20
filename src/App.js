import 'assets/styles/App.scss'

import DetailsView from 'pages/ProductDescriptionPage/DetailsView'
import ListView from 'pages/ProductListPage/ListView'
import Header from 'components/header/Header'

import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path='/' element={<ListView />} />
        <Route path='/product/:productId' element={<DetailsView />} />
        {/* 
        <ListView />
        <DetailsView item={testItem} /> */}
      </Routes>

      Footer
    </div>
  )
}

export default App
