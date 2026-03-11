import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import { useEffect, useState} from "react";
import { getIPLocation } from "./utils/getIPLocation.ts";
import { getWeather } from "./utils/getWeather.ts";
import type {LatLon, Unit, WeatherData} from "./utils/weatherData.ts";
import { WeatherContext } from "./context/weatherContext.ts";


function App() {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    // const [city, setCity] = useState<string>("");
    const [loading, setLoading] = useState(true);
    const [unit, setUnit] = useState<Unit>("metric");
    const [latLng, setLatLon] = useState<LatLon>({lat: "", lon: ""});
    const [noResult, setNoResult] = useState<boolean>(false);
    const [APIError, setAPIError] = useState<boolean>(false);




    useEffect(() => {
        async function loadLocation() {
            const location = await getIPLocation();
            if(location) { const { latitude , longitude } = location
                setLatLon({lat: latitude, lon: longitude})
            }
            else { console.log(location) }
        }
        loadLocation();
    }, [])

    useEffect(() => {
        async function getWeatherData() {
            try {
                const data = await getWeather(latLng.lat, latLng.lon, unit);
                    if (data) {
                        setWeatherData(data);
                        setLoading(false);
                    } else { /* empty */
                }
            }
            catch (error) {
                console.log("API error", error)
            }
        }
        getWeatherData().finally(() => setLoading(false));
    }, [unit, latLng]);



  return (
    <Router>
        <WeatherContext.Provider value={{
            weatherData,
            setWeatherData,
            loading,
            setLoading,
            unit,
            setUnit,
            latLng,
            setLatLon,
            noResult,
            setNoResult,
            APIError,
            setAPIError
        }}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </WeatherContext.Provider>
    </Router>
  )
}

export default App
