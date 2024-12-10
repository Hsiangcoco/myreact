import $ from 'jquery'
import { use, useEffect } from 'react'
import Navbar from '../component/Navbar'
import News from './pages/News'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'


function App() {

  return (<>

    <div className="wrap">
      <Navbar></Navbar>
      <hr />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/News' element={<News />}></Route>
      </Routes>
    </div>
  </>
  )
}
export default App