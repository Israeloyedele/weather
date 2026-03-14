import type {HourlyEntry} from "../utils/weatherData.ts";
import {getWeatherIcon} from "../utils/getweatherIcon.ts";

interface HourProps {
    data: HourlyEntry,
    dummy: boolean
}

export function Hour({data, dummy}: HourProps) {

    return (
        <div className="flex gap-2">
            <img src={getWeatherIcon(data.weatherCode)} alt="" width="50px"/>
            <p className="grow">{data.time}</p>
            <p>{data.temperature}</p>
        </div>
    )
}