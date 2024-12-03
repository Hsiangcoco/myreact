import { useEffect } from "react"
import axios from "axios"
import './App.css'
import { FaUmbrella } from "react-icons/fa";


function App() {

  useEffect(() => {
    (async () => {
      const data = await axios.get('https://hsiangcoco.github.io/myreact/json/F-C0032-001.json');
      console.log(data)

    })
  }, [])


  return (
    <>
      <div id="Weather">
        <h2>36小時 天氣預報</h2>
        <h2>三十六小時天氣預報</h2>
        <div id="Card">
          <div className="card">
            <div className="city">
              <h3>台北市</h3>
            </div>

            <div className="dataWeather">
              <div className="row">
                <p>2日</p>
                <p>上午12:00</p>
                <p>~</p>
                <p>下午12:00</p>
                <p><img src="./weatherIcon/多雲.svg" alt="" /></p>
                <p>晴時多雲</p>
                <p><FaUmbrella />10%</p>
              </div>
              <div className="row">
                <p>2日</p>
                <p>上午12:00</p>
                <p>~</p>
                <p>下午12:00</p>
                <p><img src="./weatherIcon/多雲.svg" alt="" /></p>
                <p>晴時多雲</p>
                <p><FaUmbrella />10%</p>
              </div>
              <div className="row">
                <p>2日</p>
                <p>上午12:00</p>
                <p>~</p>
                <p>下午12:00</p>
                <p><img src="./weatherIcon/多雲.svg" alt="" /></p>
                <p>晴時多雲</p>
                <p><FaUmbrella />
                10%</p>
              </div>

            </div>

          </div>
          <div className="card">
            <div className="city">
              <h3>台北市</h3>
            </div>
            <div className="dataWeather">
              <div className="row">
                <p>2日</p>
                <p>上午12:00</p>
                <p>~</p>
                <p>下午12:00</p>
                <p><img src="./weatherIcon/多雲.svg" alt="" /></p>
                <p>晴時多雲</p>
                <p><FaUmbrella />10%</p>
              </div>
              <div className="row">
                <p>2日</p>
                <p>上午12:00</p>
                <p>~</p>
                <p>下午12:00</p>
                <p><img src="./weatherIcon/多雲.svg" alt="" /></p>
                <p>晴時多雲</p>
                <p><FaUmbrella />10%</p>
              </div>
              <div className="row">
                <p>2日</p>
                <p>上午12:00</p>
                <p>~</p>
                <p>下午12:00</p>
                <p><img src="./weatherIcon/多雲.svg" alt="" /></p>
                <p>晴時多雲</p>
                <p><FaUmbrella />10%</p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </>
  )
}
export default App