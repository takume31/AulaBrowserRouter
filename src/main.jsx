import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListarProduto from './ListaProduto/index'
import Home from './Home/index'
import Oferta from './Footer/index'
import Inicio from './paginaini'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route element={<Inicio/>} path='/'/>
    <Route element={<Home/>} path='/Home'/>
    <Route element={<ListarProduto/>} path='/ListaProduto'/>
    <Route element={<Oferta/>} path='/Ofertas'/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)