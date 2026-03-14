import { useWeather } from "../hooks/useWeather.ts";
import { Loader } from "./Loader.tsx";
import { getWeatherIcon } from "../utils/getweatherIcon.ts";
import { format, parseISO } from "date-fns";

export function Current() {

    const { loading, weatherData, city }  = useWeather();

    return (
        <div>
            {
                loading || !weatherData ? <Loader />
                    : <div>
                        <div>
                            <p>{city}</p>
                            <p>{
                                `${format(parseISO(weatherData.current.time), "cccc")},
                                ${format(parseISO(weatherData.current.time), "LLL")} 
                                ${format(parseISO(weatherData.current.time), "d")}, 
                                ${format(parseISO(weatherData.current.time), "y")}`
                            }</p>
                        </div>
                        <div>
                            <img src={getWeatherIcon(weatherData.current.weather_code)} alt="" width="50px"/>
                            <p>{weatherData.current.temperature_2m}</p>
                        </div>
                    </div>
            }

        </div>
    )
}

//