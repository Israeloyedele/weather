import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { Home } from './pages/Home'
import { Header } from './components/Header'
import {useEffect} from "react";
import {getIPLocation} from "./utils/getIPLocation.ts";
import {getCityLocation} from "./utils/getCityLocation.ts";


function App() {
    useEffect(() => {
        async function loadLocation() {
            const { latitude, longitude } = await getIPLocation();
            const data = await getCityLocation("Ilorin");
            console.log(latitude, longitude);
            console.log(data[0].lat, data[0].lon);
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
