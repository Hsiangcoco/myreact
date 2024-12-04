import { useEffect } from "react";
import { FaUmbrella } from "react-icons/fa";

function ShowCity({city}) {
    return (

        <>
            <div className="dataWeather">
                {
                    city.weatherElement[0].time.map((time, index) => {
                        return (
                            <div className="row" key={index}>
                                <p>{new Date(time.startTime).toLocaleString(undefined, {
                                    day: 'numeric',
                                })} </p>
                                <p>{new Date(time.startTime).toLocaleString(undefined, {
                                    hour: 'numeric',
                                    minute: 'numeric'
                                })} </p>
                                <p>~</p>
                                <p>{new Date(time.endTime).toLocaleString(undefined, {
                                    hour: 'numeric',
                                    minute: 'numeric'
                                })} </p>
                                <p><img src={`weatherIcon/${time.parameter.parameterName}.svg`} alt="" /></p>
                                <p>{time.parameter.parameterName} </p>
                                <p><FaUmbrella />
                                    {
                                        city.weatherElement[4].time[index].parameter.parameterName
                                    }%
                                </p>
                            </div>

                        )
                    })
                }



            </div>

        </>
    )
}
export default ShowCity