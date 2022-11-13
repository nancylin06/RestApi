import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Insert from './Insert'
import Table from './Table'
import Update from './Update'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Table />} exact></Route>
        <Route path='/insert' element={<Insert />} exact></Route>
        <Route path='/update/:getid' element={<Update />} exact></Route>
        <Route path='/:getid' element={<Table />} exact></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
