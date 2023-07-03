import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'
import Portfolio from './pages/Portfolio'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContextProvider } from './Context'
import SpeedTypeGame from './pages/SpeedTypeGame'
import Shop from './pages/Shop'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<App />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/game' element={<SpeedTypeGame />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
)
