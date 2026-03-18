import { CurrentWeather } from "./CurrentWeather.tsx";
import { DailyForecast } from "./DailyForecast.tsx";
import { HourlyForecast } from "./HourlyForecast.tsx";

export function Results(){
    return (
        <div className="flex flex-col xl:flex-row gap-7 lg:px-10 lg:mt-15">
            <div className="grow-2 flex flex-col justify-between md:mb-10 lg:mb-0">
                <CurrentWeather />
                <DailyForecast />
            </div>
            <HourlyForecast />
        </div>
    )
}