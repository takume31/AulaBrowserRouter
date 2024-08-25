import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Produtos from './Produtos/Produtos'
import Home from '../src/Home/index.jsx'
import Oferta from './Oferta/index'
import Paginaini from './Paginaini/index.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route element={<Paginaini/>} path='/'/>
    <Route element={<Home/>} path='/Home'/>
    <Route element={<Produtos/>} path='/Produtos'/>
    <Route element={<Oferta/>} path='/Ofertas'/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)