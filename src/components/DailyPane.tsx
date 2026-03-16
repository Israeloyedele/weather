import { useWeather } from "../hooks/useWeather.ts";
import { Day } from "./Day.tsx";

export function DailyPane(){

    const { weatherData, loading } = useWeather();
    const dummyData = [
        {time: '2026-01-01', temperatureMax: 33.3, temperatureMin: 27.7, weatherCode: 3},
        {time: '2026-01-01', temperatureMax: 33.3, temperatureMin: 27.7, weatherCode: 3},
        {time: '2026-01-01', temperatureMax: 33.3, temperatureMin: 27.7, weatherCode: 3},
        {time: '2026-01-01', temperatureMax: 33.3, temperatureMin: 27.7, weatherCode: 3},
        {time: '2026-01-01', temperatureMax: 33.3, temperatureMin: 27.7, weatherCode: 3},
        {time: '2026-01-01', temperatureMax: 33.3, temperatureMin: 27.7, weatherCode: 3},
        {time: '2026-01-01', temperatureMax: 33.3, temperatureMin: 27.7, weatherCode: 3}
    ];
    return (
        <div>
            {weatherData && !loading ?
                <div className="grid grid-cols-3 gap-3">
                    {weatherData.daily.map((day, i) => <Day day={day.time}
                         key={i}
                         tempMax={day.temperatureMax}
                         tempMin={day.temperatureMin}
                         code={day.weatherCode}
                         dummy={false}
                    />)}
                </div>
                :
                    <div className="grid grid-cols-3 gap-3">
                        {
                            dummyData.map((day, i) =>
                            <Day day={day.time}
                                 key={i}
                                 tempMax={day.temperatureMax}
                                 tempMin={day.temperatureMin}
                                 code={day.weatherCode}
                                 dummy={true}
                            />)
                            }
                    </div>
            }
        </div>
    )
}