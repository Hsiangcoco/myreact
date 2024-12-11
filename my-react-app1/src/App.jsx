import $ from 'jquery'
import { use, useEffect } from 'react'
import Navbar from '../component/Navbar'
import News from './pages/News'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'

function App() {

  return (<>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/About' element={<About></About>}></Route>
      <Route path='/News' element={<News></News>}></Route>
    </Routes>
  </>
  )
}
export default App