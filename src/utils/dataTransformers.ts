import type {
    CurrentUnits,
    CurrentWeather,
    CurrentDisplay,
    DailyWeather,
    DailyEntry,
    HourlyEntry,
    HourlyWeather,
    // HourlyWeatherEntry,
    WeatherApiResponse,
    WeatherData,
    HourlyForecast
} from "./weatherData.ts";


export function buildWeatherData(api: WeatherApiResponse): WeatherData {
    return {
        latitude: api.latitude,
        longitude: api.longitude,
        timezone: api.timezone,

        current: mergeCurrent(api.current, api.current_units),

        hourly: groupHourlyByDay(api.hourly),

        daily: transformDaily(api.daily),

        units: {
            temperature_2m: api.current_units.temperature_2m,
            wind_speed_10m: api.current_units.wind_speed_10m,
            precipitation: api.current_units.precipitation
        }
    };
}


// export function transformHourly(data: HourlyWeather): HourlyWeatherEntry[] {
//     return data.time.map((time, i) => ({
//         time,
//         temperature: data.temperature_2m[i],
//         weatherCode: data.weather_code[i],
//     }));
// }
export function transformDaily(data: DailyWeather): DailyEntry[] {
    return data.time.map((time, i) => ({
        time,
        temperatureMax: data.temperature_2m_max[i],
        temperatureMin: data.temperature_2m_min[i],
        weatherCode: data.weather_code[i],
    }));
}

export function groupHourlyByDay(data: HourlyWeather): HourlyForecast {
    const days: Record<string, HourlyEntry[]> = {};

    data.time.forEach((time, i) => {
        const date = time.split("T")[0];

        if (!days[date]) {
            days[date] = [];
        }

        days[date].push({
            time,
            weatherCode: data.weather_code[i],
            temperature: data.temperature_2m[i]
        });
    });

    return Object.entries(days).map(([date, hours]) => ({
        date,
        hours
    }));
}

function mergeCurrent(
    current: CurrentWeather,
    units: CurrentUnits
): CurrentDisplay {
    return {
        time: current.time,
        interval: `${current.interval} ${units.interval}`,
        relative_humidity_2m: `${current.relative_humidity_2m}${units.relative_humidity_2m}`,
        precipitation: `${current.precipitation} ${units.precipitation}`,
        wind_speed_10m: `${current.wind_speed_10m} ${units.wind_speed_10m}`,
        apparent_temperature: `${current.apparent_temperature}${units.apparent_temperature}`,
        temperature_2m: `${current.temperature_2m}°`,
        weather_code: current.weather_code
    };
}