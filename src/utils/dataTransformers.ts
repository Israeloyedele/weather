import type {
    CurrentUnits,
    CurrentWeather,
    DailyWeather,
    DailyWeatherEntry,
    HourlyEntry,
    HourlyWeather,
    HourlyWeatherEntry
} from "./weatherData.ts";

export function transformHourly(data: HourlyWeather): HourlyWeatherEntry[] {
    return data.time.map((time, i) => ({
        time,
        temperature: data.temperature_2m[i],
        weatherCode: data.weather_code[i],
    }));
}
export function transformDaily(data: DailyWeather): DailyWeatherEntry[] {
    return data.time.map((time, i) => ({
        time,
        temperatureMax: data.temperature_2m_max[i],
        temperatureMin: data.temperature_2m_min[i],
        weatherCode: data.weather_code[i],
    }));
}

export function groupHourlyByDay(data: HourlyWeather) {
    const days: Record<string, HourlyEntry[]> = {};

    data.time.forEach((time, i) => {
        const day = time.split("T")[0];

        if (!days[day]) {
            days[day] = [];
        }

        days[day].push({
            time,
            weatherCode: data.weather_code[i],
        });
    });

    return Object.values(days);
}

export function mergeCurrent(
    current: CurrentWeather,
    units: CurrentUnits
) {
    const result: Record<string, string | number> = {};

    for (const key in current) {
        if (key === "time" || key === "weather_code") {
            result[key] = current[key as keyof CurrentWeather];
            continue;
        }

        const value = current[key as keyof CurrentWeather];
        const unit = units[key as keyof CurrentUnits];

        result[key] = `${value} ${unit}`;
    }

    return result;
}