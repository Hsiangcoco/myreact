import $ from 'jquery'
import '../css/App.css'
import { use, useEffect } from 'react'


function App() {
    /* $(function () {
      $('.cssAnim1').hover(function () {
        $(this).addClass('imgScale')
      }, function () {
        $(this).removeClass('imgScale')
      })
    }) */
    useEffect(() => {
        $('.cssAnim1').on('mouseover', function () {
            $(this).addClass('imgScale')
        });
        $('.cssAnim1').on('mouseout', function () {
            $(this).removeClass('imgScale')
        })
    }, [])


    return (<>
        <div class="wrapper">
            <h2>動態新增刪除類別</h2>
            <ul>
                <li>新增類別=addclss()</li>
                <li>移除類別=removeClass()</li>
            </ul>
            <hr />
            <a href="#" className="cssAnim1">
                <img src="./public/images/03.jpg" alt="" />
            </a>
        </div>

        {/* <div className="wrap">
      <Navbar></Navbar>
      <hr />
      <Routes>
        <Route path='/News' element={<News />}></Route>
        <Route path='/About' element={<About />}></Route>
      </Routes>

    </div> */}


    </>
    )
}
export default App