import { useEffect } from "react"
import axios from "axios"
import './App.css'

function App() {

  useEffect(() => {
    (async () => {
      const data = await axios.get('./F-C0032-001.json');
      const { location } = data.data.cwaopendata.dataset;
      console.log(location)

    })
  }, [])


  return (
    <>
      <h2>36小時 天氣預報</h2>
      <h2>三十六小時天氣預報</h2>
      <div id="Card">
        <div id="card1">
          <div id="city">
            <h3>台北市</h3>
          </div>
          <div id="dataWeather">
            <div id="dataWeather1">
              <p>2日</p>
              <p>上午12:00</p>
              <p>~</p>
              <p>下午12:00</p>
              <p><img src="./weatherIcon/多雲.svg" alt="" /></p>
              <p>晴時多雲</p>
              <p>10%</p>
            </div>
            <div id="dataWeather2">
              <p>2日</p>
              <p>上午12:00</p>
              <p>~</p>
              <p>下午12:00</p>
              <p><img src="./weatherIcon/多雲.svg" alt="" /></p>
              <p>晴時多雲</p>
              <p>10%</p>
            </div>
            <div id="dataWeather3">
              <p>2日</p>
              <p>上午12:00</p>
              <p>~</p>
              <p>下午12:00</p>
              <p><img src="./weatherIcon/多雲.svg" alt="" /></p>
              <p>晴時多雲</p>
              <p>10%</p>
            </div>

          </div>

        </div>
        <div id="card2">
          <div id="city">
            <h3>台北市</h3>
          </div>
          <div id="dataWeather">
            <div id="dataWeather1">
              <p>2日</p>
              <p>上午12:00</p>
              <p>~</p>
              <p>下午12:00</p>
              <p><img src="./weatherIcon/多雲.svg" alt="" /></p>
              <p>晴時多雲</p>
              <p>10%</p>
            </div>
            <div id="dataWeather2">
              <p>2日</p>
              <p>上午12:00</p>
              <p>~</p>
              <p>下午12:00</p>
              <p><img src="./weatherIcon/多雲.svg" alt="" /></p>
              <p>晴時多雲</p>
              <p>10%</p>
            </div>
            <div id="dataWeather3">
              <p>2日</p>
              <p>上午12:00</p>
              <p>~</p>
              <p>下午12:00</p>
              <p><img src="./weatherIcon/多雲.svg" alt="" /></p>
              <p>晴時多雲</p>
              <p>10%</p>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}
export default App