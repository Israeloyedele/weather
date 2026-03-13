import axios from 'axios';

// const API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY;


export default async function handler(req, res) {
    try {
        const city = req.query.city as string;

        if (!city) {
            return res.status(400).json({ error: "City is required" });
        }

        const response = await axios.get(
            // `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
        );

        res.status(200).json(response.data);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "No Location Match." });
    }
}