import { CurrentWeather } from "./CurrentWeather.tsx";
import { DailyForecast } from "./DailyForecast.tsx";
import { HourlyForecast } from "./HourlyForecast.tsx";

export function Results(){
    return (
        <div>
            <CurrentWeather />
            <DailyForecast />
            <HourlyForecast />
        </div>
    )
}