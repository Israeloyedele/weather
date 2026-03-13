import { useWeather } from "../hooks/useWeather.ts";
import { Loader } from "./Loader.tsx";

export function Current() {

    const { loading, weatherData, city }  = useWeather();

    return (
        <div>
            {
                loading ? <Loader />
                    : <div>
                        <p>{city}</p>
                        <p>{weatherData?.current.time}</p>
                    </div>
            }

        </div>
    )
}