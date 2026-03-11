import { useContext } from "react";
import { WeatherContext } from "../context/weatherContext.ts";

export function useWeather() {
    const context = useContext(WeatherContext)

    if (!context) {
        throw new Error("useWeather must be used inside WeatherProvider")
    }

    return context
}