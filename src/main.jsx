import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListarProduto from './ListaProduto/index'
import Home from './Footer/index'
import Header from './Header/index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route element={<Home/>} path='/'/>
    <Route element={<ListarProduto/>} path='/ListaProduto'/>
    <Route element={<Header/>} path='/Header'/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)