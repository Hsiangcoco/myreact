import $ from 'jquery'
import Navbar from '../component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import News from './pages/News'
import About from './pages/About'

function App() {

  return (<>
    <div className="wrap">
      <Navbar></Navbar>
      <hr />
      <Routes>
        
        <Route path='/News' element={<News />}></Route>
        <Route path='/About' element={<About />}></Route>
      </Routes>

    </div>
    {/* <div>
      <h2>jquery</h2>
      <button onClick={function () {
        console.log($('h2').text())
      }}>click</button>
    </div> */}

  </>
  )
}
export default App