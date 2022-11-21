import React from 'react'
import ReactDOM from 'react-dom/client'
import 'assets/styles/index.scss'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import reportWebVitals from 'tests/reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// reportWebVitals(console.log)
