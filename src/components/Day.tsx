import { format } from "date-fns"
import { getWeatherIcon } from "../utils/getweatherIcon.ts";
import {useWeather} from "../hooks/useWeather.ts";
interface DayProps {
    day: string,
    tempMax: number,
    tempMin: number,
    code: number,
    dummy: boolean
}

export function Day({ day, tempMax, tempMin, code, dummy }: DayProps) {
    const { weatherData } = useWeather();
    return (
        <div style={{ visibility: dummy? "hidden" : "visible" }}>
            <p>{format(new Date(day), 'ccc')}</p>
            <img src={getWeatherIcon(code)} alt="" width="50px"/>
            <p>{tempMax}{weatherData?.units.temperature_2m}</p>
            <p>{tempMin}{weatherData?.units.temperature_2m}</p>
        </div>
    )
}