import type { HourlyEntry } from "../utils/weatherData.ts";
import { getWeatherIcon } from "../utils/getweatherIcon.ts";
import { useWeather } from "../hooks/useWeather.ts";
import {format, parseISO} from "date-fns";

interface HourProps {
    data: HourlyEntry,
    dummy: boolean
}

export function Hour({data}: HourProps) {

    const { weatherData } = useWeather()
    return (
        <div className="flex gap-2">
            <img src={getWeatherIcon(data.weatherCode)} alt="" width="50px"/>
            <p className="grow">{`${format(new Date(data.time), 'h')} ${format(parseISO(data.time), 'aa')}`}</p>
            <p>{data.temperature}{weatherData?.units.temperature_2m}</p>
        </div>
    )
}