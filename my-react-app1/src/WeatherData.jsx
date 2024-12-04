import ShowCity from "./showCity"

function WeatherData({ weatherData }) {
    return (

        weatherData.map((city) => {
            return (

                <div className="Card" key={city.locationName} >
                    <div className="card" >
                        <div className="city" >
                            <h3 >{city.locationName}</h3>
                        </div>
                        <ShowCity city={city} />
                    </div>

                </div>



            )
        })


    )

}
export default WeatherData