import { useEffect, useState } from "react"
import axios from "axios"
import './App.css'
import ShowCity from "./showCity";
import WeatherData from "./WeatherData";

function App() {

  const [weatherData, setWeatherData] = useState([])

  useEffect(() => {
    (async () => {
      const data = await axios.get('https://hsiangcoco.github.io/myreact/json/F-C0032-001.json');
      const { location } = data.data.cwaopendata.dataset;

      //locationName:縣市名稱
      //elementName=>Wx=>天氣概況
      //startTime:開始時間
      //endTime:結束時間
      //parameterName:天氣狀況
      setWeatherData(location)
      console.log(location)
    })()
  }, [])
  return (
    <>
      <div id="Weather">
        <h2>36小時 天氣預報</h2>
        <h2>三十六小時天氣預報</h2>
        <div id="WeatherCard">
          <WeatherData weatherData={weatherData} />

        </div>
      </div>
    </>
  )
}
export default App