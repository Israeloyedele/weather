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
    const [city, setCity] = useState<string>("");
    const [loading, setLoading] = useState(true);
    const [unit, setUnit] = useState<Unit>("metric");
    const [latLon, setLatLon] = useState<LatLon>({lat: "", lon: ""});
    const [noResult, setNoResult] = useState<boolean>(false);
    const [APIError, setAPIError] = useState<boolean>(false);




    useEffect(() => {
        async function loadLocation() {
            const location = await getIPLocation();

            if(location.latitude) { const { latitude , longitude, city, country_name } = location
                setLatLon({lat: latitude, lon: longitude})
                setCity(`${city}, ${country_name}`)
            }
            if(location.error){
                console.log("Error loading location");
            }
            else { console.log(location) }
        }
        loadLocation();
    }, [])

    useEffect(() => {
        if(!latLon.lat || !latLon.lon) return;
        async function getWeatherData() {
            try {
                const data = await getWeather(latLon.lat, latLon.lon, unit);
                    if (data) {
                        setWeatherData(data);
                        setLoading(false);
                    } else { setAPIError(true)
                }
            }
            catch (error) {
                setAPIError(true)
                console.log("API error", error)
            }
        }
        getWeatherData();
    }, [unit, latLon]);



  return (
      <div className="bg-[#01012D] text-white p-5 lg:px-30 lg:py-10" style={{ fontFamily: "DM Sans" }}>
    <Router>
        <WeatherContext.Provider value={{
            weatherData,
            setWeatherData,
            city,
            setCity,
            loading,
            setLoading,
            unit,
            setUnit,
            latLng: latLon,
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
      </div>
  )
}

export default App
