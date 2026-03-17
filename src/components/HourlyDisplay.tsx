import {useWeather} from "../hooks/useWeather.ts";
import { Hour } from "./Hour.tsx";
import type { HourlyEntry } from "../utils/weatherData.ts";

interface HourlyDisplayProps {
    selectedDay: number
}

export function HourlyDisplay({ selectedDay }: HourlyDisplayProps) {
    const { weatherData, loading } = useWeather();



    const dummyData: HourlyEntry[] = [
        { time: '2026-01-01T00:00', weatherCode: 0, temperature: 27.7 },
        { time: '2026-01-01T00:00', weatherCode: 0, temperature: 27.7 },
        { time: '2026-01-01T00:00', weatherCode: 0, temperature: 27.7 },
        { time: '2026-01-01T00:00', weatherCode: 0, temperature: 27.7 },
        { time: '2026-01-01T00:00', weatherCode: 0, temperature: 27.7 },
        { time: '2026-01-01T00:00', weatherCode: 0, temperature: 27.7 },
        { time: '2026-01-01T00:00', weatherCode: 0, temperature: 27.7 },
        { time: '2026-01-01T00:00', weatherCode: 0, temperature: 27.7 },
    ];


    return (
        <div className="flex flex-col gap-3 py-3">
            { loading || !weatherData ?
                dummyData.map((hour, i) => <Hour key={i} data={hour} dummy={true}/>)
                :
                weatherData.hourly[selectedDay]
                .hours.slice(8, 16)
                .map((hour, i) => <Hour key={i} data={hour} dummy={false} />)}
        </div>
    )
}