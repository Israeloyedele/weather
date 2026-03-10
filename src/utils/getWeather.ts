import type {Unit, WeatherData} from "./weatherData.ts";
import axios from "axios";
import {buildWeatherData} from "./dataTransformers.ts";

export async function getWeather(lat: string, lon: string, unit: Unit): Promise<WeatherData | undefined> {
    const url = unit === "metric" ? `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code&current=relative_humidity_2m,precipitation,wind_speed_10m,apparent_temperature,temperature_2m,weather_code&timezone=auto`
        :`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weather_code&hourly=temperature_2m,weather_code&current=relative_humidity_2m,precipitation,wind_speed_10m,apparent_temperature,temperature_2m,weather_code&timezone=auto&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`
    try {
        const response = await axios.get(`/api/get-weather?url=${encodeURIComponent(url)}`);
        return buildWeatherData(response.data)
    }
    catch (error) {
        console.error("Failed to fetch weather", error);
    }
}
