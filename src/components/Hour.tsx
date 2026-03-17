import type { HourlyEntry } from "../utils/weatherData.ts";
import { getWeatherIcon } from "../utils/getweatherIcon.ts";
import { useWeather } from "../hooks/useWeather.ts";
import {format, parseISO} from "date-fns";

interface HourProps {
    data: HourlyEntry,
    dummy: boolean
}

export function Hour({data, dummy}: HourProps) {

    const { weatherData } = useWeather()
    return (
        <div className="flex gap-2 bg-[#3c3b5d] rounded-xl items-center py-2 px-3 pr-5">
            <img className={`${dummy && "dummy"}`} src={getWeatherIcon(data.weatherCode)} alt="" width="50px"/>
            <p className={`${dummy && "dummy"} grow font-semibold`}>{`${format(new Date(data.time), 'h')} ${format(parseISO(data.time), 'aa')}`}</p>
            <p className={`${dummy && "dummy"} text-sm`}>{data.temperature}{weatherData?.units.temperature_2m}</p>
        </div>
    )
}