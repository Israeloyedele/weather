import { useWeather } from "../hooks/useWeather.ts";
import { Loader } from "./Loader.tsx";
import { getWeatherIcon } from "../utils/getweatherIcon.ts";
import { format, parseISO } from "date-fns";

export function Current() {

    const { loading, weatherData, city }  = useWeather();

    return (
        <div className={`${loading? "" : " bg-[url(/images/bg-today-small.svg)]  lg:bg-[url(/images/bg-today-large.svg)] bg-no-repeat bg-cover"} bg-[#302f4b] text-center lg:text-left mt-5 lg:mt-0 rounded-2xl py-10`}>
            {
                loading || !weatherData ? <Loader />
                    : <div className="flex flex-col gap-5 px-5 lg:flex-row lg:justify-between lg:p-15 ">
                        <div className="flex flex-col justify-center gap-2 items-center lg:items-start lg:text-left">
                            <p className="text-3xl lg:text-4xl font-bold">{city}</p>
                            <p className="text-lg">{
                                `${format(parseISO(weatherData.current.time), "cccc")},
                                ${format(parseISO(weatherData.current.time), "LLL")} 
                                ${format(parseISO(weatherData.current.time), "d")}  
                                ${format(parseISO(weatherData.current.time), "y")}`
                            }</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <img className="w-23 lg:w-33" src={getWeatherIcon(weatherData.current.weather_code)} alt=""/>
                            <p className="text-6xl lg:text-7xl font-bold italic">{weatherData.current.temperature_2m}</p>
                        </div>
                    </div>
            }

        </div>
    )
}

//