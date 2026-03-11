import { createContext } from "react";
import type { WeatherContextType } from "../utils/weatherData.ts";

export const WeatherContext = createContext<WeatherContextType | null>(null);
