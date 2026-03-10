import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import { useEffect, useState } from "react";
import { getIPLocation } from "./utils/getIPLocation.ts";
import { getCityLocation } from "./utils/getCityLocation.ts";
import { getWeather } from "./utils/getWeather.ts";
import type { Unit, WeatherData } from "./utils/weatherData.ts";


function App() {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [city, setCity] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [unit, setUnit] = useState<Unit>("metric");



    useEffect(() => {
        async function loadLocation() {
            const { latitude, longitude } = await getIPLocation();
            const data = await getWeather(latitude, longitude, "metric");
            console.log(latitude, longitude);
            console.log(data);
        }
        loadLocation();

    },[])

  return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  )
}

export default App
