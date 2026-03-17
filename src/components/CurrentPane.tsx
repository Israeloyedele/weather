import { useWeather } from "../hooks/useWeather.ts";
import { Today } from "./Today.tsx";

export function CurrentPane() {

    const { weatherData } = useWeather();
    return (
        <div className="grid grid-cols-2 gap-5 my-5 md:grid-cols-4 lg:grid-cols-4">
            <Today title={"Feels Like"} data={weatherData?.current.apparent_temperature} />
            <Today title={"Humidity"} data={weatherData?.current.relative_humidity_2m} />
            <Today title={"Wind"} data={weatherData?.current.wind_speed_10m} />
            <Today title={"Precipitation"} data={weatherData?.current.precipitation} />
        </div>
    )
}