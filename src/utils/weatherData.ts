export interface WeatherApiResponse {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;

    current_units: CurrentUnits;
    current: CurrentWeather;

    hourly_units: HourlyUnits;
    hourly: HourlyWeather;

    daily_units: DailyUnits;
    daily: DailyWeather;
}
export interface WeatherApiErrorResponse {
    error: boolean;
    reason: string;
}
export interface CurrentUnits {
    time: string;
    interval: string;
    relative_humidity_2m: string;
    precipitation: string;
    wind_speed_10m: string;
    apparent_temperature: string;
    temperature_2m: string;
    weather_code: string;
}
export interface CurrentWeather {
    time: string;
    interval: number;
    relative_humidity_2m: number;
    precipitation: number;
    wind_speed_10m: number;
    apparent_temperature: number;
    temperature_2m: number;
    weather_code: number;
}
export interface CurrentDisplay {
    time: string;
    interval: string;
    relative_humidity_2m: string;
    precipitation: string;
    wind_speed_10m: string;
    apparent_temperature: string;
    temperature_2m: string;
    weather_code: number;
}
export interface HourlyUnits {
    time: string;
    temperature_2m: string;
    weather_code: string;
}
export interface HourlyWeather {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
}
export interface HourlyEntry {
    time: string;
    weatherCode: number;
}
export interface HourlyWeatherEntry {
    time: string;
    temperature: number;
    weatherCode: number;
}
export type HourlyForecast = {
    date: string
    hours: HourlyEntry[]
}[]


export interface DailyUnits {
    time: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    weather_code: string;
}
export interface DailyWeather {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weather_code: number[];
}
export interface DailyEntry {
    time: string;
    temperatureMax: number;
    temperatureMin: number;
    weatherCode: number;
}
export type Unit = "metric" | "imperial";




export interface WeatherData {
    latitude: number;
    longitude: number;
    timezone: string;

    current: CurrentDisplay;
    hourly: HourlyForecast;
    daily: DailyEntry[];
}