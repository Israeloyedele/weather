import { DailyPane } from "./DailyPane.tsx";

export function DailyForecast(){
    return (
        <div>
            <p className="text-lg font-semibold mb-5">Daily Forecast</p>
            <DailyPane />
        </div>
    )
}