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
    console.log(weatherData?.daily);
    return (
        <div>
            {weatherData && !loading ?
                weatherData.daily.map((day, i) =>
                    <Day day={day.time}
                         key={i}
                         tempMax={day.temperatureMax}
                         tempMin={day.temperatureMin}
                         code={day.weatherCode}
                         dummy={false}
                    />) :

                    <div>
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